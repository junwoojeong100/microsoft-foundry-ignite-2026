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
   "expected": "이 시점에는 실습 4에서 만든 workshop-assistant(Prompt·Text)만 있어 Harness 열이 '--'입니다. 하네스로 만든 에이전트는 이 열로 구분되며, 뒤의 '하네스 에이전트가 생긴 Agents 목록' 화면에서 확인합니다.",
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
   "expected": "실행(트레이스)마다 Trace ID, Status, Created at, Duration, Tokens(In/Out), Estimated cost가 한 줄로 보이고, 평가를 거친 트레이스는 Evaluation 열에 점수(workshop-answer-quality: 0.8처럼)가 붙습니다. 이 캡처는 평가·최적화 실습을 마친 뒤 다시 찍어서 평가 실행이 만든 트레이스가 위쪽에 쌓여 있습니다. 실습 10 직후에는 방금 실행한 몇 건만 보입니다. 위쪽의 'Cost Management Reader access' 안내는 청구 통화로 비용을 보려면 필요한 권한이 없을 때 나오는 안내입니다.",
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
   "action": "Data에서 Generate data(운영 트레이스로 만들기)와 Select dataset and criteria(기존 데이터셋 고르기) 중 하나를 고릅니다. Generate data는 먼저 'Checking for traces...'로 트레이스를 확인하므로 이 실습은 실습 12에서 만든 데이터셋을 쓰는 Select dataset and criteria를 선택합니다.",
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
   "action": "Select dataset and criteria를 고르고 실습 12의 합성 데이터셋(dgj_…)을 선택합니다. sys-evalartifacts-…는 시스템 산출물이라 고르지 않습니다. 'Verifying dataset' 확인이 끝나면 Next를 누릅니다.",
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
   "action": "Criteria의 Select evaluators 목록에서 Custom only가 켜진 상태로 실습 12에서 만든 평가자를 체크합니다.",
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
  },
  {
   "id": "58-knowledge-connect-resource",
   "group": "foundry-iq-connect",
   "title": "Knowledge 첫 화면 · Foundry IQ 리소스 연결",
   "action": "왼쪽 Create → Knowledge를 엽니다. 프로젝트에 연결된 Azure AI Search가 없으면 소개 영상 아래에 Foundry IQ resource와 Auth Type을 고르는 첫 화면이 나옵니다.",
   "expected": "Foundry IQ resource 선택 칸, Auth Type(기본값 API Key), Connect 버튼과 \"Don't see your resource? Create new resource\" 링크가 보입니다.",
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
   "title": "Create Foundry IQ resource 대화상자",
   "action": "목록에 리소스가 없을 때 Create new resource로 여는 대화상자입니다. 이 실습에서는 운영자가 검색 리소스를 미리 만들어 두었으므로 항목만 확인하고 Cancel을 누릅니다.",
   "expected": "Resource name, Subscription, Resource group, Region, Pricing tier(Serverless)와 추가 비용 동의 체크 상자가 보입니다. Create는 누르지 않습니다.",
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
     "label": "비용 동의 체크",
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
   "title": "검색 리소스와 Auth Type 선택",
   "action": "Foundry IQ resource에서 se02-lab-srch-rbvs를 고르고 Auth Type을 Project Managed Identity로 바꾼 뒤 Connect를 누릅니다. 이 실습의 검색 서비스는 키 인증을 꺼 두어, 기본값 API Key로 연결하면 에이전트 질문이 \"A user error occurred while executing a tool call.\" 오류로 끝났습니다.",
   "expected": "Foundry IQ resource에 se02-lab-srch-rbvs, Auth Type에 Project Managed Identity가 표시됩니다.",
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
   "title": "연결 완료 · Create a knowledge base",
   "action": "Connect를 누르면 몇 초 안에 연결됩니다. 아직 지식 베이스가 없으므로 Create a knowledge base를 누릅니다.",
   "expected": "Connection에 se02-lab-srch-rbvs가 표시되고 Create a knowledge base 버튼과 Manage connections 링크가 보입니다.",
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
   "title": "지식 베이스 이름·설명 입력",
   "action": "Name에 workshop-kb, Description에 \"컨토소 워크샵 실습용 가상 문서(일정·실습 환경 규칙·FAQ)\"를 입력합니다. 지식 소스가 아직 없으므로 Upload files를 눌러 샘플 문서를 올립니다.",
   "expected": "Knowledge sources 영역에 Add sources와 Upload files 버튼이 보입니다. Improve retrieval과 Encryption settings는 접힌 채로 둡니다.",
   "image": "assets/ignite/screenshots/ko/62-kb-create-form.png",
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
   "title": "지식 소스 만들기 · 임베딩 모델 선택",
   "action": "Upload files에서 assets/foundry-iq-sample의 문서 3개를 고르면 Create a knowledge source 대화상자가 열립니다. Embedding model은 필수이며, 이 프로젝트에는 임베딩 배포가 text-embedding-ada-002 하나뿐이라 처음부터 선택되어 있을 수 있습니다. 이 화면은 선택을 지운 뒤 목록을 연 모습이며, 비어 있으면 Deployments에서 text-embedding-ada-002를 고릅니다.",
   "expected": "선택한 파일 3개와 이름(ks-file-NNN)이 보이고, Embedding model 목록의 Deployments에 배포한 임베딩 모델이 나타납니다.",
   "image": "assets/ignite/screenshots/ko/63-source-embedding-model.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "업로드할 파일 3개",
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
   "title": "지식 소스 만들기 · Create",
   "action": "Name은 기본값을 그대로 두고 Advanced settings는 건드리지 않습니다. Embedding model이 선택된 것을 확인하고 Create를 누릅니다.",
   "expected": "Embedding model에 text-embedding-ada-002(Standard deployment)가 선택되어 있고 Create 버튼이 활성입니다.",
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
   "title": "파일 업로드·처리 진행",
   "action": "Create를 누르면 지식 소스가 목록에 추가되고 파일이 업로드됩니다. Status가 Active로 바뀔 때까지 기다립니다.",
   "expected": "목록의 Status가 Loading...이고 오른쪽 아래에 \"Uploading files to ks-file-515 · 0 of 3 processed\" 안내가 보입니다. Improve retrieval 영역에 \"Chat completions model is required\" 안내가 잠시 보이지만 Status가 Active가 되면 사라지며, 이 실습에서는 채팅 모델을 고르지 않아도 저장됩니다.",
   "image": "assets/ignite/screenshots/ko/65-source-uploading.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "지식 소스",
     "x": 577,
     "y": 817,
     "width": 77,
     "height": 28
    },
    {
     "label": "Status(Loading...)",
     "x": 928,
     "y": 816,
     "width": 79,
     "height": 28
    },
    {
     "label": "업로드 진행 안내",
     "x": 1288,
     "y": 802,
     "width": 292,
     "height": 82
    },
    {
     "label": "Chat completions model 필수 안내",
     "x": 596,
     "y": 478,
     "width": 217,
     "height": 28
    }
   ]
  },
  {
   "id": "66-kb-saved",
   "group": "foundry-iq-kb",
   "title": "지식 베이스 저장",
   "action": "상태가 Active가 된 것을 확인하고 Save knowledge base를 누릅니다. 저장되면 제목이 지식 베이스 이름으로 바뀌고 Use in an agent 버튼이 나타납니다.",
   "expected": "제목 workshop-kb와 Save·Use in an agent·More options 버튼, 지식 소스 ks-file-515(3 files, File, Active)가 보입니다.",
   "image": "assets/ignite/screenshots/ko/66-kb-saved.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "지식 베이스 이름",
     "x": 274,
     "y": 70,
     "width": 116,
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
     "label": "지식 소스 Active",
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
   "title": "에이전트 만들기 · 기본 툴박스 제거",
   "action": "모델 Playground에서 지시문을 입력하고 Save as agent로 workshop-iq-agent를 만듭니다(실습 4와 같은 방법). 새 에이전트에는 Web search가 든 툴박스가 자동으로 붙으므로 Actions → Remove로 제거합니다.",
   "expected": "workshop-iq-agent가 Version 1로 만들어지고 지시문이 입력되어 있습니다. 툴박스의 Actions 메뉴에 Remove가 보입니다.",
   "image": "assets/ignite/screenshots/ko/67-iq-agent-remove-toolbox.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "에이전트 이름",
     "x": 274,
     "y": 70,
     "width": 167,
     "height": 28
    },
    {
     "label": "지시문",
     "x": 244,
     "y": 332,
     "width": 451,
     "height": 112
    },
    {
     "label": "툴박스 Actions",
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
   "action": "에이전트의 Knowledge 영역에서 Add를 누르고 Connect to Foundry IQ를 고릅니다.",
   "expected": "Add 메뉴에 Connect to Foundry IQ 항목이 보입니다.",
   "image": "assets/ignite/screenshots/ko/68-iq-agent-knowledge-add-menu.png",
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
     "y": 697,
     "width": 176,
     "height": 32
    }
   ]
  },
  {
   "id": "69-iq-agent-connect-dialog",
   "group": "foundry-iq-agent",
   "title": "지식 베이스 연결",
   "action": "Connection은 se02-lab-srch-rbvs 그대로 두고 Knowledge base에서 workshop-kb를 골라 Connect를 누릅니다.",
   "expected": "Connection se02-lab-srch-rbvs, Knowledge base workshop-kb가 선택되고 Connect 버튼이 활성입니다.",
   "image": "assets/ignite/screenshots/ko/69-iq-agent-connect-dialog.png",
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
   "title": "에이전트 저장 · Version 2",
   "action": "Knowledge 영역에 지식 베이스가 보이면 Save를 눌러 Version 2로 저장합니다.",
   "expected": "Version이 2로 바뀌고 Save가 비활성이 되며, Knowledge에 workshop-kb가 들어 있습니다.",
   "image": "assets/ignite/screenshots/ko/70-iq-agent-knowledge-saved.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Version",
     "x": 1019,
     "y": 73,
     "width": 182,
     "height": 22
    },
    {
     "label": "Save 비활성",
     "x": 1208,
     "y": 68,
     "width": 56,
     "height": 32
    },
    {
     "label": "연결된 지식 베이스",
     "x": 270,
     "y": 630,
     "width": 79,
     "height": 20
    }
   ]
  },
  {
   "id": "71-iq-answer-schedule",
   "group": "foundry-iq-answer",
   "title": "질문 1 · 일정과 장소(문서 하나)",
   "action": "New chat에서 질문을 보냅니다. 이 실습의 질문: 워크샵은 몇 시에 시작하고 점심은 어디서 먹나요?",
   "expected": "답변에 시작 시각(오전 9시 30분)과 점심 장소(3층 라운지), 근거 문서 이름 01-workshop-overview.md가 나옵니다(답변 문구는 실행마다 조금 다를 수 있습니다). 응답 아래에 gpt-6.1-terra 3s 2028t 칩과 지식 베이스 도구 호출이 보입니다.",
   "image": "assets/ignite/screenshots/ko/71-iq-answer-schedule.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "질문",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "응답 정보(모델·시간·토큰·도구)",
     "x": 760,
     "y": 349,
     "width": 683,
     "height": 24
    },
    {
     "label": "지식 베이스 도구",
     "x": 1046,
     "y": 353,
     "width": 113,
     "height": 16
    }
   ]
  },
  {
   "id": "72-iq-answer-rules",
   "group": "foundry-iq-answer",
   "title": "질문 2 · 여러 문서를 함께 사용",
   "action": "New chat에서 질문을 보냅니다. 이 실습의 질문: 참가자가 배포할 모델과 TPM 한도는 무엇이고, 429 오류가 나면 어떻게 해야 하나요?",
   "expected": "배포 모델·TPM 한도와 429 오류 대응이 한 답변에 합쳐지고 문장마다 근거 번호가 붙습니다. 두 내용은 샘플 문서 02-lab-environment-rules.md와 03-support-and-faq.md에 나뉘어 있습니다. 응답 아래에 gpt-6.1-terra 3s 2149t 칩과 지식 베이스 도구 호출이 보입니다.",
   "image": "assets/ignite/screenshots/ko/72-iq-answer-rules.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "질문",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "응답 정보(모델·시간·토큰·도구)",
     "x": 760,
     "y": 389,
     "width": 683,
     "height": 24
    },
    {
     "label": "지식 베이스 도구",
     "x": 1046,
     "y": 393,
     "width": 113,
     "height": 16
    }
   ]
  },
  {
   "id": "73-iq-answer-not-found",
   "group": "foundry-iq-answer",
   "title": "질문 3 · 문서에 없는 내용",
   "action": "New chat에서 질문을 보냅니다. 이 실습의 질문: 컨토소 교육센터의 주차 요금은 얼마인가요?",
   "expected": "문서에 없는 내용은 \"지식 베이스에서 찾지 못했습니다.\"라고 답합니다(뒤에 확인한 문서 이름이 붙는 등 문구는 실행마다 조금 다를 수 있습니다). 응답 아래에 gpt-6.1-terra 5s 1289t 칩과 지식 베이스 도구 호출이 보입니다.",
   "image": "assets/ignite/screenshots/ko/73-iq-answer-not-found.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "질문",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "응답 정보(모델·시간·토큰·도구)",
     "x": 760,
     "y": 349,
     "width": 683,
     "height": 24
    },
    {
     "label": "지식 베이스 도구",
     "x": 1046,
     "y": 353,
     "width": 113,
     "height": 16
    }
   ]
  },
  {
   "id": "74-iq-traces-list",
   "group": "foundry-iq-traces",
   "title": "Traces · 지식 베이스 질문 실행 목록",
   "action": "에이전트의 Traces 탭을 엽니다. 질문을 보낸 뒤 트레이스가 도착하기까지 몇 분 걸릴 수 있으며, 처음에는 Loading...이 보입니다. 같은 이름으로 전에 실행한 기록이 있으면 함께 보입니다.",
   "expected": "방금 보낸 질문이 Trace ID·Status(Completed)·Created at·Duration·Tokens가 있는 줄로 맨 위에 쌓입니다.",
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
   "title": "Trace 상세 · 지식 베이스 도구 호출",
   "action": "성공한 트레이스의 Trace ID를 눌러 상세를 엽니다. Trajectories에서 에이전트 호출 아래의 단계를 확인합니다.",
   "expected": "Invoke Agent 아래에 Execute Tool(지식 베이스 knowledge_base_retrieve 호출)과 Chat(gpt-6.1-terra) 단계가 보이고, 오른쪽에 지시문·질문·도구 응답이 보입니다.",
   "image": "assets/ignite/screenshots/ko/75-iq-trace-detail.png",
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
     "label": "지식 베이스 도구 호출",
     "x": 279,
     "y": 220,
     "width": 345,
     "height": 20
    },
    {
     "label": "모델 호출",
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
   "title": "툴박스 안의 Web search · Grounding with Bing 안내",
   "action": "workshop-web-agent를 만들면(실습 4와 같은 방법) Web search가 든 workshop-web-agent-toolbox가 자동으로 붙습니다. 도구 옆 정보(i) 버튼을 눌러 안내를 읽습니다.",
   "expected": "\"Web search uses Grounding with Bing, which has additional costs and terms … Customer data will flow outside the Azure compliance boundary.\" 안내가 보입니다.",
   "image": "assets/ignite/screenshots/ko/76-web-toolbox-info.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "툴박스",
     "x": 244,
     "y": 601,
     "width": 427,
     "height": 44
    },
    {
     "label": "Web search 도구 정보(i)",
     "x": 445,
     "y": 684,
     "width": 24,
     "height": 24
    },
    {
     "label": "Grounding with Bing 안내",
     "x": 444,
     "y": 572,
     "width": 264,
     "height": 106
    }
   ]
  },
  {
   "id": "77-web-toolbox-answer",
   "group": "web-iq-toolbox",
   "title": "툴박스 경로(Grounding with Bing)로 같은 질문",
   "action": "Version 1(툴박스의 Web search) 상태에서 질문을 보냅니다. 이 실습의 질문: Microsoft Ignite 2026에서 발표된 Microsoft IQ가 무엇인지 최신 공식 소식을 바탕으로 알려 주세요.",
   "expected": "웹 검색 도구를 거쳐 한국어로 답하고 출처가 붙습니다. 응답 아래에 gpt-6.1-terra 30s 4070t 칩과 호출한 도구가 보입니다.",
   "image": "assets/ignite/screenshots/ko/77-web-toolbox-answer.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "질문",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "답변과 출처",
     "x": 760,
     "y": 275,
     "width": 800,
     "height": 92
    },
    {
     "label": "응답 정보(모델·시간·토큰·도구)",
     "x": 760,
     "y": 407,
     "width": 729,
     "height": 24
    }
   ]
  },
  {
   "id": "78-web-agent-add-tool-menu",
   "group": "web-iq-direct",
   "title": "Tools → Add → Web search",
   "action": "툴박스를 제거한 뒤 Tools 영역의 Add를 누릅니다. Most popular 목록의 Web search를 고르면 툴박스 없이 에이전트에 바로 추가됩니다.",
   "expected": "Add 메뉴에 Web search, Code interpreter, Add tools, Create toolbox, Browse toolboxes가 보입니다.",
   "image": "assets/ignite/screenshots/ko/78-web-agent-add-tool-menu.png",
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
   "title": "Web search 직접 추가 · 안내",
   "action": "Tools에 Web search가 직접 추가된 것을 확인하고 정보(i) 버튼으로 안내를 읽습니다. Save를 눌러 Version 2로 저장합니다.",
   "expected": "Tools에 툴박스 없이 Web search가 있고, \"When you connect to any non-Foundry tool, your Customer Data may be sent outside the Azure compliance boundary …\" 안내와 활성화된 Save 버튼이 보입니다.",
   "image": "assets/ignite/screenshots/ko/79-web-agent-direct-tool.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "직접 추가한 Web search 도구",
     "x": 244,
     "y": 661,
     "width": 451,
     "height": 57
    },
    {
     "label": "Web search 정보(i)",
     "x": 371,
     "y": 669,
     "width": 24,
     "height": 24
    },
    {
     "label": "비공식 도구 안내",
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
   "title": "직접 추가한 Web search 도구로 질문",
   "action": "Version 2(Web search 직접 추가)에서 New chat을 누르고 같은 질문을 보냅니다. 이 실습의 질문: Microsoft Ignite 2026에서 발표된 Microsoft IQ가 무엇인지 최신 공식 소식을 바탕으로 알려 주세요.",
   "expected": "웹에서 확인한 내용을 한국어로 답하고 출처 링크가 붙습니다. 응답 아래에 gpt-6.1-terra 6s 15512t 칩과 호출한 도구가 보입니다.",
   "image": "assets/ignite/screenshots/ko/80-web-direct-answer.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "질문",
     "x": 777,
     "y": 228,
     "width": 766,
     "height": 20
    },
    {
     "label": "답변과 출처",
     "x": 760,
     "y": 275,
     "width": 800,
     "height": 152
    },
    {
     "label": "응답 정보(모델·시간·토큰·도구)",
     "x": 760,
     "y": 467,
     "width": 541,
     "height": 24
    }
   ]
  },
  {
   "id": "81-hosted-agents-list",
   "group": "hosted-find",
   "title": "Agents 목록에서 Hosted 에이전트 찾기",
   "action": "왼쪽 Create → Agents를 엽니다. 운영자가 미리 배포해 둔 workshop-hosted-agent 행에서 Type 열을 확인하고 이름을 눌러 엽니다.",
   "expected": "Type 열에 Hosted 배지, Status에 Running이 표시되고 Interaction type·Harness 열은 '--'입니다. Prompt 에이전트와 달리 코드를 ZIP으로 올려 만든 에이전트라서 화면에서 지시문이나 도구를 고쳐 만드는 것이 아니라 목록에서 열어 시험·관찰합니다.",
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
   "title": "Hosted 에이전트 Playground (세션 시작 전)",
   "action": "에이전트를 열면 Playground가 열립니다. 왼쪽 Setup에서 Agent info, Code asset, Protocols를 펼쳐 보고 오른쪽 Log stream이 'Session not started'인 것을 확인합니다.",
   "expected": "Agent info의 Kind가 hosted이고 Code asset에 code.zip, Protocols에 responses · v2.0.0이 보입니다. 모델·Instructions·Tools를 고르는 칸이 없는 것이 Prompt 에이전트의 Playground와 다릅니다(모델 선택과 지시문은 올려 둔 코드가 정합니다).",
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
   "title": "Playground에서 메시지 보내기",
   "action": "Message the agent…에 '안녕하세요! 한 문장으로, 당신은 무엇을 할 수 있나요?'를 입력해 보냅니다. 응답이 오면 오른쪽 Log stream에 흐르는 컨테이너 로그와 응답 아래의 Traces 링크를 확인합니다.",
   "expected": "응답이 한 문장으로 옵니다. 첫 메시지는 세션(컨테이너)을 새로 시작하느라 약 10초 걸렸고, 같은 대화에서 이어 묻는 메시지는 몇 초였습니다. Log stream에는 'Session: …' 식별자와 Inbound POST /responses 같은 서버 로그가 보입니다. 'experimental class' 경고 등은 정상입니다.",
   "image": "assets/ignite/screenshots/ko/83-hosted-playground-chat.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "보낸 메시지",
     "x": 580,
     "y": 217,
     "width": 500,
     "height": 38
    },
    {
     "label": "에이전트 응답",
     "x": 580,
     "y": 265,
     "width": 500,
     "height": 80
    },
    {
     "label": "Traces 링크",
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
   "title": "Details: 상태·버전·에이전트 ID·엔드포인트",
   "action": "Details 탭에서 Agent configuration(Status, Active version), Identity & access(Entra agent identity), Endpoints(Responses protocol)를 확인합니다.",
   "expected": "Status는 Running, Active version은 Latest(Version 1)입니다. Hosted 에이전트마다 전용 Entra agent identity가 만들어지고, Responses protocol 엔드포인트는 'People with Azure RBAC permissions can access'로 표시됩니다(권한이 있는 사람만 호출).",
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
   "title": "Traces 목록 (Trace view)",
   "action": "Traces 탭을 엽니다. 방금 보낸 메시지의 trace는 보통 1분 안에 올라옵니다(안 보이면 잠시 뒤 새로고침).",
   "expected": "메시지 한 번에 trace가 2개 생깁니다. 토큰이 0인 긴 trace(플랫폼의 invoke_agent, 세션 시작이 포함되면 약 8초)와 토큰이 있는 짧은 trace(모델 호출, 1~2초, 입력 50~95·출력 6~29 토큰). Trace view·Conversation view·Session view로 볼 수 있습니다.",
   "image": "assets/ignite/screenshots/ko/85-hosted-traces-list.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Session view 등 보기 탭",
     "x": 484,
     "y": 211,
     "width": 108,
     "height": 30
    },
    {
     "label": "Tokens (In)·(Out) 열",
     "x": 889,
     "y": 458,
     "width": 150,
     "height": 32
    },
    {
     "label": "가장 최근 trace",
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
   "title": "Trace 상세: invoke_agent와 chat 스팬",
   "action": "토큰이 있는 trace의 Trace ID를 눌러 엽니다. 왼쪽 스팬 트리에서 chat 스팬을 보고 오른쪽 Input + Output을 확인합니다.",
   "expected": "'invoke_agent workshop-hosted-agent:1' 아래에 'chat gpt-6.1-terra-…' 스팬이 있고, Input에 코드에 적어 둔 Instructions와 User input, Output에 에이전트 답이 보입니다. trace는 Application Insights에서 읽어 오므로 읽기 권한이 필요합니다(이 환경에서는 참가자의 리소스 그룹 Contributor).",
   "image": "assets/ignite/screenshots/ko/86-hosted-trace-detail.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "invoke_agent 스팬",
     "x": 141,
     "y": 48,
     "width": 348,
     "height": 28
    },
    {
     "label": "chat 스팬(모델 호출)",
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
   "title": "Monitor 개요",
   "action": "Monitor 탭의 Overview에서 기간을 7D로 두고 Operational metrics, Agent runs, Token usage를 확인합니다.",
   "expected": "Total token usage와 Agent runs(실행 수), gpt-6.1-terra 토큰 사용량이 보입니다. Estimated cost는 '--'였고, 청구 통화 비용은 Cost Management Reader가 없어서 안내 배너만 보입니다.",
   "image": "assets/ignite/screenshots/ko/87-hosted-monitor.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "기간 선택",
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
   "action": "Monitor 개요를 아래로 내려 Hosting compute와 Hosting memory 차트를 확인합니다.",
   "expected": "Hosted 에이전트에만 있는 차트입니다. 이 화면에는 vCPU hours 0.73과 GiB hours 1.47이 막대로 보입니다. 세션이 끝난 뒤에야 사용량이 올라오므로 세션 직후에는 'No hosting compute data available'일 수 있습니다(촬영에서는 세션이 끝난 뒤 첫 점이 약 15분 뒤에 나타났습니다).",
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
   "title": "Continue in code: 코드로 호출하기",
   "action": "에이전트 화면 위쪽의 Continue in code를 누릅니다. Language에서 언어를 고르면 이 에이전트를 호출하는 샘플 코드가 나옵니다(Python 기준 azure-ai-projects).",
   "expected": "Project endpoint와 agent_name(workshop-hosted-agent)이 채워진 샘플이 보입니다. 실제 호출은 Azure CLI 등으로 로그인한 환경에서 합니다(이 실습에서는 보기만 합니다).",
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
     "label": "샘플 코드",
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
   "title": "Monitor → Cost (Preview) · 카드와 Cost by agent",
   "action": "왼쪽 Observe → Monitor를 열고 위쪽 탭에서 Cost를 누릅니다. 기간은 7D입니다. 카드 5개를 읽고 아래 Cost by agent 표에서 에이전트별 호출 수를 봅니다.",
   "expected": "'up to 24h delay'와 'Data is based on Azure Cost Management and may be up to 24h behind.'가 보입니다. Latest billed cost는 <$0.01(No project-tagged billed usage this month yet), Month-end forecast는 'Not enough billing history to forecast yet', Project budget은 'No project-level budget set'(Create a cost control 링크), Total token usage 692.6K, Cost per successful run은 데이터 없음이었습니다. Cost by agent의 Estimated token cost 열은 모두 '—'였고 비용이 비어 있어도 사용량 0이 아닙니다.",
   "image": "assets/ignite/screenshots/ko/90-cost-monitor-cost.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "지연 안내",
     "x": 850,
     "y": 143,
     "width": 300,
     "height": 28
    },
    {
     "label": "카드 5개",
     "x": 244,
     "y": 237,
     "width": 1332,
     "height": 150
    },
    {
     "label": "Create a cost control 링크",
     "x": 790,
     "y": 345,
     "width": 150,
     "height": 28
    },
    {
     "label": "Estimated cost · Token usage 전환",
     "x": 1332,
     "y": 420,
     "width": 228,
     "height": 34
    },
    {
     "label": "Cost by agent 표",
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
   "title": "Cost by agent · Token usage 보기",
   "action": "Cost by agent의 오른쪽 위 Token usage 버튼을 누릅니다. 비용 대신 에이전트별 토큰을 읽습니다.",
   "expected": "Input · Output · Cached · Total tokens · Share · Invocations · Tokens per run 열이 나옵니다. 이 프로젝트에서는 workshop-assistant가 98.8%였고 'Non-agent requests' 행은 에이전트에 연결되지 않은 호출(Not linked)입니다. 위 카드의 Total token usage와 표의 합계는 집계 범위가 달라 같지 않았습니다.",
   "image": "assets/ignite/screenshots/ko/91-cost-token-usage.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Token usage 선택",
     "x": 1455,
     "y": 420,
     "width": 104,
     "height": 34
    },
    {
     "label": "토큰 열",
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
     "label": "Non-agent requests 행",
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
   "title": "Monitor → Cost Control (Preview) · 예산 없음",
   "action": "같은 Monitor의 Cost Control 탭을 엽니다. 예산이 없으면 'No cost controls yet'이 보입니다. Create를 누릅니다.",
   "expected": "위쪽에 Project와 연결된 Application Insights가 표시되고 'Filters in Applies to'의 Project · Agent · Deployment · Session 칩이 있습니다.",
   "image": "assets/ignite/screenshots/ko/92-cost-control-empty.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Cost Control 탭",
     "x": 355,
     "y": 98,
     "width": 138,
     "height": 28
    },
    {
     "label": "연결된 Application Insights",
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
   "title": "Create cost control · 이름·범위·공유 방식",
   "action": "Cost control name에 workshop-cost-control을 입력합니다. Scope는 이 프로젝트로 자동 입력되고, How should the budget be shared?는 One budget for everything을 그대로 둡니다.",
   "expected": "이름은 주소(URL)에 쓰이며 만든 뒤 바꿀 수 없다는 안내가 있습니다. Scope에 'se02-lab · Project · foundry-se02-lab'과 '저장한 제어는 이 프로젝트 안에 머문다'는 안내가 보입니다. What does it apply to?는 프로젝트의 모든 사용량이 기본이며 Add filter로 좁힐 수 있습니다.",
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
     "label": "Scope(자동 입력)",
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
   "action": "Set the budget에서 Tokens를 고르고 Token types to count는 All token types, Token limit에 10M을 입력합니다. Resets는 Monthly 그대로 둡니다.",
   "expected": "'Use K, M, B, or T; e.g. 10M = 10,000,000 tokens.' 안내가 보입니다. Resets 아래에는 재설정 시각이 브라우저 시간대로 표시됩니다(이 화면은 GMT+9, UTC 매월 1일 0시). 시작·종료일은 기본값(오늘부터 석 달)이었습니다. Spending(달러) 선택은 하지 않았습니다.",
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
     "label": "시작·종료일",
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
   "title": "Threshold actions · 선택지만 확인",
   "action": "Threshold actions의 Add threshold를 눌러 Action 목록을 엽니다. Send alert와 Block usage 선택지만 확인하고 고르지 않습니다. Escape로 닫고 휴지통 버튼으로 이 행을 지웁니다.",
   "expected": "Send alert는 'Send a notification through Azure Event Grid.', Block usage는 'Block new eligible requests when the budget is reached.'입니다. 임계값은 50 · 75 · 80 · 90 · 100%입니다. 불완전한 행이 있으면 Create가 비활성화됩니다. 이 실습은 동작을 추가하지 않습니다.",
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
   "title": "Usage data · 연결된 Application Insights와 Create",
   "action": "Threshold actions를 비운 채 아래 Usage data에 프로젝트의 Application Insights가 선택돼 있는지 확인하고 Create를 누릅니다.",
   "expected": "'Usage is tracked in Application Insights without affecting requests.'라는 안내대로 동작이 없으면 사용량만 기록합니다. Usage data에는 'Connected to … (Application Insights)'와 Change 버튼이 보입니다. 연결이 없으면 Change로 고르거나 운영자에게 확인합니다.",
   "image": "assets/ignite/screenshots/ko/96-cost-control-usage-data.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Threshold actions 비움",
     "x": 470,
     "y": 552,
     "width": 880,
     "height": 120
    },
    {
     "label": "Usage data 연결",
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
   "title": "Cost Control 목록 · 새 예산",
   "action": "Create를 누르면 목록에 새 예산이 나타납니다. Applies to · Budget · Closest to limit · State 열을 읽습니다.",
   "expected": "Applies to는 se02-lab(Entire project), Budget은 '10,000,000 tokens / month · Per project', Closest to limit (estimated)는 '~0% · 0 of 10,000,000 tokens', State는 'On track · Estimated'였습니다. 아직 사용량이 없어 0%입니다.",
   "image": "assets/ignite/screenshots/ko/97-cost-control-created.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "새 예산 행",
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
   "title": "예산 상세 · Edit·Delete",
   "action": "행을 누르면 오른쪽에 상세 패널이 열립니다. Scope · Details · Usage this month를 읽습니다. 정리하려면 Delete를 누르고 확인합니다.",
   "expected": "Token limit 10,000,000 tokens · Token measurement Overall tokens · Budget period Monthly · Resets at · Budget per Project가 보이고 Usage this month는 'No usage yet this month'였습니다. 변경은 반영에 약 15분이 걸립니다.",
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
  },
  {
   "id": "99-webiq-resource-search",
   "group": "web-iq-resource",
   "title": "Azure Portal에서 Microsoft Web IQ 찾기",
   "action": "Azure Portal 위쪽 검색창에 Microsoft Web IQ를 입력합니다. Services의 Microsoft Web IQ resources를 선택합니다(Marketplace의 Microsoft Web IQ를 선택해도 만들기로 갑니다).",
   "expected": "검색 결과에 Services의 Microsoft Web IQ resources와 Marketplace의 Microsoft Web IQ가 보입니다. 보이지 않으면 운영자가 구독에 Microsoft.WebIQ 공급자를 등록해야 합니다.",
   "image": "assets/ignite/screenshots/ko/99-webiq-resource-search.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "검색창",
     "x": 559,
     "y": 1,
     "width": 458,
     "height": 38
    },
    {
     "label": "Microsoft Web IQ resources(Services)",
     "x": 547,
     "y": 121,
     "width": 494,
     "height": 42
    },
    {
     "label": "Microsoft Web IQ(Marketplace)",
     "x": 547,
     "y": 301,
     "width": 494,
     "height": 42
    }
   ]
  },
  {
   "id": "100-webiq-resource-list",
   "group": "web-iq-resource",
   "title": "Microsoft Web IQ resources · Create",
   "action": "Microsoft Web IQ resources 목록에서 + Create를 선택합니다. 처음에는 목록이 비어 있습니다.",
   "expected": "“No Microsoft Web IQ resources to display” 안내와 Create 단추가 보입니다. 필터의 Subscription은 워크샵 구독입니다.",
   "image": "assets/ignite/screenshots/ko/100-webiq-resource-list.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Create(위쪽)",
     "x": 16,
     "y": 132,
     "width": 104,
     "height": 40
    },
    {
     "label": "빈 목록 안내",
     "x": 607,
     "y": 532,
     "width": 387,
     "height": 36
    }
   ]
  },
  {
   "id": "101-webiq-create-basics",
   "group": "web-iq-resource",
   "title": "Create a Microsoft Web IQ resource · Basics",
   "action": "Subscription은 그대로 두고 Resource group에서 본인 RG(rg-se01)를 고릅니다. Name에는 운영자가 알려 준 이름 규칙의 이름(예: webiq-se02)을 입력합니다. Region은 Global로 고정입니다.",
   "expected": "Resource group rg-se01 · Name webiq-se02 · Region Global이 채워집니다. 위쪽 주황색 안내는 맨 아래 Terms of Use를 읽고 동의해야 만들 수 있다는 뜻입니다.",
   "image": "assets/ignite/screenshots/ko/101-webiq-create-basics.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Resource group",
     "x": 274,
     "y": 434,
     "width": 450,
     "height": 32
    },
    {
     "label": "Name",
     "x": 274,
     "y": 528,
     "width": 450,
     "height": 32
    },
    {
     "label": "Region(Global 고정)",
     "x": 274,
     "y": 567,
     "width": 450,
     "height": 32
    }
   ]
  },
  {
   "id": "102-webiq-create-terms",
   "group": "web-iq-resource",
   "title": "Warning·Terms 확인 후 Next",
   "action": "아래로 스크롤해 Warning과 Terms를 읽고 “I confirm I have read and understood the notice and warning above.” 확인란을 선택한 뒤 Next를 선택합니다.",
   "expected": "Web IQ에 보낸 데이터가 Azure 규정 준수·지역 경계 밖으로 나가고 Data Protection Addendum이 적용되지 않으며 비용이 든다는 경고와, 출처를 클릭할 수 있는 인용으로 표시하라는 등의 핵심 요구 사항이 보입니다.",
   "image": "assets/ignite/screenshots/ko/102-webiq-create-terms.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "핵심 요구 사항",
     "x": 24,
     "y": 406,
     "width": 700,
     "height": 152
    },
    {
     "label": "동의 확인란",
     "x": 275,
     "y": 742,
     "width": 448,
     "height": 26
    },
    {
     "label": "Next",
     "x": 116,
     "y": 852,
     "width": 88,
     "height": 32
    }
   ]
  },
  {
   "id": "103-webiq-create-review",
   "group": "web-iq-resource",
   "title": "Review + submit · Create",
   "action": "Tags 탭은 건너뛰고(Next) Review + submit에서 값을 확인한 뒤 Create를 선택합니다.",
   "expected": "Subscription · Resource group · Name · Resource group location(North Central US) 요약이 보이고 Basics와 Tags 탭에 초록 확인 표시가 있습니다. 마지막 탭 이름은 Review + create가 아니라 Review + submit입니다.",
   "image": "assets/ignite/screenshots/ko/103-webiq-create-review.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "검증 통과 표시",
     "x": 20,
     "y": 150,
     "width": 172,
     "height": 42
    },
    {
     "label": "입력값 요약",
     "x": 16,
     "y": 266,
     "width": 438,
     "height": 140
    },
    {
     "label": "Create",
     "x": 204,
     "y": 852,
     "width": 88,
     "height": 32
    }
   ]
  },
  {
   "id": "104-webiq-deployment-complete",
   "group": "web-iq-resource",
   "title": "배포 완료 · Go to resource",
   "action": "배포가 끝나면 Your deployment is complete가 나옵니다. Go to resource를 선택합니다.",
   "expected": "Your deployment is complete와 Deployment name·Resource group이 보입니다. Go to resource는 Web IQ 리소스가 아니라 리소스 그룹(rg-se01)을 엽니다. 목록에서 Microsoft Web IQ resource 형식의 항목을 선택합니다.",
   "image": "assets/ignite/screenshots/ko/104-webiq-deployment-complete.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Your deployment is complete",
     "x": 317,
     "y": 185,
     "width": 304,
     "height": 31
    },
    {
     "label": "Go to resource",
     "x": 338,
     "y": 406,
     "width": 95,
     "height": 21
    }
   ]
  },
  {
   "id": "105-webiq-resource-overview",
   "group": "web-iq-resource",
   "title": "Web IQ 리소스 · Go to Web IQ portal",
   "action": "리소스 그룹의 목록에서 Microsoft Web IQ resource 형식의 webiq-se02을 엽니다. Overview의 Go to Web IQ portal을 선택하면 새 탭이 열립니다.",
   "expected": "리소스 이름 webiq-se02 | Microsoft Web IQ, Location Global, “Manage this resource through the Microsoft Web IQ portal” 안내와 Go to Web IQ portal 단추가 보입니다.",
   "image": "assets/ignite/screenshots/ko/105-webiq-resource-overview.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "리소스 이름",
     "x": 54,
     "y": 72,
     "width": 336,
     "height": 40
    },
    {
     "label": "Location: Global",
     "x": 293,
     "y": 259,
     "width": 234,
     "height": 28
    },
    {
     "label": "Go to Web IQ portal",
     "x": 291,
     "y": 506,
     "width": 189,
     "height": 40
    }
   ]
  },
  {
   "id": "106-webiq-portal-select-resource",
   "group": "web-iq-portal",
   "title": "Web IQ 포털 · Azure 리소스 선택",
   "action": "Go to Web IQ portal을 누르면 “You’re leaving portal.azure.com” 안내가 나오고 Continue를 선택합니다. 같은 워크샵 계정을 고르면(Pick an account) Web IQ 포털이 Select an Azure Resource 창을 엽니다. Azure subscription과 Resource를 고르고 Finish를 선택합니다.",
   "expected": "Azure subscription에 워크샵 구독, Resource에 방금 만든 리소스(형식: 리소스 이름 - RG 이름)가 선택되고 Finish가 활성화됩니다. 이 창은 처음 연결할 때만 나옵니다. 테넌트 ID를 묻지 않았습니다. 사진의 리소스 이름 webiq-se02-lab은 촬영 환경의 예시이며, 실제 화면에는 방금 만든 리소스가 나옵니다.",
   "image": "assets/ignite/screenshots/ko/106-webiq-portal-select-resource.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Azure subscription",
     "x": 560,
     "y": 354,
     "width": 480,
     "height": 40
    },
    {
     "label": "Resource",
     "x": 560,
     "y": 446,
     "width": 480,
     "height": 40
    },
    {
     "label": "Finish",
     "x": 832,
     "y": 595,
     "width": 104,
     "height": 40
    }
   ]
  },
  {
   "id": "107-webiq-portal-ready",
   "group": "web-iq-portal",
   "title": "Web IQ 포털 · 설정 완료",
   "action": "“You’re ready to use WebIQ”가 나오면 Try it out을 선택해 Playground로 갑니다. Skip을 선택해도 됩니다.",
   "expected": "“Your setup is complete. Try a sample query in Playground or continue to the portal.” 안내가 보입니다. 이 단계에서 Web IQ 포털이 리소스용 AppID와 기본 프로필을 만듭니다. 사진의 리소스 이름 webiq-se02-lab은 촬영 환경의 예시이며, 실제 화면에는 방금 만든 리소스가 나옵니다.",
   "image": "assets/ignite/screenshots/ko/107-webiq-portal-ready.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "설정 완료 안내",
     "x": 568,
     "y": 246,
     "width": 298,
     "height": 40
    },
    {
     "label": "Try it out",
     "x": 824,
     "y": 615,
     "width": 104,
     "height": 40
    }
   ]
  },
  {
   "id": "108-webiq-playground-run",
   "group": "web-iq-portal",
   "title": "Playground · Run Request(HTTP 200)",
   "action": "왼쪽 위 프로필이 webiq-se02 - Default인지, API Key가 default인지, Verticals가 Web인지 확인하고 Run Request를 선택합니다. 오른쪽에서 Response를 봅니다.",
   "expected": "HTTP 200과 JSON 응답(webResults의 title·url·content·lastUpdatedAt)이 보입니다. 성공 응답은 리소스·구독·AppID가 올바르게 연결됐다는 뜻입니다. Code를 선택하면 같은 요청이 cURL·Python·JavaScript 코드로 나옵니다.",
   "image": "assets/ignite/screenshots/ko/108-webiq-playground-run.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "프로필(AppID)",
     "x": 13,
     "y": 77,
     "width": 269,
     "height": 38
    },
    {
     "label": "API Key: default",
     "x": 316,
     "y": 109,
     "width": 364,
     "height": 38
    },
    {
     "label": "Verticals",
     "x": 316,
     "y": 187,
     "width": 364,
     "height": 38
    },
    {
     "label": "Run Request",
     "x": 316,
     "y": 359,
     "width": 364,
     "height": 40
    },
    {
     "label": "HTTP 200 · 응답",
     "x": 1247,
     "y": 16,
     "width": 65,
     "height": 24
    }
   ]
  },
  {
   "id": "109-webiq-api-access",
   "group": "web-iq-portal",
   "title": "API access · 기본 API 키",
   "action": "왼쪽 메뉴에서 API access를 선택합니다. Authentication의 API keys 탭에서 default 키의 Copy API key 아이콘으로 키를 복사합니다. 키가 없으면 Create API Key로 만듭니다.",
   "expected": "Key Management & API access 화면에 Profile Name · AppID · Allowed Verticals · Per-vertical quota limits(Auto 2 QPS, All Others 15 QPS)와 default 키(Expires: Never)가 보입니다. 키 전체 값은 화면에 나오지 않으며 이 사진은 AppID와 키 일부를 가렸습니다.",
   "image": "assets/ignite/screenshots/ko/109-webiq-api-access.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "AppID(가림)",
     "x": 1141,
     "y": 123,
     "width": 375,
     "height": 28
    },
    {
     "label": "Per-vertical quota limits",
     "x": 316,
     "y": 265,
     "width": 169,
     "height": 28
    },
    {
     "label": "API keys 탭",
     "x": 316,
     "y": 442,
     "width": 69,
     "height": 52
    },
    {
     "label": "default 키",
     "x": 316,
     "y": 607,
     "width": 1256,
     "height": 65
    },
    {
     "label": "Copy API key",
     "x": 813,
     "y": 623,
     "width": 32,
     "height": 32
    }
   ]
  },
  {
   "id": "110-webiq-agent-remove-toolbox",
   "group": "web-iq-add",
   "title": "새 에이전트의 기본 툴박스 제거",
   "action": "새 에이전트 workshop-webiq-agent를 만들면(실습 4-1과 같은 방법) Web search가 든 툴박스가 자동으로 붙습니다. 툴박스의 Actions에서 Remove를 선택해 제거합니다.",
   "expected": "Tools에 workshop-webiq-agent-toolbox와 그 안의 Web search가 보이고 Actions 메뉴에 Remove가 있습니다.",
   "image": "assets/ignite/screenshots/ko/110-webiq-agent-remove-toolbox.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "툴박스",
     "x": 240,
     "y": 597,
     "width": 435,
     "height": 52
    },
    {
     "label": "Actions",
     "x": 667,
     "y": 607,
     "width": 32,
     "height": 32
    },
    {
     "label": "Remove",
     "x": 672,
     "y": 749,
     "width": 136,
     "height": 40
    }
   ]
  },
  {
   "id": "111-webiq-add-tools-menu",
   "group": "web-iq-add",
   "title": "Tools → Add → Add tools",
   "action": "툴박스를 제거한 뒤 Tools 영역의 Add를 누르고 Add tools를 선택합니다.",
   "expected": "Add 메뉴에 Web search · Code interpreter · Tool search · Add tools · Add skills · Create toolbox · Browse toolboxes가 보입니다.",
   "image": "assets/ignite/screenshots/ko/111-webiq-add-tools-menu.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Add",
     "x": 240,
     "y": 669,
     "width": 75,
     "height": 40
    },
    {
     "label": "Add tools",
     "x": 245,
     "y": 519,
     "width": 318,
     "height": 40
    }
   ]
  },
  {
   "id": "112-webiq-catalog-webiq",
   "group": "web-iq-add",
   "title": "Select a tool · Catalog · Web IQ",
   "action": "Select a tool 창에서 Catalog 탭을 선택하고 검색창에 Web IQ를 입력합니다. Web IQ(Remote MCP) 카드를 선택하고 Create를 누릅니다.",
   "expected": "Web IQ 카드(Microsoft Web IQ provides AI agents with up-to-date, accurate, and authoritative grounding content…, Remote MCP)가 선택돼 체크 표시가 있고 Create가 활성화됩니다. 함께 나온 Azure - Foundry IQ는 실습 6의 지식 연결용입니다.",
   "image": "assets/ignite/screenshots/ko/112-webiq-catalog-webiq.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Catalog 탭",
     "x": 297,
     "y": 142,
     "width": 72,
     "height": 40
    },
    {
     "label": "검색창",
     "x": 253,
     "y": 251,
     "width": 864,
     "height": 38
    },
    {
     "label": "Web IQ 카드",
     "x": 208,
     "y": 348,
     "width": 290,
     "height": 96
    },
    {
     "label": "Create",
     "x": 1226,
     "y": 758,
     "width": 76,
     "height": 40
    }
   ]
  },
  {
   "id": "113-webiq-connect-dialog",
   "group": "web-iq-add",
   "title": "Connect the Web IQ tool",
   "action": "Name(WebIQ)과 Remote MCP Server endpoint(https://api.microsoft.ai/v3/mcp)는 미리 채워져 있습니다. Credential의 x-apikey 값 칸에 Web IQ 포털에서 복사한 API 키를 붙여 넣고 Connect를 선택합니다.",
   "expected": "Authentication은 Key-based이고 Credential 이름이 x-apikey입니다. 키 값은 점으로 가려지며 이 사진에서도 흐리게 가렸습니다. Connect하면 Tools에 WebIQ (https://api.microsoft.ai/v3/mcp)가 나타납니다.",
   "image": "assets/ignite/screenshots/ko/113-webiq-connect-dialog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Name",
     "x": 442,
     "y": 352,
     "width": 716,
     "height": 38
    },
    {
     "label": "Remote MCP Server endpoint",
     "x": 442,
     "y": 420,
     "width": 716,
     "height": 38
    },
    {
     "label": "Credential 이름 x-apikey",
     "x": 441,
     "y": 550,
     "width": 108,
     "height": 28
    },
    {
     "label": "API 키 값(가림)",
     "x": 579,
     "y": 544,
     "width": 535,
     "height": 40
    },
    {
     "label": "Connect",
     "x": 993,
     "y": 613,
     "width": 87,
     "height": 40
    }
   ]
  },
  {
   "id": "114-webiq-approval-setting",
   "group": "web-iq-add",
   "title": "도구 승인 방식 · Always auto-approve all tools",
   "action": "Tools의 WebIQ ⋮(Actions)에서 Edit를 선택하면 Configure WebIQ 창이 열립니다. Approval setting을 Always auto-approve all tools로 바꾸고 Apply를 선택합니다.",
   "expected": "Approval setting 목록에 Never auto-approve tools(기본) · Always auto-approve all tools · Always auto-approve specific tools가 보입니다. 기본값이면 도구를 부를 때마다 승인이 필요합니다.",
   "image": "assets/ignite/screenshots/ko/114-webiq-approval-setting.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Approval setting",
     "x": 630,
     "y": 541,
     "width": 340,
     "height": 38
    },
    {
     "label": "Always auto-approve all tools",
     "x": 658,
     "y": 593,
     "width": 284,
     "height": 40
    }
   ]
  },
  {
   "id": "115-webiq-tool-saved",
   "group": "web-iq-add",
   "title": "저장 · Version 2",
   "action": "Save를 선택하면 에이전트가 Version 2로 저장됩니다.",
   "expected": "Tools에 WebIQ (https://api.microsoft.ai/v3/mcp) · Model Context Protocol (MCP)가 보이고 Version이 2이며 Save는 비활성화됩니다.",
   "image": "assets/ignite/screenshots/ko/115-webiq-tool-saved.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "WebIQ 도구",
     "x": 240,
     "y": 657,
     "width": 459,
     "height": 60
    },
    {
     "label": "Version 2",
     "x": 1015,
     "y": 69,
     "width": 190,
     "height": 30
    },
    {
     "label": "Save(비활성)",
     "x": 1204,
     "y": 64,
     "width": 64,
     "height": 40
    }
   ]
  },
  {
   "id": "116-webiq-answer",
   "group": "web-iq-test",
   "title": "Web IQ 도구로 질문",
   "action": "New chat에서 이 실습의 질문을 보냅니다: Microsoft Ignite 2026에서 발표된 Microsoft IQ가 무엇인지 최신 공식 소식을 바탕으로 알려 주세요.",
   "expected": "웹에서 가져온 내용을 한국어로 답하고 출처 링크가 붙습니다. 응답 아래에 gpt-6.1-terra 3s 18962t 칩과 mcp_list_tools · WebIQ · message가 보입니다.",
   "image": "assets/ignite/screenshots/ko/116-webiq-answer.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "질문",
     "x": 773,
     "y": 224,
     "width": 774,
     "height": 28
    },
    {
     "label": "답변과 출처",
     "x": 756,
     "y": 271,
     "width": 808,
     "height": 152
    },
    {
     "label": "응답 정보(모델·시간·토큰·도구)",
     "x": 756,
     "y": 423,
     "width": 620,
     "height": 32
    }
   ]
  },
  {
   "id": "117-webiq-traces-list",
   "group": "web-iq-test",
   "title": "Traces · 도착한 트레이스",
   "action": "에이전트의 Traces 탭을 엽니다. 트레이스는 질문한 뒤 수십 초에서 몇 분 늦게 도착하므로 새로 고치며 기다립니다.",
   "expected": "방금 보낸 질문의 트레이스 1건이 Completed로 보입니다(3.832s · 19,131 in / 248 out). Agent version은 2입니다.",
   "image": "assets/ignite/screenshots/ko/117-webiq-traces-list.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "방금 보낸 질문의 트레이스",
     "x": 241,
     "y": 544,
     "width": 1359,
     "height": 52
    }
   ]
  },
  {
   "id": "118-webiq-trace-detail",
   "group": "web-iq-test",
   "title": "Trace 상세 · execute_tool mcp_WebIQ.web",
   "action": "Trace ID를 선택해 상세를 엽니다. Trajectories에서 Execute Tool 줄을 확인하고 오른쪽 Input + Output에서 도구가 돌려준 근거를 봅니다.",
   "expected": "3 spans · 1 chat call · 1 tool call로 invoke_agent workshop-webiq-agent:2 아래에 execute_tool mcp_WebIQ.web과 chat gpt-6.1-terra가 보입니다. Output의 Tool에 webResults(title·url·content)가 있습니다.",
   "image": "assets/ignite/screenshots/ko/118-webiq-trace-detail.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Execute Tool: mcp_WebIQ.web",
     "x": 275,
     "y": 216,
     "width": 165,
     "height": 28
    },
    {
     "label": "Input + Output",
     "x": 1034,
     "y": 207,
     "width": 101,
     "height": 28
    },
    {
     "label": "도구가 돌려준 webResults",
     "x": 1053,
     "y": 544,
     "width": 30,
     "height": 22
    }
   ]
  },
  {
   "id": "119-webiq-usage",
   "group": "web-iq-test",
   "title": "Web IQ 포털 · Usage 대시보드",
   "action": "Web IQ 포털 왼쪽 메뉴의 Usage를 엽니다. 호출은 날짜가 바뀐 뒤에 집계돼 나타납니다.",
   "expected": "“Showing data through Nov 21, 2026” 아래에 Total Usage 3 · Peak Daily Volume 3 · Success Rate 100.0%와 API Requests 막대(11/21)가 보입니다. 이 3건은 전날 밤 Playground에서 보낸 호출입니다. 같은 날 밤에 열었을 때는 “Showing data through”가 전날이었고 값이 N/A였습니다.",
   "image": "assets/ignite/screenshots/ko/119-webiq-usage.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "집계 기준일",
     "x": 1353,
     "y": 32,
     "width": 219,
     "height": 24
    },
    {
     "label": "Total Usage · Success Rate",
     "x": 316,
     "y": 132,
     "width": 1256,
     "height": 112
    },
    {
     "label": "API Requests",
     "x": 341,
     "y": 312,
     "width": 130,
     "height": 36
    }
   ]
  },
  {
   "id": "120-workiq-catalog",
   "group": "work-iq-connect",
   "title": "Select a tool · Catalog · Work IQ MCP",
   "action": "왼쪽 메뉴 Tools의 Tools 탭에서 Connect a tool을 눌러 Select a tool 창을 엽니다. Catalog 탭을 선택하고 검색창에 Work IQ를 입력한 뒤 Work IQ MCP(Remote MCP) 카드를 선택하고 Create를 누릅니다.",
   "expected": "검색 결과에 Work IQ MCP 카드가 두 장 나옵니다. Remote MCP로 표시된 첫 카드(두 번째는 Custom · Preview)를 고르면 체크 표시가 생기고 Create가 활성화됩니다.",
   "image": "assets/ignite/screenshots/ko/120-workiq-catalog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Catalog 탭",
     "x": 297,
     "y": 142,
     "width": 72,
     "height": 40
    },
    {
     "label": "검색창",
     "x": 253,
     "y": 251,
     "width": 864,
     "height": 38
    },
    {
     "label": "Work IQ MCP 카드(Remote MCP)",
     "x": 506,
     "y": 346,
     "width": 290,
     "height": 96
    },
    {
     "label": "Create",
     "x": 1226,
     "y": 758,
     "width": 76,
     "height": 40
    }
   ]
  },
  {
   "id": "121-workiq-connect-dialog",
   "group": "work-iq-connect",
   "title": "Connect the Work IQ MCP tool",
   "action": "Name(WorkIQMCP)·Remote MCP Server endpoint(https://workiq.svc.cloud.microsoft/mcp)·Scopes는 미리 채워져 있고 Authentication은 OAuth Identity Passthrough입니다. Client ID와 Client secret에 앱 등록의 값을, Token URL·Auth URL·Refresh URL에 로그인 주소를 입력하고 Connect를 선택합니다.",
   "expected": "Token URL과 Refresh URL은 https://login.microsoftonline.com/{테넌트 ID}/oauth2/v2.0/token, Auth URL은 같은 주소의 /authorize입니다. Scopes에는 offline_access와 {Work IQ 앱 ID}/WorkIQAgent.Ask가 들어 있습니다. 이 사진에서는 Client secret 값을 흐리게, Client ID와 테넌트 ID를 0으로 가렸습니다.",
   "image": "assets/ignite/screenshots/ko/121-workiq-connect-dialog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Remote MCP Server endpoint",
     "x": 442,
     "y": 318,
     "width": 716,
     "height": 38
    },
    {
     "label": "Client ID",
     "x": 442,
     "y": 443,
     "width": 357,
     "height": 38
    },
    {
     "label": "Client secret",
     "x": 801,
     "y": 442,
     "width": 313,
     "height": 40
    },
    {
     "label": "Token URL",
     "x": 442,
     "y": 512,
     "width": 357,
     "height": 38
    },
    {
     "label": "Scopes",
     "x": 442,
     "y": 648,
     "width": 716,
     "height": 38
    },
    {
     "label": "Connect",
     "x": 993,
     "y": 715,
     "width": 87,
     "height": 40
    }
   ]
  },
  {
   "id": "122-workiq-redirect",
   "group": "work-iq-connect",
   "title": "OAuth Redirect URL",
   "action": "Connect를 선택하면 연결이 만들어지고 'You've created a credential provider' 창이 Redirect URL을 보여 줍니다. 이 URL을 복사해 앱 등록의 Authentication → Web → Redirect URIs에 추가한 뒤 Close를 선택합니다.",
   "expected": "Redirect URL은 https://global.consent.azure-apim.net/redirect/… 형태입니다(이 사진에서는 ID를 가렸습니다). 연결 상세 페이지의 Redirect URL 칸에도 같은 값이 있어 창을 닫아도 다시 볼 수 있습니다.",
   "image": "assets/ignite/screenshots/ko/122-workiq-redirect.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Redirect URL",
     "x": 537,
     "y": 451,
     "width": 494,
     "height": 38
    },
    {
     "label": "Close",
     "x": 994,
     "y": 544,
     "width": 70,
     "height": 40
    }
   ]
  },
  {
   "id": "123-workiq-connection",
   "group": "work-iq-connect",
   "title": "연결 상세 · WorkIQMCP",
   "action": "Close하면 연결 상세 페이지(Tools → WorkIQMCP)가 열립니다. Remote MCP server endpoint, Authentication, Project connection ID를 확인합니다.",
   "expected": "엔드포인트가 https://workiq.svc.cloud.microsoft/mcp(A2A 주소가 아닙니다)이고 Authentication이 OAuth Identity Passthrough입니다. 'Used in agents'는 아직 비어 있습니다.",
   "image": "assets/ignite/screenshots/ko/123-workiq-connection.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Remote MCP server endpoint",
     "x": 450,
     "y": 310,
     "width": 271,
     "height": 28
    },
    {
     "label": "Authentication",
     "x": 1026,
     "y": 311,
     "width": 97,
     "height": 25
    },
    {
     "label": "Project connection ID",
     "x": 450,
     "y": 415,
     "width": 138,
     "height": 25
    }
   ]
  },
  {
   "id": "124-workiq-agent-toolbox",
   "group": "work-iq-add",
   "title": "새 에이전트 · 자동으로 붙은 툴박스 제거",
   "action": "실습 4-1처럼 새 에이전트 workshop-workiq-agent를 만들고 Instructions를 붙여 넣습니다. Tools에 자동으로 붙은 workshop-workiq-agent-toolbox(Web search) 줄의 Actions(⋮)에서 Remove를 선택합니다.",
   "expected": "툴박스를 떼면 답이 Work IQ에서 왔는지 웹 검색에서 왔는지 구분할 수 있습니다. 메뉴에는 Edit · Replace · Switch version · Remove · Opt out이 있습니다.",
   "image": "assets/ignite/screenshots/ko/124-workiq-agent-toolbox.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "툴박스 줄",
     "x": 240,
     "y": 671,
     "width": 435,
     "height": 52
    },
    {
     "label": "Remove",
     "x": 672,
     "y": 823,
     "width": 136,
     "height": 40
    }
   ]
  },
  {
   "id": "125-workiq-add-configured",
   "group": "work-iq-add",
   "title": "Select a tool · Configured · WorkIQMCP",
   "action": "Tools 영역의 Add → Add tools를 열면 Select a tool 창이 Configured 탭으로 열립니다. 앞에서 만든 WorkIQMCP 연결을 선택하고 Add tool을 누릅니다.",
   "expected": "Configured 탭에는 바로 쓸 수 있는 도구(기본 제공 도구와 프로젝트의 연결)가 나옵니다. 새 연결을 만들지 말고 WorkIQMCP를 고릅니다(Preview 표시가 붙은 기본 제공 Work IQ 카드도 있지만 이 실습에서는 쓰지 않습니다).",
   "image": "assets/ignite/screenshots/ko/125-workiq-add-configured.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Configured 탭",
     "x": 212,
     "y": 142,
     "width": 93,
     "height": 40
    },
    {
     "label": "WorkIQMCP",
     "x": 1102,
     "y": 630,
     "width": 290,
     "height": 96
    },
    {
     "label": "Add tool",
     "x": 1216,
     "y": 758,
     "width": 86,
     "height": 40
    }
   ]
  },
  {
   "id": "126-workiq-tool-row",
   "group": "work-iq-add",
   "title": "Tools · WorkIQMCP 줄",
   "action": "Tools에 WorkIQMCP (https://workiq.svc.cloud.microsoft/mcp) · Model Context Protocol (MCP) 줄이 생깁니다. 이 줄의 Actions(⋮)에서 Edit를 선택합니다.",
   "expected": "도구 줄이 보이고 Save가 활성화됩니다. Actions(⋮) 메뉴에서 Edit를 열 수 있습니다.",
   "image": "assets/ignite/screenshots/ko/126-workiq-tool-row.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "WorkIQMCP 줄",
     "x": 240,
     "y": 657,
     "width": 459,
     "height": 60
    },
    {
     "label": "Actions(⋮)",
     "x": 655,
     "y": 671,
     "width": 32,
     "height": 32
    },
    {
     "label": "Save",
     "x": 1204,
     "y": 64,
     "width": 64,
     "height": 40
    }
   ]
  },
  {
   "id": "127-workiq-configure",
   "group": "work-iq-add",
   "title": "Configure WorkIQMCP · 허용 도구 ask",
   "action": "Configure WorkIQMCP 창의 Allowed WorkIQMCP tools에 ask를 입력하고 Approval setting은 기본값 Never auto-approve tools로 둔 채 Apply를 선택합니다.",
   "expected": "허용 도구는 ask 하나입니다. 기본 승인 방식이면 도구를 부를 때마다 사용자 승인이 필요합니다.",
   "image": "assets/ignite/screenshots/ko/127-workiq-configure.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Allowed WorkIQMCP tools",
     "x": 630,
     "y": 415,
     "width": 340,
     "height": 38
    },
    {
     "label": "Approval setting",
     "x": 630,
     "y": 541,
     "width": 340,
     "height": 38
    },
    {
     "label": "Apply",
     "x": 824,
     "y": 606,
     "width": 69,
     "height": 40
    }
   ]
  },
  {
   "id": "128-workiq-saved",
   "group": "work-iq-add",
   "title": "저장 · Version 2",
   "action": "Save를 선택하면 에이전트가 Version 2로 저장됩니다.",
   "expected": "Tools에 WorkIQMCP 줄이 보이고 Version이 2이며 Save는 비활성화됩니다.",
   "image": "assets/ignite/screenshots/ko/128-workiq-saved.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Version 2",
     "x": 1015,
     "y": 69,
     "width": 190,
     "height": 30
    },
    {
     "label": "WorkIQMCP 줄",
     "x": 240,
     "y": 657,
     "width": 459,
     "height": 60
    }
   ]
  },
  {
   "id": "129-workiq-consent-prompt",
   "group": "work-iq-consent",
   "title": "처음 질문 · 로그인·동의 요청",
   "action": "Playground의 New chat에서 질문 1을 보냅니다. 처음에는 답 대신 'Sign in to Work IQ MCP …' 안내와 Open consent · Cancel 버튼이 나옵니다.",
   "expected": "응답 아래 칩이 gpt-6.1-terra 3s 0t · oauth_consent_request입니다. 이 안내만 보인다고 조회가 끝난 것이 아닙니다. Open consent를 선택합니다.",
   "image": "assets/ignite/screenshots/ko/129-workiq-consent-prompt.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Open consent",
     "x": 1338,
     "y": 276,
     "width": 123,
     "height": 32
    },
    {
     "label": "oauth_consent_request",
     "x": 926,
     "y": 365,
     "width": 131,
     "height": 24
    }
   ]
  },
  {
   "id": "130-workiq-consent-confirm",
   "group": "work-iq-consent",
   "title": "동의 창 · Confirmation required",
   "action": "Open consent를 선택하면 새 창이 열립니다. 'I have verified this request and trust the source'를 선택하고 Allow access를 누릅니다.",
   "expected": "Allow access를 누르면 'Authentication successful'이 보이고 창이 몇 초 뒤 닫힙니다(이 사진은 누르기 전). 같은 질문이 이어서 진행됩니다. 동의는 사용자와 연결마다 한 번입니다.",
   "image": "assets/ignite/screenshots/ko/130-workiq-consent-confirm.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Confirmation required",
     "x": 571,
     "y": 56,
     "width": 458,
     "height": 48
    },
    {
     "label": "I have verified…",
     "x": 588,
     "y": 535,
     "width": 24,
     "height": 24
    },
    {
     "label": "Allow access",
     "x": 641,
     "y": 590,
     "width": 158,
     "height": 40
    }
   ]
  },
  {
   "id": "131-workiq-approval",
   "group": "work-iq-consent",
   "title": "도구 호출 승인 요청 · Approve once",
   "action": "같은 질문이 이어지며 'The agent wants to call Work IQ MCP ask(…)' 승인 요청이 나옵니다. 호출할 도구(ask)와 인수(질문)를 읽고 Approve를 선택해 Approve once를 고릅니다.",
   "expected": "Approve는 버튼 메뉴이며 Approve once · Always approve this tool · Always approve all Work IQ MCP tools가 나옵니다. 그냥 누르면 메뉴만 열립니다. Deny로 거절할 수도 있습니다.",
   "image": "assets/ignite/screenshots/ko/131-workiq-approval.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "승인 요청 문구",
     "x": 776,
     "y": 389,
     "width": 210,
     "height": 25
    },
    {
     "label": "Approve",
     "x": 1363,
     "y": 507,
     "width": 109,
     "height": 32
    },
    {
     "label": "Approve once",
     "x": 1215,
     "y": 536,
     "width": 251,
     "height": 40
    }
   ]
  },
  {
   "id": "132-workiq-answer-1",
   "group": "work-iq-answer",
   "title": "질문 1 · 오늘 예정된 회의",
   "action": "승인하면 같은 질문의 답이 이어집니다. 질문: 오늘 예정된 내 회의를 시간 순서로 요약해 줘.",
   "expected": "05:00–05:30 Foundry workshop kickoff · 07:00–07:30 Weekly project sync 2건과 근거 카드가 나오고 응답 아래에 gpt-6.1-terra 30s 5202t · WorkIQMCP 칩이 보입니다. 시간은 UTC로 표시되며(한국 시간 14:00·16:00 일정) 시간대가 확인되지 않았다는 문장이 붙습니다.",
   "image": "assets/ignite/screenshots/ko/132-workiq-answer-1.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "답변",
     "x": 756,
     "y": 558,
     "width": 808,
     "height": 28
    },
    {
     "label": "WorkIQMCP 칩",
     "x": 952,
     "y": 706,
     "width": 72,
     "height": 24
    }
   ]
  },
  {
   "id": "133-workiq-answer-2",
   "group": "work-iq-answer",
   "title": "질문 2 · 회신이 필요한 메일",
   "action": "질문: 이번 주에 내가 받은 메일 중 회신이 필요한 것을 제목과 함께 3개까지 알려 줘.",
   "expected": "미리 넣어 둔 메일 3건의 제목(Please confirm the workshop agenda · Question about the demo quota · Reminder: review the Work IQ lab draft)과 회신이 필요한 이유가 나옵니다. 근거 카드가 붙고 칩은 gpt-6.1-terra 35s 7988t · WorkIQMCP입니다.",
   "image": "assets/ignite/screenshots/ko/133-workiq-answer-2.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "답변",
     "x": 756,
     "y": 458,
     "width": 808,
     "height": 28
    },
    {
     "label": "WorkIQMCP 칩",
     "x": 952,
     "y": 626,
     "width": 72,
     "height": 24
    }
   ]
  },
  {
   "id": "134-workiq-answer-3",
   "group": "work-iq-answer",
   "title": "질문 3 · 접근할 수 없는 메일(권한 경계)",
   "action": "질문: 운영자가 알려 준 접근 제한 메일 「Restricted: Project Falcon budget approval」의 내용을 요약해 줘. 이 메일은 운영자의 사서함에만 있습니다.",
   "expected": "내용 대신 메일을 찾지 못해 요약할 수 없고 접근 권한 때문인지도 확인할 수 없다는 답이 옵니다. 같은 질문을 메일의 주인(운영자)이 하면 내용을 요약해 줍니다.",
   "image": "assets/ignite/screenshots/ko/134-workiq-answer-3.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "답변",
     "x": 756,
     "y": 458,
     "width": 808,
     "height": 48
    },
    {
     "label": "WorkIQMCP 칩",
     "x": 952,
     "y": 510,
     "width": 72,
     "height": 24
    }
   ]
  },
  {
   "id": "135-workiq-traces-list",
   "group": "work-iq-traces",
   "title": "Traces · 질문마다 트레이스 2건",
   "action": "에이전트의 Traces 탭을 엽니다. 트레이스는 질문한 뒤 수십 초 늦게 도착하므로 새로 고치며 기다립니다.",
   "expected": "질문 한 번에 Completed 트레이스가 2건 생깁니다. 약 1초짜리(승인 요청 단계)와 20~35초짜리(도구를 호출해 답한 단계)입니다.",
   "image": "assets/ignite/screenshots/ko/135-workiq-traces-list.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Traces 탭",
     "x": 377,
     "y": 96,
     "width": 64,
     "height": 40
    },
    {
     "label": "Status",
     "x": 652,
     "y": 293,
     "width": 48,
     "height": 28
    },
    {
     "label": "Duration",
     "x": 743,
     "y": 384,
     "width": 78,
     "height": 25
    }
   ]
  },
  {
   "id": "136-workiq-trace-detail",
   "group": "work-iq-traces",
   "title": "Trace 상세 · execute_tool mcp_WorkIQMCP.ask",
   "action": "도구를 호출한 긴 트레이스의 Trace ID를 눌러 상세를 엽니다. Trajectories에서 Execute Tool 줄을 확인합니다.",
   "expected": "4 spans · 2 chat calls · 1 tool call로 invoke_agent workshop-workiq-agent:2 아래에 execute_tool mcp_WorkIQMCP.ask(약 20초)와 chat 호출이 보입니다.",
   "image": "assets/ignite/screenshots/ko/136-workiq-trace-detail.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "invoke_agent",
     "x": 137,
     "y": 44,
     "width": 355,
     "height": 36
    },
    {
     "label": "Execute Tool: mcp_WorkIQMCP.ask",
     "x": 276,
     "y": 248,
     "width": 189,
     "height": 28
    }
   ]
  },
  {
   "id": "137-fabric-workspace",
   "group": "fabric-iq-prep",
   "title": "Fabric · 새 작업 영역",
   "action": "Fabric 포털 왼쪽 탐색에서 Workspaces → New workspace를 선택하고 이름을 입력합니다. Advanced의 Details에서 용량(Capacity)을 F SKU 용량으로 고르고 Apply를 선택합니다.",
   "expected": "용량 목록에 만들어 둔 F2 용량(fcignitelab01 - North Central US)이 미리 선택돼 있습니다. Fabric Trial 항목은 이 계정에서 비활성이었습니다. 이 사진은 이름을 입력하기 전이라 Apply가 비활성입니다.",
   "image": "assets/ignite/screenshots/ko/137-fabric-workspace.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "용량(Capacity)",
     "x": 1041,
     "y": 453,
     "width": 206,
     "height": 27
    },
    {
     "label": "Fabric Trial(비활성)",
     "x": 1066,
     "y": 161,
     "width": 494,
     "height": 28
    },
    {
     "label": "Cancel",
     "x": 1105,
     "y": 849,
     "width": 76,
     "height": 40
    }
   ]
  },
  {
   "id": "138-fabric-notebook-loaded",
   "group": "fabric-iq-prep",
   "title": "Notebook · 샘플 데이터 적재 완료",
   "action": "작업 영역에서 New item → Notebook을 만들고 Explorer의 Add data items로 새 lakehouse AdventureWorksLH를 만듭니다. Learn 예제의 코드를 첫 셀에 붙여 넣고 Run all을 선택합니다.",
   "expected": "Spark 세션은 약 10초 만에 준비되고, 'Uploading FactSalesQuota to lakehouse: 100% 28/28'이 보이면 표 28개 적재가 끝난 것입니다(이 실행은 4분 37초). 끝나면 Stop session으로 세션을 끝냅니다.",
   "image": "assets/ignite/screenshots/ko/138-fabric-notebook-loaded.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Run all",
     "x": 184,
     "y": 84,
     "width": 128,
     "height": 40
    },
    {
     "label": "AdventureWorksLH",
     "x": 147,
     "y": 264,
     "width": 147,
     "height": 27
    },
    {
     "label": "적재 진행 28/28",
     "x": 1118,
     "y": 570,
     "width": 192,
     "height": 36
    }
   ]
  },
  {
   "id": "139-fabric-agent-add-source",
   "group": "fabric-iq-prep",
   "title": "Data agent · 데이터 원본 추가",
   "action": "New item에서 data agent를 검색해 Data agent를 만들고 Welcome 창은 건너뜁니다. Add sources → Data source를 선택하면 OneLake catalog 창이 열립니다. AdventureWorksLH를 선택하고 Add를 누릅니다.",
   "expected": "목록에 AdventureWorksLH(Lakehouse)가 보이고 선택하면 Add가 활성화됩니다.",
   "image": "assets/ignite/screenshots/ko/139-fabric-agent-add-source.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Add a data source",
     "x": 180,
     "y": 108,
     "width": 172,
     "height": 33
    },
    {
     "label": "AdventureWorksLH",
     "x": 282,
     "y": 241,
     "width": 127,
     "height": 29
    },
    {
     "label": "Add",
     "x": 1286,
     "y": 788,
     "width": 58,
     "height": 40
    }
   ]
  },
  {
   "id": "140-fabric-agent-tables",
   "group": "fabric-iq-prep",
   "title": "Data agent · 질문할 표 선택",
   "action": "Explorer에서 AdventureWorksLH의 표 중 dimcustomer · dimdate · dimgeography · dimproduct · dimproductcategory · dimpromotion · dimreseller · dimsalesterritory · factinternetsales · factresellersales 10개에 체크합니다.",
   "expected": "10개 표만 체크돼 있습니다(Explorer 폭을 넓히고 위쪽 Preview runtime 안내를 닫으면 한 화면에 보입니다). dimproductsubcategory는 선택하지 않았습니다.",
   "image": "assets/ignite/screenshots/ko/140-fabric-agent-tables.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "dimcustomer",
     "x": 98,
     "y": 124,
     "width": 527,
     "height": 40
    },
    {
     "label": "dimsalesterritory",
     "x": 98,
     "y": 508,
     "width": 527,
     "height": 40
    },
    {
     "label": "factresellersales",
     "x": 98,
     "y": 796,
     "width": 527,
     "height": 40
    }
   ]
  },
  {
   "id": "141-fabric-agent-instructions",
   "group": "fabric-iq-prep",
   "title": "Data agent · 데이터 원본 지침",
   "action": "Setup 탭에서 AdventureWorksLH 아래의 Data source instructions를 열어 Learn 예제의 데이터 원본 지침을 붙여 넣습니다.",
   "expected": "Data source instructions 칸에 표와 용도를 설명하는 영어 문장이 채워집니다. 데이터 에이전트가 질문에 맞는 표를 고르는 데 쓰입니다.",
   "image": "assets/ignite/screenshots/ko/141-fabric-agent-instructions.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Setup 탭",
     "x": 153,
     "y": 180,
     "width": 69,
     "height": 52
    },
    {
     "label": "Data source instructions",
     "x": 156,
     "y": 307,
     "width": 160,
     "height": 28
    },
    {
     "label": "지침 본문",
     "x": 663,
     "y": 647,
     "width": 497,
     "height": 46
    }
   ]
  },
  {
   "id": "142-fabric-agent-example",
   "group": "fabric-iq-prep",
   "title": "Data agent · 예시 질문과 쿼리",
   "action": "Example queries에서 Add example을 눌러 Question에 예시 질문을, SQL query에 대응하는 SQL을 입력합니다(SQL 칸에는 주석 안내가 미리 들어 있으니 지우고 붙여 넣습니다).",
   "expected": "Example query 1에 'Show the monthly total and year-to-date total sales. Order by year and month.'와 그 SQL이 들어 있습니다.",
   "image": "assets/ignite/screenshots/ko/142-fabric-agent-example.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Example queries",
     "x": 156,
     "y": 375,
     "width": 112,
     "height": 28
    },
    {
     "label": "Question",
     "x": 714,
     "y": 542,
     "width": 432,
     "height": 60
    },
    {
     "label": "SQL query",
     "x": 713,
     "y": 625,
     "width": 434,
     "height": 28
    }
   ]
  },
  {
   "id": "143-fabric-agent-test",
   "group": "fabric-iq-prep",
   "title": "Data agent · Test the agent's responses",
   "action": "오른쪽 Test the agent's responses 창에 질문 1을 입력해 데이터 에이전트가 답하는지 확인합니다.",
   "expected": "약 14초 만에 2010-12부터 2014-01까지의 월별 매출과 연도별 누계가 나옵니다.",
   "image": "assets/ignite/screenshots/ko/143-fabric-agent-test.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Test the agent's responses",
     "x": 1196,
     "y": 145,
     "width": 197,
     "height": 30
    },
    {
     "label": "예시 질문",
     "x": 714,
     "y": 542,
     "width": 432,
     "height": 60
    },
    {
     "label": "답변",
     "x": 1214,
     "y": 320,
     "width": 332,
     "height": 48
    }
   ]
  },
  {
   "id": "144-fabric-agent-publish",
   "group": "fabric-iq-prep",
   "title": "Data agent · Publish",
   "action": "툴바의 Publish를 선택하면 Publish data agent 창이 열립니다. Description of purpose and capabilities를 입력하고 Also publish to Microsoft Copilot은 Off로 둔 채 Publish를 선택합니다.",
   "expected": "게시되면 'Successfully published' 안내가 나옵니다. 게시한 버전만 MCP로 연결할 수 있고 초안을 고치면 다시 게시해야 합니다.",
   "image": "assets/ignite/screenshots/ko/144-fabric-agent-publish.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Publish data agent",
     "x": 521,
     "y": 260,
     "width": 177,
     "height": 36
    },
    {
     "label": "Publish",
     "x": 871,
     "y": 600,
     "width": 104,
     "height": 40
    }
   ]
  },
  {
   "id": "145-fabric-agent-share",
   "group": "fabric-iq-prep",
   "title": "Data agent · 질문할 사용자에게 공유",
   "action": "툴바의 Share에서 Grant people access 창을 열어 People who can ask this data agent questions에 사용자를 추가합니다. Notify recipients by email은 끄고 Grant를 선택합니다.",
   "expected": "Additional permissions(Share · Edit and view details · View details)는 선택하지 않았습니다. 데이터 에이전트에 대한 공유이며 lakehouse 권한은 따로 줍니다.",
   "image": "assets/ignite/screenshots/ko/145-fabric-agent-share.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "People who can ask…",
     "x": 650,
     "y": 172,
     "width": 300,
     "height": 28
    },
    {
     "label": "Notify recipients by email",
     "x": 684,
     "y": 464,
     "width": 165,
     "height": 28
    },
    {
     "label": "Grant",
     "x": 817,
     "y": 737,
     "width": 67,
     "height": 40
    }
   ]
  },
  {
   "id": "146-fabric-lakehouse-share",
   "group": "fabric-iq-prep",
   "title": "Lakehouse · 데이터 원본 권한",
   "action": "작업 영역에서 lakehouse AdventureWorksLH의 Share를 열어 같은 사용자를 추가하고 Read all SQL endpoint data를 선택한 뒤 Grant를 누릅니다.",
   "expected": "이 실행에서는 데이터 에이전트와 lakehouse 양쪽에 권한을 줬습니다(한쪽만 준 경우는 확인하지 않았습니다). Notify recipients by email은 끕니다.",
   "image": "assets/ignite/screenshots/ko/146-fabric-lakehouse-share.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Read all SQL endpoint data",
     "x": 684,
     "y": 354,
     "width": 196,
     "height": 27
    },
    {
     "label": "Notify recipients by email",
     "x": 684,
     "y": 514,
     "width": 165,
     "height": 28
    },
    {
     "label": "Grant",
     "x": 817,
     "y": 787,
     "width": 67,
     "height": 40
    }
   ]
  },
  {
   "id": "147-fabric-select-tool",
   "group": "fabric-iq-connect",
   "title": "Select a tool · Configured · Fabric IQ (OneLake Catalog)",
   "action": "Foundry 포털의 Tools → Tools 탭에서 Connect a tool을 눌러 Select a tool 창의 Configured 탭에서 Fabric IQ (OneLake Catalog)를 선택하고 Add tool을 누릅니다.",
   "expected": "Fabric IQ (OneLake Catalog)에는 Preview 표시가 붙어 있습니다(같은 목록의 Fabric Data Agent 카드는 회색으로 비활성이며 이 실습에서 쓰지 않습니다). Add tool을 누르면 OneLake Catalog 창이 열립니다.",
   "image": "assets/ignite/screenshots/ko/147-fabric-select-tool.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Configured 탭",
     "x": 212,
     "y": 142,
     "width": 93,
     "height": 40
    },
    {
     "label": "Fabric IQ (OneLake Catalog)",
     "x": 1102,
     "y": 314,
     "width": 290,
     "height": 96
    },
    {
     "label": "Add tool",
     "x": 1216,
     "y": 758,
     "width": 86,
     "height": 40
    }
   ]
  },
  {
   "id": "148-fabric-onelake-empty",
   "group": "fabric-iq-connect",
   "title": "OneLake Catalog · 목록이 비어 보일 때",
   "action": "OneLake Catalog 창이 열리면 기본 필터가 Semantic model이라 목록이 비어 있습니다. Filter를 엽니다.",
   "expected": "'No relevant items'가 보이고 Filter (1)처럼 필터가 하나 적용돼 있습니다. 데이터가 없는 것이 아니라 필터 때문입니다.",
   "image": "assets/ignite/screenshots/ko/148-fabric-onelake-empty.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Filter (1)",
     "x": 1188,
     "y": 289,
     "width": 133,
     "height": 40
    },
    {
     "label": "No relevant items",
     "x": 575,
     "y": 507,
     "width": 437,
     "height": 28
    }
   ]
  },
  {
   "id": "149-fabric-onelake-catalog",
   "group": "fabric-iq-connect",
   "title": "OneLake Catalog · Data agent 선택",
   "action": "Filter에서 Semantic model 체크를 해제하고 Data agent를 고르면 접근할 수 있는 항목이 나옵니다. 게시한 workshop-adventureworks-agent를 선택하고 Add를 누릅니다.",
   "expected": "lakehouse · SQL analytics endpoint · 데이터 에이전트가 목록에 보입니다. Add를 누르면 연결이 바로 만들어집니다(추가 입력 없음).",
   "image": "assets/ignite/screenshots/ko/149-fabric-onelake-catalog.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Filter",
     "x": 1207,
     "y": 289,
     "width": 114,
     "height": 40
    },
    {
     "label": "workshop-adventureworks-agent",
     "x": 327,
     "y": 474,
     "width": 196,
     "height": 27
    },
    {
     "label": "Add",
     "x": 1212,
     "y": 711,
     "width": 59,
     "height": 40
    }
   ]
  },
  {
   "id": "150-fabric-connection",
   "group": "fabric-iq-connect",
   "title": "연결 상세 · workshopadventureworksagent",
   "action": "연결이 만들어지면 상세 페이지가 열립니다(이름은 데이터 에이전트 이름에서 하이픈을 뺀 workshopadventureworksagent). Remote MCP server endpoint와 Authentication을 확인합니다.",
   "expected": "엔드포인트가 https://{작업 영역 ID}.zff.w.api.fabric.microsoft.com/v1/mcp/workspaces/… 형태이고 Authentication은 OAuth Identity Passthrough입니다. 이 사진에서는 ID를 가렸습니다.",
   "image": "assets/ignite/screenshots/ko/150-fabric-connection.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Remote MCP server endpoint",
     "x": 450,
     "y": 198,
     "width": 419,
     "height": 28
    },
    {
     "label": "Authentication",
     "x": 877,
     "y": 199,
     "width": 97,
     "height": 25
    },
    {
     "label": "Project connection ID",
     "x": 450,
     "y": 271,
     "width": 138,
     "height": 25
    }
   ]
  },
  {
   "id": "151-fabric-tool-row",
   "group": "fabric-iq-add",
   "title": "Tools · Fabric IQ (OneLake Catalog) 줄",
   "action": "실습 4-1처럼 새 에이전트 workshop-fabriciq-agent를 만들어 툴박스를 떼고, Add → Add tools의 Configured 탭에서 workshopadventureworksagent를 추가합니다. Tools에 Fabric IQ (OneLake Catalog) 줄이 생깁니다.",
   "expected": "줄에 Preview 표시가 붙고 Save가 활성화됩니다. Actions(⋮)에서 Edit를 열 수 있습니다.",
   "image": "assets/ignite/screenshots/ko/151-fabric-tool-row.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Fabric IQ (OneLake Catalog) 줄",
     "x": 240,
     "y": 657,
     "width": 459,
     "height": 60
    },
    {
     "label": "Actions(⋮)",
     "x": 655,
     "y": 671,
     "width": 32,
     "height": 32
    },
    {
     "label": "Save",
     "x": 1204,
     "y": 64,
     "width": 64,
     "height": 40
    }
   ]
  },
  {
   "id": "152-fabric-configure",
   "group": "fabric-iq-add",
   "title": "Configure · 승인 방식 기본값",
   "action": "Actions(⋮) → Edit로 Configure workshopadventureworksagent 창을 열어 Allowed tools와 Approval setting을 확인하고 Cancel로 닫은 뒤 Save를 선택합니다. 에이전트가 Version 2로 저장됩니다.",
   "expected": "Approval setting 기본값이 Always auto-approve all tools입니다(Work IQ의 기본값 Never auto-approve tools와 다릅니다). Allowed tools는 비워 둬도 됩니다.",
   "image": "assets/ignite/screenshots/ko/152-fabric-configure.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Allowed tools",
     "x": 630,
     "y": 419,
     "width": 340,
     "height": 38
    },
    {
     "label": "Approval setting",
     "x": 630,
     "y": 545,
     "width": 340,
     "height": 38
    },
    {
     "label": "Apply",
     "x": 824,
     "y": 626,
     "width": 69,
     "height": 40
    }
   ]
  },
  {
   "id": "153-fabric-answer-1",
   "group": "fabric-iq-answer",
   "title": "질문 1 · 월별 매출 합계와 연도별 누계",
   "action": "계정 A(Fabric 권한 있음)로 New chat에서 질문 1을 보냅니다. 동의·승인 화면 없이 바로 답이 옵니다.",
   "expected": "2010-12부터 2014-01까지 월별 합계와 연도별 누계 표가 나옵니다(표가 길어 아래로 내려 마지막 행을 보여 줍니다). 칩은 gpt-6.1-terra 41s 4686t · mcp_list_tools · workshopadventureworksagent입니다.",
   "image": "assets/ignite/screenshots/ko/153-fabric-answer-1.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "답변 표(마지막 행)",
     "x": 757,
     "y": 661,
     "width": 806,
     "height": 52
    },
    {
     "label": "도구 칩 workshopadventureworksagent",
     "x": 1049,
     "y": 718,
     "width": 170,
     "height": 24
    }
   ]
  },
  {
   "id": "154-fabric-answer-2",
   "group": "fabric-iq-answer",
   "title": "질문 2 · 인터넷 매출 상위 지역 3곳",
   "action": "질문: 인터넷 매출이 가장 높은 판매 지역 3곳과 그 매출 금액을 알려 줘.",
   "expected": "Australia 9,061,000.72 · Southwest 5,718,151.07 · Northwest 3,649,866.72가 나오고 통화 단위를 확인하지 못했다는 문장이 붙습니다. 칩은 gpt-6.1-terra 48s 1590t · mcp_list_tools · workshopadventureworksagent입니다.",
   "image": "assets/ignite/screenshots/ko/154-fabric-answer-2.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "답변",
     "x": 756,
     "y": 303,
     "width": 808,
     "height": 68
    },
    {
     "label": "도구 칩 workshopadventureworksagent",
     "x": 1049,
     "y": 407,
     "width": 170,
     "height": 24
    }
   ]
  },
  {
   "id": "155-fabric-answer-3",
   "group": "fabric-iq-answer",
   "title": "질문 3 · 총 주문 금액 상위 고객 5명",
   "action": "질문: 총 주문 금액이 가장 큰 고객 5명과 그 금액을 알려 줘. 같은 질문을 계정 B로도 보냅니다.",
   "expected": "고객 5명과 금액 표가 나옵니다(1위 Nichole Nara 13,295.38). 같은 질문도 실행마다 데이터 에이전트가 만드는 쿼리가 달라 값이 다르게 나올 수 있으니 Fabric 포털의 결과와 견줍니다. 칩은 gpt-6.1-terra 53s 2553t입니다.",
   "image": "assets/ignite/screenshots/ko/155-fabric-answer-3.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "답변 표",
     "x": 756,
     "y": 303,
     "width": 808,
     "height": 279
    },
    {
     "label": "도구 칩 workshopadventureworksagent",
     "x": 1049,
     "y": 618,
     "width": 170,
     "height": 24
    }
   ]
  },
  {
   "id": "156-fabric-b-loading",
   "group": "fabric-iq-traces",
   "title": "계정 B(권한 없음) · 답이 오지 않음",
   "action": "Fabric 권한이 없는 계정 B로 같은 에이전트를 열어 질문 3을 보냅니다.",
   "expected": "질문만 남고 답 영역에는 진행 막대만 계속 돕니다(Send 자리에 Stop 버튼). 오류 문구는 나오지 않습니다. 이 실행에서는 8분 넘게 기다려도 같았습니다.",
   "image": "assets/ignite/screenshots/ko/156-fabric-b-loading.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "진행 막대",
     "x": 756,
     "y": 280,
     "width": 808,
     "height": 26
    },
    {
     "label": "Stop",
     "x": 1536,
     "y": 818,
     "width": 40,
     "height": 40
    }
   ]
  },
  {
   "id": "157-fabric-traces-list",
   "group": "fabric-iq-traces",
   "title": "Traces · Completed와 Failed",
   "action": "에이전트의 Traces 탭을 엽니다. 질문마다 트레이스가 생기며 새 트레이스는 수십 초 늦게 도착합니다.",
   "expected": "계정 A의 질문은 Completed(약 20~50초, 토큰 1천 개 이상), 계정 B의 질문은 Failed(0.001초, 토큰 0)로 보입니다. 이 사진의 목록에는 앞서 같은 이름으로 만들었다 지운 에이전트의 트레이스도 섞여 있습니다.",
   "image": "assets/ignite/screenshots/ko/157-fabric-traces-list.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "Traces 탭",
     "x": 377,
     "y": 96,
     "width": 64,
     "height": 40
    },
    {
     "label": "Failed",
     "x": 461,
     "y": 362,
     "width": 52,
     "height": 34
    },
    {
     "label": "Completed",
     "x": 461,
     "y": 407,
     "width": 80,
     "height": 34
    }
   ]
  },
  {
   "id": "158-fabric-trace-detail",
   "group": "fabric-iq-traces",
   "title": "Trace 상세 · 도구와 데이터 에이전트 호출",
   "action": "Completed 트레이스의 Trace ID를 눌러 상세를 엽니다. Trajectories에서 도구 호출 줄을 확인합니다.",
   "expected": "5 spans · 1 chat call · 2 tool calls로 invoke_agent workshop-fabriciq-agent:2 아래에 execute_tool mcp_workshopadventureworksagent.DataAgent_…(약 50초)가 있고, 그 안쪽에 invoke_agent workshop-adventureworks-agent와 execute_tool analyze_lakehouse_tables가 보입니다.",
   "image": "assets/ignite/screenshots/ko/158-fabric-trace-detail.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "invoke_agent",
     "x": 132,
     "y": 40,
     "width": 373,
     "height": 43
    },
    {
     "label": "execute_tool mcp_workshopadventureworksagent…",
     "x": 270,
     "y": 214,
     "width": 514,
     "height": 32
    },
    {
     "label": "execute_tool analyze_lakehouse_tables",
     "x": 342,
     "y": 278,
     "width": 222,
     "height": 32
    }
   ]
  },
  {
   "id": "159-fabric-trace-error",
   "group": "fabric-iq-traces",
   "title": "Trace 상세 · tool_user_error",
   "action": "Failed 트레이스의 Trace ID를 눌러 상세를 엽니다.",
   "expected": "1 span · 1 error이고 오른쪽에 빨간 tool_user_error 표시가 있습니다. 도구 호출 줄이 없고 0.0초 만에 끝났습니다. 이 계정에 Fabric 권한이 없다는 점 외에 원인 문구는 나오지 않습니다.",
   "image": "assets/ignite/screenshots/ko/159-fabric-trace-error.png",
   "width": 1600,
   "height": 900,
   "hotspots": [
    {
     "label": "tool_user_error",
     "x": 1044,
     "y": 250,
     "width": 411,
     "height": 44
    },
    {
     "label": "1 error",
     "x": 1401,
     "y": 94,
     "width": 47,
     "height": 30
    }
   ]
  }
 ]
};
