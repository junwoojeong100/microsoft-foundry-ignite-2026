window.IGNITE_DATA = {
 "schemaVersion": 1,
 "capturedDate": "2026-11-18",
 "locale": "en",
 "portal": "New Foundry (ai.azure.com), screens as of 2026-11-18",
 "shots": [
  {
   "id": "01-home",
   "group": "start",
   "title": "Foundry home",
   "action": "On the home page that appears after the welcome guide, check the Build an agent and Use a model cards and the endpoint area.",
   "expected": "The Project endpoint and the Azure OpenAI endpoint appear on the home page. This project showed the message \"API key authentication is disabled for this project.\" This may differ depending on your project settings.",
   "image": "assets/ignite/screenshots/ko/01-home.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Build an agent",
     "x": 302,
     "y": 191,
     "width": 165,
     "height": 44
    },
    {
     "label": "Project endpoint",
     "x": 707,
     "y": 383,
     "width": 113,
     "height": 31
    },
    {
     "label": "API key authentication notice",
     "x": 303,
     "y": 407,
     "width": 381,
     "height": 44
    },
    {
     "label": "View deployments",
     "x": 936,
     "y": 308,
     "width": 134,
     "height": 37
    }
   ]
  },
  {
   "id": "02-guardrails-list",
   "group": "guardrails",
   "title": "Build → Guardrails list",
   "action": "Open Guardrails under Create on the left. Check the Guardrails, Blocklists and Integrations (Preview) tabs.",
   "expected": "The Microsoft.Default, Microsoft.DefaultV2 and Microsoft.MAIDefault policies appear, and the Applied to column of DefaultV2 shows the model deployments it is applied to.",
   "image": "assets/ignite/screenshots/ko/02-guardrails-list.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Guardrails menu",
     "x": 8,
     "y": 394,
     "width": 202,
     "height": 32
    },
    {
     "label": "Top tabs",
     "x": 242,
     "y": 100,
     "width": 360,
     "height": 30
    },
    {
     "label": "Microsoft.DefaultV2",
     "x": 284,
     "y": 310,
     "width": 175,
     "height": 31
    },
    {
     "label": "Applied to",
     "x": 930,
     "y": 226,
     "width": 75,
     "height": 32
    }
   ]
  },
  {
   "id": "03-models-policy-column",
   "group": "guardrails",
   "title": "Policy column in Models → Deployments",
   "action": "Open Models → Deployments on the left and check the Policy column next to Deployment status in the list.",
   "expected": "Every deployment in this project showed \"No policies added\" in the Policy column. We did not verify whether this column is the same concept as Applied to in Guardrails, so check which guardrail is applied on the Guardrails screen.",
   "image": "assets/ignite/screenshots/ko/03-models-policy-column.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Policy column",
     "x": 1055,
     "y": 254,
     "width": 49,
     "height": 30
    },
    {
     "label": "gpt-6.1-terra deployment",
     "x": 254,
     "y": 293,
     "width": 89,
     "height": 31
    },
    {
     "label": "Deployments tab",
     "x": 237,
     "y": 96,
     "width": 117,
     "height": 31
    }
   ]
  },
  {
   "id": "04-deploy-terra-custom",
   "group": "guardrails",
   "title": "gpt-6.1-terra deployment · Custom settings",
   "action": "Open gpt-6.1-terra in the Catalog and select Deploy → Custom settings to open this dialog. Check Deployment name, Deployment type (Global Standard), Tokens per Minute Rate Limit and Guardrails (DefaultV2 by default). If you already deployed the model in Lab 3, this screen is for checking only: do not deploy again; close it with Cancel.",
   "expected": "If a deployment with the same name exists, a numbered name such as \"gpt-6.1-terra-2\" is suggested in Deployment name (this capture). The default in the TPM field is 250000, and the maximum you can select in this subscription (/1870000) is shown on the right. In Lab 3, you enter your assigned TPM value yourself. The Guardrails dropdown lists DefaultV2, Default and Microsoft.MAIDefault, with DefaultV2 selected.",
   "image": "assets/ignite/screenshots/ko/04-deploy-terra-custom.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Deployment name",
     "x": 1026,
     "y": 58,
     "width": 145,
     "height": 31
    },
    {
     "label": "Deployment type",
     "x": 1026,
     "y": 138,
     "width": 137,
     "height": 31
    },
    {
     "label": "TPM limit",
     "x": 1026,
     "y": 346,
     "width": 357,
     "height": 31
    },
    {
     "label": "Guardrails",
     "x": 1026,
     "y": 461,
     "width": 117,
     "height": 31
    },
    {
     "label": "Deploy · Cancel",
     "x": 1036,
     "y": 841,
     "width": 144,
     "height": 37
    }
   ]
  },
  {
   "id": "05-agents-list-harness-column",
   "group": "harness-create",
   "title": "Harness column in the Build → Agents list",
   "action": "Open Agents under Create. Check the Harness column next to Interaction type in the list, the Agents, Routines and Workflows tabs at the top, and the New agent button on the right.",
   "expected": "At this point the only agent is workshop-assistant (Prompt · Text), created in Lab 4, so the Harness column shows \"--\". Agents created with the harness are distinguished by this column; you check it later on the \"Agents list with the harness agent\" screen.",
   "image": "assets/ignite/screenshots/ko/05-agents-list-harness-column.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Harness column",
     "x": 1010,
     "y": 236,
     "width": 64,
     "height": 30
    },
    {
     "label": "New agent",
     "x": 1475,
     "y": 189,
     "width": 109,
     "height": 31
    }
   ]
  },
  {
   "id": "06-agents-new-menu",
   "group": "harness-create",
   "title": "New agent menu",
   "action": "Open New agent to see the ways to create an agent, and select Build an agent in this lab.",
   "expected": "Four options appear: Build an agent, Code an agent, With agent template and Link external agent.",
   "image": "assets/ignite/screenshots/ko/06-agents-new-menu.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "New agent",
     "x": 1475,
     "y": 189,
     "width": 109,
     "height": 31
    },
    {
     "label": "Build an agent",
     "x": 1434,
     "y": 226,
     "width": 140,
     "height": 31
    },
    {
     "label": "Link external agent",
     "x": 1410,
     "y": 339,
     "width": 167,
     "height": 31
    }
   ]
  },
  {
   "id": "07-harness-create-dialog",
   "group": "harness-create",
   "title": "Create an agent · harness selection",
   "action": "Enter workshop-harness-agent in Agent name and leave Interaction mode as Text. Select the Use the Microsoft Copilot harness checkbox, then select Create agent and open playground.",
   "expected": "A note says Interaction mode cannot be changed after the agent is created, and the harness checkbox (Preview) appears. The official docs say an existing agent cannot be converted to a harness agent during the early preview.",
   "image": "assets/ignite/screenshots/ko/07-harness-create-dialog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Agent name",
     "x": 533,
     "y": 282,
     "width": 126,
     "height": 31
    },
    {
     "label": "Interaction mode",
     "x": 533,
     "y": 380,
     "width": 157,
     "height": 31
    },
    {
     "label": "Harness checkbox",
     "x": 561,
     "y": 474,
     "width": 279,
     "height": 31
    },
    {
     "label": "Create agent and open playground",
     "x": 744,
     "y": 615,
     "width": 237,
     "height": 41
    }
   ]
  },
  {
   "id": "08-harness-tools-default",
   "group": "harness-tools",
   "title": "Harness tools · defaults",
   "action": "In the Playground of the agent you created, select Harness tools in the Tools area on the left.",
   "expected": "File system read, File system write, Web, Shell and Subagents are all turned on, and the message \"Turn off anything this agent shouldn't use.\" appears. This capture is for Version 1 with model-router.",
   "image": "assets/ignite/screenshots/ko/08-harness-tools-default.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Harness tools (select to open)",
     "x": 281,
     "y": 603,
     "width": 158,
     "height": 31
    },
    {
     "label": "File system write",
     "x": 474,
     "y": 364,
     "width": 154,
     "height": 31
    },
    {
     "label": "Shell",
     "x": 474,
     "y": 500,
     "width": 84,
     "height": 31
    },
    {
     "label": "Done",
     "x": 1017,
     "y": 641,
     "width": 61,
     "height": 45
    }
   ]
  },
  {
   "id": "09-harness-tools-restricted",
   "group": "harness-tools",
   "title": "Unneeded tools turned off",
   "action": "The instructions in this lab allow only reading and web lookups. Turn off File system write and Shell, select Done, then select Save.",
   "expected": "Only File system read, Web and Subagents are turned on. The official docs say that while Shell is on, turning off other tools is not a strict security boundary, so Shell was turned off as well.",
   "image": "assets/ignite/screenshots/ko/09-harness-tools-restricted.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "File system write off",
     "x": 474,
     "y": 364,
     "width": 154,
     "height": 31
    },
    {
     "label": "Shell off",
     "x": 474,
     "y": 500,
     "width": 84,
     "height": 31
    },
    {
     "label": "Done",
     "x": 1017,
     "y": 641,
     "width": 61,
     "height": 45
    }
   ]
  },
  {
   "id": "10-harness-yaml",
   "group": "harness-tools",
   "title": "Saved settings on the YAML tab",
   "action": "After you turn off the tools on the previous screen and save with Save and start new chat, the agent becomes Version 2. Select the YAML tab at the top of the Playground to check the saved definition.",
   "expected": "kind: prompt, harness.type: microsoft_copilot_preview and model: gpt-6.1-terra appear, and filesystem_write and shell are recorded as enabled: false under microsoft_copilot_toolset_preview in tools. reasoning.effort: low, which we did not enter ourselves, was also saved.",
   "image": "assets/ignite/screenshots/en/10-harness-yaml.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "YAML tab",
     "x": 800,
     "y": 145,
     "width": 58,
     "height": 41
    },
    {
     "label": "harness.type",
     "x": 796,
     "y": 514,
     "width": 283,
     "height": 31
    },
    {
     "label": "model",
     "x": 788,
     "y": 537,
     "width": 196,
     "height": 31
    },
    {
     "label": "Tool settings (enabled: false)",
     "x": 836,
     "y": 784,
     "width": 260,
     "height": 92
    }
   ]
  },
  {
   "id": "11-harness-run-terra",
   "group": "harness-run",
   "title": "Run with gpt-6.1-terra",
   "action": "Enter the question in the chat box and run it. The question for this lab: Read the https://learn.microsoft.com/azure/foundry/ page on the web and summarize what Microsoft Foundry is in 3 key points.",
   "expected": "An English answer with source links appears. Below the response you see chips for the model (gpt-6.1-terra), time (5s), tokens (21230t) and tool (web_fetch), plus a Traces link. One question showed about 21,000 tokens. The first harness run can be slow (in our first capture session, a first run once took more than 4 minutes), so wait for the response; later runs took a few seconds to a dozen or so seconds.",
   "image": "assets/ignite/screenshots/en/11-harness-run-terra.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Model selector",
     "x": 250,
     "y": 149,
     "width": 387,
     "height": 31
    },
    {
     "label": "Harness button",
     "x": 1351,
     "y": 153,
     "width": 80,
     "height": 28
    },
    {
     "label": "Run info chips",
     "x": 748,
     "y": 410,
     "width": 480,
     "height": 36
    }
   ]
  },
  {
   "id": "12-agent-details",
   "group": "harness-run",
   "title": "Details tab · endpoints and channels",
   "action": "On the Details tab, check Agent configuration, Identity & access, Endpoints, Channels and Routines. We did not select Publish or Set up in this lab.",
   "expected": "The Responses protocol endpoint, A2A protocol (Set up), the Teams & Microsoft 365 Copilot and Preview web app channels (Publish), Routines (Set up routine), and the Entra agent identity and blueprint appear.",
   "image": "assets/ignite/screenshots/ko/12-agent-details.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Endpoints",
     "x": 520,
     "y": 457,
     "width": 126,
     "height": 34
    },
    {
     "label": "A2A protocol",
     "x": 920,
     "y": 504,
     "width": 134,
     "height": 31
    },
    {
     "label": "Channels",
     "x": 520,
     "y": 663,
     "width": 122,
     "height": 34
    },
    {
     "label": "Entra agent identity",
     "x": 920,
     "y": 280,
     "width": 170,
     "height": 31
    }
   ]
  },
  {
   "id": "13-agent-guardrail-section",
   "group": "harness-run",
   "title": "Agent Guardrail (Preview) section",
   "action": "Scroll down the left side of the agent Playground to find the Guardrail (Preview) section. Read the name and the protection scope.",
   "expected": "Name: Microsoft.DefaultV2, Risks with controls (Jailbreak 1 · Indirect prompt injections 1 · Content safety 4 · Protected materials 2) and Risks without controls (Sensitive data leakage · Task drift) appear. As the message \"This agent has not been assigned a guardrail. It is inheriting its model's guardrail.\" says, an agent without its own guardrail assignment inherits the guardrail of its model deployment.",
   "image": "assets/ignite/screenshots/ko/13-agent-guardrail-section.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Guardrail section",
     "x": 237,
     "y": 532,
     "width": 132,
     "height": 31
    },
    {
     "label": "Guardrail in effect",
     "x": 277,
     "y": 616,
     "width": 138,
     "height": 28
    },
    {
     "label": "Protection scope",
     "x": 238,
     "y": 640,
     "width": 452,
     "height": 72
    },
    {
     "label": "Inheritance notice",
     "x": 278,
     "y": 724,
     "width": 394,
     "height": 48
    },
    {
     "label": "Manage guardrail",
     "x": 247,
     "y": 795,
     "width": 146,
     "height": 37
    }
   ]
  },
  {
   "id": "14-agent-guardrail-menu",
   "group": "harness-run",
   "title": "Manage guardrail menu",
   "action": "Select Manage guardrail to see the menu. We did not select any of the items in this lab.",
   "expected": "Reassign guardrail, Create guardrail, Edit guardrail (disabled because this agent inherits its guardrail) and Guided guardrail setup appear.",
   "image": "assets/ignite/screenshots/ko/14-agent-guardrail-menu.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Reassign guardrail",
     "x": 250,
     "y": 648,
     "width": 154,
     "height": 31
    },
    {
     "label": "Create guardrail",
     "x": 250,
     "y": 682,
     "width": 141,
     "height": 31
    },
    {
     "label": "Edit guardrail",
     "x": 250,
     "y": 716,
     "width": 123,
     "height": 31
    },
    {
     "label": "Guided guardrail setup",
     "x": 250,
     "y": 761,
     "width": 181,
     "height": 31
    }
   ]
  },
  {
   "id": "15-agents-list-harness-column",
   "group": "harness-run",
   "title": "Agents list with the harness agent",
   "action": "Go back to Agents under Create on the left and check the list.",
   "expected": "In the workshop-harness-agent row, the Harness column shows \"Microsoft Copilot\" (Preview), Type is Prompt and Interaction type is Text. workshop-assistant, which does not use the harness, shows \"--\" in the Harness column.",
   "image": "assets/ignite/screenshots/ko/15-agents-list-harness-column.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Harness column",
     "x": 1010,
     "y": 236,
     "width": 64,
     "height": 30
    },
    {
     "label": "Microsoft Copilot(Preview)",
     "x": 1010,
     "y": 275,
     "width": 148,
     "height": 31
    },
    {
     "label": "workshop-harness-agent",
     "x": 254,
     "y": 265,
     "width": 154,
     "height": 51
    }
   ]
  },
  {
   "id": "16-agents-routines",
   "group": "harness-run",
   "title": "Routines tab",
   "action": "Open the Routines tab above the Agents list. We did not create a routine in this lab.",
   "expected": "\"Run your agents automatically\" appears on an empty screen that explains that routines run agents on a schedule or on events, with a Create routine button.",
   "image": "assets/ignite/screenshots/ko/16-agents-routines.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Routines tab",
     "x": 293,
     "y": 125,
     "width": 75,
     "height": 37
    },
    {
     "label": "Run your agents automatically",
     "x": 769,
     "y": 452,
     "width": 322,
     "height": 39
    },
    {
     "label": "Create routine",
     "x": 854,
     "y": 545,
     "width": 112,
     "height": 41
    }
   ]
  },
  {
   "id": "17-agents-workflows",
   "group": "harness-run",
   "title": "Workflows tab · retirement notice",
   "action": "Read the notice banner on the Workflows (Preview) tab. We did not create a new workflow.",
   "expected": "A banner reads \"Microsoft Foundry is retiring workflows on December 1, 2026. Build new workflows with Microsoft Agent Framework…\".",
   "image": "assets/ignite/screenshots/ko/17-agents-workflows.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Workflows tab",
     "x": 367,
     "y": 128,
     "width": 130,
     "height": 31
    },
    {
     "label": "Retirement banner",
     "x": 278,
     "y": 179,
     "width": 711,
     "height": 31
    }
   ]
  },
  {
   "id": "18-agent-traces",
   "group": "observe",
   "title": "Traces list",
   "action": "Open the agent's Traces tab (or Observe → Traces on the left). Check the time range (Last Day), Trace view and Conversation view, the filters and the columns.",
   "expected": "Each run (trace) appears on one line with Trace ID, Status, Created at, Duration, Tokens (In/Out) and Estimated cost, and traces that went through an evaluation get a score in the Evaluation column (for example, workshop-answer-quality: 0.8). This capture was taken again after the evaluation and optimization labs, so traces created by the evaluation runs are stacked at the top. Right after Lab 8, only the few runs you just made appear. The \"Cost Management Reader access\" notice at the top appears when you lack the permission needed to see costs in the billing currency.",
   "image": "assets/ignite/screenshots/ko/18-agent-traces.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Trace view",
     "x": 253,
     "y": 202,
     "width": 178,
     "height": 31
    },
    {
     "label": "Time range",
     "x": 1180,
     "y": 200,
     "width": 395,
     "height": 34
    },
    {
     "label": "Trace ID column",
     "x": 284,
     "y": 380,
     "width": 93,
     "height": 32
    },
    {
     "label": "Tokens and cost columns",
     "x": 886,
     "y": 380,
     "width": 440,
     "height": 34
    },
    {
     "label": "Evaluation column",
     "x": 1336,
     "y": 380,
     "width": 200,
     "height": 34
    }
   ]
  },
  {
   "id": "19-agent-monitor",
   "group": "observe",
   "title": "Agent Monitor · Overview",
   "action": "On the agent's Monitor tab, check the Overview, Cost (Preview) and Tools tabs and the time range (7D).",
   "expected": "The Operational metrics, Evaluations, Scheduled evaluations and Scheduled red teaming run issues (Preview) cards and the Agent runs chart appear. In this capture, Total token usage was 0 and Estimated cost was \"--\" even though runs existed.",
   "image": "assets/ignite/screenshots/ko/19-agent-monitor.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Monitor tab",
     "x": 253,
     "y": 146,
     "width": 132,
     "height": 31
    },
    {
     "label": "Cost (Preview) tab",
     "x": 341,
     "y": 146,
     "width": 113,
     "height": 31
    },
    {
     "label": "Operational metrics",
     "x": 258,
     "y": 304,
     "width": 195,
     "height": 34
    },
    {
     "label": "Total token usage",
     "x": 258,
     "y": 374,
     "width": 258,
     "height": 31
    }
   ]
  },
  {
   "id": "20-agent-monitor-cost",
   "group": "observe",
   "title": "Monitor → Cost (Preview)",
   "action": "Open the Cost (Preview) tab under Monitor.",
   "expected": "The notice \"All costs on this page are estimated\" and the Agent cost, Model token usage, Agent runs and Average Agent Cost / run cards appear. In this capture, everything except Agent runs (18) showed \"Not available\", and \"No agent cost data is available for the selected date range.\" appeared. The notice \"You don't have permission to read Azure Monitor metrics for this resource.\" at the top means this account has no permission to read Azure Monitor metrics; if you need cost metrics, ask the operator for the permission.",
   "image": "assets/ignite/screenshots/ko/20-agent-monitor-cost.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Cost tab",
     "x": 341,
     "y": 146,
     "width": 113,
     "height": 31
    },
    {
     "label": "Estimate notice",
     "x": 259,
     "y": 177,
     "width": 365,
     "height": 31
    },
    {
     "label": "Cost cards (Not available)",
     "x": 244,
     "y": 272,
     "width": 1332,
     "height": 128
    }
   ]
  },
  {
   "id": "21-agent-insights",
   "group": "insights",
   "title": "Insights tab · scan settings",
   "action": "Open the agent's Insights tab. The Preview example on the right is sample data. You can select only GPT-5 or later models as the Judge model. Check the settings and select Run scan now.",
   "expected": "Configuration shows the Judge model (gpt-6.1-terra in this capture) and \"Estimated cost for your first scan\" (14 traces from the last 7 days). A model without pricing information shows \"Pricing unavailable for the selected model.\"",
   "image": "assets/ignite/screenshots/ko/21-agent-insights.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Preview example",
     "x": 913,
     "y": 407,
     "width": 124,
     "height": 28
    },
    {
     "label": "Judge model",
     "x": 484,
     "y": 452,
     "width": 110,
     "height": 31
    },
    {
     "label": "First scan cost",
     "x": 492,
     "y": 550,
     "width": 277,
     "height": 31
    },
    {
     "label": "Pricing notice",
     "x": 492,
     "y": 594,
     "width": 294,
     "height": 28
    },
    {
     "label": "Run scan now",
     "x": 683,
     "y": 667,
     "width": 110,
     "height": 41
    }
   ]
  },
  {
   "id": "22-insights-scanning",
   "group": "insights",
   "title": "Run now · scan in progress",
   "action": "When you select Run scan now, \"Run in progress\" appears with the steps Collecting traces → Analyzing traces → Generating insights.",
   "expected": "The message \"This typically takes 2–5 minutes. Results will appear automatically.\" appears. You can stop the scan with Cancel if needed.",
   "image": "assets/ignite/screenshots/ko/22-insights-scanning.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Run in progress",
     "x": 237,
     "y": 203,
     "width": 136,
     "height": 28
    },
    {
     "label": "Cancel",
     "x": 675,
     "y": 200,
     "width": 57,
     "height": 34
    },
    {
     "label": "Finding insights",
     "x": 1086,
     "y": 478,
     "width": 198,
     "height": 40
    },
    {
     "label": "Duration notice",
     "x": 963,
     "y": 658,
     "width": 396,
     "height": 28
    }
   ]
  },
  {
   "id": "23-insights-no-issues",
   "group": "insights",
   "title": "Scan result · 0 insights",
   "action": "When the scan finishes, a \"Scan complete\" notification appears at the top and the number of insights is shown on the left. If needed, run it again with Run now.",
   "expected": "This example ended with \"Analyzed 3 traces and generated no new insights, using 101,123 tokens.\" and showed 0 insights, \"No issues detected\" and Traces analyzed 3. One scan used about 100,000 judge-model tokens. With few traces, the result can be 0 insights; it does not guarantee that there are no problems.",
   "image": "assets/ignite/screenshots/ko/23-insights-no-issues.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "0 insights",
     "x": 237,
     "y": 140,
     "width": 121,
     "height": 34
    },
    {
     "label": "Run now",
     "x": 243,
     "y": 172,
     "width": 65,
     "height": 34
    },
    {
     "label": "No issues detected",
     "x": 1078,
     "y": 494,
     "width": 224,
     "height": 38
    }
   ]
  },
  {
   "id": "24-agent-evaluation",
   "group": "evaluator",
   "title": "Agent Evaluation tab",
   "action": "Open the agent's Evaluation tab. You can create an evaluator with Create evaluator in the \"NEW: Custom rubric evaluators\" banner at the top.",
   "expected": "The Automatic Evaluation, Human Evaluation and Red team (Preview) tabs and the evaluation list appear. At first, the list shows \"No evaluations found\".",
   "image": "assets/ignite/screenshots/ko/24-agent-evaluation.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "NEW banner",
     "x": 276,
     "y": 151,
     "width": 326,
     "height": 31
    },
    {
     "label": "Create evaluator",
     "x": 1420,
     "y": 148,
     "width": 110,
     "height": 38
    },
    {
     "label": "Evaluation tab",
     "x": 253,
     "y": 210,
     "width": 167,
     "height": 31
    }
   ]
  },
  {
   "id": "25-evaluator-catalog",
   "group": "evaluator",
   "title": "Evaluations → Evaluator catalog",
   "action": "On the left, open Improve → Evaluations, then the Evaluator catalog tab. Start creating an evaluator with Create evaluator at the top right.",
   "expected": "A list of Built-in evaluators provided by Microsoft appears. Created on is the date the evaluator definition was registered, so it is not today's date (for example, Task-Completion 11/13, Task-Level-Rubric 11/7). There are Type and Category filters and Version and Publisher columns. You have no evaluators of your own yet.",
   "image": "assets/ignite/screenshots/ko/25-evaluator-catalog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Evaluator catalog tab",
     "x": 325,
     "y": 96,
     "width": 142,
     "height": 31
    },
    {
     "label": "Type and Category filters",
     "x": 576,
     "y": 176,
     "width": 196,
     "height": 34
    },
    {
     "label": "Create evaluator",
     "x": 1448,
     "y": 172,
     "width": 127,
     "height": 41
    },
    {
     "label": "Task-Level-Rubric",
     "x": 284,
     "y": 386,
     "width": 190,
     "height": 51
    }
   ]
  },
  {
   "id": "26-evaluator-create-dialog",
   "group": "evaluator",
   "title": "Create evaluator dialog",
   "action": "Select Create evaluator.",
   "expected": "Evaluator type (Rubric · Prompt · Code · Endpoint), Category (Quality · Safety), Scoring method (Numeric · Boolean) and the Auto-generate rubric toggle appear. A description of each type is shown on the right, and Prompt, Code and Endpoint are Preview.",
   "image": "assets/ignite/screenshots/ko/26-evaluator-create-dialog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Evaluator type",
     "x": 146,
     "y": 300,
     "width": 140,
     "height": 31
    },
    {
     "label": "Category",
     "x": 146,
     "y": 372,
     "width": 108,
     "height": 31
    },
    {
     "label": "Scoring method",
     "x": 146,
     "y": 444,
     "width": 150,
     "height": 31
    },
    {
     "label": "Auto-generate rubric",
     "x": 206,
     "y": 524,
     "width": 198,
     "height": 31
    }
   ]
  },
  {
   "id": "27-evaluator-fields",
   "group": "evaluator",
   "title": "Evaluator details form",
   "action": "Enter workshop-answer-quality-en in Evaluator name, Workshop answer quality (EN) in Display name, and a Description (at the top of the dialog). Scroll down and leave Rubric, Quality, Numeric and Auto-generate rubric at their defaults; for Model, choose the deployment to use as the judge, and for Target agent, choose workshop-harness-agent-en. Leave Add context under Context (Optional) and \"Use production traces from target agent\" turned on.",
   "expected": "When you choose the Target agent, its instructions fill Agent instructions as read-only text. For Model, choose from the list the judge deployment that will generate the rubric (gpt-5.4-mini in this capture). In our test in this environment, gpt-6.1-terra did not appear in this list, so choose a deployment that is shown and, if there is none, ask the operator. Under Context, \"Use production traces from target agent\" shows the number of recent traces (\"2 traces found…\").",
   "image": "assets/ignite/screenshots/en/27-evaluator-fields.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Model (judge model)",
     "x": 150,
     "y": 164,
     "width": 314,
     "height": 42
    },
    {
     "label": "Target agent",
     "x": 472,
     "y": 164,
     "width": 316,
     "height": 42
    },
    {
     "label": "Context (use traces)",
     "x": 155,
     "y": 535,
     "width": 285,
     "height": 82
    },
    {
     "label": "Generate rubric",
     "x": 677,
     "y": 786,
     "width": 121,
     "height": 41
    }
   ]
  },
  {
   "id": "28-evaluator-context-warning",
   "group": "evaluator",
   "title": "Context (trace) settings and permission warning",
   "action": "Check Add context and \"Use production traces from target agent\" under Context (Optional). We continued without selecting Resolve in this lab.",
   "expected": "The Date range and the message \"8 traces found. A representative set will be auto-selected using intelligent sampling.\" appear, together with the warning \"Setup incomplete: Assign the Foundry project's managed identity the Monitoring Reader role on Application Insights…\". Resolve can lead to a role assignment procedure, so if you lack permission, ask the operator. After this capture, the operator granted the role and we went on to the next step.",
   "image": "assets/ignite/screenshots/en/28-evaluator-context-warning.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "English screenshot in preparation",
     "x": 380,
     "y": 330,
     "width": 840,
     "height": 240
    }
   ],
   "placeholder": true
  },
  {
   "id": "29-evaluator-rubric-generated",
   "group": "evaluator",
   "title": "Generate rubric · automatic rubric generation",
   "action": "Select Generate rubric and wait.",
   "expected": "\"Generated rubric (7 dimensions)\" appears on the right. Each dimension has criteria for scores of 1, 3 and 5, and the instruction rules \"at most 5 sentences · English · reading and web lookups only\" are reflected in dimensions such as english_and_role_compliance and sentence_budget_compliance. The Pass score threshold is 0.5 and a \"Rubric evaluator created\" notification appears. Dimension names and counts can differ each time you generate.",
   "image": "assets/ignite/screenshots/en/29-evaluator-rubric-generated.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Generated rubric",
     "x": 826,
     "y": 100,
     "width": 281,
     "height": 34
    },
    {
     "label": "Pass score threshold",
     "x": 810,
     "y": 178,
     "width": 179,
     "height": 31
    },
    {
     "label": "Dimension list",
     "x": 822,
     "y": 300,
     "width": 377,
     "height": 71
    },
    {
     "label": "Save evaluator",
     "x": 1264,
     "y": 836,
     "width": 119,
     "height": 45
    }
   ]
  },
  {
   "id": "30-evaluator-saved",
   "group": "evaluator",
   "title": "Save evaluator · evaluator details",
   "action": "Review the dimensions, then select Save evaluator. After it is saved, the evaluator details screen opens.",
   "expected": "Workshop answer quality (EN) (custom) appears as Rubric-based, Quality · Agents, at the Turn and Conversation levels, with an overall score [0-1], dimension scores [1-5], Target agent workshop-harness-agent-en and Dimensions (7). The Create evaluation and Edit buttons are shown.",
   "image": "assets/ignite/screenshots/en/30-evaluator-saved.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Evaluator name",
     "x": 267,
     "y": 64,
     "width": 307,
     "height": 39
    },
    {
     "label": "Create evaluation",
     "x": 1341,
     "y": 61,
     "width": 138,
     "height": 45
    },
    {
     "label": "Evaluator configuration",
     "x": 237,
     "y": 413,
     "width": 219,
     "height": 34
    },
    {
     "label": "Dimensions",
     "x": 697,
     "y": 418,
     "width": 160,
     "height": 34
    }
   ]
  },
  {
   "id": "31-eval-wizard-target",
   "group": "evaluation",
   "title": "Create evaluation 1/5 · Target",
   "action": "On the evaluator details screen, select Create evaluation. Set Target to Agent, choose workshop-harness-agent in the list, and select Next.",
   "expected": "A 5-step wizard opens: Target → Scope → Data → Criteria → Review. You can choose what to evaluate from Agent, Model or Dataset. Because you started from the evaluator details, the evaluator you created (workshop-answer-quality) appears already selected in step 4.",
   "image": "assets/ignite/screenshots/ko/31-eval-wizard-target.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Create new evaluation",
     "x": 269,
     "y": 56,
     "width": 252,
     "height": 39
    },
    {
     "label": "Agent selection",
     "x": 297,
     "y": 202,
     "width": 109,
     "height": 31
    },
    {
     "label": "Agent list",
     "x": 855,
     "y": 131,
     "width": 225,
     "height": 31
    },
    {
     "label": "Next",
     "x": 1517,
     "y": 359,
     "width": 52,
     "height": 42
    }
   ]
  },
  {
   "id": "32-eval-wizard-scope",
   "group": "evaluation",
   "title": "2/5 · Scope",
   "action": "Leave Individual turns (the default) selected in this lab and select Next.",
   "expected": "The options Individual turns (one question-response pair) and Full conversations (the whole multi-turn conversation) appear.",
   "image": "assets/ignite/screenshots/ko/32-eval-wizard-scope.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Individual turns",
     "x": 297,
     "y": 255,
     "width": 147,
     "height": 31
    },
    {
     "label": "Full conversations",
     "x": 297,
     "y": 305,
     "width": 164,
     "height": 31
    },
    {
     "label": "Next",
     "x": 648,
     "y": 368,
     "width": 57,
     "height": 45
    }
   ]
  },
  {
   "id": "33-eval-wizard-data",
   "group": "evaluation",
   "title": "3/5 · Data · synthetic data generation",
   "action": "Leave Dataset source as Synthetic generation. Enter the generation direction in Prompt (optional), check the Model (gpt-6.1-terra in this capture), Number of rows (15) and the new dataset name (workshop_harness_eval_set_en), then select Next. We did not use Seed data (a file).",
   "expected": "Five options appear: Synthetic generation, Existing dataset, Benchmarks (Preview), Existing traces and Live traffic. Model and Number of rows hold their defaults (gpt-6.1-terra, 15). The new dataset name you entered (workshop_harness_eval_set_en) is shown at this step, but after the evaluation finishes, the list shows an automatically generated name.",
   "image": "assets/ignite/screenshots/en/33-eval-wizard-data.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Dataset source",
     "x": 261,
     "y": 334,
     "width": 148,
     "height": 31
    },
    {
     "label": "Synthetic generation",
     "x": 297,
     "y": 370,
     "width": 178,
     "height": 31
    },
    {
     "label": "Model",
     "x": 739,
     "y": 627,
     "width": 92,
     "height": 31
    },
    {
     "label": "Number of rows",
     "x": 739,
     "y": 695,
     "width": 150,
     "height": 31
    }
   ]
  },
  {
   "id": "34-eval-wizard-criteria",
   "group": "evaluation",
   "title": "4/5 · Criteria · evaluator selection",
   "action": "Check the Judge model (gpt-5.4-mini in this capture) and choose evaluators from the Evaluator catalog. At first, the 6 Recommended evaluators and the evaluator you created are selected (Review selected (7)).",
   "expected": "The All (49), Recommended (6), Built-in (48) and Custom (1) views and the \"Create a custom evaluator\" button appear.",
   "image": "assets/ignite/screenshots/ko/34-eval-wizard-criteria.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Judge model",
     "x": 261,
     "y": 375,
     "width": 130,
     "height": 31
    },
    {
     "label": "Catalog views",
     "x": 727,
     "y": 216,
     "width": 539,
     "height": 81
    },
    {
     "label": "Review selected",
     "x": 1324,
     "y": 318,
     "width": 174,
     "height": 31
    },
    {
     "label": "Create a custom evaluator",
     "x": 1400,
     "y": 117,
     "width": 187,
     "height": 41
    }
   ]
  },
  {
   "id": "35-eval-wizard-custom-selected",
   "group": "evaluation",
   "title": "Only the Custom evaluator selected",
   "action": "Select Clear selection, then under Custom → All custom select only Workshop answer quality (EN) and select Next. We chose just one in this lab to reduce judge calls. The screenshot shows Custom (2) because the capture project also holds the evaluator created for the Korean edition; your list shows only your own evaluator.",
   "expected": "The label changes to \"Review selected (1)\", and the card shows a Rubric badge and a View rubric details link.",
   "image": "assets/ignite/screenshots/en/35-eval-wizard-custom-selected.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Custom (2)",
     "x": 1079,
     "y": 254,
     "width": 110,
     "height": 32
    },
    {
     "label": "Workshop answer quality (EN)",
     "x": 743,
     "y": 375,
     "width": 32,
     "height": 32
    },
    {
     "label": "Review selected (1)",
     "x": 1318,
     "y": 318,
     "width": 145,
     "height": 32
    },
    {
     "label": "Next",
     "x": 649,
     "y": 457,
     "width": 55,
     "height": 32
    }
   ]
  },
  {
   "id": "36-eval-wizard-review",
   "group": "evaluation",
   "title": "5/5 · Review → Submit",
   "action": "Enter workshop-harness-eval-1 in Evaluation name, check the Summary (Targets · Scope · Dataset · Evaluators), and select Submit.",
   "expected": "Shortly after you select Submit, the evaluation details screen opens.",
   "image": "assets/ignite/screenshots/ko/36-eval-wizard-review.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Evaluation name",
     "x": 261,
     "y": 408,
     "width": 155,
     "height": 31
    },
    {
     "label": "Summary",
     "x": 727,
     "y": 116,
     "width": 122,
     "height": 34
    },
    {
     "label": "Submit",
     "x": 632,
     "y": 483,
     "width": 73,
     "height": 45
    }
   ]
  },
  {
   "id": "37-eval-run-in-progress",
   "group": "evaluation",
   "title": "Evaluation run status",
   "action": "In the Evaluation runs list on the evaluation details screen, check Status. The run goes through generating synthetic data → running the agent → scoring.",
   "expected": "Status is \"In progress\" and Overall score is \"-\". In this example, generating synthetic data → running the agent → scoring took about 7 minutes to finish. While you wait, harness agent runs pile up in Traces.",
   "image": "assets/ignite/screenshots/ko/37-eval-run-in-progress.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Evaluation runs",
     "x": 237,
     "y": 237,
     "width": 164,
     "height": 34
    },
    {
     "label": "Status",
     "x": 653,
     "y": 319,
     "width": 73,
     "height": 31
    },
    {
     "label": "In progress",
     "x": 677,
     "y": 360,
     "width": 93,
     "height": 28
    },
    {
     "label": "Overall score",
     "x": 838,
     "y": 319,
     "width": 133,
     "height": 31
    }
   ]
  },
  {
   "id": "38-eval-run-results",
   "group": "evaluation",
   "title": "Evaluation results · Evaluation runs",
   "action": "When the evaluation finishes, check Status and the scores in the Evaluation runs list and select the run name to open the details. You can also add runs to the same evaluation with Add run and compare them.",
   "expected": "Status is Completed, P50 and P95 latency are 18.9s and 25.1s, Overall score and workshop-answer-quality show 100% (15 / 15), and Duration was 7m 16.87s. All 15 questions received a score. The Dataset column shows the automatically generated \"dgj_accb51\" (Version 1.0) instead of the name you entered. 100% is the Pass rate; the score itself differs from row to row.",
   "image": "assets/ignite/screenshots/ko/38-eval-run-results.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Status(Partial)",
     "x": 590,
     "y": 318,
     "width": 100,
     "height": 80
    },
    {
     "label": "P50·P95 latency",
     "x": 686,
     "y": 318,
     "width": 200,
     "height": 80
    },
    {
     "label": "Score 100% (12 / 12)",
     "x": 932,
     "y": 318,
     "width": 340,
     "height": 80
    },
    {
     "label": "Add run",
     "x": 1505,
     "y": 65,
     "width": 76,
     "height": 37
    }
   ]
  },
  {
   "id": "39-eval-run-details",
   "group": "evaluation",
   "title": "Run details · results by row",
   "action": "Select the run name to open Run details. Check the Overall metric results and Detailed metrics result tables. Scroll the table to the right to see more columns such as the response, tool calls and Error.",
   "expected": "Status was Completed, Duration was 12m 15.83s, and the Elapsed time under Evaluation progress was 9m 56.5s. The table shows a score for each question (query), such as \"Pass: 0.536\" and \"Pass: 0.714\", and 100% (14 / 14) of the scored rows passed. Row 4 shows Error (0/0): it ended without a score, although the run itself is Completed. Scroll the table to the right to see more columns such as the response and tool calls. In an earlier capture on a deployment with a low call limit (TPM), some rows ended without a score because of a rate_limit_exceeded error and the run became Partial, so if there are Error rows, check the deployment limit.",
   "image": "assets/ignite/screenshots/en/39-eval-run-details.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Run summary",
     "x": 244,
     "y": 150,
     "width": 720,
     "height": 60
    },
    {
     "label": "Overall metric results",
     "x": 237,
     "y": 385,
     "width": 186,
     "height": 34
    },
    {
     "label": "Detailed metrics result",
     "x": 237,
     "y": 544,
     "width": 196,
     "height": 34
    },
    {
     "label": "Download results",
     "x": 1209,
     "y": 238,
     "width": 140,
     "height": 31
    }
   ]
  },
  {
   "id": "40-eval-row-details",
   "group": "evaluation",
   "title": "Row details · scores and reasons by dimension",
   "action": "Select View details in the table to open the Detail rubric score for each row. On the Details tab, check Score (1–5), Result and Reason for each dimension. You can see the raw data on the JSON tab.",
   "expected": "In this example, the overall score was 0.54/1.0 (Pass), and the dimensions scored evidence_grounded_factual_alignment 2, source_url_attribution 3, sentence_budget_compliance 4, unsupported_claim_avoidance 2, concise_question_addressing 4, english_and_role_compliance 4 and general_quality 3; each dimension has an English Reason.",
   "image": "assets/ignite/screenshots/en/40-eval-row-details.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Overall score",
     "x": 262,
     "y": 156,
     "width": 124,
     "height": 62
    },
    {
     "label": "Score table by dimension",
     "x": 255,
     "y": 262,
     "width": 1090,
     "height": 528
    },
    {
     "label": "Done",
     "x": 1285,
     "y": 815,
     "width": 61,
     "height": 45
    }
   ]
  },
  {
   "id": "41-agent-optimize",
   "group": "optimize",
   "title": "Optimize tab introduction",
   "action": "Open the agent's Optimize tab. This screen is the Optimize tab of the Prompt Agent workshop-assistant.",
   "expected": "A note explains that Optimize builds candidates by changing the instructions, skills, tool descriptions and model choice, ranks them by your evaluation criteria, and does not change the agent until you promote a candidate. The \"tax agent 75.0 → 92.5 (+17.5)\" on the screen is a product example, not a result for your agent.",
   "image": "assets/ignite/screenshots/ko/41-agent-optimize.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Optimize tab",
     "x": 649,
     "y": 100,
     "width": 90,
     "height": 31
    },
    {
     "label": "Product example",
     "x": 579,
     "y": 339,
     "width": 316,
     "height": 31
    },
    {
     "label": "Promotion notice",
     "x": 579,
     "y": 513,
     "width": 702,
     "height": 28
    },
    {
     "label": "Optimize button",
     "x": 862,
     "y": 550,
     "width": 100,
     "height": 41
    }
   ]
  },
  {
   "id": "42-optimize-goal-menu",
   "group": "optimize",
   "title": "Optimize start menu",
   "action": "Select the Optimize button to open the menu with Choose a goal (Improve quality · Reduce cost), Fix issues and Learn from past activity. Choose Improve quality in this lab.",
   "expected": "Under Choose a goal you see Improve quality and Reduce cost, and below them Fix issues (based on the insights you select) and Learn from past activity (based on recent traces). The official docs describe portal optimization for Prompt Agents that do not use the Copilot harness, so we ran this lab with workshop-assistant; we did not verify submitting a harness agent.",
   "image": "assets/ignite/screenshots/ko/42-optimize-goal-menu.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Choose a goal",
     "x": 891,
     "y": 592,
     "width": 141,
     "height": 31
    },
    {
     "label": "Improve quality",
     "x": 1100,
     "y": 597,
     "width": 137,
     "height": 31
    },
    {
     "label": "Reduce cost",
     "x": 1100,
     "y": 631,
     "width": 119,
     "height": 31
    },
    {
     "label": "Learn from past activity",
     "x": 891,
     "y": 696,
     "width": 199,
     "height": 31
    }
   ]
  },
  {
   "id": "43-optimize-wizard-target",
   "group": "optimize",
   "title": "Optimize wizard · Target",
   "action": "Select Optimize → Choose a goal → Improve quality to open the wizard. On Target, check Agent and Version, Optimization approach (Auto), Optimization model, Max candidates and Evaluation model, and select Next.",
   "expected": "The agent and its latest version are filled in, and Auto, Optimization model, Max candidates 2 and Evaluation model appear. The note on the right explains that candidates are ranked by score and that you should review them before applying.",
   "image": "assets/ignite/screenshots/ko/43-optimize-wizard-target.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Optimization approach",
     "x": 196,
     "y": 361,
     "width": 216,
     "height": 31
    },
    {
     "label": "Optimization model",
     "x": 194,
     "y": 597,
     "width": 153,
     "height": 31
    },
    {
     "label": "Max candidates",
     "x": 416,
     "y": 597,
     "width": 129,
     "height": 31
    },
    {
     "label": "Evaluation model",
     "x": 194,
     "y": 665,
     "width": 139,
     "height": 31
    }
   ]
  },
  {
   "id": "44-optimize-wizard-data",
   "group": "optimize",
   "title": "Optimize wizard · Data preparation methods",
   "action": "On Data, choose either Generate data (build it from production traces) or Select dataset and criteria (choose an existing dataset). Generate data first checks for traces with \"Checking for traces...\", so in this lab choose Select dataset and criteria and use the dataset you created in Lab 10.",
   "expected": "In the Generate data area, a \"Checking past agent traces\" notice appears with the Date range and Maximum traces settings, and the Select dataset and criteria option is below it. If there are too few traces, an \"Insufficient traces\" notice can appear.",
   "image": "assets/ignite/screenshots/ko/44-optimize-wizard-data.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Generate data",
     "x": 230,
     "y": 214,
     "width": 140,
     "height": 31
    },
    {
     "label": "Trace check notice",
     "x": 146,
     "y": 112,
     "width": 202,
     "height": 31
    },
    {
     "label": "Select dataset and criteria",
     "x": 230,
     "y": 622,
     "width": 232,
     "height": 31
    }
   ]
  },
  {
   "id": "45-optimize-wizard-dataset",
   "group": "optimize",
   "title": "Optimize wizard · dataset selection",
   "action": "Choose Select dataset and criteria and select the synthetic dataset (dgj_…) from Lab 10. Do not choose sys-evalartifacts-…; it is a system artifact. When the \"Verifying dataset\" check finishes, select Next.",
   "expected": "The selected row and the dataset name in the Preview on the right appear, and Next becomes enabled when verification finishes.",
   "image": "assets/ignite/screenshots/ko/45-optimize-wizard-dataset.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Synthetic dataset (dgj_…)",
     "x": 707,
     "y": 255,
     "width": 124,
     "height": 31
    },
    {
     "label": "Dataset verification notice",
     "x": 701,
     "y": 121,
     "width": 177,
     "height": 31
    }
   ]
  },
  {
   "id": "46-optimize-wizard-criteria",
   "group": "optimize",
   "title": "Optimize wizard · evaluator selection",
   "action": "In the Select evaluators list under Criteria, with Custom only turned on, select the evaluator you created in Lab 10.",
   "expected": "One row appears for your evaluator, of type Custom: Rubric-based.",
   "image": "assets/ignite/screenshots/ko/46-optimize-wizard-criteria.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Custom only",
     "x": 1202,
     "y": 121,
     "width": 121,
     "height": 31
    },
    {
     "label": "Your evaluator",
     "x": 707,
     "y": 197,
     "width": 162,
     "height": 51
    }
   ]
  },
  {
   "id": "47-optimize-evaluator-threshold",
   "group": "optimize",
   "title": "Evaluator Threshold setting",
   "action": "When you select the evaluator, the Configure dialog opens. Check the default Threshold of 0.5, select Apply, and then select Next.",
   "expected": "The Threshold slider and the Apply button appear.",
   "image": "assets/ignite/screenshots/en/47-optimize-evaluator-threshold.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Threshold",
     "x": 438,
     "y": 412,
     "width": 474,
     "height": 101
    },
    {
     "label": "Apply",
     "x": 1017,
     "y": 541,
     "width": 59,
     "height": 41
    }
   ]
  },
  {
   "id": "48-optimize-wizard-review",
   "group": "optimize",
   "title": "Optimize wizard · Review and estimated cost",
   "action": "On Review, check Estimated cost (Minimum · Estimated · Maximum) and the Target, Dataset and Criteria summary, then select Submit.",
   "expected": "The estimated cost is based on the price list and varies with actual usage. After you submit, the optimization run starts.",
   "image": "assets/ignite/screenshots/ko/48-optimize-wizard-review.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Estimated cost",
     "x": 677,
     "y": 134,
     "width": 167,
     "height": 31
    },
    {
     "label": "Submit",
     "x": 567,
     "y": 335,
     "width": 69,
     "height": 41
    }
   ]
  },
  {
   "id": "49-optimize-run-progress",
   "group": "optimize",
   "title": "Optimization run in progress",
   "action": "After you select Submit, a new run (opt_…) appears as In progress in the Optimize tab list. It takes a few minutes to finish, so refresh the list to check.",
   "expected": "Run ID, Strategy (Improve quality), Status (In progress) and Baseline (Version 2) appear. The score columns show \"--\" until the run completes.",
   "image": "assets/ignite/screenshots/ko/49-optimize-run-progress.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Run ID",
     "x": 254,
     "y": 233,
     "width": 301,
     "height": 31
    },
    {
     "label": "In progress",
     "x": 611,
     "y": 235,
     "width": 93,
     "height": 28
    }
   ]
  },
  {
   "id": "50-optimize-results",
   "group": "optimize",
   "title": "Optimization finished · scores",
   "action": "When Status is Succeeded, check the number of Candidates, the Baseline score, the Best score and the improvement.",
   "expected": "In this example, the run became Succeeded after 5m 52s with Candidates 2, Baseline score 0.761 and Best score 0.761 (±0.000), so there was no improvement. Scores and durations differ from run to run, and Promoted is empty, so the agent did not change.",
   "image": "assets/ignite/screenshots/ko/50-optimize-results.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Succeeded",
     "x": 611,
     "y": 235,
     "width": 94,
     "height": 28
    },
    {
     "label": "Baseline·Best score",
     "x": 1072,
     "y": 194,
     "width": 303,
     "height": 32
    }
   ]
  },
  {
   "id": "51-optimize-run-details",
   "group": "optimize",
   "title": "Run details · candidate score comparison",
   "action": "Select the Run ID and check Improvement, Run overview, Score comparison and Candidate results. Do not select Promote candidate in this lab.",
   "expected": "The Improvement card shows \"No improvement\" and the Promote candidate button is disabled. baseline 0.761, candidate_1 0.725 and candidate_2 0.688 are compared, and Total tokens was 272.3K. The candidates scored lower than the baseline, so the baseline is Best. This kind of result is also normal; if there is no improvement, do not promote. You can see what changed (System prompt) with View changes on a candidate row.",
   "image": "assets/ignite/screenshots/ko/51-optimize-run-details.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Score comparison",
     "x": 1155,
     "y": 182,
     "width": 188,
     "height": 31
    },
    {
     "label": "Candidate results",
     "x": 237,
     "y": 503,
     "width": 200,
     "height": 34
    },
    {
     "label": "Promote candidate",
     "x": 1433,
     "y": 63,
     "width": 142,
     "height": 41
    }
   ]
  },
  {
   "id": "52-optimize-view-changes",
   "group": "optimize",
   "title": "What a candidate changed",
   "action": "Select View changes on the Improvement card or on a candidate row to see the configuration (JSON) differences side by side. Just close it; do not promote.",
   "expected": "In this run, candidate_2 is the best candidate, so \"Comparing candidate_2 against baseline configuration.\" appears and the Baseline and Candidate configurations are shown side by side; the System prompt is what changed. Results differ from run to run (the run on the previous screens had the baseline as the best).",
   "image": "assets/ignite/screenshots/en/52-optimize-view-changes.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Baseline",
     "x": 242,
     "y": 222,
     "width": 88,
     "height": 31
    },
    {
     "label": "Candidate",
     "x": 801,
     "y": 222,
     "width": 222,
     "height": 31
    }
   ]
  },
  {
   "id": "53-manage-fleet",
   "group": "fleet",
   "title": "Manage → Fleet overview (Preview)",
   "action": "Select Manage at the top and open Fleet on the left. Try changing the scope (subscription · resource group · project) and the time range (Last Day · 7D · 1M · 3M).",
   "expected": "Cards for Activity (agent runs), Consumption (tokens), Estimated cost and Assets with policy violations appear, along with top lists for errors, latency, cost increases and policy violations. The table below is split into Projects, Agents and Models tabs.",
   "image": "assets/ignite/screenshots/ko/53-manage-fleet.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Fleet overview",
     "x": 237,
     "y": 62,
     "width": 141,
     "height": 39
    },
    {
     "label": "Scope filter",
     "x": 238,
     "y": 116,
     "width": 718,
     "height": 44
    },
    {
     "label": "Time range",
     "x": 1357,
     "y": 122,
     "width": 176,
     "height": 31
    },
    {
     "label": "Activity card",
     "x": 523,
     "y": 195,
     "width": 260,
     "height": 71
    },
    {
     "label": "Projects tab",
     "x": 270,
     "y": 690,
     "width": 84,
     "height": 31
    }
   ]
  },
  {
   "id": "54-manage-operations",
   "group": "fleet",
   "title": "Manage → Operations (Preview)",
   "action": "In Operations, switch between the Invocations, Tokens, Errors and Latency tabs and change the time range to check the metrics.",
   "expected": "Operational metrics such as Agent runs, Model requests and Tool calls, and the Highest error incidents and Highest agent run latency lists appear. In this capture, Fleet showed 132 agent runs while Operations showed Agent runs 72 and Model requests 266, so they differed. The aggregation scope and definitions differ, so do not assume they are the same value.",
   "image": "assets/ignite/screenshots/ko/54-manage-operations.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Operations",
     "x": 43,
     "y": 170,
     "width": 83,
     "height": 31
    },
    {
     "label": "Metric tabs",
     "x": 1228,
     "y": 204,
     "width": 340,
     "height": 32
    },
    {
     "label": "Model requests",
     "x": 258,
     "y": 317,
     "width": 184,
     "height": 34
    },
    {
     "label": "Highest error incidents",
     "x": 590,
     "y": 711,
     "width": 175,
     "height": 31
    }
   ]
  },
  {
   "id": "55-manage-cost",
   "group": "fleet",
   "title": "Manage → Cost (Preview)",
   "action": "In Cost, set the time range to 7D and check Estimated cost, Month-end forecast, Spend breakdown, Highest spend assets and Group by in Cost by project.",
   "expected": "A note says the data is based on Azure Cost Management and can be up to 24 hours behind. This project showed \"No estimated cost is available for the selected period.\" We did not verify the cause (no model pricing information, aggregation delay and so on). As the on-screen notice says, an empty cost does not mean zero usage (missing costs are not zero usage).",
   "image": "assets/ignite/screenshots/ko/55-manage-cost.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Delay notice",
     "x": 876,
     "y": 144,
     "width": 289,
     "height": 28
    },
    {
     "label": "Estimated cost",
     "x": 254,
     "y": 247,
     "width": 225,
     "height": 31
    },
    {
     "label": "Month-end forecast",
     "x": 590,
     "y": 247,
     "width": 156,
     "height": 31
    },
    {
     "label": "Group by",
     "x": 1208,
     "y": 855,
     "width": 90,
     "height": 31
    }
   ]
  },
  {
   "id": "56-manage-compliance",
   "group": "manage-governance",
   "title": "Manage → Compliance",
   "action": "In Compliance, check the Policy, Asset, Security posture and Data security and governance tabs and the scope filter. You assign policies with Manage in Azure Policy; we did not do that in this lab.",
   "expected": "\"No policies assigned\" appeared. It means no policy is assigned; it does not mean \"compliant\".",
   "image": "assets/ignite/screenshots/ko/56-manage-compliance.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Manage in Azure Policy",
     "x": 1389,
     "y": 68,
     "width": 175,
     "height": 31
    },
    {
     "label": "Tabs",
     "x": 242,
     "y": 168,
     "width": 440,
     "height": 30
    },
    {
     "label": "No policies assigned",
     "x": 812,
     "y": 474,
     "width": 216,
     "height": 39
    }
   ]
  },
  {
   "id": "57-manage-gateways",
   "group": "manage-governance",
   "title": "Manage → Gateways · AI Gateway (Preview)",
   "action": "Only read the AI Gateway introduction. We did not select Add AI Gateway in this lab because it can create an Azure API Management resource and incur costs.",
   "expected": "The notices say it is based on Azure API Management, the first 100,000 API requests are free, there are token limits per project and agent, and there is an inventory of external agents and tools.",
   "image": "assets/ignite/screenshots/ko/57-manage-gateways.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "AI Gateway",
     "x": 237,
     "y": 62,
     "width": 173,
     "height": 39
    },
    {
     "label": "Free requests notice",
     "x": 707,
     "y": 403,
     "width": 418,
     "height": 31
    },
    {
     "label": "Add AI Gateway",
     "x": 850,
     "y": 528,
     "width": 120,
     "height": 41
    }
   ]
  },
  {
   "id": "58-knowledge-connect-resource",
   "group": "foundry-iq-connect",
   "title": "First Knowledge screen · Foundry IQ resource connection",
   "action": "Open Create → Knowledge on the left. If no Azure AI Search is connected to the project, a first screen appears below the intro video where you choose the Foundry IQ resource and Auth Type.",
   "expected": "The Foundry IQ resource field, Auth Type (default API Key), the Connect button and the \"Don't see your resource? Create new resource\" link appear.",
   "image": "assets/ignite/screenshots/ko/58-knowledge-connect-resource.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Foundry IQ resource",
     "x": 561,
     "y": 685,
     "width": 290,
     "height": 30
    },
    {
     "label": "Auth Type",
     "x": 899,
     "y": 685,
     "width": 248,
     "height": 30
    },
    {
     "label": "Connect",
     "x": 1160,
     "y": 682,
     "width": 100,
     "height": 32
    },
    {
     "label": "Create new resource",
     "x": 925,
     "y": 728,
     "width": 130,
     "height": 22
    }
   ]
  },
  {
   "id": "59-knowledge-create-resource-dialog",
   "group": "foundry-iq-connect",
   "title": "Create Foundry IQ resource dialog",
   "action": "This dialog opens from Create new resource when no resource is in the list. In this lab, the operator created the search resource in advance, so just check the items and select Cancel.",
   "expected": "Resource name, Subscription, Resource group, Region, Pricing tier (Serverless) and the checkbox to agree to extra costs appear. Do not select Create.",
   "image": "assets/ignite/screenshots/ko/59-knowledge-create-resource-dialog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Resource name",
     "x": 446,
     "y": 249,
     "width": 708,
     "height": 30
    },
    {
     "label": "Pricing tier",
     "x": 446,
     "y": 537,
     "width": 708,
     "height": 30
    },
    {
     "label": "Cost consent checkbox",
     "x": 445,
     "y": 616,
     "width": 32,
     "height": 32
    },
    {
     "label": "Cancel",
     "x": 1085,
     "y": 720,
     "width": 70,
     "height": 32
    }
   ]
  },
  {
   "id": "60-knowledge-select-resource",
   "group": "foundry-iq-connect",
   "title": "Search resource and Auth Type selection",
   "action": "In Foundry IQ resource, choose se02-lab-srch-rbvs, change Auth Type to Project Managed Identity, and select Connect. The search service in this lab has key authentication turned off; when we connected with the default API Key, the agent question ended with the error \"A user error occurred while executing a tool call.\"",
   "expected": "Foundry IQ resource shows se02-lab-srch-rbvs and Auth Type shows Project Managed Identity.",
   "image": "assets/ignite/screenshots/ko/60-knowledge-select-resource.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Foundry IQ resource",
     "x": 561,
     "y": 685,
     "width": 290,
     "height": 30
    },
    {
     "label": "Auth Type",
     "x": 899,
     "y": 685,
     "width": 248,
     "height": 30
    },
    {
     "label": "Connect",
     "x": 1160,
     "y": 682,
     "width": 100,
     "height": 32
    }
   ]
  },
  {
   "id": "61-knowledge-connected",
   "group": "foundry-iq-connect",
   "title": "Connected · Create a knowledge base",
   "action": "After you select Connect, the connection completes within a few seconds. There is no knowledge base yet, so select Create a knowledge base.",
   "expected": "Connection shows se02-lab-srch-rbvs, and the Create a knowledge base button and the Manage connections link appear.",
   "image": "assets/ignite/screenshots/ko/61-knowledge-connected.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Connection",
     "x": 245,
     "y": 146,
     "width": 244,
     "height": 30
    },
    {
     "label": "Create a knowledge base",
     "x": 819,
     "y": 616,
     "width": 181,
     "height": 32
    },
    {
     "label": "Manage connections",
     "x": 817,
     "y": 660,
     "width": 126,
     "height": 20
    }
   ]
  },
  {
   "id": "62-kb-create-form",
   "group": "foundry-iq-kb",
   "title": "Knowledge base name and description",
   "action": "Enter workshop-kb-en in Name and \"Fictional documents for the Contoso workshop lab (schedule, lab environment rules, FAQ)\" in Description. There is no knowledge source yet, so select Upload files to upload the sample documents.",
   "expected": "The Add sources and Upload files buttons appear in the Knowledge sources area. Leave Improve retrieval and Encryption settings collapsed.",
   "image": "assets/ignite/screenshots/en/62-kb-create-form.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Name",
     "x": 568,
     "y": 210,
     "width": 684,
     "height": 30
    },
    {
     "label": "Description",
     "x": 568,
     "y": 282,
     "width": 684,
     "height": 52
    },
    {
     "label": "Add sources",
     "x": 785,
     "y": 665,
     "width": 119,
     "height": 32
    },
    {
     "label": "Upload files",
     "x": 908,
     "y": 665,
     "width": 126,
     "height": 32
    }
   ]
  },
  {
   "id": "63-source-embedding-model",
   "group": "foundry-iq-kb",
   "title": "Knowledge source creation · embedding model selection",
   "action": "In Upload files, choose the 3 documents in assets/foundry-iq-sample; the Create a knowledge source dialog opens. Embedding model is required, and because this project has only one embedding deployment, text-embedding-ada-002, it may be selected from the start. This screen shows the list opened after clearing the selection; if it is empty, choose text-embedding-ada-002 under Deployments.",
   "expected": "The 3 selected files and the name (ks-file-NNN) appear, and the embedding model you deployed appears under Deployments in the Embedding model list.",
   "image": "assets/ignite/screenshots/ko/63-source-embedding-model.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "The 3 files to upload",
     "x": 256,
     "y": 259,
     "width": 1089,
     "height": 169
    },
    {
     "label": "Name",
     "x": 256,
     "y": 492,
     "width": 1088,
     "height": 30
    },
    {
     "label": "Embedding model",
     "x": 256,
     "y": 668,
     "width": 1088,
     "height": 30
    },
    {
     "label": "text-embedding-ada-002",
     "x": 268,
     "y": 740,
     "width": 1064,
     "height": 40
    }
   ]
  },
  {
   "id": "64-source-create-dialog",
   "group": "foundry-iq-kb",
   "title": "Knowledge source creation · Create",
   "action": "Leave Name at its default and do not touch Advanced settings. Check that an Embedding model is selected and select Create.",
   "expected": "text-embedding-ada-002 (Standard deployment) is selected in Embedding model and the Create button is enabled.",
   "image": "assets/ignite/screenshots/ko/64-source-create-dialog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Embedding model",
     "x": 256,
     "y": 679,
     "width": 1056,
     "height": 30
    },
    {
     "label": "Advanced settings",
     "x": 255,
     "y": 722,
     "width": 1090,
     "height": 44
    },
    {
     "label": "Create",
     "x": 1199,
     "y": 818,
     "width": 68,
     "height": 32
    }
   ]
  },
  {
   "id": "65-source-uploading",
   "group": "foundry-iq-kb",
   "title": "File upload and processing progress",
   "action": "When you select Create, the knowledge source is added to the list and the files are uploaded. Wait until Status changes to Active.",
   "expected": "The knowledge source ks-file-847 is added to the list as a File with Status Active and 0 files so far, and the message \"Uploading files to ks-file-847 · 0 of 3 processed\" appears at the bottom right. While Status is still Loading..., the message \"Chat completions model is required\" can appear briefly in the Improve retrieval area; it disappears once Status is Active, and in this lab the knowledge base saves even if you do not choose a chat model.",
   "image": "assets/ignite/screenshots/en/65-source-uploading.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Knowledge source",
     "x": 577,
     "y": 793,
     "width": 75,
     "height": 31
    },
    {
     "label": "Status (Active)",
     "x": 930,
     "y": 794,
     "width": 60,
     "height": 26
    },
    {
     "label": "Upload progress notice",
     "x": 1304,
     "y": 795,
     "width": 290,
     "height": 87
    },
    {
     "label": "Chat completions model field",
     "x": 596,
     "y": 420,
     "width": 650,
     "height": 62
    }
   ]
  },
  {
   "id": "66-kb-saved",
   "group": "foundry-iq-kb",
   "title": "Saved knowledge base",
   "action": "Check that the status is Active and select Save knowledge base. After it is saved, the title changes to the knowledge base name and the Use in an agent button appears.",
   "expected": "The title workshop-kb-en, the Save, Use in an agent and More options buttons, and the knowledge source ks-file-847 (3 files, File, Active) appear.",
   "image": "assets/ignite/screenshots/en/66-kb-saved.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Knowledge base name",
     "x": 274,
     "y": 70,
     "width": 146,
     "height": 28
    },
    {
     "label": "Use in an agent",
     "x": 1400,
     "y": 68,
     "width": 136,
     "height": 32
    },
    {
     "label": "Knowledge source Active",
     "x": 937,
     "y": 554,
     "width": 45,
     "height": 20
    }
   ]
  },
  {
   "id": "67-iq-agent-remove-toolbox",
   "group": "foundry-iq-agent",
   "title": "Agent creation · default toolbox removal",
   "action": "In the model Playground, enter the instructions and create workshop-iq-agent-en with Save as agent (the same method as Lab 4). A new agent automatically gets a toolbox that contains Web search, so remove the toolbox with Actions → Remove.",
   "expected": "workshop-iq-agent-en is created as Version 1 with the instructions filled in. Remove appears in the toolbox's Actions menu.",
   "image": "assets/ignite/screenshots/en/67-iq-agent-remove-toolbox.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Agent name",
     "x": 274,
     "y": 70,
     "width": 196,
     "height": 28
    },
    {
     "label": "Instructions",
     "x": 244,
     "y": 332,
     "width": 451,
     "height": 112
    },
    {
     "label": "Toolbox Actions",
     "x": 671,
     "y": 611,
     "width": 24,
     "height": 24
    },
    {
     "label": "Remove",
     "x": 676,
     "y": 753,
     "width": 128,
     "height": 32
    }
   ]
  },
  {
   "id": "68-iq-agent-knowledge-add-menu",
   "group": "foundry-iq-agent",
   "title": "Knowledge → Add → Connect to Foundry IQ",
   "action": "In the agent's Knowledge area, select Add and choose Connect to Foundry IQ.",
   "expected": "The Connect to Foundry IQ item appears in the Add menu.",
   "image": "assets/ignite/screenshots/en/68-iq-agent-knowledge-add-menu.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Knowledge Add",
     "x": 244,
     "y": 660,
     "width": 67,
     "height": 32
    },
    {
     "label": "Connect to Foundry IQ",
     "x": 249,
     "y": 788,
     "width": 199,
     "height": 32
    }
   ]
  },
  {
   "id": "69-iq-agent-connect-dialog",
   "group": "foundry-iq-agent",
   "title": "Knowledge base connection",
   "action": "Leave Connection as se02-lab-srch-rbvs, choose workshop-kb-en in Knowledge base, and select Connect.",
   "expected": "Connection se02-lab-srch-rbvs and Knowledge base workshop-kb-en are selected, and the Connect button is enabled.",
   "image": "assets/ignite/screenshots/en/69-iq-agent-connect-dialog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Connection",
     "x": 598,
     "y": 399,
     "width": 404,
     "height": 30
    },
    {
     "label": "Knowledge base",
     "x": 598,
     "y": 491,
     "width": 404,
     "height": 30
    },
    {
     "label": "Connect",
     "x": 857,
     "y": 590,
     "width": 79,
     "height": 32
    }
   ]
  },
  {
   "id": "70-iq-agent-knowledge-saved",
   "group": "foundry-iq-agent",
   "title": "Agent saved · Version 2",
   "action": "When the knowledge base appears in the Knowledge area, select Save to save as Version 2.",
   "expected": "Version changes to 2, Save becomes disabled, and workshop-kb-en is listed under Knowledge.",
   "image": "assets/ignite/screenshots/en/70-iq-agent-knowledge-saved.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Version",
     "x": 1025,
     "y": 73,
     "width": 175,
     "height": 22
    },
    {
     "label": "Save disabled",
     "x": 1208,
     "y": 68,
     "width": 56,
     "height": 32
    },
    {
     "label": "Connected knowledge base",
     "x": 270,
     "y": 630,
     "width": 99,
     "height": 20
    }
   ]
  },
  {
   "id": "71-iq-answer-schedule",
   "group": "foundry-iq-answer",
   "title": "Question 1 · schedule and venue (one document)",
   "action": "Send the question in New chat. The question for this lab: What time does the workshop start, and where is lunch?",
   "expected": "The answer gives the start time (9:30 a.m.), the lunch location (3rd-floor lounge) and the source document name 01-workshop-overview.md (the wording of the answer can differ slightly from run to run). Below the response you see a gpt-6.1-terra 5s 975t chip and the knowledge base tool call.",
   "image": "assets/ignite/screenshots/en/71-iq-answer-schedule.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Question",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "Response info chip",
     "x": 760,
     "y": 349,
     "width": 694,
     "height": 24
    },
    {
     "label": "Knowledge base tool",
     "x": 1040,
     "y": 353,
     "width": 130,
     "height": 16
    }
   ]
  },
  {
   "id": "72-iq-answer-rules",
   "group": "foundry-iq-answer",
   "title": "Question 2 · using several documents together",
   "action": "Send the question in New chat. The question for this lab: Which model and TPM limit should participants deploy, and what should I do if I get a 429 error?",
   "expected": "The deployment model and TPM limit and the 429 error guidance are combined in one answer, and each sentence carries a source number. The two pieces of information are split across the sample documents 02-lab-environment-rules.md and 03-support-and-faq.md. Below the response you see a gpt-6.1-terra 4s 1230t chip and the knowledge base tool call.",
   "image": "assets/ignite/screenshots/en/72-iq-answer-rules.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Question",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "Response info chip",
     "x": 760,
     "y": 401,
     "width": 700,
     "height": 24
    },
    {
     "label": "Knowledge base tool",
     "x": 1046,
     "y": 405,
     "width": 130,
     "height": 16
    }
   ]
  },
  {
   "id": "73-iq-answer-not-found",
   "group": "foundry-iq-answer",
   "title": "Question 3 · content that is not in the documents",
   "action": "Send the question in New chat. The question for this lab: How much is parking at the Contoso Training Center?",
   "expected": "For content that is not in the documents, the agent answers \"I could not find that in the knowledge base.\" (the wording can differ slightly from run to run, for example the name of a document it checked may follow). Below the response you see a gpt-6.1-terra 4s 688t chip and the knowledge base tool call.",
   "image": "assets/ignite/screenshots/en/73-iq-answer-not-found.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Question",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "Response info chip",
     "x": 760,
     "y": 303,
     "width": 694,
     "height": 24
    },
    {
     "label": "Knowledge base tool",
     "x": 1040,
     "y": 307,
     "width": 130,
     "height": 16
    }
   ]
  },
  {
   "id": "74-iq-traces-list",
   "group": "foundry-iq-traces",
   "title": "Traces · runs for the knowledge base questions",
   "action": "Open the agent's Traces tab. After you send a question, it can take a few minutes for the trace to arrive, and Loading... appears at first. If you ran something earlier under the same name, those records appear too.",
   "expected": "The question you just sent appears at the top as a row with Trace ID, Status (Completed), Created at, Duration and Tokens.",
   "image": "assets/ignite/screenshots/ko/74-iq-traces-list.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Trace view",
     "x": 246,
     "y": 203,
     "width": 92,
     "height": 30
    },
    {
     "label": "Status",
     "x": 439,
     "y": 380,
     "width": 150,
     "height": 32
    },
    {
     "label": "Tokens",
     "x": 889,
     "y": 380,
     "width": 150,
     "height": 32
    }
   ]
  },
  {
   "id": "75-iq-trace-detail",
   "group": "foundry-iq-traces",
   "title": "Trace details · knowledge base tool call",
   "action": "Select the Trace ID of a successful trace to open the details. In Trajectories, check the steps under the agent call.",
   "expected": "Under Invoke Agent, the Execute Tool (a knowledge_base_retrieve call to the knowledge base) and Chat (gpt-6.1-terra) steps appear, and on the right you see the instructions, the question and the tool response.",
   "image": "assets/ignite/screenshots/en/75-iq-trace-detail.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Trajectories",
     "x": 137,
     "y": 93,
     "width": 89,
     "height": 32
    },
    {
     "label": "Knowledge base tool call",
     "x": 279,
     "y": 220,
     "width": 362,
     "height": 20
    },
    {
     "label": "Model call",
     "x": 238,
     "y": 252,
     "width": 153,
     "height": 20
    }
   ]
  },
  {
   "id": "76-web-toolbox-info",
   "group": "web-iq-toolbox",
   "title": "Web search in the toolbox · Grounding with Bing notice",
   "action": "When you create workshop-web-agent-en (the same method as Lab 4), workshop-web-agent-en-toolbox, which contains Web search, is attached automatically. Select the info (i) button next to the tool and read the notice.",
   "expected": "The notice \"Web search uses Grounding with Bing, which has additional costs and terms … Customer data will flow outside the Azure compliance boundary.\" appears.",
   "image": "assets/ignite/screenshots/en/76-web-toolbox-info.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Toolbox",
     "x": 244,
     "y": 601,
     "width": 427,
     "height": 44
    },
    {
     "label": "Web search tool info (i)",
     "x": 442,
     "y": 684,
     "width": 24,
     "height": 24
    },
    {
     "label": "Grounding with Bing notice",
     "x": 441,
     "y": 572,
     "width": 264,
     "height": 106
    }
   ]
  },
  {
   "id": "77-web-toolbox-answer",
   "group": "web-iq-toolbox",
   "title": "Same question through the toolbox path (Grounding with Bing)",
   "action": "Send the question with Version 1 (Web search in the toolbox). The question for this lab: Based on the latest official news, tell me what Microsoft IQ, announced at Microsoft Ignite 2026, is.",
   "expected": "The agent answers in English through the web search tool and cites sources. Below the response you see a gpt-6.1-terra 12s 1297t chip and the tool that was called.",
   "image": "assets/ignite/screenshots/en/77-web-toolbox-answer.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Question",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "Answer and sources",
     "x": 760,
     "y": 275,
     "width": 800,
     "height": 60
    },
    {
     "label": "Response info chip",
     "x": 760,
     "y": 375,
     "width": 746,
     "height": 24
    }
   ]
  },
  {
   "id": "78-web-agent-add-tool-menu",
   "group": "web-iq-direct",
   "title": "Tools → Add → Web search",
   "action": "After you remove the toolbox, select Add in the Tools area. Choosing Web search from the Most popular list adds it directly to the agent without a toolbox.",
   "expected": "The Add menu shows Web search, Code interpreter, Add tools, Create toolbox and Browse toolboxes.",
   "image": "assets/ignite/screenshots/en/78-web-agent-add-tool-menu.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Tools Add",
     "x": 244,
     "y": 673,
     "width": 67,
     "height": 32
    },
    {
     "label": "Web search",
     "x": 249,
     "y": 450,
     "width": 310,
     "height": 48
    },
    {
     "label": "Create toolbox",
     "x": 249,
     "y": 591,
     "width": 310,
     "height": 32
    }
   ]
  },
  {
   "id": "79-web-agent-direct-tool",
   "group": "web-iq-direct",
   "title": "Web search added directly · notice",
   "action": "Check that Web search was added directly under Tools, and read the notice with the info (i) button. Select Save to save as Version 2.",
   "expected": "Tools has Web search without a toolbox, and the notice \"When you connect to any non-Foundry tool, your Customer Data may be sent outside the Azure compliance boundary …\" and an enabled Save button appear.",
   "image": "assets/ignite/screenshots/en/79-web-agent-direct-tool.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Web search tool added directly",
     "x": 292,
     "y": 671,
     "width": 71,
     "height": 20
    },
    {
     "label": "Web search info (i)",
     "x": 371,
     "y": 669,
     "width": 24,
     "height": 24
    },
    {
     "label": "Non-Foundry tool notice",
     "x": 370,
     "y": 557,
     "width": 264,
     "height": 106
    },
    {
     "label": "Save",
     "x": 1208,
     "y": 68,
     "width": 56,
     "height": 32
    }
   ]
  },
  {
   "id": "80-web-direct-answer",
   "group": "web-iq-direct",
   "title": "Question with the Web search tool added directly",
   "action": "In Version 2 (Web search added directly), select New chat and send the same question. The question for this lab: Based on the latest official news, tell me what Microsoft IQ, announced at Microsoft Ignite 2026, is.",
   "expected": "The agent answers in English based on what it confirmed on the web, with source links. Below the response you see a gpt-6.1-terra 8s 15452t chip and the tool that was called.",
   "image": "assets/ignite/screenshots/en/80-web-direct-answer.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Question",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "Answer and sources",
     "x": 760,
     "y": 275,
     "width": 800,
     "height": 164
    },
    {
     "label": "Response info chip",
     "x": 760,
     "y": 479,
     "width": 541,
     "height": 24
    }
   ]
  },
  {
   "id": "81-hosted-agents-list",
   "group": "hosted-find",
   "title": "Hosted agent in the Agents list",
   "action": "Open Create → Agents on the left. In the workshop-hosted-agent row that the operator deployed in advance, check the Type column and select the name to open it.",
   "expected": "The Type column shows a Hosted badge, Status shows Running, and the Interaction type and Harness columns show \"--\". Unlike a Prompt Agent, this agent was created by uploading code as a ZIP, so you do not edit its instructions or tools on screen; you open it from the list to test and observe it.",
   "image": "assets/ignite/screenshots/ko/81-hosted-agents-list.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "workshop-hosted-agent",
     "x": 261,
     "y": 271,
     "width": 126,
     "height": 40
    },
    {
     "label": "Type: Hosted",
     "x": 734,
     "y": 281,
     "width": 51,
     "height": 20
    },
    {
     "label": "Status: Running",
     "x": 614,
     "y": 281,
     "width": 50,
     "height": 20
    }
   ]
  },
  {
   "id": "82-hosted-playground-setup",
   "group": "hosted-find",
   "title": "Hosted agent Playground (before a session starts)",
   "action": "When you open the agent, the Playground opens. Expand Agent info, Code asset and Protocols under Setup on the left, and check that the Log stream on the right says \"Session not started\".",
   "expected": "Kind in Agent info is hosted, Code asset shows code.zip, and Protocols shows responses · v2.0.0. Unlike the Playground of a Prompt Agent, there are no fields for choosing the model, Instructions or Tools (the uploaded code decides the model choice and instructions).",
   "image": "assets/ignite/screenshots/ko/82-hosted-playground-setup.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Kind: hosted",
     "x": 471,
     "y": 260,
     "width": 42,
     "height": 20
    },
    {
     "label": "Code asset: code.zip",
     "x": 274,
     "y": 439,
     "width": 51,
     "height": 20
    },
    {
     "label": "Protocols: responses",
     "x": 319,
     "y": 616,
     "width": 183,
     "height": 20
    },
    {
     "label": "Session not started",
     "x": 1292,
     "y": 513,
     "width": 137,
     "height": 22
    },
    {
     "label": "Message the agent",
     "x": 568,
     "y": 786,
     "width": 524,
     "height": 20
    }
   ]
  },
  {
   "id": "83-hosted-playground-chat",
   "group": "hosted-test",
   "title": "Message sent in the Playground",
   "action": "Enter \"Hello! In one sentence, what can you do?\" in Message the agent… and send it. When the response arrives, check the container logs streaming in the Log stream on the right and the Traces link under the response.",
   "expected": "The response comes back in one sentence. The first message took about 10 seconds because a new session (container) had to start, and follow-up messages in the same conversation took a few seconds. The Log stream shows a \"Session: …\" identifier and server logs such as Inbound POST /responses. Warnings such as \"experimental class\" are normal.",
   "image": "assets/ignite/screenshots/en/83-hosted-playground-chat.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Message you sent",
     "x": 580,
     "y": 217,
     "width": 500,
     "height": 38
    },
    {
     "label": "Agent response",
     "x": 580,
     "y": 265,
     "width": 500,
     "height": 80
    },
    {
     "label": "Traces link",
     "x": 583,
     "y": 321,
     "width": 76,
     "height": 24
    },
    {
     "label": "Log stream",
     "x": 1137,
     "y": 214,
     "width": 358,
     "height": 20
    }
   ]
  },
  {
   "id": "84-hosted-details",
   "group": "hosted-test",
   "title": "Details: status, version, agent ID and endpoint",
   "action": "On the Details tab, check Agent configuration (Status, Active version), Identity & access (Entra agent identity) and Endpoints (Responses protocol).",
   "expected": "Status is Running and Active version is Latest (Version 1). Each Hosted agent gets its own Entra agent identity, and the Responses protocol endpoint shows \"People with Azure RBAC permissions can access\" (only people with permission can call it).",
   "image": "assets/ignite/screenshots/ko/84-hosted-details.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Status: Running",
     "x": 549,
     "y": 274,
     "width": 51,
     "height": 20
    },
    {
     "label": "Active version",
     "x": 527,
     "y": 398,
     "width": 107,
     "height": 20
    },
    {
     "label": "Entra agent identity",
     "x": 927,
     "y": 286,
     "width": 179,
     "height": 20
    },
    {
     "label": "Responses protocol",
     "x": 523,
     "y": 510,
     "width": 124,
     "height": 20
    }
   ]
  },
  {
   "id": "85-hosted-traces-list",
   "group": "hosted-observe",
   "title": "Traces list (Trace view)",
   "action": "Open the Traces tab. The trace for the message you just sent usually appears within 1 minute (if you do not see it, refresh after a moment).",
   "expected": "One message creates 2 traces: a long trace with 0 tokens (the platform's invoke_agent, about 8 seconds when it includes starting the session) and a short trace with tokens (the model call, 1–2 seconds, 50–95 input and 6–29 output tokens). You can view them in Trace view, Conversation view and Session view.",
   "image": "assets/ignite/screenshots/ko/85-hosted-traces-list.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Session view and other tabs",
     "x": 484,
     "y": 211,
     "width": 108,
     "height": 30
    },
    {
     "label": "Tokens (In) and (Out) columns",
     "x": 889,
     "y": 458,
     "width": 150,
     "height": 32
    },
    {
     "label": "Most recent trace",
     "x": 245,
     "y": 491,
     "width": 1355,
     "height": 45
    }
   ]
  },
  {
   "id": "86-hosted-trace-detail",
   "group": "hosted-observe",
   "title": "Trace details: invoke_agent and chat spans",
   "action": "Select the Trace ID of the trace that has tokens to open it. In the span tree on the left, look at the chat span, and check Input + Output on the right.",
   "expected": "Under \"invoke_agent workshop-hosted-agent:1\" there is a \"chat gpt-6.1-terra-…\" span; Input shows the Instructions written in the code and the User input, and Output shows the agent's answer. Traces are read from Application Insights, so read permission is required (in this environment, Contributor on the participant's resource group).",
   "image": "assets/ignite/screenshots/en/86-hosted-trace-detail.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "invoke_agent span",
     "x": 141,
     "y": 48,
     "width": 348,
     "height": 28
    },
    {
     "label": "chat span (model call)",
     "x": 238,
     "y": 220,
     "width": 153,
     "height": 20
    },
    {
     "label": "Input(Instructions·User input)",
     "x": 1057,
     "y": 406,
     "width": 55,
     "height": 14
    },
    {
     "label": "Output(Agent)",
     "x": 1057,
     "y": 508,
     "width": 31,
     "height": 14
    }
   ]
  },
  {
   "id": "87-hosted-monitor",
   "group": "hosted-observe",
   "title": "Monitor overview",
   "action": "On the Overview of the Monitor tab, set the time range to 7D and check Operational metrics, Agent runs and Token usage.",
   "expected": "Total token usage, Agent runs (number of runs) and the gpt-6.1-terra token usage appear. Estimated cost was \"--\", and for cost in the billing currency only the notice banner appears because the account lacks Cost Management Reader.",
   "image": "assets/ignite/screenshots/ko/87-hosted-monitor.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Time range selector",
     "x": 1210,
     "y": 156,
     "width": 21,
     "height": 20
    },
    {
     "label": "Total token usage",
     "x": 265,
     "y": 380,
     "width": 104,
     "height": 20
    },
    {
     "label": "Agent runs",
     "x": 261,
     "y": 567,
     "width": 76,
     "height": 22
    }
   ]
  },
  {
   "id": "88-hosted-monitor-hosting",
   "group": "hosted-observe",
   "title": "Monitor: Hosting compute·Hosting memory",
   "action": "Scroll down the Monitor overview and check the Hosting compute and Hosting memory charts.",
   "expected": "These charts exist only for Hosted agents. This screen shows bars for vCPU hours 0.73 and GiB hours 1.47. Usage appears only after the session ends, so right after a session you may see \"No hosting compute data available\" (in our capture, the first point appeared about 15 minutes after the session ended).",
   "image": "assets/ignite/screenshots/ko/88-hosted-monitor-hosting.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Hosting compute",
     "x": 245,
     "y": 133,
     "width": 656,
     "height": 320
    },
    {
     "label": "Hosting memory",
     "x": 919,
     "y": 133,
     "width": 656,
     "height": 320
    },
    {
     "label": "vCPU hours",
     "x": 738,
     "y": 398,
     "width": 130,
     "height": 22
    },
    {
     "label": "GiB hours",
     "x": 1424,
     "y": 398,
     "width": 114,
     "height": 22
    }
   ]
  },
  {
   "id": "89-hosted-continue-in-code",
   "group": "hosted-observe",
   "title": "Continue in code: calling the agent from code",
   "action": "Select Continue in code at the top of the agent screen. When you choose a language in Language, sample code that calls this agent appears (azure-ai-projects for Python).",
   "expected": "A sample with the Project endpoint and agent_name (workshop-hosted-agent) filled in appears. You make the actual call from an environment where you signed in with the Azure CLI or similar (in this lab, you only look at it).",
   "image": "assets/ignite/screenshots/ko/89-hosted-continue-in-code.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Agent name·Project endpoint",
     "x": 679,
     "y": 156,
     "width": 400,
     "height": 20
    },
    {
     "label": "Sample code",
     "x": 255,
     "y": 230,
     "width": 1090,
     "height": 20
    }
   ]
  },
  {
   "id": "90-cost-monitor-cost",
   "group": "cost-read",
   "title": "Monitor → Cost (Preview) · cards and Cost by agent",
   "action": "Open Observe → Monitor on the left and select Cost in the tabs at the top. The time range is 7D. Read the 5 cards and look at the number of calls per agent in the Cost by agent table below.",
   "expected": "The notices \"up to 24h delay\" and \"Data is based on Azure Cost Management and may be up to 24h behind.\" appear. Latest billed cost was <$0.01 (No project-tagged billed usage this month yet), Month-end forecast was \"Not enough billing history to forecast yet\", Project budget was \"No project-level budget set\" (Create a cost control link), Total token usage was 692.6K, and Cost per successful run had no data. The Estimated token cost column in Cost by agent was \"—\" in every row, and an empty cost does not mean zero usage.",
   "image": "assets/ignite/screenshots/ko/90-cost-monitor-cost.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Delay notice",
     "x": 850,
     "y": 143,
     "width": 300,
     "height": 28
    },
    {
     "label": "5 cards",
     "x": 244,
     "y": 237,
     "width": 1332,
     "height": 150
    },
    {
     "label": "Create a cost control link",
     "x": 790,
     "y": 345,
     "width": 150,
     "height": 28
    },
    {
     "label": "Estimated cost · Token usage toggle",
     "x": 1332,
     "y": 420,
     "width": 228,
     "height": 34
    },
    {
     "label": "Cost by agent table",
     "x": 262,
     "y": 558,
     "width": 1297,
     "height": 215
    }
   ]
  },
  {
   "id": "91-cost-token-usage",
   "group": "cost-read",
   "title": "Cost by agent · Token usage view",
   "action": "Select the Token usage button at the top right of Cost by agent. Read the tokens per agent instead of cost.",
   "expected": "The columns Input · Output · Cached · Total tokens · Share · Invocations · Tokens per run appear. In this project, workshop-assistant was 98.8%, and the \"Non-agent requests\" row is calls that are not linked to an agent (Not linked). Total token usage on the card above and the total in the table were not the same because their aggregation scopes differ.",
   "image": "assets/ignite/screenshots/ko/91-cost-token-usage.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Token usage selector",
     "x": 1455,
     "y": 420,
     "width": 104,
     "height": 34
    },
    {
     "label": "Token columns",
     "x": 522,
     "y": 528,
     "width": 500,
     "height": 34
    },
    {
     "label": "Tokens per run",
     "x": 1299,
     "y": 528,
     "width": 120,
     "height": 34
    },
    {
     "label": "Non-agent requests row",
     "x": 262,
     "y": 648,
     "width": 1297,
     "height": 44
    }
   ]
  },
  {
   "id": "92-cost-control-empty",
   "group": "cost-control-create",
   "title": "Monitor → Cost Control (Preview) · no budget",
   "action": "Open the Cost Control tab of the same Monitor. If there is no budget, \"No cost controls yet\" appears. Select Create.",
   "expected": "The Application Insights connected to the project is shown at the top, and the Project · Agent · Deployment · Session chips of \"Filters in Applies to\" appear.",
   "image": "assets/ignite/screenshots/ko/92-cost-control-empty.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Cost Control tab",
     "x": 355,
     "y": 98,
     "width": 138,
     "height": 28
    },
    {
     "label": "Connected Application Insights",
     "x": 1272,
     "y": 146,
     "width": 306,
     "height": 24
    },
    {
     "label": "Create",
     "x": 1482,
     "y": 242,
     "width": 94,
     "height": 34
    },
    {
     "label": "No cost controls yet",
     "x": 745,
     "y": 488,
     "width": 330,
     "height": 64
    }
   ]
  },
  {
   "id": "93-cost-control-wizard",
   "group": "cost-control-create",
   "title": "Create cost control · name, scope and how it is shared",
   "action": "Enter workshop-cost-control in Cost control name. Scope is filled in automatically with this project; leave How should the budget be shared? set to One budget for everything.",
   "expected": "A note says the name is used in the address (URL) and cannot be changed after you create it. Scope shows \"se02-lab · Project · foundry-se02-lab\" and a note that a saved control stays inside this project. For What does it apply to?, the default is all usage in the project, and you can narrow it with Add filter.",
   "image": "assets/ignite/screenshots/ko/93-cost-control-wizard.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Cost control name",
     "x": 470,
     "y": 288,
     "width": 880,
     "height": 34
    },
    {
     "label": "Scope (filled in automatically)",
     "x": 470,
     "y": 358,
     "width": 880,
     "height": 86
    },
    {
     "label": "Add filter",
     "x": 470,
     "y": 568,
     "width": 108,
     "height": 34
    },
    {
     "label": "One budget for everything",
     "x": 470,
     "y": 643,
     "width": 436,
     "height": 106
    }
   ]
  },
  {
   "id": "94-cost-control-budget",
   "group": "cost-control-create",
   "title": "Set the budget · Tokens 10M · Monthly",
   "action": "In Set the budget, choose Tokens, set Token types to count to All token types and enter 10M in Token limit. Leave Resets as Monthly.",
   "expected": "The note \"Use K, M, B, or T; e.g. 10M = 10,000,000 tokens.\" appears. Under Resets, the reset time is shown in the browser's time zone (this screen is GMT+9, resetting at 0:00 UTC on the 1st of each month). The start and end dates were the defaults (three months from today). We did not choose Spending (dollars).",
   "image": "assets/ignite/screenshots/ko/94-cost-control-budget.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Spending · Tokens",
     "x": 470,
     "y": 246,
     "width": 162,
     "height": 30
    },
    {
     "label": "Token limit 10M",
     "x": 470,
     "y": 366,
     "width": 440,
     "height": 102
    },
    {
     "label": "Resets Monthly",
     "x": 912,
     "y": 366,
     "width": 428,
     "height": 102
    },
    {
     "label": "Start and end dates",
     "x": 470,
     "y": 484,
     "width": 880,
     "height": 102
    }
   ]
  },
  {
   "id": "95-cost-control-actions",
   "group": "cost-control-create",
   "title": "Threshold actions · options only",
   "action": "Select Add threshold in Threshold actions to open the Action list. Only check the Send alert and Block usage options; do not choose either. Press Escape to close the list, then delete this row with the trash button.",
   "expected": "Send alert is \"Send a notification through Azure Event Grid.\" and Block usage is \"Block new eligible requests when the budget is reached.\" The thresholds are 50 · 75 · 80 · 90 · 100%. If a row is incomplete, Create is disabled. We did not add any action in this lab.",
   "image": "assets/ignite/screenshots/ko/95-cost-control-actions.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Threshold actions",
     "x": 470,
     "y": 552,
     "width": 300,
     "height": 30
    },
    {
     "label": "Send alert · Block usage",
     "x": 482,
     "y": 716,
     "width": 264,
     "height": 130
    },
    {
     "label": "% of budget · When usage reaches",
     "x": 755,
     "y": 650,
     "width": 540,
     "height": 62
    }
   ]
  },
  {
   "id": "96-cost-control-usage-data",
   "group": "cost-control-create",
   "title": "Usage data · connected Application Insights and Create",
   "action": "With Threshold actions left empty, check that the project's Application Insights is selected under Usage data below, and select Create.",
   "expected": "As the message \"Usage is tracked in Application Insights without affecting requests.\" says, with no actions it only records usage. Usage data shows \"Connected to … (Application Insights)\" and a Change button. If there is no connection, choose one with Change or ask the operator.",
   "image": "assets/ignite/screenshots/ko/96-cost-control-usage-data.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Threshold actions left empty",
     "x": 470,
     "y": 552,
     "width": 880,
     "height": 120
    },
    {
     "label": "Usage data connection",
     "x": 470,
     "y": 722,
     "width": 880,
     "height": 100
    },
    {
     "label": "Create",
     "x": 1516,
     "y": 855,
     "width": 68,
     "height": 34
    }
   ]
  },
  {
   "id": "97-cost-control-created",
   "group": "cost-control-check",
   "title": "Cost Control list · the new budget",
   "action": "When you select Create, the new budget appears in the list. Read the Applies to · Budget · Closest to limit · State columns.",
   "expected": "Applies to was se02-lab (Entire project), Budget was \"10,000,000 tokens / month · Per project\", Closest to limit (estimated) was \"~0% · 0 of 10,000,000 tokens\" and State was \"On track · Estimated\". There is no usage yet, so it is 0%.",
   "image": "assets/ignite/screenshots/ko/97-cost-control-created.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "New budget row",
     "x": 244,
     "y": 357,
     "width": 1331,
     "height": 50
    },
    {
     "label": "Budget",
     "x": 650,
     "y": 355,
     "width": 230,
     "height": 46
    },
    {
     "label": "Closest to limit",
     "x": 1206,
     "y": 355,
     "width": 180,
     "height": 46
    },
    {
     "label": "State",
     "x": 1394,
     "y": 355,
     "width": 150,
     "height": 46
    }
   ]
  },
  {
   "id": "98-cost-control-detail",
   "group": "cost-control-check",
   "title": "Budget details · Edit and Delete",
   "action": "Select the row to open the details panel on the right. Read Scope · Details · Usage this month. To clean up, select Delete and confirm.",
   "expected": "Token limit 10,000,000 tokens · Token measurement Overall tokens · Budget period Monthly · Resets at · Budget per Project appear, and Usage this month was \"No usage yet this month\". A change takes about 15 minutes to take effect.",
   "image": "assets/ignite/screenshots/ko/98-cost-control-detail.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Edit · Delete",
     "x": 1072,
     "y": 184,
     "width": 132,
     "height": 34
    },
    {
     "label": "Scope · Details",
     "x": 1072,
     "y": 230,
     "width": 520,
     "height": 360
    },
    {
     "label": "Usage this month",
     "x": 1072,
     "y": 590,
     "width": 300,
     "height": 90
    }
   ]
  }
 ]
};
