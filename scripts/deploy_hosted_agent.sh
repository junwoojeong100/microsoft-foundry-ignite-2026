#!/usr/bin/env bash
# Operator runbook for the optional "Hosted agent" lab: deploys the sample agent to ONE participant project by REST.
# Source ZIP upload only: no ACR, no azd provision, no new infrastructure.
#
#   SUB=<subscription-id> ACCOUNT=<Foundry resource> PROJECT=<project> ./deploy_hosted_agent.sh deploy
#   SUB=... ACCOUNT=... PROJECT=... ./deploy_hosted_agent.sh status
#   SUB=... ACCOUNT=... PROJECT=... ./deploy_hosted_agent.sh invoke "Hello!"
#   SUB=... ACCOUNT=... PROJECT=... ./deploy_hosted_agent.sh delete     # deletes this agent only (with its versions and sessions)
#
# Optional: AGENT (default workshop-hosted-agent), MODEL (the deployment name, default gpt-6.1-terra).
# The caller needs a data-plane role on the project (Foundry User or Foundry Project Manager).
# Subscription Owner/Contributor alone gets HTTP 403 on the Agents API; a new role takes about 4 minutes to apply.
# Deploy one agent per participant project. Never share one agent: a participant's Foundry User role can edit and delete it.
# Requires: az (logged in), curl, zip, python3, shasum. The model deployment must already exist in the project.
set -euo pipefail
cd "$(dirname "$0")"

: "${SUB:?set SUB to the subscription id that holds the Foundry project}"
: "${ACCOUNT:?set ACCOUNT to the Foundry resource name}"
: "${PROJECT:?set PROJECT to the Foundry project name}"
AGENT="${AGENT:-workshop-hosted-agent}"
MODEL="${MODEL:-gpt-6.1-terra}"
API="v1"
EP="https://${ACCOUNT}.services.ai.azure.com/api/projects/${PROJECT}"
SRC="../assets/hosted-agent-sample"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

token() { az account get-access-token --subscription "$SUB" --resource https://ai.azure.com --query accessToken -o tsv; }

cmd_deploy() {
  local zip="$WORK/$AGENT.zip" sha code
  # Flat ZIP: no wrapper folder. metadata.json stays outside the ZIP.
  (cd "$SRC" && zip -q -X "$zip" main.py requirements.txt)
  sha=$(shasum -a 256 "$zip" | cut -d' ' -f1)
  # The sample metadata names gpt-6.1-terra; swap in MODEL when a different deployment name is needed.
  sed "s/\"gpt-6.1-terra\"/\"$MODEL\"/" "$SRC/metadata.json" > "$WORK/metadata.json"
  code=$(curl -s -o "$WORK/create.json" -w '%{http_code}' -X POST "$EP/agents?api-version=$API" \
    -H "Authorization: Bearer $(token)" -H "Accept: application/json" \
    -H "x-ms-agent-name: $AGENT" -H "x-ms-code-zip-sha256: $sha" \
    -F "metadata=@$WORK/metadata.json;type=application/json" \
    -F "code=@$zip;type=application/zip;filename=$AGENT.zip")
  echo "create -> HTTP $code"
  [ "$code" = "200" ] || { cat "$WORK/create.json"; exit 1; }
  # creating -> active takes about 35 to 75 seconds.
  while true; do
    local status
    status=$(curl -s -H "Authorization: Bearer $(token)" "$EP/agents/$AGENT/versions/1?api-version=$API" \
      | python3 -c "import json, sys; print(json.load(sys.stdin).get('status'))")
    echo "status=$status"
    [ "$status" = "active" ] && break
    [ "$status" = "failed" ] && { echo "deployment failed"; exit 1; }
    sleep 8
  done
}

cmd_invoke() {
  curl -s -X POST "$EP/agents/$AGENT/endpoint/protocols/openai/responses?api-version=$API" \
    -H "Authorization: Bearer $(token)" -H "Content-Type: application/json" \
    -d "{\"model\":\"$MODEL\",\"input\":\"${1:-Hello! In one sentence, what can you do?}\",\"stream\":false}" \
    | python3 -c "
import json, sys
d = json.load(sys.stdin)
text = ''.join(c.get('text', '') for o in d.get('output', []) for c in o.get('content', []) if o.get('type') == 'message')
print('status:', d.get('status'), '| answer:', text or d.get('error'))
"
}

cmd_status() {
  curl -s -H "Authorization: Bearer $(token)" "$EP/agents/$AGENT?api-version=$API" | python3 -c "
import json, sys
a = json.load(sys.stdin)
if 'error' in a:
    print(a['error'].get('code'), '-', a['error'].get('message')); sys.exit(1)
v = a['versions']['latest']
print('agent:', a['name'], '| state:', a.get('state'), '| latest version:', v['version'], v['status'])
"
}

cmd_delete() {
  curl -s -o /dev/null -w "DELETE -> HTTP %{http_code}\n" -X DELETE "$EP/agents/$AGENT?api-version=$API&force=true" \
    -H "Authorization: Bearer $(token)"
}

case "${1:-}" in
  deploy) cmd_deploy ;;
  invoke) shift; cmd_invoke "${1:-}" ;;
  status) cmd_status ;;
  delete) cmd_delete ;;
  *) echo "usage: SUB=<id> ACCOUNT=<name> PROJECT=<name> $0 deploy|status|invoke [text]|delete"; exit 2 ;;
esac
