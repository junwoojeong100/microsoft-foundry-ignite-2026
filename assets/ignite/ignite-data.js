window.IGNITE_DATA = {
  "schemaVersion": 1,
  "capturedDate": "2026-11-17",
  "locale": "ko",
  "portal": "New Foundry (ai.azure.com), 2026-11-17 기준 화면",
  "shots": [
    {
      "id": "01-new-foundry-welcome",
      "group": "start",
      "title": "New Foundry 켜기 · 환영 안내 1/3",
      "action": "포털 오른쪽 위의 New Foundry 토글이 켜져 있는지 확인합니다. 켜면 나오는 환영 안내에서 Next를 누릅니다.",
      "expected": "Models와 Agents가 Build 탭 아래에 모여 있다는 안내가 보입니다.",
      "image": "assets/ignite/screenshots/ko/01-new-foundry-welcome.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "New Foundry 토글",
          "x": 1163,
          "y": 12,
          "width": 138,
          "height": 26
        },
        {
          "label": "환영 안내",
          "x": 437,
          "y": 210,
          "width": 363,
          "height": 37
        },
        {
          "label": "Next",
          "x": 1098,
          "y": 649,
          "width": 63,
          "height": 42
        }
      ]
    },
    {
      "id": "02-new-foundry-endpoints",
      "group": "start",
      "title": "프로젝트 엔드포인트는 홈에서 확인 · 2/3",
      "action": "내용을 읽고 Next를 눌러 마지막 안내로 이동합니다.",
      "expected": "프로젝트 엔드포인트가 Foundry 홈에 표시된다는 안내와 Project endpoint·Azure OpenAI endpoint 값 칸이 보입니다. 값은 프로젝트마다 다릅니다.",
      "image": "assets/ignite/screenshots/ko/02-new-foundry-endpoints.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "안내 문구",
          "x": 807,
          "y": 249,
          "width": 328,
          "height": 33
        },
        {
          "label": "Project endpoint",
          "x": 807,
          "y": 393,
          "width": 107,
          "height": 26
        },
        {
          "label": "Next",
          "x": 1098,
          "y": 651,
          "width": 63,
          "height": 42
        }
      ]
    },
    {
      "id": "03-new-foundry-ask-ai",
      "group": "start",
      "title": "검색·Ask AI 안내 · 3/3",
      "action": "마지막 안내입니다. Back으로 앞 안내를 다시 보거나 Create agent로 에이전트 만들기를 바로 시작할 수 있습니다.",
      "expected": "검색(⌘K)과 Ask AI로 프로젝트 안의 항목을 찾을 수 있다는 안내가 보입니다.",
      "image": "assets/ignite/screenshots/ko/03-new-foundry-ask-ai.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "검색·Ask AI 안내",
          "x": 621,
          "y": 524,
          "width": 363,
          "height": 34
        },
        {
          "label": "Back",
          "x": 984,
          "y": 651,
          "width": 63,
          "height": 42
        },
        {
          "label": "Create agent",
          "x": 1049,
          "y": 651,
          "width": 112,
          "height": 42
        }
      ]
    },
    {
      "id": "04-home",
      "group": "start",
      "title": "Foundry 홈",
      "action": "안내를 마치면 보이는 홈에서 Build an agent·Use a model 카드와 엔드포인트 영역을 확인합니다.",
      "expected": "Project endpoint와 Azure OpenAI endpoint가 홈에 표시됩니다. 이 프로젝트에는 'API key authentication is disabled for this project.' 안내가 보였으며 프로젝트 설정에 따라 다를 수 있습니다.",
      "image": "assets/ignite/screenshots/ko/04-home.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Build an agent",
          "x": 302,
          "y": 197,
          "width": 168,
          "height": 36
        },
        {
          "label": "Project endpoint",
          "x": 702,
          "y": 381,
          "width": 140,
          "height": 38
        },
        {
          "label": "API 키 인증 안내",
          "x": 312,
          "y": 412,
          "width": 316,
          "height": 37
        },
        {
          "label": "View deployments",
          "x": 934,
          "y": 311,
          "width": 139,
          "height": 34
        }
      ]
    },
    {
      "id": "05-guardrails-list",
      "group": "guardrails",
      "title": "Build → Guardrails 목록",
      "action": "왼쪽 Create 아래 Guardrails를 엽니다. Guardrails·Blocklists·Integrations(Preview) 탭을 확인합니다.",
      "expected": "Microsoft.Default, Microsoft.DefaultV2, Microsoft.MAIDefault 정책이 보이고 DefaultV2의 Applied to 열에 적용된 모델 배포가 표시됩니다.",
      "image": "assets/ignite/screenshots/ko/05-guardrails-list.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Guardrails 메뉴",
          "x": 8,
          "y": 394,
          "width": 202,
          "height": 32
        },
        {
          "label": "상단 탭",
          "x": 242,
          "y": 100,
          "width": 360,
          "height": 30
        },
        {
          "label": "Microsoft.DefaultV2",
          "x": 251,
          "y": 312,
          "width": 212,
          "height": 30
        },
        {
          "label": "Applied to",
          "x": 928,
          "y": 230,
          "width": 79,
          "height": 29
        }
      ]
    },
    {
      "id": "06-models-policy-column",
      "group": "guardrails",
      "title": "Models → Deployments의 Policy 열",
      "action": "왼쪽 Models → Deployments 목록에서 Deployment status 옆의 Policy 열을 확인합니다.",
      "expected": "이 프로젝트의 배포는 모두 Policy 열에 'No policies added'로 표시됐습니다. 이 열이 Guardrails의 Applied to와 같은 개념인지는 확인하지 못했으므로 가드레일 적용은 Guardrails 화면에서 확인합니다.",
      "image": "assets/ignite/screenshots/ko/06-models-policy-column.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Policy 열",
          "x": 1052,
          "y": 254,
          "width": 56,
          "height": 33
        },
        {
          "label": "gpt-6.1-terra 배포",
          "x": 253,
          "y": 294,
          "width": 94,
          "height": 31
        },
        {
          "label": "Deployments 탭",
          "x": 237,
          "y": 100,
          "width": 120,
          "height": 28
        }
      ]
    },
    {
      "id": "07-deploy-terra-custom",
      "group": "guardrails",
      "title": "gpt-6.1-terra 배포 · Custom settings",
      "action": "Catalog에서 gpt-6.1-terra를 열어 Deploy → Custom settings를 고르고 Deployment name, Deployment type(Global Standard), Tokens per Minute Rate Limit, Guardrails(DefaultV2)를 확인한 뒤 Deploy를 누릅니다. TPM은 배정값을 입력합니다(이 캡처는 100000).",
      "expected": "배포가 끝나면 Deployments 목록에 Succeeded 상태로 나타납니다. Guardrails 필드는 기존 가이드의 배포 화면에도 있던 항목입니다.",
      "image": "assets/ignite/screenshots/ko/07-deploy-terra-custom.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Deployment name",
          "x": 1025,
          "y": 60,
          "width": 160,
          "height": 31
        },
        {
          "label": "Deployment type",
          "x": 1026,
          "y": 142,
          "width": 141,
          "height": 28
        },
        {
          "label": "TPM 한도",
          "x": 1026,
          "y": 349,
          "width": 377,
          "height": 28
        },
        {
          "label": "Guardrails",
          "x": 1026,
          "y": 465,
          "width": 119,
          "height": 26
        },
        {
          "label": "Deploy",
          "x": 1029,
          "y": 839,
          "width": 78,
          "height": 46
        }
      ]
    },
    {
      "id": "08-agents-list-harness-column",
      "group": "harness-create",
      "title": "Build → Agents 목록의 Harness 열",
      "action": "Create 아래 Agents를 엽니다. 목록의 Interaction type 옆 Harness 열과 위쪽의 Agents·Routines·Workflows 탭을 확인합니다.",
      "expected": "하네스로 만든 에이전트(workshop-harness-agent)의 Harness 열에 Microsoft Copilot(Preview)이 표시됩니다.",
      "image": "assets/ignite/screenshots/ko/08-agents-list-harness-column.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Harness 열",
          "x": 1009,
          "y": 240,
          "width": 67,
          "height": 26
        },
        {
          "label": "Microsoft Copilot",
          "x": 1009,
          "y": 277,
          "width": 182,
          "height": 28
        },
        {
          "label": "New agent",
          "x": 1472,
          "y": 191,
          "width": 128,
          "height": 28
        }
      ]
    },
    {
      "id": "09-agents-new-menu",
      "group": "harness-create",
      "title": "New agent 메뉴",
      "action": "New agent를 열어 만드는 방식을 확인하고 이 실습에서는 Build an agent를 선택합니다.",
      "expected": "Build an agent, Code an agent, With agent template, Link external agent 네 가지가 보입니다.",
      "image": "assets/ignite/screenshots/ko/09-agents-new-menu.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "New agent",
          "x": 1472,
          "y": 191,
          "width": 128,
          "height": 28
        },
        {
          "label": "Build an agent",
          "x": 1433,
          "y": 228,
          "width": 145,
          "height": 28
        },
        {
          "label": "Link external agent",
          "x": 1407,
          "y": 342,
          "width": 173,
          "height": 28
        }
      ]
    },
    {
      "id": "10-harness-create-dialog",
      "group": "harness-create",
      "title": "Create an agent · 하네스 선택",
      "action": "Agent name에 workshop-harness-agent를 입력하고 Interaction mode는 Text로 둡니다. Use the Microsoft Copilot harness를 체크한 뒤 Create agent and open playground를 누릅니다.",
      "expected": "Interaction mode는 만든 뒤 바꿀 수 없다는 안내와 하네스 체크박스(Preview)가 보입니다. 공식 문서는 초기 프리뷰 동안 기존 에이전트를 하네스로 바꿀 수 없다고 안내합니다.",
      "image": "assets/ignite/screenshots/ko/10-harness-create-dialog.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Agent name",
          "x": 530,
          "y": 283,
          "width": 143,
          "height": 31
        },
        {
          "label": "Interaction mode",
          "x": 530,
          "y": 360,
          "width": 173,
          "height": 30
        },
        {
          "label": "하네스 체크박스",
          "x": 558,
          "y": 456,
          "width": 283,
          "height": 26
        },
        {
          "label": "Create agent and open playground",
          "x": 744,
          "y": 618,
          "width": 238,
          "height": 38
        }
      ]
    },
    {
      "id": "11-harness-tools-default",
      "group": "harness-tools",
      "title": "Harness tools · 기본값",
      "action": "만든 에이전트의 Playground에서 왼쪽 Tools 영역의 Harness tools를 누릅니다.",
      "expected": "File system read, File system write, Web, Shell, Subagents가 모두 켜져 있고 'Turn off anything this agent shouldn't use.' 안내가 보입니다. 이 캡처는 Version 1·model-router 기준입니다.",
      "image": "assets/ignite/screenshots/ko/11-harness-tools-default.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Tools 영역의 Harness tools(눌러서 열기)",
          "x": 279,
          "y": 607,
          "width": 162,
          "height": 26
        },
        {
          "label": "File system write",
          "x": 472,
          "y": 367,
          "width": 159,
          "height": 28
        },
        {
          "label": "Shell",
          "x": 472,
          "y": 502,
          "width": 91,
          "height": 28
        },
        {
          "label": "Done",
          "x": 1014,
          "y": 644,
          "width": 68,
          "height": 42
        }
      ]
    },
    {
      "id": "12-harness-tools-restricted",
      "group": "harness-tools",
      "title": "필요 없는 도구 끄기",
      "action": "이 실습의 지시문은 읽기와 웹 조회만 허용합니다. File system write와 Shell을 끄고 Done을 누른 뒤 Save합니다.",
      "expected": "File system read, Web, Subagents만 켜져 있습니다. 공식 문서는 Shell이 켜져 있으면 다른 도구를 꺼도 엄격한 보안 경계가 아니라고 안내해 Shell도 함께 껐습니다.",
      "image": "assets/ignite/screenshots/ko/12-harness-tools-restricted.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "File system write 해제",
          "x": 472,
          "y": 367,
          "width": 159,
          "height": 28
        },
        {
          "label": "Shell 해제",
          "x": 472,
          "y": 502,
          "width": 91,
          "height": 28
        },
        {
          "label": "Done",
          "x": 1014,
          "y": 644,
          "width": 68,
          "height": 42
        }
      ]
    },
    {
      "id": "13-harness-unsupported-model",
      "group": "harness-tools",
      "title": "모델 바꿀 때의 Unsupported tools 경고",
      "action": "model-router 실행이 'Model deployment rate limit exceeded'로 반복 실패해 다른 모델로 바꿨습니다. 모델을 바꾸면 이 경고가 나오며 Confirm하면 지원되지 않는 도구가 에이전트에서 제거됩니다.",
      "expected": "'The model you selected doesn't work with Built-in tool tool…' 대화상자가 보입니다. Cancel하면 모델을 바꾸지 않습니다.",
      "image": "assets/ignite/screenshots/ko/13-harness-unsupported-model.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Unsupported tools",
          "x": 533,
          "y": 367,
          "width": 241,
          "height": 33
        },
        {
          "label": "Confirm",
          "x": 902,
          "y": 495,
          "width": 82,
          "height": 42
        },
        {
          "label": "Cancel",
          "x": 986,
          "y": 493,
          "width": 86,
          "height": 51
        }
      ]
    },
    {
      "id": "14-harness-tools-reset",
      "group": "harness-tools",
      "title": "모델 변경 뒤 Harness tools가 다시 모두 켜짐",
      "action": "gpt-6.1-terra로 바꾸고 Confirm한 뒤 Harness tools를 다시 열어 확인합니다(Version 3).",
      "expected": "앞서 끈 File system write와 Shell이 다시 켜져 있었습니다. 모델을 바꿀 때마다 Harness tools를 다시 열어 확인하고 필요하면 다시 끄세요.",
      "image": "assets/ignite/screenshots/ko/14-harness-tools-reset.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "모델 gpt-6.1-terra",
          "x": 249,
          "y": 151,
          "width": 244,
          "height": 28
        },
        {
          "label": "File system write",
          "x": 472,
          "y": 365,
          "width": 159,
          "height": 30
        },
        {
          "label": "Shell",
          "x": 472,
          "y": 502,
          "width": 91,
          "height": 28
        }
      ]
    },
    {
      "id": "15-harness-yaml",
      "group": "harness-tools",
      "title": "YAML 탭으로 저장된 설정 확인",
      "action": "앞 화면에서 도구를 다시 끄고 Save and start new chat으로 저장(Version 4)한 뒤, Playground 위쪽의 YAML 탭을 눌러 저장된 정의를 확인합니다.",
      "expected": "kind: prompt, harness.type: microsoft_copilot_preview, model: gpt-6.1-terra가 보이고 tools의 microsoft_copilot_toolset_preview 아래 filesystem_write와 shell이 enabled: false로 기록됩니다. 직접 입력하지 않은 reasoning.effort: low도 함께 저장돼 있었습니다.",
      "image": "assets/ignite/screenshots/ko/15-harness-yaml.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "YAML 탭",
          "x": 794,
          "y": 144,
          "width": 68,
          "height": 44
        },
        {
          "label": "harness.type",
          "x": 802,
          "y": 514,
          "width": 336,
          "height": 33
        },
        {
          "label": "model",
          "x": 249,
          "y": 151,
          "width": 174,
          "height": 30
        },
        {
          "label": "도구 설정(enabled: false)",
          "x": 836,
          "y": 784,
          "width": 260,
          "height": 92
        }
      ]
    },
    {
      "id": "16-harness-run-terra",
      "group": "harness-run",
      "title": "gpt-6.1-terra로 실행",
      "action": "채팅창에 질문을 입력해 실행합니다. 이 실습의 질문: https://learn.microsoft.com/azure/foundry/ 문서를 웹에서 읽고, Microsoft Foundry가 무엇인지 핵심 3가지로 요약해줘.",
      "expected": "한국어 답변과 출처 링크가 나오고, 응답 아래에 모델(gpt-6.1-terra)·시간(8s)·토큰(41653t)·도구(web_fetch) 칩과 Traces 링크가 보입니다. 질문 한 번에 약 4.1만 토큰이 표시됐습니다.",
      "image": "assets/ignite/screenshots/ko/16-harness-run-terra.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "모델 선택기",
          "x": 249,
          "y": 151,
          "width": 245,
          "height": 32
        },
        {
          "label": "Harness 버튼",
          "x": 1351,
          "y": 153,
          "width": 108,
          "height": 28
        },
        {
          "label": "실행 정보 칩(모델·시간·토큰·도구)",
          "x": 752,
          "y": 392,
          "width": 610,
          "height": 34
        }
      ]
    },
    {
      "id": "17-agent-details",
      "group": "harness-run",
      "title": "Details 탭 · 엔드포인트와 채널",
      "action": "Details 탭에서 Agent configuration, Identity & access, Endpoints, Channels, Routines를 확인합니다. 이 실습에서는 Publish·Set up을 누르지 않았습니다.",
      "expected": "Responses protocol 엔드포인트, A2A protocol(Set up), Teams & Microsoft 365 Copilot·Preview web app 채널(Publish), Routines(Set up routine), Entra agent identity와 blueprint가 보입니다.",
      "image": "assets/ignite/screenshots/ko/17-agent-details.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Endpoints",
          "x": 515,
          "y": 458,
          "width": 134,
          "height": 37
        },
        {
          "label": "A2A protocol",
          "x": 919,
          "y": 507,
          "width": 138,
          "height": 31
        },
        {
          "label": "Channels",
          "x": 516,
          "y": 665,
          "width": 129,
          "height": 33
        },
        {
          "label": "Entra agent identity",
          "x": 919,
          "y": 284,
          "width": 175,
          "height": 28
        }
      ]
    },
    {
      "id": "18-agent-guardrail-section",
      "group": "harness-run",
      "title": "에이전트 Guardrail (Preview) 섹션",
      "action": "에이전트 Playground 왼쪽 아래로 스크롤하면 Guardrail(Preview) 섹션이 있습니다. 이름과 보호 범위를 읽습니다.",
      "expected": "Name: Microsoft.DefaultV2, Risks with controls(Jailbreak 1·Content safety 4·Protected materials 2)와 Risks without controls(Indirect prompt injections·Sensitive data leakage·Task drift)가 보입니다. 'This agent has not been assigned a guardrail. It is inheriting its model's guardrail.' — 에이전트에 따로 지정하지 않으면 모델 배포의 가드레일을 상속합니다.",
      "image": "assets/ignite/screenshots/ko/18-agent-guardrail-section.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Guardrail 섹션",
          "x": 235,
          "y": 551,
          "width": 163,
          "height": 26
        },
        {
          "label": "적용 중인 가드레일",
          "x": 235,
          "y": 633,
          "width": 193,
          "height": 26
        },
        {
          "label": "보호 범위",
          "x": 235,
          "y": 656,
          "width": 449,
          "height": 30
        },
        {
          "label": "상속 안내",
          "x": 277,
          "y": 723,
          "width": 419,
          "height": 31
        },
        {
          "label": "Manage guardrail",
          "x": 246,
          "y": 797,
          "width": 156,
          "height": 34
        }
      ]
    },
    {
      "id": "19-agent-guardrail-menu",
      "group": "harness-run",
      "title": "Manage guardrail 메뉴",
      "action": "Manage guardrail을 눌러 메뉴를 확인합니다. 이 실습에서는 어느 항목도 실행하지 않았습니다.",
      "expected": "Reassign guardrail, Create guardrail, Edit guardrail(이 에이전트는 상속 중이라 비활성), Guided guardrail setup이 보입니다.",
      "image": "assets/ignite/screenshots/ko/19-agent-guardrail-menu.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Reassign guardrail",
          "x": 249,
          "y": 649,
          "width": 159,
          "height": 32
        },
        {
          "label": "Create guardrail",
          "x": 249,
          "y": 684,
          "width": 146,
          "height": 30
        },
        {
          "label": "Edit guardrail",
          "x": 249,
          "y": 719,
          "width": 128,
          "height": 30
        },
        {
          "label": "Guided guardrail setup",
          "x": 248,
          "y": 762,
          "width": 187,
          "height": 34
        }
      ]
    },
    {
      "id": "20-agents-routines",
      "group": "harness-run",
      "title": "Routines 탭",
      "action": "Agents 목록 위의 Routines 탭을 엽니다. 이 실습에서는 루틴을 만들지 않았습니다.",
      "expected": "'Run your agents automatically' — 루틴이 일정이나 이벤트로 에이전트를 실행한다는 빈 화면과 Create routine 버튼이 보입니다.",
      "image": "assets/ignite/screenshots/ko/20-agents-routines.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Routines 탭",
          "x": 291,
          "y": 130,
          "width": 84,
          "height": 28
        },
        {
          "label": "Run your agents automatically",
          "x": 770,
          "y": 456,
          "width": 321,
          "height": 35
        },
        {
          "label": "Create routine",
          "x": 1437,
          "y": 186,
          "width": 117,
          "height": 38
        }
      ]
    },
    {
      "id": "21-agents-workflows",
      "group": "harness-run",
      "title": "Workflows 탭 · 종료 예정 안내",
      "action": "Workflows(Preview) 탭의 안내 배너를 읽습니다. 새 워크플로는 만들지 않았습니다.",
      "expected": "'Microsoft Foundry is retiring workflows on December 1, 2026. Build new workflows with Microsoft Agent Framework…' 배너가 보입니다.",
      "image": "assets/ignite/screenshots/ko/21-agents-workflows.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Workflows 탭",
          "x": 356,
          "y": 130,
          "width": 137,
          "height": 28
        },
        {
          "label": "종료 예정 배너",
          "x": 253,
          "y": 181,
          "width": 1347,
          "height": 31
        }
      ]
    },
    {
      "id": "22-agent-traces",
      "group": "observe",
      "title": "Traces 목록",
      "action": "에이전트의 Traces 탭(또는 왼쪽 Observe → Traces)을 엽니다. 기간(Last Day)과 Trace view·Conversation view, 필터를 확인합니다.",
      "expected": "실행마다 Trace ID, Status, 생성 시각, Duration이 보입니다. 이 캡처에서는 하네스 실행의 Tokens(In/Out)이 0, Estimated cost가 $0.00으로 표시되어 Playground의 토큰 칩과 달랐습니다.",
      "image": "assets/ignite/screenshots/ko/22-agent-traces.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Trace view",
          "x": 250,
          "y": 146,
          "width": 185,
          "height": 33
        },
        {
          "label": "기간",
          "x": 1150,
          "y": 145,
          "width": 430,
          "height": 34
        },
        {
          "label": "Trace ID 열",
          "x": 284,
          "y": 328,
          "width": 90,
          "height": 24
        },
        {
          "label": "Tokens·비용 열",
          "x": 888,
          "y": 328,
          "width": 432,
          "height": 24
        }
      ]
    },
    {
      "id": "23-agent-monitor",
      "group": "observe",
      "title": "에이전트 Monitor · Overview",
      "action": "에이전트의 Monitor 탭에서 Overview·Cost(Preview)·Tools 탭과 기간(7D)을 확인합니다.",
      "expected": "Operational metrics, Evaluations, Scheduled evaluations, Scheduled red teaming run issues(Preview) 카드와 Agent runs 차트가 보입니다. 이 캡처에서는 실행이 있는데도 Total token usage가 0, Estimated cost가 '--'였습니다.",
      "image": "assets/ignite/screenshots/ko/23-agent-monitor.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Monitor 탭",
          "x": 253,
          "y": 149,
          "width": 135,
          "height": 28
        },
        {
          "label": "Cost (Preview) 탭",
          "x": 340,
          "y": 149,
          "width": 168,
          "height": 28
        },
        {
          "label": "Operational metrics",
          "x": 258,
          "y": 244,
          "width": 198,
          "height": 30
        },
        {
          "label": "Total token usage",
          "x": 256,
          "y": 311,
          "width": 264,
          "height": 31
        }
      ]
    },
    {
      "id": "24-agent-monitor-cost",
      "group": "observe",
      "title": "Monitor → Cost (Preview)",
      "action": "Monitor 아래 Cost(Preview) 탭을 엽니다.",
      "expected": "'All costs on this page are estimated' 안내와 Model token usage·Average Agent Cost/run 카드가 보입니다. 이 캡처에서는 'Not available'과 'No agent cost data is available for the selected date range.'가 표시됐습니다.",
      "image": "assets/ignite/screenshots/ko/24-agent-monitor-cost.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Cost 탭",
          "x": 330,
          "y": 149,
          "width": 177,
          "height": 28
        },
        {
          "label": "추정치 안내",
          "x": 237,
          "y": 177,
          "width": 525,
          "height": 35
        },
        {
          "label": "비용 카드(Not available)",
          "x": 244,
          "y": 558,
          "width": 1332,
          "height": 80
        }
      ]
    },
    {
      "id": "25-agent-insights",
      "group": "insights",
      "title": "Insights 탭 · 스캔 설정",
      "action": "에이전트의 Insights 탭을 엽니다. 왼쪽의 'Preview example'은 예시 데이터입니다. Judge model은 GPT-5 이상 모델만 선택할 수 있습니다.",
      "expected": "Configuration에 Judge model(이 캡처: contoso-chat)과 'Estimated cost for your first scan(최근 7일 트레이스 3개)'이 보입니다. 가격 정보가 없는 모델은 'Pricing unavailable for the selected model.'로 표시됩니다.",
      "image": "assets/ignite/screenshots/ko/25-agent-insights.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Preview example",
          "x": 912,
          "y": 409,
          "width": 127,
          "height": 26
        },
        {
          "label": "Judge model",
          "x": 479,
          "y": 453,
          "width": 129,
          "height": 33
        },
        {
          "label": "첫 스캔 비용",
          "x": 488,
          "y": 551,
          "width": 283,
          "height": 30
        },
        {
          "label": "가격 안내",
          "x": 488,
          "y": 593,
          "width": 300,
          "height": 30
        }
      ]
    },
    {
      "id": "26-insights-scanning",
      "group": "insights",
      "title": "Run now · 스캔 진행 중",
      "action": "스캔 실행 버튼을 누르면 'Run in progress'와 Collecting traces → Analyzing traces → Generating insights 단계가 표시됩니다.",
      "expected": "'This typically takes 2–5 minutes. Results will appear automatically.' 안내가 보입니다. 필요하면 Cancel로 중단할 수 있습니다.",
      "image": "assets/ignite/screenshots/ko/26-insights-scanning.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Run in progress",
          "x": 234,
          "y": 203,
          "width": 141,
          "height": 32
        },
        {
          "label": "Cancel",
          "x": 637,
          "y": 202,
          "width": 62,
          "height": 34
        },
        {
          "label": "Finding insights",
          "x": 1062,
          "y": 481,
          "width": 208,
          "height": 40
        },
        {
          "label": "소요 시간 안내",
          "x": 942,
          "y": 660,
          "width": 403,
          "height": 28
        }
      ]
    },
    {
      "id": "27-insights-no-issues",
      "group": "insights",
      "title": "스캔 결과 · 0 insights",
      "action": "스캔이 끝나면 왼쪽 위에 인사이트 개수가 표시됩니다. 필요하면 Run now로 다시 실행합니다.",
      "expected": "이 예시는 '0 insights · No issues detected'로 끝났습니다. 트레이스가 적으면 0건일 수 있으며 문제가 없다고 보장하는 결과는 아닙니다.",
      "image": "assets/ignite/screenshots/ko/27-insights-no-issues.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "0 insights",
          "x": 235,
          "y": 144,
          "width": 126,
          "height": 28
        },
        {
          "label": "Run now",
          "x": 241,
          "y": 174,
          "width": 69,
          "height": 32
        },
        {
          "label": "No issues detected",
          "x": 1058,
          "y": 516,
          "width": 226,
          "height": 33
        }
      ]
    },
    {
      "id": "28-agent-evaluation",
      "group": "evaluator",
      "title": "에이전트 Evaluation 탭",
      "action": "에이전트의 Evaluation 탭을 엽니다. 위쪽 'NEW: Custom rubric evaluators' 배너의 Create evaluator로 평가자를 만들 수 있습니다.",
      "expected": "Automatic Evaluation·Human Evaluation·Red team(Preview) 탭과 평가 목록이 보입니다. 처음에는 'No evaluations found'입니다.",
      "image": "assets/ignite/screenshots/ko/28-agent-evaluation.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "NEW 배너",
          "x": 244,
          "y": 148,
          "width": 1332,
          "height": 38
        },
        {
          "label": "Create evaluator",
          "x": 1421,
          "y": 151,
          "width": 112,
          "height": 33
        },
        {
          "label": "평가 탭",
          "x": 251,
          "y": 212,
          "width": 341,
          "height": 28
        }
      ]
    },
    {
      "id": "29-evaluator-catalog",
      "group": "evaluator",
      "title": "Evaluations → Evaluator catalog",
      "action": "왼쪽 Improve → Evaluations → Evaluator catalog 탭을 엽니다. 오른쪽 위의 Create evaluator로 평가자 만들기를 시작합니다.",
      "expected": "Built-in 평가자 목록이 보이며 11/7·11/13에 만들어진 Task-Level-Rubric·Task-Completion·Task-Adherence(Preview) 평가자도 있습니다. Type·Category 필터와 Version·Created on·Publisher 열이 있습니다.",
      "image": "assets/ignite/screenshots/ko/29-evaluator-catalog.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Evaluator catalog 탭",
          "x": 326,
          "y": 100,
          "width": 146,
          "height": 28
        },
        {
          "label": "Type·Category 필터",
          "x": 576,
          "y": 176,
          "width": 196,
          "height": 34
        },
        {
          "label": "Create evaluator",
          "x": 1448,
          "y": 174,
          "width": 131,
          "height": 38
        },
        {
          "label": "Task-Level-Rubric",
          "x": 281,
          "y": 388,
          "width": 190,
          "height": 28
        }
      ]
    },
    {
      "id": "30-evaluator-create-dialog",
      "group": "evaluator",
      "title": "Create evaluator 대화상자",
      "action": "Create evaluator를 누릅니다.",
      "expected": "Evaluator type(Rubric·Prompt·Code·Endpoint), Category(Quality·Safety), Scoring method(Numeric·Boolean), Auto-generate rubric 토글이 보입니다. 오른쪽에 유형별 설명이 있고 Prompt·Code·Endpoint는 Preview입니다.",
      "image": "assets/ignite/screenshots/ko/30-evaluator-create-dialog.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Evaluator type",
          "x": 146,
          "y": 302,
          "width": 152,
          "height": 28
        },
        {
          "label": "Category",
          "x": 146,
          "y": 372,
          "width": 121,
          "height": 30
        },
        {
          "label": "Scoring method",
          "x": 144,
          "y": 446,
          "width": 166,
          "height": 28
        },
        {
          "label": "Auto-generate rubric",
          "x": 205,
          "y": 528,
          "width": 204,
          "height": 28
        }
      ]
    },
    {
      "id": "31-evaluator-fields",
      "group": "evaluator",
      "title": "평가자 정보 입력",
      "action": "Evaluator name에 workshop-answer-quality, Display name에 Workshop answer quality, Description을 입력합니다. Rubric·Quality·Numeric·Auto-generate rubric은 기본값으로 두고 Model에 judge로 쓸 모델, Target agent에 workshop-harness-agent를 고릅니다.",
      "expected": "Target agent를 고르면 그 에이전트의 지시문이 Agent instructions에 읽기 전용으로 채워집니다. 이 프로젝트의 Model 목록에는 contoso-judge와 gpt-5 계열 이름이 보였고 gpt-6.1-terra 배포는 보이지 않았습니다.",
      "image": "assets/ignite/screenshots/ko/31-evaluator-fields.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Evaluator name",
          "x": 146,
          "y": 132,
          "width": 162,
          "height": 33
        },
        {
          "label": "Model (judge 모델)",
          "x": 150,
          "y": 570,
          "width": 312,
          "height": 64
        },
        {
          "label": "Target agent",
          "x": 470,
          "y": 570,
          "width": 316,
          "height": 64
        },
        {
          "label": "Generate rubric",
          "x": 676,
          "y": 788,
          "width": 124,
          "height": 38
        }
      ]
    },
    {
      "id": "32-evaluator-context-warning",
      "group": "evaluator",
      "title": "컨텍스트(트레이스) 설정과 권한 경고",
      "action": "Context(Optional)의 Add context와 'Use production traces from target agent'를 확인합니다. 이 실습에서는 Resolve를 누르지 않고 그대로 진행했습니다.",
      "expected": "Date range와 '3 traces found…' 안내가 보이고, 'Setup incomplete: Assign the Foundry project's managed identity the Monitoring Reader role on Application Insights…' 경고가 함께 보였습니다. Resolve는 역할 할당 절차로 이어질 수 있어 권한이 없으면 운영자에게 요청하세요.",
      "image": "assets/ignite/screenshots/ko/32-evaluator-context-warning.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Add context",
          "x": 205,
          "y": 379,
          "width": 131,
          "height": 26
        },
        {
          "label": "트레이스 사용 체크",
          "x": 181,
          "y": 426,
          "width": 298,
          "height": 28
        },
        {
          "label": "Setup incomplete 경고",
          "x": 153,
          "y": 466,
          "width": 631,
          "height": 114
        },
        {
          "label": "Resolve",
          "x": 707,
          "y": 537,
          "width": 71,
          "height": 36
        }
      ]
    },
    {
      "id": "33-evaluator-rubric-generated",
      "group": "evaluator",
      "title": "Generate rubric · 루브릭 자동 생성",
      "action": "Generate rubric을 누르고 기다립니다.",
      "expected": "오른쪽에 'Generated rubric (6 dimensions)'가 나옵니다. 각 차원은 1·3·5점 기준을 가지며 지시문의 '최대 5문장·한국어·읽기와 웹 조회만' 규칙이 차원에 반영됐습니다. Pass score threshold는 0.5이고 'Rubric evaluator created' 알림이 뜹니다.",
      "image": "assets/ignite/screenshots/ko/33-evaluator-rubric-generated.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Generated rubric",
          "x": 825,
          "y": 101,
          "width": 285,
          "height": 32
        },
        {
          "label": "Pass score threshold",
          "x": 807,
          "y": 179,
          "width": 203,
          "height": 30
        },
        {
          "label": "차원 목록",
          "x": 821,
          "y": 302,
          "width": 484,
          "height": 68
        },
        {
          "label": "Save evaluator",
          "x": 1263,
          "y": 837,
          "width": 123,
          "height": 42
        }
      ]
    },
    {
      "id": "34-evaluator-saved",
      "group": "evaluator",
      "title": "Save evaluator · 평가자 상세",
      "action": "차원을 검토한 뒤 Save evaluator를 누릅니다. 저장되면 평가자 상세 화면으로 이동합니다.",
      "expected": "Workshop answer quality(custom)가 Rubric-based, Quality·Agents, Turn·Conversation 수준, 전체 점수 [0-1], 차원 점수 [1-5], Target agent workshop-harness-agent로 표시되고 Create evaluation·Edit 버튼이 있습니다.",
      "image": "assets/ignite/screenshots/ko/34-evaluator-saved.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "평가자 이름",
          "x": 235,
          "y": 230,
          "width": 240,
          "height": 28
        },
        {
          "label": "Create evaluation",
          "x": 1342,
          "y": 63,
          "width": 140,
          "height": 42
        },
        {
          "label": "Evaluator configuration",
          "x": 233,
          "y": 414,
          "width": 226,
          "height": 37
        },
        {
          "label": "Dimensions",
          "x": 693,
          "y": 418,
          "width": 168,
          "height": 35
        }
      ]
    },
    {
      "id": "35-eval-wizard-target",
      "group": "evaluation",
      "title": "Create evaluation 1/5 · Target",
      "action": "평가자 상세의 Create evaluation을 누릅니다. Target은 Agent, 목록에서 workshop-harness-agent를 고르고 Next를 누릅니다.",
      "expected": "Target → Scope → Data → Criteria → Review 5단계 마법사가 열립니다. Agent·Model·Dataset 중 평가 대상을 고를 수 있습니다. 평가자 상세에서 시작했으므로 내가 만든 평가자(workshop-answer-quality)가 4단계에서 미리 선택된 채로 나타납니다.",
      "image": "assets/ignite/screenshots/ko/35-eval-wizard-target.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Create new evaluation",
          "x": 237,
          "y": 60,
          "width": 284,
          "height": 31
        },
        {
          "label": "Agent 선택",
          "x": 295,
          "y": 205,
          "width": 116,
          "height": 28
        },
        {
          "label": "에이전트 목록",
          "x": 772,
          "y": 209,
          "width": 230,
          "height": 28
        },
        {
          "label": "Next",
          "x": 644,
          "y": 367,
          "width": 65,
          "height": 42
        }
      ]
    },
    {
      "id": "36-eval-wizard-scope",
      "group": "evaluation",
      "title": "2/5 · Scope",
      "action": "이 실습은 Individual turns(기본값)로 두고 Next를 누릅니다.",
      "expected": "Individual turns(질문-응답 한 쌍)와 Full conversations(여러 턴 대화 전체) 선택지가 보입니다.",
      "image": "assets/ignite/screenshots/ko/36-eval-wizard-scope.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Individual turns",
          "x": 295,
          "y": 258,
          "width": 152,
          "height": 26
        },
        {
          "label": "Full conversations",
          "x": 295,
          "y": 307,
          "width": 168,
          "height": 28
        },
        {
          "label": "Next",
          "x": 646,
          "y": 370,
          "width": 61,
          "height": 42
        }
      ]
    },
    {
      "id": "37-eval-wizard-data",
      "group": "evaluation",
      "title": "3/5 · Data · 합성 데이터 생성",
      "action": "Dataset source는 Synthetic generation으로 둡니다. Prompt(optional)에 생성 방향을 적고, Model에 gpt-6.1-terra를 고르고, Number of rows는 최소값 15, 새 데이터셋 이름은 workshop_harness_eval_set로 입력한 뒤 Next를 누릅니다. Seed data(파일)는 쓰지 않았습니다.",
      "expected": "Synthetic generation·Existing dataset·Benchmarks(Preview)·Existing traces·Live traffic 다섯 가지가 보입니다. Number of rows는 15~100만 허용해 5를 입력하면 'Enter a whole number from 15 to 100.' 오류로 Next가 비활성화됩니다.",
      "image": "assets/ignite/screenshots/ko/37-eval-wizard-data.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Dataset source",
          "x": 260,
          "y": 337,
          "width": 152,
          "height": 26
        },
        {
          "label": "Synthetic generation",
          "x": 295,
          "y": 372,
          "width": 184,
          "height": 30
        },
        {
          "label": "Model",
          "x": 737,
          "y": 612,
          "width": 107,
          "height": 28
        },
        {
          "label": "Number of rows",
          "x": 737,
          "y": 679,
          "width": 166,
          "height": 28
        }
      ]
    },
    {
      "id": "38-eval-wizard-criteria",
      "group": "evaluation",
      "title": "4/5 · Criteria · 평가자 선택",
      "action": "Judge model(이 캡처: contoso-judge)을 확인하고 Evaluator catalog에서 평가자를 고릅니다. 처음에는 Recommended 6개와 내가 만든 평가자가 선택돼 있습니다(Review selected (7)).",
      "expected": "All(49)·Recommended(6)·Built-in(48)·Custom(1) 보기와 'Create a custom evaluator' 버튼이 보입니다.",
      "image": "assets/ignite/screenshots/ko/38-eval-wizard-criteria.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Judge model",
          "x": 256,
          "y": 375,
          "width": 150,
          "height": 34
        },
        {
          "label": "카탈로그 보기",
          "x": 726,
          "y": 219,
          "width": 543,
          "height": 78
        },
        {
          "label": "Review selected",
          "x": 1323,
          "y": 318,
          "width": 178,
          "height": 31
        },
        {
          "label": "Create a custom evaluator",
          "x": 1400,
          "y": 118,
          "width": 189,
          "height": 38
        }
      ]
    },
    {
      "id": "39-eval-wizard-custom-selected",
      "group": "evaluation",
      "title": "Custom 평가자만 선택",
      "action": "Clear selection을 누르고 Custom(1) → All custom에서 Workshop answer quality만 체크한 뒤 Next를 누릅니다. 이 실습은 judge 호출을 줄이려고 하나만 골랐습니다.",
      "expected": "'Review selected (1)'로 바뀌고 카드에 Rubric 배지와 View rubric details 링크가 보입니다.",
      "image": "assets/ignite/screenshots/ko/39-eval-wizard-custom-selected.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Custom (1)",
          "x": 1084,
          "y": 256,
          "width": 130,
          "height": 28
        },
        {
          "label": "Workshop answer quality",
          "x": 772,
          "y": 377,
          "width": 237,
          "height": 30
        },
        {
          "label": "Review selected (1)",
          "x": 1323,
          "y": 321,
          "width": 177,
          "height": 28
        },
        {
          "label": "Next",
          "x": 646,
          "y": 451,
          "width": 61,
          "height": 42
        }
      ]
    },
    {
      "id": "40-eval-wizard-review",
      "group": "evaluation",
      "title": "5/5 · Review → Submit",
      "action": "Evaluation name에 workshop-harness-eval-1을 입력하고 Summary(Targets·Scope·Dataset·Evaluators)를 확인한 뒤 Submit을 누릅니다.",
      "expected": "Submit 뒤 잠시 지나면 평가 상세 화면으로 이동합니다.",
      "image": "assets/ignite/screenshots/ko/40-eval-wizard-review.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Evaluation name",
          "x": 260,
          "y": 409,
          "width": 168,
          "height": 31
        },
        {
          "label": "Summary",
          "x": 725,
          "y": 120,
          "width": 127,
          "height": 28
        },
        {
          "label": "Submit",
          "x": 630,
          "y": 485,
          "width": 80,
          "height": 43
        }
      ]
    },
    {
      "id": "41-eval-run-in-progress",
      "group": "evaluation",
      "title": "평가 실행 상태",
      "action": "평가 상세 화면의 Evaluation runs 목록에서 Status를 확인합니다. 합성 데이터 생성 → 에이전트 실행 → 채점 순서로 진행됩니다.",
      "expected": "Status가 'In progress'이고 Overall score는 '-'입니다. 이 예시는 질문 15개를 하네스 에이전트로 실행하느라 총 15분 43초가 걸렸고, 그동안 Traces에는 실행당 20~50초짜리 트레이스가 쌓였습니다.",
      "image": "assets/ignite/screenshots/ko/41-eval-run-in-progress.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Evaluation runs",
          "x": 230,
          "y": 240,
          "width": 196,
          "height": 33
        },
        {
          "label": "Status",
          "x": 651,
          "y": 319,
          "width": 78,
          "height": 33
        },
        {
          "label": "In progress",
          "x": 651,
          "y": 358,
          "width": 122,
          "height": 35
        },
        {
          "label": "Overall score",
          "x": 835,
          "y": 318,
          "width": 140,
          "height": 33
        }
      ]
    },
    {
      "id": "42-eval-run-results",
      "group": "evaluation",
      "title": "평가 결과 · Evaluation runs",
      "action": "평가가 끝나면 Evaluation runs 목록에서 Status와 점수를 확인하고 실행 이름을 눌러 상세로 들어갑니다. 같은 평가에 Add run으로 실행을 추가해 비교할 수도 있습니다.",
      "expected": "Status는 Partial, P50·P95 latency는 28.0s·72.4s, Overall score와 workshop-answer-quality는 100%(12 / 12)로 표시됐습니다. 질문 15개 중 3개는 점수 없이 Error라 Partial이며, 100%는 점수가 있는 12행 기준입니다. Dataset 열에는 입력한 이름 대신 'dgj_135174 · Version 1.0'이 표시됐습니다.",
      "image": "assets/ignite/screenshots/ko/42-eval-run-results.png",
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
          "label": "점수 100% (12 / 12)",
          "x": 932,
          "y": 318,
          "width": 340,
          "height": 80
        },
        {
          "label": "Add run",
          "x": 1481,
          "y": 64,
          "width": 102,
          "height": 39
        }
      ]
    },
    {
      "id": "43-eval-run-details",
      "group": "evaluation",
      "title": "실행 상세 · 행별 결과",
      "action": "실행 이름을 눌러 Run details를 엽니다. Overall metric results와 Detailed metrics result 표를 확인합니다. 표를 오른쪽으로 스크롤하면 응답·도구 호출·Error 같은 열이 더 있습니다.",
      "expected": "Status는 Completed, Duration은 15m 43.04s, Evaluation progress의 Elapsed time은 12m 7s였습니다. 표에는 질문(query)별로 'Pass: 1', 'Pass: 0.917'처럼 점수가 있고 8·9·14번 행은 Error(0/0)였습니다. 표를 오른쪽으로 스크롤하면 Error 열에 \"ResponseError(code='rate_limit_exceeded', message='Model deployment rate limit exceeded. Retry later.')\"가 적혀 있었습니다. 이 배포는 100,000 TPM이었고 하네스 한 번 실행이 수만 토큰이라 한도를 넘긴 것으로 보입니다.",
      "image": "assets/ignite/screenshots/ko/43-eval-run-details.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "실행 요약",
          "x": 244,
          "y": 150,
          "width": 720,
          "height": 60
        },
        {
          "label": "Overall metric results",
          "x": 237,
          "y": 388,
          "width": 187,
          "height": 31
        },
        {
          "label": "Detailed metrics result",
          "x": 233,
          "y": 546,
          "width": 204,
          "height": 31
        },
        {
          "label": "Download results",
          "x": 1205,
          "y": 240,
          "width": 162,
          "height": 33
        }
      ]
    },
    {
      "id": "44-eval-row-details",
      "group": "evaluation",
      "title": "행 상세 · 차원별 점수와 이유",
      "action": "표의 View details를 누르면 행마다 Detail rubric score가 열립니다. Details 탭에서 차원별 Score(1~5)·Result·Reason을 확인합니다. JSON 탭에서 원본을 볼 수 있습니다.",
      "expected": "이 예시는 전체 0.92/1.0(Pass)이고 source_url_inclusion_and_relevance 5, factual_alignment_with_cited_content 5, conciseness_and_language_adherence 4, direct_question_responsiveness 5, tool_use_restriction_compliance 5, general_quality 4였으며 차원마다 한국어 Reason이 적혀 있습니다.",
      "image": "assets/ignite/screenshots/ko/44-eval-row-details.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "전체 점수",
          "x": 262,
          "y": 211,
          "width": 165,
          "height": 55
        },
        {
          "label": "차원별 점수 표",
          "x": 255,
          "y": 301,
          "width": 1090,
          "height": 436
        },
        {
          "label": "Done",
          "x": 1284,
          "y": 763,
          "width": 65,
          "height": 42
        }
      ]
    },
    {
      "id": "45-agent-optimize",
      "group": "optimize",
      "title": "Optimize 탭 소개",
      "action": "에이전트의 Optimize 탭을 엽니다.",
      "expected": "Optimize가 지시문·스킬·도구 설명·모델 선택을 바꿔 후보를 만들고 평가 기준으로 순위를 매기며, 후보를 승격하기 전까지 에이전트는 바뀌지 않는다는 안내가 보입니다. 화면의 tax agent 75.0 → 92.5(+17.5)는 제품 예시이며 내 에이전트의 결과가 아닙니다.",
      "image": "assets/ignite/screenshots/ko/45-agent-optimize.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Optimize 탭",
          "x": 649,
          "y": 102,
          "width": 93,
          "height": 30
        },
        {
          "label": "제품 예시",
          "x": 579,
          "y": 342,
          "width": 321,
          "height": 28
        },
        {
          "label": "승격 안내",
          "x": 577,
          "y": 514,
          "width": 705,
          "height": 28
        },
        {
          "label": "Optimize 버튼",
          "x": 860,
          "y": 553,
          "width": 109,
          "height": 38
        }
      ]
    },
    {
      "id": "46-optimize-goal-menu",
      "group": "optimize",
      "title": "Optimize 시작 메뉴",
      "action": "Optimize 버튼을 누르면 Choose a goal(Improve quality·Reduce cost)과 Learn from past activity(최근 트레이스 기반) 메뉴가 열립니다. 이 화면의 하네스 에이전트에서는 실행하지 않았습니다.",
      "expected": "목표 선택 하위 메뉴에 Improve quality와 Reduce cost가 보입니다. 데이터셋과 평가자를 사용하는 기능입니다. 공식 문서는 포털 최적화를 Copilot 하네스를 쓰지 않는 Prompt Agent 대상으로 안내합니다. 같은 날 별도 환경에서 하네스 에이전트의 Improve quality는 마법사(Target → Data)까지만 열고 제출하지 않았고, 하네스를 쓰지 않는 Prompt Agent는 실행이 성공했습니다.",
      "image": "assets/ignite/screenshots/ko/46-optimize-goal-menu.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Choose a goal",
          "x": 888,
          "y": 595,
          "width": 207,
          "height": 28
        },
        {
          "label": "Improve quality",
          "x": 1098,
          "y": 600,
          "width": 142,
          "height": 28
        },
        {
          "label": "Reduce cost",
          "x": 1098,
          "y": 633,
          "width": 125,
          "height": 28
        },
        {
          "label": "Learn from past activity",
          "x": 867,
          "y": 644,
          "width": 226,
          "height": 30
        }
      ]
    },
    {
      "id": "47-manage-fleet",
      "group": "fleet",
      "title": "Manage → Fleet 개요 (Preview)",
      "action": "상단 Manage를 누르고 왼쪽 Fleet을 엽니다. 구독·리소스 그룹·프로젝트 범위와 기간(Last Day·7D·1M·3M)을 바꿔 봅니다.",
      "expected": "Activity(에이전트 실행 수), Consumption(토큰), Estimated cost, Assets with policy violations 카드와 오류·지연·비용 증가·정책 위반 상위 목록이 보입니다. 아래 표는 Projects·Agents·Models 탭으로 나뉩니다.",
      "image": "assets/ignite/screenshots/ko/47-manage-fleet.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Fleet overview",
          "x": 237,
          "y": 67,
          "width": 144,
          "height": 31
        },
        {
          "label": "범위 필터",
          "x": 249,
          "y": 123,
          "width": 729,
          "height": 31
        },
        {
          "label": "기간",
          "x": 1356,
          "y": 123,
          "width": 178,
          "height": 30
        },
        {
          "label": "Activity 카드",
          "x": 521,
          "y": 198,
          "width": 263,
          "height": 68
        },
        {
          "label": "Projects 탭",
          "x": 270,
          "y": 694,
          "width": 87,
          "height": 31
        }
      ]
    },
    {
      "id": "48-manage-operations",
      "group": "fleet",
      "title": "Manage → Operations (Preview)",
      "action": "Operations에서 Invocations·Tokens·Errors·Latency 탭과 기간을 바꿔 보며 지표를 확인합니다.",
      "expected": "Agent runs, Model requests, Tool calls 같은 운영 지표와 Highest error incidents·Highest agent run latency 목록이 보입니다. 이 캡처에서 Fleet은 22 agent runs, Operations는 Agent runs 합계 3·Model requests 25로 서로 달랐습니다. 집계 범위가 달라 같은 값으로 가정하지 않습니다.",
      "image": "assets/ignite/screenshots/ko/48-manage-operations.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Operations",
          "x": 42,
          "y": 172,
          "width": 88,
          "height": 28
        },
        {
          "label": "지표 탭",
          "x": 1228,
          "y": 204,
          "width": 340,
          "height": 32
        },
        {
          "label": "Model requests",
          "x": 258,
          "y": 319,
          "width": 186,
          "height": 30
        },
        {
          "label": "Highest error incidents",
          "x": 588,
          "y": 714,
          "width": 197,
          "height": 28
        }
      ]
    },
    {
      "id": "49-manage-cost",
      "group": "fleet",
      "title": "Manage → Cost (Preview)",
      "action": "Cost에서 기간을 7D로 두고 Estimated cost, Month-end forecast, Spend breakdown, Highest spend assets, Cost by project의 Group by를 확인합니다.",
      "expected": "Azure Cost Management 기반이며 최대 24시간 늦을 수 있다는 안내가 보입니다. 이 프로젝트는 'No estimated cost is available for the selected period.'로 표시됐습니다. 원인(모델 가격 정보 미제공·집계 지연 등)은 확인하지 못했습니다. 화면 안내대로 비어 있는 비용은 사용량 0이 아닙니다(missing costs are not zero usage).",
      "image": "assets/ignite/screenshots/ko/49-manage-cost.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "지연 안내",
          "x": 874,
          "y": 144,
          "width": 310,
          "height": 30
        },
        {
          "label": "Estimated cost",
          "x": 253,
          "y": 249,
          "width": 242,
          "height": 28
        },
        {
          "label": "Month-end forecast",
          "x": 586,
          "y": 249,
          "width": 178,
          "height": 33
        },
        {
          "label": "Group by",
          "x": 1202,
          "y": 853,
          "width": 336,
          "height": 38
        }
      ]
    },
    {
      "id": "50-manage-compliance",
      "group": "manage-governance",
      "title": "Manage → Compliance",
      "action": "Compliance에서 Policy·Asset·Security posture·Data security and governance 탭과 범위 필터를 확인합니다. 정책 할당은 Manage in Azure Policy에서 하며 이 화면의 샌드박스 프로젝트에서는 하지 않았습니다.",
      "expected": "'No policies assigned'가 표시됐습니다. 정책이 할당되지 않았다는 뜻이며 '준수'를 뜻하지 않습니다.",
      "image": "assets/ignite/screenshots/ko/50-manage-compliance.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "Manage in Azure Policy",
          "x": 1386,
          "y": 67,
          "width": 204,
          "height": 31
        },
        {
          "label": "탭",
          "x": 242,
          "y": 168,
          "width": 440,
          "height": 30
        },
        {
          "label": "No policies assigned",
          "x": 812,
          "y": 479,
          "width": 218,
          "height": 33
        }
      ]
    },
    {
      "id": "51-manage-gateways",
      "group": "manage-governance",
      "title": "Manage → Gateways · AI Gateway (Preview)",
      "action": "AI Gateway 소개만 읽습니다. Add AI Gateway는 Azure API Management 리소스와 비용이 생길 수 있어 이 실습에서는 누르지 않았습니다.",
      "expected": "Azure API Management 기반이며 처음 100,000 API 요청은 무료, 프로젝트·에이전트별 토큰 한도, 외부 에이전트·도구 인벤토리 안내가 보입니다.",
      "image": "assets/ignite/screenshots/ko/51-manage-gateways.png",
      "width": 1600,
      "height": 900,
      "hotspots": [
        {
          "label": "AI Gateway",
          "x": 235,
          "y": 65,
          "width": 225,
          "height": 37
        },
        {
          "label": "무료 안내",
          "x": 705,
          "y": 403,
          "width": 472,
          "height": 32
        },
        {
          "label": "Add AI Gateway",
          "x": 846,
          "y": 530,
          "width": 126,
          "height": 38
        }
      ]
    }
  ]
};
