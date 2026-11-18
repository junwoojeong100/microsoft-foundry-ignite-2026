window.IGNITE_DATA = {
 "schemaVersion": 1,
 "capturedDate": "2026-11-18",
 "locale": "ko",
 "portal": "New Foundry (ai.azure.com), 2026.11.18 기준 화면",
 "shots": [
  {
   "id": "01-home",
   "group": "start",
   "title": "Foundry 홈",
   "action": "안내를 마치면 보이는 홈에서 Build an agent·Use a model 카드와 엔드포인트 영역을 확인합니다.",
   "expected": "Project endpoint와 Azure OpenAI endpoint가 홈에 표시됩니다. 이 프로젝트에는 'API key authentication is disabled for this project.' 안내가 보였으며 프로젝트 설정에 따라 다를 수 있습니다.",
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
     "label": "API 키 인증 안내",
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
   "title": "Build → Guardrails 목록",
   "action": "왼쪽 Create 아래 Guardrails를 엽니다. Guardrails·Blocklists·Integrations(Preview) 탭을 확인합니다.",
   "expected": "Microsoft.Default, Microsoft.DefaultV2, Microsoft.MAIDefault 정책이 보이고 DefaultV2의 Applied to 열에 적용된 모델 배포가 표시됩니다.",
   "image": "assets/ignite/screenshots/ko/02-guardrails-list.png",
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
   "title": "Models → Deployments의 Policy 열",
   "action": "왼쪽 Models → Deployments 목록에서 Deployment status 옆의 Policy 열을 확인합니다.",
   "expected": "이 프로젝트의 배포는 모두 Policy 열에 'No policies added'로 표시됐습니다. 이 열이 Guardrails의 Applied to와 같은 개념인지는 확인하지 못했으므로 가드레일 적용은 Guardrails 화면에서 확인합니다.",
   "image": "assets/ignite/screenshots/ko/03-models-policy-column.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Policy 열",
     "x": 1055,
     "y": 254,
     "width": 49,
     "height": 30
    },
    {
     "label": "gpt-6.1-terra 배포",
     "x": 254,
     "y": 293,
     "width": 89,
     "height": 31
    },
    {
     "label": "Deployments 탭",
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
   "title": "gpt-6.1-terra 배포 · Custom settings",
   "action": "Catalog에서 gpt-6.1-terra를 열어 Deploy → Custom settings를 고르면 이 대화상자가 열립니다. Deployment name, Deployment type(Global Standard), Tokens per Minute Rate Limit, Guardrails(기본 DefaultV2)를 확인합니다. 실습 3에서 이미 배포했다면 이 화면은 확인용이므로 새로 배포하지 말고 Cancel로 닫습니다.",
   "expected": "같은 이름의 배포가 있으면 Deployment name에 'gpt-6.1-terra-2'처럼 번호가 붙은 이름이 제안됩니다(이 캡처). TPM 칸의 기본값은 250000이고 오른쪽에 이 구독에서 고를 수 있는 최대값(/1870000)이 표시됩니다. 실습 3에서는 배정받은 TPM 값을 직접 입력합니다. Guardrails 드롭다운에는 DefaultV2·Default·Microsoft.MAIDefault가 있고 DefaultV2가 선택돼 있습니다.",
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
     "label": "TPM 한도",
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
   "title": "Build → Agents 목록의 Harness 열",
   "action": "Create 아래 Agents를 엽니다. 목록의 Interaction type 옆 Harness 열과 위쪽의 Agents·Routines·Workflows 탭, 오른쪽 New agent 버튼을 확인합니다.",
   "expected": "이 시점에는 실습 5에서 만든 workshop-assistant(Prompt·Text)만 있어 Harness 열이 '--'입니다. 하네스로 만든 에이전트는 이 열로 구분되며, 뒤의 '하네스 에이전트가 생긴 Agents 목록' 화면에서 확인합니다.",
   "image": "assets/ignite/screenshots/ko/05-agents-list-harness-column.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Harness 열",
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
   "title": "New agent 메뉴",
   "action": "New agent를 열어 만드는 방식을 확인하고 이 실습에서는 Build an agent를 선택합니다.",
   "expected": "Build an agent, Code an agent, With agent template, Link external agent 네 가지가 보입니다.",
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
   "title": "Create an agent · 하네스 선택",
   "action": "Agent name에 workshop-harness-agent를 입력하고 Interaction mode는 Text로 둡니다. Use the Microsoft Copilot harness를 체크한 뒤 Create agent and open playground를 누릅니다.",
   "expected": "Interaction mode는 만든 뒤 바꿀 수 없다는 안내와 하네스 체크박스(Preview)가 보입니다. 공식 문서는 초기 프리뷰 동안 기존 에이전트를 하네스로 바꿀 수 없다고 안내합니다.",
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
     "label": "하네스 체크박스",
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
   "title": "Harness tools · 기본값",
   "action": "만든 에이전트의 Playground에서 왼쪽 Tools 영역의 Harness tools를 누릅니다.",
   "expected": "File system read, File system write, Web, Shell, Subagents가 모두 켜져 있고 'Turn off anything this agent shouldn't use.' 안내가 보입니다. 이 캡처는 Version 1·model-router 기준입니다.",
   "image": "assets/ignite/screenshots/ko/08-harness-tools-default.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Tools 영역의 Harness tools(눌러서 열기)",
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
   "title": "필요 없는 도구 끄기",
   "action": "이 실습의 지시문은 읽기와 웹 조회만 허용합니다. File system write와 Shell을 끄고 Done을 누른 뒤 Save합니다.",
   "expected": "File system read, Web, Subagents만 켜져 있습니다. 공식 문서는 Shell이 켜져 있으면 다른 도구를 꺼도 엄격한 보안 경계가 아니라고 안내해 Shell도 함께 껐습니다.",
   "image": "assets/ignite/screenshots/ko/09-harness-tools-restricted.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "File system write 해제",
     "x": 474,
     "y": 364,
     "width": 154,
     "height": 31
    },
    {
     "label": "Shell 해제",
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
   "title": "YAML 탭으로 저장된 설정 확인",
   "action": "앞 화면에서 도구를 끄고 Save and start new chat으로 저장하면 Version 2가 됩니다. Playground 위쪽의 YAML 탭을 눌러 저장된 정의를 확인합니다.",
   "expected": "kind: prompt, harness.type: microsoft_copilot_preview, model: gpt-6.1-terra가 보이고 tools의 microsoft_copilot_toolset_preview 아래 filesystem_write와 shell이 enabled: false로 기록됩니다. 직접 입력하지 않은 reasoning.effort: low도 함께 저장돼 있었습니다.",
   "image": "assets/ignite/screenshots/ko/10-harness-yaml.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "YAML 탭",
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
     "label": "도구 설정(enabled: false)",
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
   "title": "gpt-6.1-terra로 실행",
   "action": "채팅창에 질문을 입력해 실행합니다. 이 실습의 질문: https://learn.microsoft.com/azure/foundry/ 문서를 웹에서 읽고, Microsoft Foundry가 무엇인지 핵심 3가지로 요약해줘.",
   "expected": "한국어 답변과 출처 링크가 나오고, 응답 아래에 모델(gpt-6.1-terra)·시간(9s)·토큰(35913t)·도구(web_fetch) 칩과 Traces 링크가 보입니다. 질문 한 번에 약 3.6만 토큰이 표시됐습니다. 하네스는 첫 실행이 느릴 수 있어(이번 촬영에서 4분 넘게 걸린 적이 있음) 응답이 올 때까지 기다리면 이후 실행은 몇 초~십수 초였습니다.",
   "image": "assets/ignite/screenshots/ko/11-harness-run-terra.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "모델 선택기",
     "x": 250,
     "y": 149,
     "width": 387,
     "height": 31
    },
    {
     "label": "Harness 버튼",
     "x": 1351,
     "y": 153,
     "width": 80,
     "height": 28
    },
    {
     "label": "실행 정보 칩(모델·시간·토큰·도구)",
     "x": 748,
     "y": 368,
     "width": 480,
     "height": 36
    }
   ]
  },
  {
   "id": "12-agent-details",
   "group": "harness-run",
   "title": "Details 탭 · 엔드포인트와 채널",
   "action": "Details 탭에서 Agent configuration, Identity & access, Endpoints, Channels, Routines를 확인합니다. 이 실습에서는 Publish·Set up을 누르지 않았습니다.",
   "expected": "Responses protocol 엔드포인트, A2A protocol(Set up), Teams & Microsoft 365 Copilot·Preview web app 채널(Publish), Routines(Set up routine), Entra agent identity와 blueprint가 보입니다.",
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
   "title": "에이전트 Guardrail(Preview) 섹션",
   "action": "에이전트 Playground 왼쪽을 아래로 스크롤하면 Guardrail(Preview) 섹션이 있습니다. 이름과 보호 범위를 읽습니다.",
   "expected": "Name: Microsoft.DefaultV2, Risks with controls(Jailbreak 1·Indirect prompt injections 1·Content safety 4·Protected materials 2)와 Risks without controls(Sensitive data leakage·Task drift)가 보입니다. 'This agent has not been assigned a guardrail. It is inheriting its model's guardrail.' 안내처럼 에이전트에 따로 지정하지 않으면 모델 배포의 가드레일을 상속합니다.",
   "image": "assets/ignite/screenshots/ko/13-agent-guardrail-section.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Guardrail 섹션",
     "x": 237,
     "y": 532,
     "width": 132,
     "height": 31
    },
    {
     "label": "적용 중인 가드레일",
     "x": 277,
     "y": 616,
     "width": 138,
     "height": 28
    },
    {
     "label": "보호 범위",
     "x": 238,
     "y": 640,
     "width": 452,
     "height": 72
    },
    {
     "label": "상속 안내",
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
   "title": "Manage guardrail 메뉴",
   "action": "Manage guardrail을 눌러 메뉴를 확인합니다. 이 실습에서는 어느 항목도 실행하지 않았습니다.",
   "expected": "Reassign guardrail, Create guardrail, Edit guardrail(이 에이전트는 상속 중이라 비활성), Guided guardrail setup이 보입니다.",
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
   "title": "하네스 에이전트가 생긴 Agents 목록",
   "action": "왼쪽 Create 아래 Agents로 돌아와 목록을 확인합니다.",
   "expected": "workshop-harness-agent 행의 Harness 열에 'Microsoft Copilot'(Preview)이 표시되고 Type은 Prompt, Interaction type은 Text입니다. 하네스를 쓰지 않는 workshop-assistant는 Harness 열이 '--'입니다.",
   "image": "assets/ignite/screenshots/ko/15-agents-list-harness-column.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Harness 열",
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
   "title": "Routines 탭",
   "action": "Agents 목록 위의 Routines 탭을 엽니다. 이 실습에서는 루틴을 만들지 않았습니다.",
   "expected": "'Run your agents automatically' — 루틴이 일정이나 이벤트로 에이전트를 실행한다는 빈 화면과 Create routine 버튼이 보입니다.",
   "image": "assets/ignite/screenshots/ko/16-agents-routines.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Routines 탭",
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
   "title": "Workflows 탭 · 종료 예정 안내",
   "action": "Workflows(Preview) 탭의 안내 배너를 읽습니다. 새 워크플로는 만들지 않았습니다.",
   "expected": "'Microsoft Foundry is retiring workflows on December 1, 2026. Build new workflows with Microsoft Agent Framework…' 배너가 보입니다.",
   "image": "assets/ignite/screenshots/ko/17-agents-workflows.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Workflows 탭",
     "x": 367,
     "y": 128,
     "width": 130,
     "height": 31
    },
    {
     "label": "종료 예정 배너",
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
   "title": "Traces 목록",
   "action": "에이전트의 Traces 탭(또는 왼쪽 Observe → Traces)을 엽니다. 기간(Last Day)과 Trace view·Conversation view, 필터와 열을 확인합니다.",
   "expected": "실행(트레이스)마다 Trace ID, Status, Created at, Duration, Tokens(In/Out), Estimated cost가 한 줄로 보이고, 평가를 거친 트레이스는 Evaluation 열에 점수(workshop-answer-quality: 0.8처럼)가 붙습니다. 이 캡처는 평가·최적화 실습을 마친 뒤 다시 찍어서 평가 실행이 만든 트레이스가 위쪽에 쌓여 있습니다. 실습 6 직후에는 방금 실행한 몇 건만 보입니다. 위쪽의 'Cost Management Reader access' 안내는 청구 통화로 비용을 보려면 필요한 권한이 없을 때 나오는 안내입니다.",
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
     "label": "기간",
     "x": 1180,
     "y": 200,
     "width": 395,
     "height": 34
    },
    {
     "label": "Trace ID 열",
     "x": 284,
     "y": 380,
     "width": 93,
     "height": 32
    },
    {
     "label": "Tokens·비용 열",
     "x": 886,
     "y": 380,
     "width": 440,
     "height": 34
    },
    {
     "label": "Evaluation 열",
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
   "title": "에이전트 Monitor · Overview",
   "action": "에이전트의 Monitor 탭에서 Overview·Cost(Preview)·Tools 탭과 기간(7D)을 확인합니다.",
   "expected": "Operational metrics, Evaluations, Scheduled evaluations, Scheduled red teaming run issues(Preview) 카드와 Agent runs 차트가 보입니다. 이 캡처에서는 실행이 있는데도 Total token usage가 0, Estimated cost가 '--'였습니다.",
   "image": "assets/ignite/screenshots/ko/19-agent-monitor.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Monitor 탭",
     "x": 253,
     "y": 146,
     "width": 132,
     "height": 31
    },
    {
     "label": "Cost (Preview) 탭",
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
   "action": "Monitor 아래 Cost(Preview) 탭을 엽니다.",
   "expected": "'All costs on this page are estimated' 안내와 Agent cost·Model token usage·Agent runs·Average Agent Cost / run 카드가 보입니다. 이 캡처에서는 Agent runs 18을 빼고 모두 'Not available'이고 'No agent cost data is available for the selected date range.'가 표시됐습니다. 위쪽의 'You don't have permission to read Azure Monitor metrics for this resource.' 안내는 이 계정에 Azure Monitor 지표를 읽을 권한이 없다는 뜻이며, 비용 지표가 필요하면 운영자에게 권한을 요청합니다.",
   "image": "assets/ignite/screenshots/ko/20-agent-monitor-cost.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Cost 탭",
     "x": 341,
     "y": 146,
     "width": 113,
     "height": 31
    },
    {
     "label": "추정치 안내",
     "x": 259,
     "y": 177,
     "width": 365,
     "height": 31
    },
    {
     "label": "비용 카드(Not available)",
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
   "title": "Insights 탭 · 스캔 설정",
   "action": "에이전트의 Insights 탭을 엽니다. 오른쪽의 Preview example은 예시 데이터입니다. Judge model은 GPT-5 이상 모델만 선택할 수 있습니다. 설정을 확인하고 Run scan now를 누릅니다.",
   "expected": "Configuration에 Judge model(이 캡처: gpt-6.1-terra)과 'Estimated cost for your first scan'(최근 7일 트레이스 14개)이 보입니다. 가격 정보가 없는 모델은 'Pricing unavailable for the selected model.'로 표시됩니다.",
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
     "label": "첫 스캔 비용",
     "x": 492,
     "y": 550,
     "width": 277,
     "height": 31
    },
    {
     "label": "가격 안내",
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
   "title": "Run now · 스캔 진행 중",
   "action": "Run scan now를 누르면 'Run in progress'와 Collecting traces → Analyzing traces → Generating insights 단계가 표시됩니다.",
   "expected": "'This typically takes 2–5 minutes. Results will appear automatically.' 안내가 보입니다. 필요하면 Cancel로 중단할 수 있습니다.",
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
     "label": "소요 시간 안내",
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
   "title": "스캔 결과 · 0 insights",
   "action": "스캔이 끝나면 위쪽에 'Scan complete' 알림이 뜨고 왼쪽에 인사이트 개수가 표시됩니다. 필요하면 Run now로 다시 실행합니다.",
   "expected": "이 예시는 'Analyzed 3 traces and generated no new insights, using 101,123 tokens.'로 끝났고 0 insights, 'No issues detected', Traces analyzed 3이 표시됐습니다. 스캔 한 번에 judge 모델 토큰을 약 10만 개 썼습니다. 트레이스가 적으면 0건일 수 있으며 문제가 없다고 보장하는 결과는 아닙니다.",
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
   "title": "에이전트 Evaluation 탭",
   "action": "에이전트의 Evaluation 탭을 엽니다. 위쪽 'NEW: Custom rubric evaluators' 배너의 Create evaluator로 평가자를 만들 수 있습니다.",
   "expected": "Automatic Evaluation·Human Evaluation·Red team(Preview) 탭과 평가 목록이 보입니다. 처음에는 'No evaluations found'입니다.",
   "image": "assets/ignite/screenshots/ko/24-agent-evaluation.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "NEW 배너",
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
     "label": "평가 탭",
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
   "action": "왼쪽 Improve → Evaluations → Evaluator catalog 탭을 엽니다. 오른쪽 위의 Create evaluator로 평가자 만들기를 시작합니다.",
   "expected": "Microsoft가 제공하는 Built-in 평가자 목록이 보입니다. Created on은 평가자 정의가 등록된 날짜라서 오늘 날짜가 아니며(예: Task-Completion 11/13, Task-Level-Rubric 11/7), Type·Category 필터와 Version·Publisher 열이 있습니다. 내가 만든 평가자는 아직 없습니다.",
   "image": "assets/ignite/screenshots/ko/25-evaluator-catalog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Evaluator catalog 탭",
     "x": 325,
     "y": 96,
     "width": 142,
     "height": 31
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
   "title": "Create evaluator 대화상자",
   "action": "Create evaluator를 누릅니다.",
   "expected": "Evaluator type(Rubric·Prompt·Code·Endpoint), Category(Quality·Safety), Scoring method(Numeric·Boolean), Auto-generate rubric 토글이 보입니다. 오른쪽에 유형별 설명이 있고 Prompt·Code·Endpoint는 Preview입니다.",
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
   "title": "평가자 정보 입력",
   "action": "Evaluator name에 workshop-answer-quality, Display name에 Workshop answer quality, Description을 입력합니다(대화상자 위쪽). 아래로 스크롤해 Rubric·Quality·Numeric·Auto-generate rubric은 기본값으로 두고 Model에 judge로 쓸 배포, Target agent에 workshop-harness-agent를 고릅니다. Context(Optional)의 Add context와 'Use production traces from target agent'는 켜진 채로 둡니다.",
   "expected": "Target agent를 고르면 그 에이전트의 지시문이 Agent instructions에 읽기 전용으로 채워집니다. Model에는 rubric을 만들 judge 배포를 목록에서 고릅니다(이 캡처: gpt-5.4-mini). 이 환경의 시험에서는 gpt-6.1-terra가 이 목록에 보이지 않았으니 보이는 배포를 고르고, 없으면 운영자에게 요청하세요. Context 영역의 'Use production traces from target agent'에는 최근 트레이스 수('8 traces found…')가 표시됩니다.",
   "image": "assets/ignite/screenshots/ko/27-evaluator-fields.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Model (judge 모델)",
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
     "label": "Context(트레이스 사용)",
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
   "title": "컨텍스트(트레이스) 설정과 권한 경고",
   "action": "Context(Optional)의 Add context와 'Use production traces from target agent'를 확인합니다. 이 실습에서는 Resolve를 누르지 않고 그대로 진행했습니다.",
   "expected": "Date range와 '8 traces found. A representative set will be auto-selected using intelligent sampling.' 안내가 보이고, 'Setup incomplete: Assign the Foundry project's managed identity the Monitoring Reader role on Application Insights…' 경고가 함께 보였습니다. Resolve는 역할 할당 절차로 이어질 수 있어 권한이 없으면 운영자에게 요청하세요. 이 캡처 뒤에 운영자가 역할을 부여한 상태로 다음 단계를 진행했습니다.",
   "image": "assets/ignite/screenshots/ko/28-evaluator-context-warning.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Add context",
     "x": 206,
     "y": 462,
     "width": 126,
     "height": 31
    },
    {
     "label": "트레이스 사용 체크",
     "x": 182,
     "y": 508,
     "width": 293,
     "height": 31
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
     "x": 709,
     "y": 621,
     "width": 65,
     "height": 38
    }
   ]
  },
  {
   "id": "29-evaluator-rubric-generated",
   "group": "evaluator",
   "title": "Generate rubric · 루브릭 자동 생성",
   "action": "Generate rubric을 누르고 기다립니다.",
   "expected": "오른쪽에 'Generated rubric (8 dimensions)'가 나옵니다. 각 차원은 1·3·5점 기준을 가지며 지시문의 '최대 5문장·한국어·읽기와 웹 조회만' 규칙이 korean_only_output, max_five_sentences 같은 차원에 반영됐습니다. Pass score threshold는 0.5이고 'Rubric evaluator created' 알림이 뜹니다. 차원 이름과 개수는 만들 때마다 달라질 수 있습니다.",
   "image": "assets/ignite/screenshots/ko/29-evaluator-rubric-generated.png",
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
     "label": "차원 목록",
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
   "title": "Save evaluator · 평가자 상세",
   "action": "차원을 검토한 뒤 Save evaluator를 누릅니다. 저장되면 평가자 상세 화면으로 이동합니다.",
   "expected": "Workshop answer quality(custom)가 Rubric-based, Quality·Agents, Turn·Conversation 수준, 전체 점수 [0-1], 차원 점수 [1-5], Target agent workshop-harness-agent, Dimensions (8)로 표시되고 Create evaluation·Edit 버튼이 있습니다.",
   "image": "assets/ignite/screenshots/ko/30-evaluator-saved.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "평가자 이름",
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
   "action": "평가자 상세의 Create evaluation을 누릅니다. Target은 Agent, 목록에서 workshop-harness-agent를 고르고 Next를 누릅니다.",
   "expected": "Target → Scope → Data → Criteria → Review 5단계 마법사가 열립니다. Agent·Model·Dataset 중 평가 대상을 고를 수 있습니다. 평가자 상세에서 시작했으므로 내가 만든 평가자(workshop-answer-quality)가 4단계에서 미리 선택된 채로 나타납니다.",
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
     "label": "Agent 선택",
     "x": 297,
     "y": 202,
     "width": 109,
     "height": 31
    },
    {
     "label": "에이전트 목록",
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
   "action": "이 실습은 Individual turns(기본값)로 두고 Next를 누릅니다.",
   "expected": "Individual turns(질문-응답 한 쌍)와 Full conversations(여러 턴 대화 전체) 선택지가 보입니다.",
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
   "title": "3/5 · Data · 합성 데이터 생성",
   "action": "Dataset source는 Synthetic generation으로 둡니다. Prompt(optional)에 생성 방향을 적고, Model(이 캡처: gpt-6.1-terra)과 Number of rows(15), 새 데이터셋 이름(workshop_harness_eval_set)을 확인한 뒤 Next를 누릅니다. Seed data(파일)는 쓰지 않았습니다.",
   "expected": "Synthetic generation·Existing dataset·Benchmarks(Preview)·Existing traces·Live traffic 다섯 가지가 보입니다. Model과 Number of rows에는 기본값(gpt-6.1-terra, 15)이 들어 있습니다. 새 데이터셋 이름은 입력한 값(workshop_harness_eval_set)이 이 단계에서는 보이지만 평가가 끝나면 목록에는 자동 생성 이름이 표시됩니다.",
   "image": "assets/ignite/screenshots/ko/33-eval-wizard-data.png",
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
   "title": "4/5 · Criteria · 평가자 선택",
   "action": "Judge model(이 캡처: gpt-5.4-mini)을 확인하고 Evaluator catalog에서 평가자를 고릅니다. 처음에는 Recommended 6개와 내가 만든 평가자가 선택돼 있습니다(Review selected (7)).",
   "expected": "All(49)·Recommended(6)·Built-in(48)·Custom(1) 보기와 'Create a custom evaluator' 버튼이 보입니다.",
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
     "label": "카탈로그 보기",
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
   "title": "Custom 평가자만 선택",
   "action": "Clear selection을 누르고 Custom(1) → All custom에서 Workshop answer quality만 체크한 뒤 Next를 누릅니다. 이 실습은 judge 호출을 줄이려고 하나만 골랐습니다.",
   "expected": "'Review selected (1)'로 바뀌고 카드에 Rubric 배지와 View rubric details 링크가 보입니다.",
   "image": "assets/ignite/screenshots/ko/35-eval-wizard-custom-selected.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Custom (1)",
     "x": 1085,
     "y": 254,
     "width": 93,
     "height": 31
    },
    {
     "label": "Workshop answer quality",
     "x": 776,
     "y": 375,
     "width": 230,
     "height": 31
    },
    {
     "label": "Review selected (1)",
     "x": 1324,
     "y": 318,
     "width": 174,
     "height": 31
    },
    {
     "label": "Next",
     "x": 648,
     "y": 450,
     "width": 57,
     "height": 45
    }
   ]
  },
  {
   "id": "36-eval-wizard-review",
   "group": "evaluation",
   "title": "5/5 · Review → Submit",
   "action": "Evaluation name에 workshop-harness-eval-1을 입력하고 Summary(Targets·Scope·Dataset·Evaluators)를 확인한 뒤 Submit을 누릅니다.",
   "expected": "Submit 뒤 잠시 지나면 평가 상세 화면으로 이동합니다.",
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
   "title": "평가 실행 상태",
   "action": "평가 상세 화면의 Evaluation runs 목록에서 Status를 확인합니다. 합성 데이터 생성 → 에이전트 실행 → 채점 순서로 진행됩니다.",
   "expected": "Status가 'In progress'이고 Overall score는 '-'입니다. 합성 데이터 생성 → 에이전트 실행 → 채점이 끝나는 데 이 예시는 약 7분이 걸렸습니다. 기다리는 동안 Traces에는 하네스 에이전트 실행이 쌓입니다.",
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
   "title": "평가 결과 · Evaluation runs",
   "action": "평가가 끝나면 Evaluation runs 목록에서 Status와 점수를 확인하고 실행 이름을 눌러 상세로 들어갑니다. 같은 평가에 Add run으로 실행을 추가해 비교할 수도 있습니다.",
   "expected": "Status는 Completed, P50·P95 latency는 18.9s·25.1s, Overall score와 workshop-answer-quality는 100%(15 / 15)로 표시됐고 Duration은 7m 16.87s였습니다. 질문 15개가 모두 점수를 받았습니다. Dataset 열에는 입력한 이름 대신 자동 생성된 'dgj_accb51'(Version 1.0)이 표시됩니다. 100%는 Pass 비율이며 점수 자체는 행마다 다릅니다.",
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
     "label": "점수 100% (12 / 12)",
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
   "title": "실행 상세 · 행별 결과",
   "action": "실행 이름을 눌러 Run details를 엽니다. Overall metric results와 Detailed metrics result 표를 확인합니다. 표를 오른쪽으로 스크롤하면 응답·도구 호출·Error 같은 열이 더 있습니다.",
   "expected": "Status는 Completed, Duration은 7m 16.87s, Evaluation progress의 Elapsed time은 4m 57.5s였습니다. 표에는 질문(query)별로 'Pass: 0.719', 'Pass: 0.750'처럼 점수가 있고 이 실행에는 Error 행이 없었습니다. 표를 오른쪽으로 스크롤하면 응답·도구 호출 같은 열이 더 있습니다. 호출 한도(TPM)가 낮은 배포로 돌린 이전 촬영에서는 일부 행이 rate_limit_exceeded 오류로 점수 없이 끝나 Partial이 되었으므로 Error 행이 있으면 배포 한도를 확인합니다.",
   "image": "assets/ignite/screenshots/ko/39-eval-run-details.png",
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
   "title": "행 상세 · 차원별 점수와 이유",
   "action": "표의 View details를 누르면 행마다 Detail rubric score가 열립니다. Details 탭에서 차원별 Score(1~5)·Result·Reason을 확인합니다. JSON 탭에서 원본을 볼 수 있습니다.",
   "expected": "이 예시는 전체 0.72/1.0(Pass)이고 korean_only_output 3, max_five_sentences 5, three_core_points_structure 3, topic_relevance_microsoft_foundry_summary 4, source_url_attached 5, grounded_claims_match_source 3, concise_no_unneeded_elaboration 4, general_quality 4였으며 차원마다 한국어 Reason이 적혀 있습니다.",
   "image": "assets/ignite/screenshots/ko/40-eval-row-details.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "전체 점수",
     "x": 262,
     "y": 156,
     "width": 136,
     "height": 69
    },
    {
     "label": "차원별 점수 표",
     "x": 255,
     "y": 262,
     "width": 1090,
     "height": 440
    },
    {
     "label": "Done",
     "x": 1285,
     "y": 807,
     "width": 61,
     "height": 45
    }
   ]
  },
  {
   "id": "41-agent-optimize",
   "group": "optimize",
   "title": "Optimize 탭 소개",
   "action": "에이전트의 Optimize 탭을 엽니다. 이 화면은 Prompt 에이전트 workshop-assistant의 Optimize 탭입니다.",
   "expected": "Optimize가 지시문·스킬·도구 설명·모델 선택을 바꿔 후보를 만들고 평가 기준으로 순위를 매기며, 후보를 승격하기 전까지 에이전트는 바뀌지 않는다는 안내가 보입니다. 화면의 tax agent 75.0 → 92.5(+17.5)는 제품 예시이며 내 에이전트의 결과가 아닙니다.",
   "image": "assets/ignite/screenshots/ko/41-agent-optimize.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Optimize 탭",
     "x": 649,
     "y": 100,
     "width": 90,
     "height": 31
    },
    {
     "label": "제품 예시",
     "x": 579,
     "y": 339,
     "width": 316,
     "height": 31
    },
    {
     "label": "승격 안내",
     "x": 579,
     "y": 513,
     "width": 702,
     "height": 28
    },
    {
     "label": "Optimize 버튼",
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
   "title": "Optimize 시작 메뉴",
   "action": "Optimize 버튼을 누르면 Choose a goal(Improve quality·Reduce cost), Fix issues, Learn from past activity 메뉴가 열립니다. 이 실습은 Improve quality를 고릅니다.",
   "expected": "Choose a goal 아래 Improve quality와 Reduce cost, 그 아래 Fix issues(선택한 인사이트 기준)와 Learn from past activity(최근 트레이스 기준)가 보입니다. 공식 문서는 포털 최적화를 Copilot 하네스를 쓰지 않는 Prompt Agent 대상으로 안내하므로 이 실습은 workshop-assistant로 진행했고, 하네스 에이전트로 제출하는 것은 확인하지 못했습니다.",
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
   "title": "Optimize 마법사 · Target",
   "action": "Optimize → Choose a goal → Improve quality를 고르면 마법사가 열립니다. Target에서 Agent·Version, Optimization approach(Auto), Optimization model, Max candidates, Evaluation model을 확인하고 Next를 누릅니다.",
   "expected": "에이전트와 최신 버전이 채워져 있고 Auto, Optimization model, Max candidates 2, Evaluation model이 보입니다. 오른쪽 안내는 후보를 점수로 순위 매기고, 적용하기 전에 확인하라고 설명합니다.",
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
   "title": "Optimize 마법사 · Data 준비 방법",
   "action": "Data에서 Generate data(운영 트레이스로 만들기)와 Select dataset and criteria(기존 데이터셋 고르기) 중 하나를 고릅니다. Generate data는 먼저 'Checking for traces...'로 트레이스를 확인하므로 이 실습은 실습 8에서 만든 데이터셋을 쓰는 Select dataset and criteria를 선택합니다.",
   "expected": "Generate data 영역에 'Checking past agent traces' 확인 안내가 뜨고 Date range·Maximum traces 설정이 보이며, 아래에 Select dataset and criteria 옵션이 있습니다. 트레이스가 부족하면 'Insufficient traces' 안내가 나올 수 있습니다.",
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
     "label": "트레이스 확인 안내",
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
   "title": "Optimize 마법사 · 데이터셋 선택",
   "action": "Select dataset and criteria를 고르고 실습 8의 합성 데이터셋(dgj_…)을 선택합니다. sys-evalartifacts-…는 시스템 산출물이라 고르지 않습니다. 'Verifying dataset' 확인이 끝나면 Next를 누릅니다.",
   "expected": "선택한 행과 오른쪽 Preview에 데이터셋 이름이 보이고, 검증이 끝나면 Next가 켜집니다.",
   "image": "assets/ignite/screenshots/ko/45-optimize-wizard-dataset.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "합성 데이터셋(dgj_…)",
     "x": 707,
     "y": 255,
     "width": 124,
     "height": 31
    },
    {
     "label": "데이터셋 검증 안내",
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
   "title": "Optimize 마법사 · 평가자 선택",
   "action": "Criteria의 Select evaluators 목록에서 Custom only가 켜진 상태로 실습 8에서 만든 평가자를 체크합니다.",
   "expected": "Custom: Rubric-based 유형의 내 평가자가 한 줄 보입니다.",
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
     "label": "내 평가자",
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
   "title": "평가자 Threshold 설정",
   "action": "평가자를 체크하면 Configure 대화상자가 열립니다. Threshold 기본값 0.5를 확인하고 Apply를 누른 뒤 Next를 누릅니다.",
   "expected": "Threshold 슬라이더와 Apply 버튼이 보입니다.",
   "image": "assets/ignite/screenshots/ko/47-optimize-evaluator-threshold.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Threshold",
     "x": 438,
     "y": 402,
     "width": 474,
     "height": 101
    },
    {
     "label": "Apply",
     "x": 1017,
     "y": 531,
     "width": 59,
     "height": 41
    }
   ]
  },
  {
   "id": "48-optimize-wizard-review",
   "group": "optimize",
   "title": "Optimize 마법사 · Review와 예상 비용",
   "action": "Review에서 Estimated cost(Minimum·Estimated·Maximum)와 Target·Dataset·Criteria 요약을 확인하고 Submit을 누릅니다.",
   "expected": "예상 비용은 가격표 기준 추정치이며 실제 사용량에 따라 달라집니다. 제출하면 최적화 실행이 시작됩니다.",
   "image": "assets/ignite/screenshots/ko/48-optimize-wizard-review.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "예상 비용",
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
   "title": "최적화 실행 진행 중",
   "action": "Submit하면 Optimize 탭 목록에 새 실행(opt_…)이 In progress로 나타납니다. 완료까지 몇 분 걸리므로 목록을 새로 고쳐 확인합니다.",
   "expected": "Run ID, Strategy(Improve quality), Status(In progress), Baseline(Version 2)이 보입니다. 점수 칸은 완료될 때까지 '--'입니다.",
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
   "title": "최적화 완료 · 점수 확인",
   "action": "Status가 Succeeded가 되면 Candidates 수, Baseline score, Best score와 증가분을 확인합니다.",
   "expected": "이 예시는 5m 52s 뒤 Succeeded가 됐고 Candidates 2, Baseline score 0.761, Best score 0.761(±0.000)로 개선이 없었습니다. 점수·소요 시간은 실행마다 다르며, Promoted는 비어 있어 에이전트는 바뀌지 않았습니다.",
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
   "title": "실행 상세 · 후보 점수 비교",
   "action": "Run ID를 눌러 Improvement, Run overview, Score comparison, Candidate results를 확인합니다. 이 실습은 Promote candidate를 누르지 않습니다.",
   "expected": "Improvement 카드에 'No improvement'가 표시되고 Promote candidate 버튼은 비활성입니다. baseline 0.761, candidate_1 0.725, candidate_2 0.688이 비교되고 Total tokens는 272.3K였습니다. 후보 점수가 baseline보다 낮아 baseline이 Best입니다. 이런 결과도 정상이며 개선이 없으면 승격하지 않습니다. 후보 행의 View changes로 바뀐 내용(System prompt)을 볼 수 있습니다.",
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
   "title": "후보가 바꾼 내용 보기",
   "action": "Improvement 카드의 View changes 또는 후보 행의 View changes를 누르면 구성(JSON) 차이가 나란히 표시됩니다. 닫기만 하고 승격하지 않습니다.",
   "expected": "이 예시에서는 최고 점수가 baseline이라 'Comparing baseline against baseline configuration.'으로 같은 구성이 양쪽에 보입니다. 후보 행의 View changes에서는 System prompt 같은 바뀐 부분을 볼 수 있습니다.",
   "image": "assets/ignite/screenshots/ko/52-optimize-view-changes.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Baseline",
     "x": 242,
     "y": 292,
     "width": 88,
     "height": 31
    },
    {
     "label": "Candidate",
     "x": 801,
     "y": 292,
     "width": 199,
     "height": 31
    }
   ]
  },
  {
   "id": "53-manage-fleet",
   "group": "fleet",
   "title": "Manage → Fleet 개요 (Preview)",
   "action": "상단 Manage를 누르고 왼쪽 Fleet을 엽니다. 구독·리소스 그룹·프로젝트 범위와 기간(Last Day·7D·1M·3M)을 바꿔 봅니다.",
   "expected": "Activity(에이전트 실행 수), Consumption(토큰), Estimated cost, Assets with policy violations 카드와 오류·지연·비용 증가·정책 위반 상위 목록이 보입니다. 아래 표는 Projects·Agents·Models 탭으로 나뉩니다.",
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
     "label": "범위 필터",
     "x": 238,
     "y": 116,
     "width": 718,
     "height": 44
    },
    {
     "label": "기간",
     "x": 1357,
     "y": 122,
     "width": 176,
     "height": 31
    },
    {
     "label": "Activity 카드",
     "x": 523,
     "y": 195,
     "width": 260,
     "height": 71
    },
    {
     "label": "Projects 탭",
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
   "action": "Operations에서 Invocations·Tokens·Errors·Latency 탭과 기간을 바꿔 보며 지표를 확인합니다.",
   "expected": "Agent runs, Model requests, Tool calls 같은 운영 지표와 Highest error incidents·Highest agent run latency 목록이 보입니다. 이 캡처에서 Fleet은 132 agent runs, Operations는 Agent runs 72·Model requests 266으로 서로 달랐습니다. 집계 범위와 정의가 달라 같은 값으로 가정하지 않습니다.",
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
     "label": "지표 탭",
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
   "action": "Cost에서 기간을 7D로 두고 Estimated cost, Month-end forecast, Spend breakdown, Highest spend assets, Cost by project의 Group by를 확인합니다.",
   "expected": "Azure Cost Management 기반이며 최대 24시간 늦을 수 있다는 안내가 보입니다. 이 프로젝트는 'No estimated cost is available for the selected period.'로 표시됐습니다. 원인(모델 가격 정보 미제공·집계 지연 등)은 확인하지 못했습니다. 화면 안내대로 비어 있는 비용은 사용량 0이 아닙니다(missing costs are not zero usage).",
   "image": "assets/ignite/screenshots/ko/55-manage-cost.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "지연 안내",
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
   "action": "Compliance에서 Policy·Asset·Security posture·Data security and governance 탭과 범위 필터를 확인합니다. 정책 할당은 Manage in Azure Policy에서 하며 이 실습에서는 하지 않았습니다.",
   "expected": "'No policies assigned'가 표시됐습니다. 정책이 할당되지 않았다는 뜻이며 '준수'를 뜻하지 않습니다.",
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
     "label": "탭",
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
   "action": "AI Gateway 소개만 읽습니다. Add AI Gateway는 Azure API Management 리소스와 비용이 생길 수 있어 이 실습에서는 누르지 않았습니다.",
   "expected": "Azure API Management 기반이며 처음 100,000 API 요청은 무료, 프로젝트·에이전트별 토큰 한도, 외부 에이전트·도구 인벤토리 안내가 보입니다.",
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
     "label": "무료 안내",
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
  }
 ]
};
