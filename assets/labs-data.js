window.LABS_DATA = {
  "schemaVersion": 1,
  "before": [
    {"id": "ignite-overview", "badge": "개요", "title": "Microsoft IQ · 실습 로드맵"},
    {"id": "prepare", "badge": "준비", "title": "시작 전 5가지"},
    {"id": "video", "badge": "영상", "title": "실습 1~5 전체 녹화"}
  ],
  "after": [
    {"id": "troubleshooting", "badge": "문제", "title": "계정·리소스·권한"},
    {"id": "ignite-troubleshooting", "badge": "대응", "title": "하네스·평가·운영"},
    {"id": "finish", "badge": "필수", "title": "필수 실습 완료 기준"},
    {"id": "ignite-finish", "badge": "선택", "title": "선택 실습 완료 기준"},
    {"id": "ignite-menu-changes", "badge": "참고", "title": "두 날짜의 메뉴 비교"},
    {"id": "ignite-official-check", "badge": "공식", "title": "발표·공식 문서 대조"},
    {"id": "ignite-glossary", "badge": "용어", "title": "처음 보는 용어 풀이"},
    {"id": "ignite-learn-more", "badge": "소개", "title": "더 알아보기 · 소개 카드"}
  ],
  "cards": {
    "foundry-iq": "Foundry IQ",
    "web-iq": "Web IQ",
    "work-iq": "Work IQ",
    "fabric-iq": "Fabric IQ",
    "business-plugins": "Business plugins",
    "hosted-agents": "Hosted agents",
    "m365-accounts-for-agents": "Microsoft 365 accounts for agents",
    "toolbox": "Toolboxes · 브라우저 자동화",
    "foundry-mcp-server": "Foundry MCP Server",
    "foundry-safety": "Foundry Safety",
    "training": "Training",
    "new-models": "새 모델 · 모델 라우터",
    "azure-windows": "Azure · Windows 연계"
  },
  "labs": [
    {
      "key": "login",
      "enabled": true,
      "title": "로그인·MFA와 내 계정·권한 확인",
      "lead": "본인 계정으로 MFA를 마치고 배정 RG와 역할 세 개를 확인합니다.",
      "required": true,
      "screens": ["2026-11-05 구 포털 · East US 2 · GPT-5 mini"],
      "prerequisites": [],
      "sections": ["first-sign-in", "responsibilities", "step-account"],
      "steps": [["first-sign-in"], ["responsibilities", "step-account"]],
      "more": ["work-iq", "m365-accounts-for-agents"]
    },
    {
      "key": "resource",
      "enabled": true,
      "title": "Foundry 리소스와 프로젝트 만들기",
      "lead": "본인 RG에 Foundry와 기본 프로젝트를 함께 만들고 엽니다.",
      "required": true,
      "screens": ["2026-11-05 구 포털 · East US 2 · GPT-5 mini"],
      "prerequisites": ["login"],
      "sections": ["step-resource", "step-project"],
      "steps": [["step-resource"], ["step-project"]],
      "more": ["foundry-iq", "web-iq"]
    },
    {
      "key": "model",
      "enabled": true,
      "title": "모델 배포와 가드레일 확인",
      "lead": "배정 모델과 TPM으로 배포하고 안전 정책은 읽기만 합니다.",
      "required": true,
      "screens": ["배포: 2026-11-05 구 포털 · East US 2 · GPT-5 mini", "가드레일: 2026-11-17 New Foundry · North Central US · 샌드박스"],
      "prerequisites": ["resource"],
      "sections": ["model-quota", "step-model", "ignite-guardrails"],
      "steps": [["model-quota"], ["step-model"], ["ignite-guardrails"]],
      "more": ["new-models", "foundry-safety"]
    },
    {
      "key": "agent",
      "enabled": true,
      "title": "Prompt Agent 만들고 실행하기",
      "lead": "배정 모델을 선택하고 관측성 연결 후 새 대화를 실행합니다.",
      "required": true,
      "screens": ["2026-11-05 구 포털 · East US 2 · GPT-5 mini"],
      "prerequisites": ["model"],
      "sections": ["step-agent", "step-connect", "step-run"],
      "steps": [["step-agent"], ["step-connect"], ["step-run"]],
      "more": ["toolbox", "hosted-agents", "business-plugins"]
    },
    {
      "key": "observe",
      "enabled": true,
      "title": "Monitor·Traces로 확인하기",
      "lead": "본인 실행의 입력·출력·토큰과 Response ID를 대조합니다.",
      "required": true,
      "screens": ["2026-11-05 구 포털 · East US 2 · GPT-5 mini"],
      "prerequisites": ["agent"],
      "sections": ["step-monitor", "step-traces"],
      "steps": [["step-monitor"], ["step-traces"]],
      "more": ["foundry-mcp-server"]
    },
    {
      "key": "foundry-iq",
      "enabled": false,
      "title": "Foundry IQ로 에이전트에 지식 연결하기",
      "lead": "참가자 권한으로 끝까지 검증하기 전에는 실습을 제공하지 않습니다.",
      "required": false,
      "screens": [],
      "prerequisites": ["observe"],
      "sections": [],
      "steps": [],
      "more": ["web-iq", "work-iq", "fabric-iq"]
    },
    {
      "key": "harness",
      "enabled": true,
      "title": "하네스 에이전트 만들고 실행·관찰하기",
      "lead": "하네스를 선택해 새 에이전트를 만들고 도구를 제한한 뒤 실행합니다.",
      "required": false,
      "screens": ["2026-11-17 New Foundry · North Central US · 샌드박스", "참가자 역할 3개로 생성·실행 재현 · 2026-11-17"],
      "prerequisites": ["model", "observe"],
      "sections": ["ignite-start", "ignite-harness", "ignite-observe"],
      "steps": [["ignite-start"], ["ignite-harness-create"], ["ignite-harness-tools"], ["ignite-harness-run"], ["ignite-observe"]],
      "more": ["foundry-mcp-server", "m365-accounts-for-agents"]
    },
    {
      "key": "insights",
      "enabled": true,
      "title": "Insights로 개선할 문제 찾기",
      "lead": "이미 쌓인 트레이스를 스캔해 반복되는 문제와 근거를 읽습니다.",
      "required": false,
      "screens": ["2026-11-17 New Foundry · North Central US · 샌드박스", "참가자 역할 3개로 스캔 재현 · 2026-11-17"],
      "prerequisites": ["harness"],
      "sections": ["ignite-improve", "ignite-insights"],
      "steps": [["ignite-improve", "ignite-insights"]],
      "more": ["foundry-iq"]
    },
    {
      "key": "evaluation",
      "enabled": true,
      "title": "평가자를 만들고 평가 실행하기",
      "lead": "루브릭 평가자와 합성 질문으로 평가하되 TPM과 운영자 사전 준비를 확인합니다.",
      "required": false,
      "screens": ["2026-11-17 New Foundry · North Central US · 샌드박스", "참가자 역할 3개로 Prompt Agent 평가 15행 통과 · 2026-11-17"],
      "prerequisites": ["agent", "observe"],
      "sections": ["ignite-evaluator", "ignite-evaluation"],
      "steps": [["ignite-evaluator"], ["ignite-evaluation"]],
      "more": ["foundry-iq", "fabric-iq"]
    },
    {
      "key": "optimize",
      "enabled": true,
      "title": "Optimize로 개선안 만들기",
      "lead": "하네스 없는 Prompt Agent에서 후보를 비교하고 승격은 하지 않습니다.",
      "required": false,
      "screens": ["마법사: 2026-11-17 New Foundry · North Central US · 샌드박스", "참가자 역할 3개로 Prompt Agent 실행 재현 · 2026-11-17"],
      "prerequisites": ["evaluation"],
      "sections": ["ignite-optimize"],
      "steps": [["ignite-optimize"]],
      "more": ["training", "new-models"]
    },
    {
      "key": "manage",
      "enabled": true,
      "title": "Manage로 운영·비용·정책 보기",
      "lead": "Fleet·Cost·Compliance·Gateways를 읽고 생성·게시·정책 변경은 하지 않습니다.",
      "required": false,
      "screens": ["2026-11-17 New Foundry · North Central US · 샌드박스", "참가자 역할 3개로 화면 열기 재현 · 2026-11-17"],
      "prerequisites": ["resource"],
      "sections": ["ignite-fleet"],
      "steps": [["ignite-fleet"]],
      "more": ["foundry-safety", "azure-windows"]
    }
  ]
};
