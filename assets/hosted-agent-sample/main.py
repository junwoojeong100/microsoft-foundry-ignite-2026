"""Workshop hosted agent: custom code that forwards the user's text to a Foundry model.

The Responses protocol host (azure-ai-agentserver-responses) provides the HTTP endpoint,
conversation history, health probe and OpenTelemetry traces. The model call goes through the
project endpoint with the agent's own Entra identity (DefaultAzureCredential).
"""

import asyncio
import os

from azure.ai.agentserver.responses import (
    CreateResponse,
    ResponseContext,
    ResponsesAgentServerHost,
    ResponsesServerOptions,
    TextResponse,
)
from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential

# FOUNDRY_PROJECT_ENDPOINT is injected by the platform; the model name comes from the agent definition.
PROJECT_ENDPOINT = os.environ["FOUNDRY_PROJECT_ENDPOINT"]
MODEL = os.environ["AZURE_AI_MODEL_DEPLOYMENT_NAME"]
INSTRUCTIONS = (
    "You are the workshop hosted agent: custom Python code running on Foundry Agent Service. "
    "Answer in at most two short sentences, in the language the user writes in."
)

responses_client = AIProjectClient(
    endpoint=PROJECT_ENDPOINT, credential=DefaultAzureCredential()
).get_openai_client().responses

app = ResponsesAgentServerHost(options=ResponsesServerOptions(default_fetch_history_count=20))

ROLE_BY_CONTENT_TYPE = {"input_text": "user", "output_text": "assistant"}


def build_input(history: list, user_text: str) -> list[dict]:
    items = []
    for item in history:
        for content in item.get("content") or []:
            role = ROLE_BY_CONTENT_TYPE.get(content.get("type"))
            if role and content.get("text"):
                items.append({"role": role, "content": content["text"]})
    items.append({"role": "user", "content": user_text})
    return items


@app.response_handler
async def handler(request: CreateResponse, context: ResponseContext, _cancellation_signal: asyncio.Event):
    user_text = await context.get_input_text() or "Hello!"
    history = await context.get_history()
    items = build_input(history, user_text)
    response = await asyncio.get_running_loop().run_in_executor(
        None,
        lambda: responses_client.create(model=MODEL, instructions=INSTRUCTIONS, input=items, store=False),
    )
    return TextResponse(context, request, text=response.output_text)


app.run()
