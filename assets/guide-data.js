window.GUIDE_DATA = {
 "schemaVersion": 1,
 "title": "Microsoft Foundry 포털 핸즈온 · 참가자 권한 계정 재촬영",
 "capturedDate": "2026-11-18",
 "recording": {
  "startedAt": "2026-11-18T03:48:14.735Z",
  "durationSeconds": 567.64,
  "width": 1600,
  "height": 900,
  "continuous": false,
  "includesAuthentication": false,
  "narration": false,
  "video": "assets/video/full-walkthrough.mp4",
  "nativeDurationSeconds": 567.64,
  "note": "실습별 녹화를 이어 붙였고 기다리는 구간은 빠르게 재생했습니다. 로그인·MFA 입력은 영상에서 제외했습니다."
 },
 "lab": {
  "subscriptionId": "00000000-0000-0000-0000-000000000000",
  "tenantId": "00000000-0000-0000-0000-000000000000",
  "resourceGroup": "rg-se01",
  "region": "northcentralus",
  "foundryResource": "foundry-se02-lab",
  "project": "se02-lab",
  "deployment": "gpt-6.1-terra",
  "model": "gpt-6.1-terra",
  "modelVersion": "2026-10-26",
  "deploymentType": "Global Standard",
  "tokensPerMinute": 10000,
  "agent": "workshop-assistant",
  "agentVersion": "2",
  "workspace": "log-foundry-se02-lab-w7lsnurj7vk3i",
  "applicationInsights": "appi-foundry-se02-lab-5959"
 },
 "chapters": [
  {
   "id": "account",
   "title": "01 · 계정·테넌트·배정 RG 확인",
   "seconds": 0.0,
   "videoSeconds": 0.0
  },
  {
   "id": "resource",
   "title": "02 · Azure Portal에서 Foundry 리소스 만들기",
   "seconds": 40.36,
   "videoSeconds": 40.36
  },
  {
   "id": "project",
   "title": "03 · Foundry Portal에서 기본 프로젝트 열기",
   "seconds": 201.493,
   "videoSeconds": 201.493
  },
  {
   "id": "model",
   "title": "04 · gpt-6.1-terra 모델 배포와 테스트",
   "seconds": 229.6,
   "videoSeconds": 229.6
  },
  {
   "id": "agent",
   "title": "05 · 워크샵 Prompt Agent 만들기",
   "seconds": 322.4,
   "videoSeconds": 322.4
  },
  {
   "id": "connect",
   "title": "06 · Traces에서 App Insights 연결 확인",
   "seconds": 364.048,
   "videoSeconds": 364.048
  },
  {
   "id": "run",
   "title": "07 · 에이전트 실행과 대화 확인",
   "seconds": 374.422,
   "videoSeconds": 374.422
  },
  {
   "id": "monitoring-setup",
   "title": "08 · 대체 경로 · Traces에서 App Insights 만들고 연결",
   "seconds": 423.28,
   "videoSeconds": 423.28
  },
  {
   "id": "monitor",
   "title": "09 · Monitor에서 실행 수·토큰·오류 확인",
   "seconds": 475.48,
   "videoSeconds": 475.48
  },
  {
   "id": "traces",
   "title": "10 · Traces에서 입력·출력·토큰·지연 확인",
   "seconds": 517.714,
   "videoSeconds": 517.714
  }
 ],
 "shots": [
  {
   "id": "01-guest-sign-in",
   "title": "발급된 Internal Guest 계정으로 로그인",
   "section": "account",
   "action": "Azure Portal 오른쪽 위 프로필을 열고 발급받은 계정과 디렉터리를 확인합니다. 로그인·MFA는 위 순서로 마칩니다.",
   "expected": "발급된 계정과 대상 디렉터리가 표시됩니다.",
   "image": "assets/screenshots/01-guest-sign-in.png",
   "width": 1600,
   "height": 900,
   "seconds": 11.193,
   "capturedAt": "2026-11-18T03:48:49.928000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "로그인 계정·테넌트",
     "x": 1408,
     "y": 0,
     "width": 192,
     "height": 40
    },
    {
     "label": "필요 시 디렉터리 전환",
     "x": 1404,
     "y": 176,
     "width": 96,
     "height": 20
    }
   ],
   "videoSeconds": 11.193
  },
  {
   "id": "02-assigned-resource-group",
   "title": "운영자가 배정한 리소스 그룹 선택",
   "section": "account",
   "action": "Resource groups에서 배정받은 그룹 이름으로 필터링한 뒤 해당 그룹을 엽니다. 새 리소스 그룹은 만들지 않습니다.",
   "expected": "내 계정에는 배정된 리소스 그룹만 보입니다.",
   "image": "assets/screenshots/02-assigned-resource-group.png",
   "width": 1600,
   "height": 900,
   "seconds": 17.406,
   "capturedAt": "2026-11-18T03:48:56.141000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "배정받은 리소스 그룹",
     "x": 361,
     "y": 264,
     "width": 47,
     "height": 19
    }
   ],
   "videoSeconds": 17.406
  },
  {
   "id": "03-empty-resource-group",
   "title": "배정 그룹과 구독 확인",
   "section": "account",
   "action": "Overview에서 구독과 North Central US 위치를 확인합니다. RG·역할·필수 리소스 공급자 사전 등록은 운영자가 준비하고, Foundry·모델·관측성 리소스는 참가자가 생성합니다.",
   "expected": "배정 RG의 구독과 위치가 보이고 아직 리소스가 없습니다.",
   "image": "assets/screenshots/03-empty-resource-group.png",
   "width": 1600,
   "height": 900,
   "seconds": 22.965,
   "capturedAt": "2026-11-18T03:49:01.700000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "배정 리소스 그룹",
     "x": 638,
     "y": 76,
     "width": 86,
     "height": 32
    },
    {
     "label": "권한 확인 메뉴",
     "x": 580,
     "y": 234,
     "width": 265,
     "height": 32
    }
   ],
   "videoSeconds": 22.965
  },
  {
   "id": "04-guest-scoped-roles",
   "title": "필요한 세 역할 확인",
   "section": "account",
   "action": "Access control (IAM) → Check access에서 내 역할을 확인합니다. 역할 추가는 참가자가 아닌 운영자 작업입니다.",
   "expected": "이 RG의 Contributor·Foundry User와 구독에서 상속된 Cognitive Services Usages Reader가 보입니다.",
   "image": "assets/screenshots/04-guest-scoped-roles.png",
   "width": 1600,
   "height": 900,
   "seconds": 36.872,
   "capturedAt": "2026-11-18T03:49:15.607000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "RG 관리 권한",
     "x": 876,
     "y": 688,
     "width": 140,
     "height": 17
    },
    {
     "label": "Foundry 사용 권한",
     "x": 876,
     "y": 728,
     "width": 140,
     "height": 17
    },
    {
     "label": "구독 할당량 읽기 전용",
     "x": 876,
     "y": 640,
     "width": 140,
     "height": 34
    }
   ],
   "videoSeconds": 36.872
  },
  {
   "id": "05-foundry-create-entry",
   "title": "Azure Portal에서 Foundry 생성 시작",
   "section": "resource",
   "action": "Azure Portal 홈 → Foundry → Create a Foundry resource를 선택합니다.",
   "expected": "Microsoft Foundry 개요에서 Create a Foundry resource 버튼이 보입니다.",
   "image": "assets/screenshots/05-foundry-create-entry.png",
   "width": 1600,
   "height": 900,
   "seconds": 55.344,
   "capturedAt": "2026-11-18T04:47:04.790000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Foundry 리소스 만들기",
     "x": 332,
     "y": 375,
     "width": 193,
     "height": 32
    }
   ],
   "videoSeconds": 55.344
  },
  {
   "id": "06-foundry-basics",
   "title": "리소스와 기본 프로젝트 이름 입력",
   "section": "resource",
   "action": "배정 RG를 선택하고 Name·Region(North Central US)·Application insights·Default project name을 입력합니다. 이 포털은 Foundry 리소스와 기본 프로젝트를 함께 생성합니다.",
   "expected": "배정 RG·이름·North Central US와 새 Application insights(New), 기본 프로젝트 이름이 입력됩니다.",
   "image": "assets/screenshots/06-foundry-basics.png",
   "width": 1600,
   "height": 900,
   "seconds": 68.735,
   "capturedAt": "2026-11-18T04:47:18.181000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "기존 배정 RG 선택",
     "x": 278,
     "y": 394,
     "width": 442,
     "height": 24
    },
    {
     "label": "Foundry 리소스 이름",
     "x": 278,
     "y": 450,
     "width": 442,
     "height": 24
    },
    {
     "label": "Region",
     "x": 278,
     "y": 490,
     "width": 442,
     "height": 24
    },
    {
     "label": "Application insights (New)",
     "x": 278,
     "y": 659,
     "width": 442,
     "height": 24
    },
    {
     "label": "함께 만들 기본 프로젝트",
     "x": 278,
     "y": 811,
     "width": 442,
     "height": 24
    }
   ],
   "videoSeconds": 68.735
  },
  {
   "id": "07-foundry-managed-storage",
   "title": "기본 관리형 스토리지 유지",
   "section": "resource-settings",
   "action": "Storage 탭은 기본값으로 둡니다. Key Vault·Cosmos DB·AI Search·별도 Storage Account는 이 기본 Prompt Agent 실습에 추가하지 않습니다.",
   "expected": "기본 Agent service 구성이 선택되어 있습니다.",
   "image": "assets/screenshots/07-foundry-managed-storage.png",
   "width": 1600,
   "height": 900,
   "seconds": 72.242,
   "capturedAt": "2026-11-18T04:47:21.688000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "기본 Agent service 구성",
     "x": 82,
     "y": 152,
     "width": 65,
     "height": 36
    }
   ],
   "videoSeconds": 72.242
  },
  {
   "id": "08-foundry-workshop-network",
   "title": "워크샵용 기본 네트워크 확인",
   "section": "resource-settings",
   "action": "Inbound Networking은 기본 공용 네트워크 설정을 유지합니다. 실제 운영환경의 사설 네트워크·보안 설계와는 다른 워크샵 예제입니다.",
   "expected": "기본 공용 네트워크가 선택되어 있습니다.",
   "image": "assets/screenshots/08-foundry-workshop-network.png",
   "width": 1600,
   "height": 900,
   "seconds": 75.861,
   "capturedAt": "2026-11-18T04:47:25.307000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "워크샵 기본 네트워크",
     "x": 155,
     "y": 152,
     "width": 149,
     "height": 36
    }
   ],
   "videoSeconds": 75.861
  },
  {
   "id": "09-foundry-outbound-default",
   "title": "별도 VNet 연결 없이 기본값 유지",
   "section": "resource-settings",
   "action": "Outbound Networking은 기본값을 유지합니다. Custom VNet을 구성하지 않는 기본 워크샵 흐름입니다.",
   "expected": "별도 VNet 없이 기본 Outbound 설정입니다.",
   "image": "assets/screenshots/09-foundry-outbound-default.png",
   "width": 1600,
   "height": 900,
   "seconds": 80.013,
   "capturedAt": "2026-11-18T04:47:29.459000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "기본 Outbound 설정",
     "x": 312,
     "y": 152,
     "width": 160,
     "height": 36
    }
   ],
   "videoSeconds": 80.013
  },
  {
   "id": "10-foundry-managed-identity",
   "title": "시스템 할당 관리 ID 기본값 유지",
   "section": "resource-settings",
   "action": "Identity 탭은 기본 System assigned를 유지합니다. 참가자가 별도 Entra ID 애플리케이션을 만들지 않습니다.",
   "expected": "시스템 할당 관리 ID가 켜져 있습니다.",
   "image": "assets/screenshots/10-foundry-managed-identity.png",
   "width": 1600,
   "height": 900,
   "seconds": 83.558,
   "capturedAt": "2026-11-18T04:47:33.004000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "관리 ID 설정",
     "x": 480,
     "y": 152,
     "width": 65,
     "height": 36
    }
   ],
   "videoSeconds": 83.558
  },
  {
   "id": "11-foundry-encryption-default",
   "title": "Microsoft 관리형 키 기본 암호화",
   "section": "resource-settings",
   "action": "Encryption에서 고객 관리형 키를 추가하지 않고 기본 Microsoft-managed keys 암호화를 유지합니다.",
   "expected": "Microsoft 관리형 키가 선택되어 있습니다.",
   "image": "assets/screenshots/11-foundry-encryption-default.png",
   "width": 1600,
   "height": 900,
   "seconds": 86.963,
   "capturedAt": "2026-11-18T04:47:36.409000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "추가 고객 관리형 키 사용 안 함",
     "x": 553,
     "y": 152,
     "width": 84,
     "height": 36
    }
   ],
   "videoSeconds": 86.963
  },
  {
   "id": "12-foundry-tags",
   "title": "추가 태그 없이 검토 화면으로 이동",
   "section": "resource-settings",
   "action": "이 예제의 Tags는 비워 둡니다. 워크샵 운영자가 별도 태그 규칙을 제공했다면 해당 규칙을 따릅니다.",
   "expected": "태그 없이 다음으로 넘어갑니다.",
   "image": "assets/screenshots/12-foundry-tags.png",
   "width": 1600,
   "height": 900,
   "seconds": 90.368,
   "capturedAt": "2026-11-18T04:47:39.814000Z",
   "source": "https://portal.azure.com",
   "hotspots": [],
   "videoSeconds": 90.368
  },
  {
   "id": "13-foundry-review-create",
   "title": "검토 후 리소스·기본 프로젝트 생성",
   "section": "resource",
   "action": "Review + create에서 배정 RG·이름·기본 프로젝트를 확인하고 Create를 선택합니다. 다른 탭은 기본값입니다.",
   "expected": "검증을 통과하면 Create 버튼이 활성화됩니다.",
   "image": "assets/screenshots/13-foundry-review-create.png",
   "width": 1600,
   "height": 900,
   "seconds": 184.592,
   "capturedAt": "2026-11-18T04:49:14.038000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "참가자 계정으로 생성 실행",
     "x": 208,
     "y": 856,
     "width": 80,
     "height": 24
    }
   ],
   "videoSeconds": 184.592
  },
  {
   "id": "14-foundry-created",
   "title": "Foundry 리소스·기본 프로젝트 배포 완료",
   "section": "resource",
   "action": "Your deployment is complete를 확인한 후 Go to resource를 선택합니다.",
   "expected": "Azure 배포가 성공하고 Go to resource가 보입니다.",
   "image": "assets/screenshots/14-foundry-created.png",
   "width": 1600,
   "height": 900,
   "seconds": 201.074,
   "capturedAt": "2026-11-18T04:50:48.080000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Azure 배포 성공",
     "x": 321,
     "y": 189,
     "width": 296,
     "height": 23
    },
    {
     "label": "생성된 Foundry 열기",
     "x": 321,
     "y": 404,
     "width": 129,
     "height": 24
    }
   ],
   "videoSeconds": 201.074
  },
  {
   "id": "15-foundry-resource-overview",
   "title": "생성된 Foundry에서 포털 열기",
   "section": "project",
   "action": "Azure Portal Overview에서 API Kind=AIServices, Status=Succeeded를 확인하고 Go to Foundry portal을 엽니다.",
   "expected": "리소스 상태가 Succeeded이고 Go to Foundry portal 버튼이 보입니다.",
   "image": "assets/screenshots/15-foundry-resource-overview.png",
   "width": 1600,
   "height": 900,
   "seconds": 210.021,
   "capturedAt": "2026-11-18T04:50:57.027000Z",
   "source": "https://portal.azure.com",
   "hotspots": [
    {
     "label": "Foundry Portal 열기",
     "x": 309,
     "y": 142,
     "width": 128,
     "height": 17
    }
   ],
   "videoSeconds": 210.021
  },
  {
   "id": "16-foundry-project-home",
   "title": "기본 프로젝트 열기",
   "section": "project",
   "action": "Foundry Portal에서 New Foundry가 켜져 있고 프로젝트가 se02-lab인지 확인합니다. 앞 단계에서 기본 프로젝트도 함께 만들어졌으므로 중복 생성하지 않습니다.",
   "expected": "프로젝트 이름과 New Foundry 토글, 환영 문구가 보입니다.",
   "image": "assets/screenshots/16-foundry-project-home.png",
   "width": 1600,
   "height": 900,
   "seconds": 226.059,
   "capturedAt": "2026-11-18T04:51:13.065000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "현재 프로젝트",
     "x": 185,
     "y": 0,
     "width": 169,
     "height": 48
    },
    {
     "label": "New Foundry 켜짐",
     "x": 1224,
     "y": 14,
     "width": 56,
     "height": 20
    },
    {
     "label": "사용자 확인",
     "x": 754,
     "y": 88,
     "width": 313,
     "height": 36
    }
   ],
   "videoSeconds": 226.059
  },
  {
   "id": "17-project-not-found",
   "title": "프로젝트를 만든 직후 'Project not found'",
   "section": "troubleshooting",
   "action": "배포가 끝난 직후 Go to Foundry portal로 연 프로젝트가 “Project 'se02-lab' could not be found. It may have been deleted.”로 보일 수 있습니다. 삭제된 것이 아니라 새 프로젝트가 Foundry 포털에 반영되기 전입니다. 프로젝트를 다시 만들거나 Select another project로 옮기지 말고 몇 분 기다린 뒤 같은 주소를 다시 엽니다.",
   "expected": "이 화면은 촬영 중 첫 시도에서 나왔고 만든 지 5~7분 뒤 같은 주소가 정상으로 열렸습니다. 10분이 지나도 계속되면 같은 이름으로 다시 만들지 말고 오류 화면의 시각과 프로젝트 이름을 운영자에게 알립니다.",
   "image": "assets/screenshots/17-project-not-found.png",
   "width": 1600,
   "height": 900,
   "seconds": 201.493,
   "capturedAt": "2026-11-18T04:19:58.513000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Project not found",
     "x": 684,
     "y": 461,
     "width": 292,
     "height": 54
    },
    {
     "label": "프로젝트가 아직 반영되지 않았다는 안내",
     "x": 602,
     "y": 515,
     "width": 436,
     "height": 33
    }
   ],
   "videoSeconds": 201.493
  },
  {
   "id": "18-model-deploy-entry",
   "title": "모델 배포 시작",
   "section": "model",
   "action": "Build → Models → Deployments에서 Deploy → Deploy a base model을 선택합니다.",
   "expected": "새 프로젝트에는 아직 모델 배포가 없습니다.",
   "image": "assets/screenshots/18-model-deploy-entry.png",
   "width": 1600,
   "height": 900,
   "seconds": 249.694,
   "capturedAt": "2026-11-18T04:51:54.631000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Deploy 메뉴",
     "x": 790,
     "y": 578,
     "width": 96,
     "height": 32
    },
    {
     "label": "Deploy a base model",
     "x": 795,
     "y": 615,
     "width": 176,
     "height": 32
    }
   ],
   "videoSeconds": 249.694
  },
  {
   "id": "19-model-catalog-search",
   "title": "카탈로그에서 gpt-6.1-terra 찾기",
   "section": "model",
   "action": "모델 카탈로그 검색창에 gpt-6.1-terra를 입력하고 OpenAI의 gpt-6.1-terra 카드를 선택합니다.",
   "expected": "이름이 정확히 같은 gpt-6.1-terra 모델 카드를 선택합니다.",
   "image": "assets/screenshots/19-model-catalog-search.png",
   "width": 1600,
   "height": 900,
   "seconds": 264.924,
   "capturedAt": "2026-11-18T04:52:09.861000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "카탈로그 검색",
     "x": 277,
     "y": 146,
     "width": 326,
     "height": 30
    },
    {
     "label": "gpt-6.1-terra 카드",
     "x": 1240,
     "y": 235,
     "width": 336,
     "height": 178
    }
   ],
   "videoSeconds": 264.924
  },
  {
   "id": "20-model-version-deploy",
   "title": "모델 버전 확인 후 Deploy",
   "section": "model",
   "action": "OpenAI gpt-6.1-terra 카드에서 버전(2026-10-26)을 확인하고 Deploy를 선택합니다.",
   "expected": "선택한 모델은 Azure에서 제공되는 gpt-6.1-terra입니다.",
   "image": "assets/screenshots/20-model-version-deploy.png",
   "width": 1600,
   "height": 900,
   "seconds": 272.766,
   "capturedAt": "2026-11-18T04:52:17.703000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "모델 이름",
     "x": 300,
     "y": 74,
     "width": 186,
     "height": 36
    },
    {
     "label": "Deploy",
     "x": 1448,
     "y": 76,
     "width": 96,
     "height": 32
    }
   ],
   "videoSeconds": 272.766
  },
  {
   "id": "21-model-custom-settings",
   "title": "워크샵 할당량으로 사용자 지정 배포",
   "section": "model",
   "action": "Deploy 메뉴에서 Custom settings를 선택합니다. 기본 할당량을 그대로 쓰지 않고 참가자별 한도를 맞춥니다.",
   "expected": "배포 이름·Global Standard·TPM을 직접 설정할 수 있습니다.",
   "image": "assets/screenshots/21-model-custom-settings.png",
   "width": 1600,
   "height": 900,
   "seconds": 274.771,
   "capturedAt": "2026-11-18T04:52:19.708000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Custom settings",
     "x": 1249,
     "y": 165,
     "width": 290,
     "height": 66
    }
   ],
   "videoSeconds": 274.771
  },
  {
   "id": "22-model-deployment-settings",
   "title": "Global Standard · 10K TPM으로 배포",
   "section": "model",
   "action": "Deployment name=gpt-6.1-terra, Deployment type=Global Standard, Tokens per Minute Rate Limit=10000을 확인하고 Deploy를 누릅니다. Guardrails는 DefaultV2를 유지합니다.",
   "expected": "참가자 1명에게 10K TPM을 배정합니다. 이 화면의 단위는 토큰/분이며 10을 입력하는 것이 아닙니다.",
   "image": "assets/screenshots/22-model-deployment-settings.png",
   "width": 1600,
   "height": 900,
   "seconds": 288.627,
   "capturedAt": "2026-11-18T04:52:33.564000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "배포 이름",
     "x": 1034,
     "y": 89,
     "width": 541,
     "height": 30
    },
    {
     "label": "Global Standard",
     "x": 1034,
     "y": 169,
     "width": 507,
     "height": 30
    },
    {
     "label": "TPM 입력",
     "x": 1423,
     "y": 347,
     "width": 90,
     "height": 30
    },
    {
     "label": "Guardrails DefaultV2",
     "x": 1034,
     "y": 492,
     "width": 507,
     "height": 30
    },
    {
     "label": "Deploy",
     "x": 1033,
     "y": 844,
     "width": 70,
     "height": 32
    }
   ],
   "videoSeconds": 288.627
  },
  {
   "id": "23-model-remove-web-search",
   "title": "기본 Web search 도구 제외",
   "section": "model",
   "action": "Playground에 Web search가 기본으로 보이면 Actions for Web search → Remove를 선택합니다. 이 실습은 웹 검색·Bing 추가 비용 없이 모델과 Prompt Agent만 사용합니다.",
   "expected": "추론 전에 외부 검색 도구를 제거합니다.",
   "image": "assets/screenshots/23-model-remove-web-search.png",
   "width": 1600,
   "height": 900,
   "seconds": 296.117,
   "capturedAt": "2026-11-18T04:52:47.214000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Actions for Web search",
     "x": 672,
     "y": 513,
     "width": 24,
     "height": 24
    },
    {
     "label": "Remove",
     "x": 677,
     "y": 542,
     "width": 128,
     "height": 32
    }
   ],
   "videoSeconds": 296.117
  },
  {
   "id": "24-model-playground-parameters",
   "title": "짧은 실습용 생성 파라미터",
   "section": "model",
   "action": "Parameters에서 Max Completion Tokens=1024를 입력하고 Reasoning Effort는 기본값 low를 확인합니다. gpt-6.1-terra에는 minimal이 없고 low·medium·high·xhigh가 있습니다. 10K TPM 실습에서 불필요하게 큰 응답 한도를 사용하지 않습니다.",
   "expected": "짧은 모델 응답을 빠르게 테스트할 준비가 되었습니다.",
   "image": "assets/screenshots/24-model-playground-parameters.png",
   "width": 1600,
   "height": 900,
   "seconds": 301.19,
   "capturedAt": "2026-11-18T04:52:52.287000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Max Completion Tokens",
     "x": 562,
     "y": 231,
     "width": 83,
     "height": 30
    },
    {
     "label": "Reasoning Effort",
     "x": 379,
     "y": 320,
     "width": 99,
     "height": 20
    }
   ],
   "videoSeconds": 301.19
  },
  {
   "id": "25-model-test-input",
   "title": "배포한 모델에 첫 질문 보내기",
   "section": "model",
   "action": "Chat with the model...에 예제 질문을 입력하고 Send를 선택합니다. API 키나 코드는 필요하지 않습니다.",
   "expected": "배포된 gpt-6.1-terra 모델을 참가자 로그인으로 직접 호출합니다.",
   "image": "assets/screenshots/25-model-test-input.png",
   "width": 1600,
   "height": 900,
   "seconds": 305.662,
   "capturedAt": "2026-11-18T04:52:56.759000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "질문 입력",
     "x": 748,
     "y": 786,
     "width": 824,
     "height": 20
    },
    {
     "label": "Send",
     "x": 1540,
     "y": 822,
     "width": 32,
     "height": 32
    }
   ],
   "videoSeconds": 305.662
  },
  {
   "id": "26-model-test-response",
   "title": "모델의 실제 응답 확인",
   "section": "model",
   "action": "오른쪽 채팅에 모델의 한국어 응답이 표시되는지 확인합니다. 오류 없이 응답하면 모델 배포·추론이 완료된 것입니다.",
   "expected": "모델 응답과 응답 시간·토큰이 표시됩니다.",
   "image": "assets/screenshots/26-model-test-response.png",
   "width": 1600,
   "height": 900,
   "seconds": 318.778,
   "capturedAt": "2026-11-18T04:53:09.875000Z",
   "source": "https://ai.azure.com",
   "hotspots": [],
   "videoSeconds": 318.778
  },
  {
   "id": "27-agent-instructions",
   "title": "에이전트의 역할과 응답 규칙 입력",
   "section": "agent",
   "action": "Instructions에 워크샵 도우미 역할·한국어·최대 3문장 규칙을 입력합니다. Tools는 비어 있는 상태로 두고 Save as agent를 선택합니다.",
   "expected": "모델 배포와 지시문을 재사용하는 기본 Prompt Agent를 만들 준비가 되었습니다.",
   "image": "assets/screenshots/27-agent-instructions.png",
   "width": 1600,
   "height": 900,
   "seconds": 339.462,
   "capturedAt": "2026-11-18T04:54:35.168000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "에이전트 지시문",
     "x": 244,
     "y": 254,
     "width": 451,
     "height": 112
    },
    {
     "label": "Tools는 비워 둠",
     "x": 50,
     "y": 292,
     "width": 31,
     "height": 20
    },
    {
     "label": "Save as agent",
     "x": 1311,
     "y": 68,
     "width": 111,
     "height": 32
    }
   ],
   "videoSeconds": 339.462
  },
  {
   "id": "28-agent-create",
   "title": "Prompt Agent 이름 지정·생성",
   "section": "agent",
   "action": "Agent name에 workshop-assistant를 입력하고 Create and open playground를 선택합니다. Microsoft Copilot harness는 사용하지 않습니다.",
   "expected": "일반 Prompt Agent를 생성하며 Hosted Agent나 Copilot harness 실습이 아닙니다.",
   "image": "assets/screenshots/28-agent-create.png",
   "width": 1600,
   "height": 900,
   "seconds": 345.8,
   "capturedAt": "2026-11-18T04:54:41.506000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "에이전트 이름",
     "x": 541,
     "y": 416,
     "width": 518,
     "height": 30
    },
    {
     "label": "생성하고 Playground 열기",
     "x": 781,
     "y": 561,
     "width": 201,
     "height": 32
    }
   ],
   "videoSeconds": 345.8
  },
  {
   "id": "29-agent-created",
   "title": "저장된 Agent와 모델·지시문 확인",
   "section": "agent",
   "action": "에이전트 이름·Version 1·gpt-6.1-terra 모델·입력한 지시문을 확인합니다. Tools에 Web search가 든 기본 툴박스가 자동으로 붙어 있으니 다음 단계에서 제거합니다.",
   "expected": "Prompt Agent가 Version 1로 저장되었습니다. Publish는 이 Playground 실습에 필요하지 않습니다.",
   "image": "assets/screenshots/29-agent-created.png",
   "width": 1600,
   "height": 900,
   "seconds": 353.327,
   "capturedAt": "2026-11-18T04:54:56.953000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "에이전트 이름",
     "x": 274,
     "y": 70,
     "width": 175,
     "height": 28
    },
    {
     "label": "Version",
     "x": 1025,
     "y": 73,
     "width": 175,
     "height": 22
    },
    {
     "label": "모델",
     "x": 245,
     "y": 150,
     "width": 377,
     "height": 30
    },
    {
     "label": "지시문",
     "x": 244,
     "y": 332,
     "width": 451,
     "height": 112
    },
    {
     "label": "기본 툴박스(Web search)",
     "x": 671,
     "y": 611,
     "width": 24,
     "height": 24
    }
   ],
   "videoSeconds": 353.327
  },
  {
   "id": "30-agent-remove-toolbox",
   "title": "기본 툴박스(Web search) 제거",
   "section": "agent",
   "action": "Tools의 툴박스에서 Actions → Remove를 선택합니다. 이 실습은 Bing 웹 검색 추가 비용과 데이터 이동 없이 모델과 Prompt Agent만 사용합니다.",
   "expected": "툴박스가 사라지고 Save가 활성화됩니다.",
   "image": "assets/screenshots/30-agent-remove-toolbox.png",
   "width": 1600,
   "height": 900,
   "seconds": 355.197,
   "capturedAt": "2026-11-18T04:54:58.823000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Actions",
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
   ],
   "videoSeconds": 355.197
  },
  {
   "id": "31-agent-tools-saved",
   "title": "Tools를 비우고 저장 · Version 2",
   "section": "agent",
   "action": "Save를 눌러 Tools가 빈 상태를 저장합니다. Version이 2로 바뀌고 Tools에는 Create toolbox 안내만 남습니다.",
   "expected": "Tools 없이 Version 2가 저장되었습니다.",
   "image": "assets/screenshots/31-agent-tools-saved.png",
   "width": 1600,
   "height": 900,
   "seconds": 364.046,
   "capturedAt": "2026-11-18T04:55:07.672000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Version",
     "x": 1025,
     "y": 73,
     "width": 175,
     "height": 22
    },
    {
     "label": "Tools 영역",
     "x": 552,
     "y": 607,
     "width": 94,
     "height": 24
    }
   ],
   "videoSeconds": 364.046
  },
  {
   "id": "32-tracing-before-first-run",
   "title": "실행 전에 트레이싱 연결 확인",
   "section": "connect",
   "action": "Traces 탭에서 Connect 안내가 아니라 빈 트레이스 표와 Chat with agent 버튼이 보이면 Foundry 리소스를 만들 때 선택한 Application insights가 이미 연결된 것입니다. 연결 후에 실행한 대화부터 기록됩니다.",
   "expected": "현재는 실행 전이므로 트레이스가 없습니다. Cost Management Reader 안내는 통화 표시용이며 이 실습 때문에 추가 부여하지 않습니다.",
   "image": "assets/screenshots/32-tracing-before-first-run.png",
   "width": 1600,
   "height": 900,
   "seconds": 374.421,
   "capturedAt": "2026-11-18T04:55:18.047000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Traces 탭",
     "x": 381,
     "y": 100,
     "width": 56,
     "height": 32
    },
    {
     "label": "트레이스 없음",
     "x": 761,
     "y": 614,
     "width": 298,
     "height": 28
    },
    {
     "label": "Chat with agent",
     "x": 849,
     "y": 686,
     "width": 123,
     "height": 32
    }
   ],
   "videoSeconds": 374.421
  },
  {
   "id": "33-fallback-traces-connect-banner",
   "title": "App Insights가 연결되지 않았을 때의 안내",
   "section": "monitoring-setup",
   "action": "Traces(또는 에이전트의 Traces 탭)에 “Create or connect an App Insights resource to enable tracing.” 안내가 보이면 오른쪽의 Connect를 선택합니다. 이 안내가 없으면 이미 연결된 것이므로 새로 만들지 않습니다.",
   "expected": "트레이스 목록은 비어 있고 안내 줄에 Connect 버튼이 있습니다.",
   "image": "assets/screenshots/33-fallback-traces-connect-banner.png",
   "width": 1600,
   "height": 900,
   "seconds": 452.843,
   "capturedAt": "2026-11-18T05:00:05.441000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "연결 안내",
     "x": 285,
     "y": 133,
     "width": 1179,
     "height": 20
    },
    {
     "label": "Connect",
     "x": 1464,
     "y": 131,
     "width": 63,
     "height": 24
    }
   ],
   "videoSeconds": 452.843
  },
  {
   "id": "34-fallback-resource-list",
   "title": "Application insights resource name 목록 열기",
   "section": "monitoring-setup",
   "action": "App. Insights resource 대화상자에서 Application insights resource name 목록을 엽니다. 맨 위의 Create new resource를 선택합니다. 이미 내 RG에 만든 App Insights가 있으면 목록에서 그것을 골라 연결할 수도 있습니다.",
   "expected": "목록 맨 위에 Create new resource가 보이고, 이어서 같은 RG에 있는 기존 App Insights 이름이 보입니다.",
   "image": "assets/screenshots/34-fallback-resource-list.png",
   "width": 1600,
   "height": 900,
   "seconds": 456.917,
   "capturedAt": "2026-11-18T05:00:09.515000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "이름 목록",
     "x": 256,
     "y": 409,
     "width": 314,
     "height": 30
    },
    {
     "label": "Create new resource",
     "x": 259,
     "y": 446,
     "width": 342,
     "height": 32
    }
   ],
   "videoSeconds": 456.917
  },
  {
   "id": "35-fallback-create-form",
   "title": "Create new resource 입력 확인",
   "section": "monitoring-setup",
   "action": "Name은 자동으로 채워진 이름을 그대로 쓰거나 고유 이름으로 바꾸고, Log Analytics Workspace는 [new] 기본값, Auth Type은 API Key를 유지한 채 Create를 누릅니다. 새 리소스는 프로젝트가 있는 내 배정 RG에 만들어집니다.",
   "expected": "Name·Log Analytics Workspace·Auth Type이 채워지고 Create 버튼이 활성화됩니다. 키나 연결 문자열은 직접 입력하지 않습니다.",
   "image": "assets/screenshots/35-fallback-create-form.png",
   "width": 1600,
   "height": 900,
   "seconds": 460.376,
   "capturedAt": "2026-11-18T05:00:12.974000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Name",
     "x": 256,
     "y": 351,
     "width": 348,
     "height": 30
    },
    {
     "label": "Log Analytics Workspace",
     "x": 256,
     "y": 419,
     "width": 314,
     "height": 30
    },
    {
     "label": "Auth Type",
     "x": 256,
     "y": 487,
     "width": 314,
     "height": 30
    },
    {
     "label": "Create",
     "x": 255,
     "y": 590,
     "width": 53,
     "height": 24
    }
   ],
   "videoSeconds": 460.376
  },
  {
   "id": "36-fallback-connected",
   "title": "연결 완료 · 트레이스 표 표시",
   "section": "monitoring-setup",
   "action": "Create 후 몇 초 안에 대화상자가 닫히고 연결 안내 줄이 사라집니다.",
   "expected": "Traces 표가 나타나고 “No project traces yet”가 보입니다. 연결 후 새로 실행한 대화부터 트레이스가 기록됩니다.",
   "image": "assets/screenshots/36-fallback-connected.png",
   "width": 1600,
   "height": 900,
   "seconds": 472.52,
   "capturedAt": "2026-11-18T05:00:25.118000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "트레이스 표",
     "x": 818,
     "y": 570,
     "width": 183,
     "height": 28
    }
   ],
   "videoSeconds": 472.52
  },
  {
   "id": "37-agent-run-parameters",
   "title": "에이전트 실행 응답 한도 설정",
   "section": "run",
   "action": "Agent Playground의 Parameters에서 Max output tokens=1024를 입력하고 Reasoning Effort는 기본값 low를 확인합니다. 모델 Playground와 독립된 실행 설정이므로 다시 확인합니다.",
   "expected": "이번 에이전트 테스트도 짧은 응답 한도로 실행합니다. Max output tokens는 출력 길이 한도이며 비용 예산 상한은 아닙니다.",
   "image": "assets/screenshots/37-agent-run-parameters.png",
   "width": 1600,
   "height": 900,
   "seconds": 380.698,
   "capturedAt": "2026-11-18T04:55:24.324000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Max output tokens",
     "x": 586,
     "y": 435,
     "width": 72,
     "height": 32
    },
    {
     "label": "Reasoning Effort",
     "x": 29,
     "y": 294,
     "width": 99,
     "height": 20
    }
   ],
   "videoSeconds": 380.698
  },
  {
   "id": "38-agent-save-run-settings",
   "title": "저장된 버전 확인 · Save는 필요 없음",
   "section": "run",
   "action": "Parameters를 닫으면 Version은 그대로 2이고 Save는 비활성입니다. Max output tokens는 이 Playground 대화에만 적용되고 에이전트 정의에는 저장되지 않습니다. Publish는 누르지 않습니다.",
   "expected": "현재 저장된 Version 2로 Playground 대화를 시작합니다.",
   "image": "assets/screenshots/38-agent-save-run-settings.png",
   "width": 1600,
   "height": 900,
   "seconds": 383.16,
   "capturedAt": "2026-11-18T04:55:26.786000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Version",
     "x": 1025,
     "y": 73,
     "width": 175,
     "height": 22
    },
    {
     "label": "Save 비활성",
     "x": 1208,
     "y": 68,
     "width": 56,
     "height": 32
    }
   ],
   "videoSeconds": 383.16
  },
  {
   "id": "39-agent-first-question",
   "title": "연결 후 첫 에이전트 질문",
   "section": "run",
   "action": "저장된 현재 Version을 확인하고 질문을 입력한 뒤 Send를 누릅니다. 이 대화는 트레이싱 연결 이후의 새 실행입니다.",
   "expected": "에이전트가 저장된 지시문과 배포 모델을 사용해 한국어로 답합니다.",
   "image": "assets/screenshots/39-agent-first-question.png",
   "width": 1600,
   "height": 900,
   "seconds": 386.314,
   "capturedAt": "2026-11-18T04:55:29.940000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "질문 입력",
     "x": 748,
     "y": 786,
     "width": 824,
     "height": 20
    },
    {
     "label": "Send",
     "x": 1540,
     "y": 822,
     "width": 32,
     "height": 32
    }
   ],
   "videoSeconds": 386.314
  },
  {
   "id": "40-agent-first-response",
   "title": "첫 실행 응답 확인",
   "section": "run",
   "action": "한국어 응답과 배포 모델명, 지연 시간, 토큰 표시를 확인합니다. 모델 단독 테스트가 아니라 저장된 에이전트 Version 2 실행 결과입니다.",
   "expected": "정상 응답을 확인했습니다. 이 기본 에이전트에는 실제 Azure 작업 도구가 연결되어 있지 않습니다.",
   "image": "assets/screenshots/40-agent-first-response.png",
   "width": 1600,
   "height": 900,
   "seconds": 396.126,
   "capturedAt": "2026-11-18T04:55:39.752000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "응답과 모델·지연·토큰",
     "x": 750,
     "y": 262,
     "width": 545,
     "height": 96
    }
   ],
   "videoSeconds": 396.126
  },
  {
   "id": "41-agent-follow-up-response",
   "title": "같은 대화에서 이어서 질문",
   "section": "run",
   "action": "New chat을 누르지 않고 후속 질문을 보내 다중 턴 대화를 확인합니다. 응답은 매번 달라질 수 있습니다.",
   "expected": "후속 질문도 정상 실행됩니다. AI 출력은 실행 성공과 별개로 검토합니다.",
   "image": "assets/screenshots/41-agent-follow-up-response.png",
   "width": 1600,
   "height": 900,
   "seconds": 406.397,
   "capturedAt": "2026-11-18T04:55:50.023000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "새 응답과 모델·지연·토큰",
     "x": 750,
     "y": 403,
     "width": 820,
     "height": 85
    }
   ],
   "videoSeconds": 406.397,
   "extra": true
  },
  {
   "id": "42-agent-scoped-follow-up",
   "title": "실습 범위를 명확히 한 후속 질문",
   "section": "run",
   "action": "질문에 Tools가 없는 기본 Prompt Agent라는 범위를 명시해 후속 응답을 확인합니다. 역할 변경은 Instructions를 수정하고 Save하는 절차이며, 이 실습에서는 키·플러그인 변경이 필요 없습니다.",
   "expected": "같은 대화에서 세 번의 실행을 완료했습니다. 답변 내용의 정확성과 실행·트레이스 성공은 구분해서 확인합니다.",
   "image": "assets/screenshots/42-agent-scoped-follow-up.png",
   "width": 1600,
   "height": 900,
   "seconds": 420.268,
   "capturedAt": "2026-11-18T04:56:03.894000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "새 응답과 모델·지연·토큰",
     "x": 750,
     "y": 561,
     "width": 820,
     "height": 85
    }
   ],
   "videoSeconds": 420.268
  },
  {
   "id": "43-agent-monitor-overview",
   "title": "Monitor 개요와 토큰 사용량",
   "section": "monitor",
   "action": "Agent의 Monitor → Overview에서 Date range를 Last Day로 선택합니다. Operational metrics의 토큰 사용량을 확인합니다.",
   "expected": "선택한 기간의 Total token usage가 표시됩니다.",
   "image": "assets/screenshots/43-agent-monitor-overview.png",
   "width": 1600,
   "height": 900,
   "seconds": 507.013,
   "capturedAt": "2026-11-18T04:58:21.933000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "토큰 사용량 요약",
     "x": 265,
     "y": 380,
     "width": 104,
     "height": 20
    },
    {
     "label": "기간",
     "x": 5,
     "y": 3,
     "width": 13,
     "height": 13
    }
   ],
   "videoSeconds": 507.013
  },
  {
   "id": "44-agent-monitor-run-token-charts",
   "title": "실행 수와 토큰 차트 확인",
   "section": "monitor",
   "action": "Operational metrics 차트까지 내려 Agent runs와 Token usage를 확인합니다. 표시 값은 반올림될 수 있습니다.",
   "expected": "Agent runs 차트에 에이전트 이름과 실행 수, Token usage에 모델별 토큰이 표시됩니다.",
   "image": "assets/screenshots/44-agent-monitor-run-token-charts.png",
   "width": 1600,
   "height": 900,
   "seconds": 510.458,
   "capturedAt": "2026-11-18T04:58:25.378000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Agent runs 차트",
     "x": 261,
     "y": 133,
     "width": 76,
     "height": 22
    },
    {
     "label": "Token usage 차트",
     "x": 261,
     "y": 645,
     "width": 86,
     "height": 22
    }
   ],
   "videoSeconds": 510.458
  },
  {
   "id": "45-agent-monitor-error-rate",
   "title": "오류 확인",
   "section": "monitor",
   "action": "Gen AI errors 차트에서 실행 실패가 없는지 확인합니다. Evaluations·Scheduled evaluations·Red teaming은 이 기본 실습에서 활성화하지 않습니다.",
   "expected": "오류 없이 실행되어 Gen AI errors가 비어 있습니다.",
   "image": "assets/screenshots/45-agent-monitor-error-rate.png",
   "width": 1600,
   "height": 900,
   "seconds": 513.394,
   "capturedAt": "2026-11-18T04:58:28.314000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Gen AI errors",
     "x": 935,
     "y": 133,
     "width": 92,
     "height": 22
    }
   ],
   "videoSeconds": 513.394
  },
  {
   "id": "46-monitor-connected-resource",
   "title": "연결된 관측성 리소스 재확인",
   "section": "monitor",
   "action": "Monitor → Settings에서 App. Insights resource=Connected와 내 App Insights 이름을 확인한 뒤 Close로 닫습니다.",
   "expected": "Application Insights가 이 프로젝트에 연결되어 있습니다.",
   "image": "assets/screenshots/46-monitor-connected-resource.png",
   "width": 1600,
   "height": 900,
   "seconds": 516.467,
   "capturedAt": "2026-11-18T04:58:31.387000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "연결 완료 상태",
     "x": 466,
     "y": 212,
     "width": 138,
     "height": 20
    },
    {
     "label": "연결된 리소스",
     "x": 682,
     "y": 267,
     "width": 314,
     "height": 30
    }
   ],
   "videoSeconds": 516.467
  },
  {
   "id": "47-agent-trace-list",
   "title": "세 번 실행과 트레이스 목록 일치 확인",
   "section": "traces",
   "action": "Traces → Trace view에서 Last Day를 확인합니다. Completed 세 건의 토큰 합계가 Monitor와 일치하는지 보고 최신 Trace ID를 엽니다.",
   "expected": "세 번의 실행이 Completed 트레이스로 보입니다.",
   "image": "assets/screenshots/47-agent-trace-list.png",
   "width": 1600,
   "height": 900,
   "seconds": 529.55,
   "capturedAt": "2026-11-18T04:58:44.470000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "최신 실행의 Trace ID 열기",
     "x": 297,
     "y": 427,
     "width": 106,
     "height": 17
    },
    {
     "label": "Last Day",
     "x": 5,
     "y": 3,
     "width": 13,
     "height": 13
    }
   ],
   "videoSeconds": 529.55
  },
  {
   "id": "48-agent-trace-root-spans",
   "title": "Trace ID와 에이전트·모델 span 확인",
   "section": "traces",
   "action": "Trace 상세에서 Trace ID·Conversation ID와 왼쪽 invoke_agent → chat 두 span을 확인합니다. invoke_agent는 에이전트 실행, chat은 실제 모델 호출입니다.",
   "expected": "에이전트 실행 아래에 모델 호출이 하나 보입니다.",
   "image": "assets/screenshots/48-agent-trace-root-spans.png",
   "width": 1600,
   "height": 900,
   "seconds": 535.015,
   "capturedAt": "2026-11-18T04:58:49.935000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "에이전트 → 모델 호출 구조",
     "x": 238,
     "y": 220,
     "width": 153,
     "height": 20
    },
    {
     "label": "Trace ID",
     "x": 469,
     "y": 52,
     "width": 240,
     "height": 20
    }
   ],
   "videoSeconds": 535.015
  },
  {
   "id": "49-agent-trace-input-output",
   "title": "기록된 질문과 실제 응답 대조",
   "section": "traces",
   "action": "오른쪽 Input + Output을 내려 마지막 User input과 Output을 확인합니다. Playground의 마지막 질문·답변과 비교합니다.",
   "expected": "마지막 질문과 모델의 응답이 그대로 기록됩니다.",
   "image": "assets/screenshots/49-agent-trace-input-output.png",
   "width": 1600,
   "height": 900,
   "seconds": 537.585,
   "capturedAt": "2026-11-18T04:58:52.505000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Input + Output",
     "x": 1032,
     "y": 205,
     "width": 105,
     "height": 32
    }
   ],
   "videoSeconds": 537.585
  },
  {
   "id": "50-trace-response-and-guest-identity",
   "title": "Response ID와 실제 실행자 확인",
   "section": "traces",
   "action": "Metadata에서 gen_ai.response.id를 Playground 응답 ID와 대조합니다. gen_ai.conversation.id와 user.id도 확인합니다.",
   "expected": "응답 ID와 대화 ID, 실행한 사용자의 객체 ID가 기록됩니다(화면에서는 ID 값을 가렸습니다).",
   "image": "assets/screenshots/50-trace-response-and-guest-identity.png",
   "width": 1600,
   "height": 900,
   "seconds": 541.186,
   "capturedAt": "2026-11-18T04:58:56.106000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "응답 ID 상관관계",
     "x": 1136,
     "y": 367,
     "width": 168,
     "height": 16
    },
    {
     "label": "대화 ID",
     "x": 1136,
     "y": 467,
     "width": 202,
     "height": 16
    },
    {
     "label": "실제 실행자 객체 ID",
     "x": 1136,
     "y": 627,
     "width": 76,
     "height": 16
    }
   ],
   "videoSeconds": 541.186
  },
  {
   "id": "51-trace-model-token-metadata",
   "title": "모델 span의 입력·출력 토큰 확인",
   "section": "traces",
   "action": "왼쪽 chat span을 선택하고 Metadata에서 실제 모델 버전과 gen_ai.usage.input_tokens·output_tokens를 확인합니다.",
   "expected": "모델 호출 하나의 입력·출력 토큰이 기록됩니다.",
   "image": "assets/screenshots/51-trace-model-token-metadata.png",
   "width": 1600,
   "height": 900,
   "seconds": 546.487,
   "capturedAt": "2026-11-18T04:59:01.407000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "모델 입력 토큰",
     "x": 1136,
     "y": 510,
     "width": 227,
     "height": 16
    },
    {
     "label": "모델 출력 토큰",
     "x": 1136,
     "y": 530,
     "width": 235,
     "height": 16
    }
   ],
   "videoSeconds": 546.487
  },
  {
   "id": "52-agent-conversation-view",
   "title": "한 대화의 세 실행을 묶어서 확인",
   "section": "traces",
   "action": "Conversation view로 전환해 같은 Conversation ID로 묶인 대화를 확인하고 ID를 엽니다.",
   "expected": "세 번의 질문이 하나의 대화 ID로 묶여 보입니다.",
   "image": "assets/screenshots/52-agent-conversation-view.png",
   "width": 1600,
   "height": 900,
   "seconds": 553.52,
   "capturedAt": "2026-11-18T04:59:08.440000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "Conversation view",
     "x": 340,
     "y": 203,
     "width": 142,
     "height": 30
    },
    {
     "label": "대화 상세 열기",
     "x": 297,
     "y": 383,
     "width": 106,
     "height": 17
    }
   ],
   "videoSeconds": 553.52
  },
  {
   "id": "53-conversation-grouped-spans",
   "title": "대화 안의 에이전트·모델 호출 구조",
   "section": "traces",
   "action": "대화 상세의 Trace tree에서 에이전트 실행 세 개와 각 모델 호출을 확인합니다.",
   "expected": "한 대화 안에 에이전트 실행 세 개가 묶여 보입니다.",
   "image": "assets/screenshots/53-conversation-grouped-spans.png",
   "width": 1600,
   "height": 900,
   "seconds": 559.536,
   "capturedAt": "2026-11-18T04:59:14.456000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "한 대화의 세 에이전트 실행",
     "x": 280,
     "y": 220,
     "width": 182,
     "height": 20
    }
   ],
   "videoSeconds": 559.536,
   "extra": true
  },
  {
   "id": "54-conversation-user-view",
   "title": "User view로 대화 흐름 확인",
   "section": "traces",
   "action": "대화 상세의 User view에서 Turn 1~3의 질문과 응답을 확인합니다. 응답은 매번 달라질 수 있으며 정확성은 따로 검토합니다.",
   "expected": "세 턴의 질문과 응답이 순서대로 보입니다.",
   "image": "assets/screenshots/54-conversation-user-view.png",
   "width": 1600,
   "height": 900,
   "seconds": 563.493,
   "capturedAt": "2026-11-18T04:59:18.413000Z",
   "source": "https://ai.azure.com",
   "hotspots": [
    {
     "label": "User view",
     "x": 226,
     "y": 93,
     "width": 76,
     "height": 32
    }
   ],
   "videoSeconds": 563.493,
   "extra": true
  }
 ],
 "instructions": "당신은 Microsoft Foundry 워크샵 도우미입니다.\n한국어로, 핵심만 최대 3문장으로 답하세요.\n이 워크샵은 Foundry 리소스와 프로젝트 생성, gpt-6.1-terra 모델 배포, 에이전트 실행, Monitor와 Traces 확인을 다룹니다.\n실제 Azure 리소스를 조회하거나 변경할 도구는 없으므로, 실행한 것처럼 답하지 마세요.",
 "monitorMetrics": {
  "agentRuns": 3,
  "totalTokens": 891,
  "errorRate": 0,
  "dateRange": "Last Day",
  "verifiedAt": "2026-11-18T03:48:14.735Z"
 },
 "videoCues": [
  {
   "start": 10.193,
   "end": 16.356,
   "text": "01 · 발급된 Internal Guest 계정으로 로그인"
  },
  {
   "start": 16.406,
   "end": 21.915,
   "text": "02 · 운영자가 배정한 리소스 그룹 선택"
  },
  {
   "start": 21.965,
   "end": 29.965,
   "text": "03 · 배정 그룹과 구독 확인"
  },
  {
   "start": 35.872,
   "end": 43.872,
   "text": "04 · 필요한 세 역할 확인"
  },
  {
   "start": 54.344,
   "end": 62.344,
   "text": "05 · Azure Portal에서 Foundry 생성 시작"
  },
  {
   "start": 67.735,
   "end": 71.192,
   "text": "06 · 리소스와 기본 프로젝트 이름 입력"
  },
  {
   "start": 71.242,
   "end": 74.811,
   "text": "07 · 기본 관리형 스토리지 유지"
  },
  {
   "start": 74.861,
   "end": 78.963,
   "text": "08 · 워크샵용 기본 네트워크 확인"
  },
  {
   "start": 79.013,
   "end": 82.508,
   "text": "09 · 별도 VNet 연결 없이 기본값 유지"
  },
  {
   "start": 82.558,
   "end": 85.913,
   "text": "10 · 시스템 할당 관리 ID 기본값 유지"
  },
  {
   "start": 85.963,
   "end": 89.318,
   "text": "11 · Microsoft 관리형 키 기본 암호화"
  },
  {
   "start": 89.368,
   "end": 97.368,
   "text": "12 · 추가 태그 없이 검토 화면으로 이동"
  },
  {
   "start": 183.592,
   "end": 191.592,
   "text": "13 · 검토 후 리소스·기본 프로젝트 생성"
  },
  {
   "start": 200.074,
   "end": 208.074,
   "text": "14 · Foundry 리소스·기본 프로젝트 배포 완료"
  },
  {
   "start": 209.021,
   "end": 217.021,
   "text": "15 · 생성된 Foundry에서 포털 열기"
  },
  {
   "start": 225.059,
   "end": 233.059,
   "text": "16 · 기본 프로젝트 열기"
  },
  {
   "start": 248.694,
   "end": 256.694,
   "text": "18 · 모델 배포 시작"
  },
  {
   "start": 263.924,
   "end": 271.716,
   "text": "19 · 카탈로그에서 gpt-6.1-terra 찾기"
  },
  {
   "start": 271.766,
   "end": 273.721,
   "text": "20 · 모델 버전 확인 후 Deploy"
  },
  {
   "start": 273.771,
   "end": 281.771,
   "text": "21 · 워크샵 할당량으로 사용자 지정 배포"
  },
  {
   "start": 287.627,
   "end": 295.067,
   "text": "22 · Global Standard · 10K TPM으로 배포"
  },
  {
   "start": 295.117,
   "end": 300.14,
   "text": "23 · 기본 Web search 도구 제외"
  },
  {
   "start": 300.19,
   "end": 304.612,
   "text": "24 · 짧은 실습용 생성 파라미터"
  },
  {
   "start": 304.662,
   "end": 312.662,
   "text": "25 · 배포한 모델에 첫 질문 보내기"
  },
  {
   "start": 317.778,
   "end": 325.778,
   "text": "26 · 모델의 실제 응답 확인"
  },
  {
   "start": 338.462,
   "end": 344.75,
   "text": "27 · 에이전트의 역할과 응답 규칙 입력"
  },
  {
   "start": 344.8,
   "end": 352.277,
   "text": "28 · Prompt Agent 이름 지정·생성"
  },
  {
   "start": 352.327,
   "end": 354.147,
   "text": "29 · 저장된 Agent와 모델·지시문 확인"
  },
  {
   "start": 354.197,
   "end": 362.197,
   "text": "30 · 기본 툴박스(Web search) 제거"
  },
  {
   "start": 363.046,
   "end": 371.046,
   "text": "31 · Tools를 비우고 저장 · Version 2"
  },
  {
   "start": 373.421,
   "end": 379.648,
   "text": "32 · 실행 전에 트레이싱 연결 확인"
  },
  {
   "start": 379.698,
   "end": 382.11,
   "text": "37 · 에이전트 실행 응답 한도 설정"
  },
  {
   "start": 382.16,
   "end": 385.264,
   "text": "38 · 저장된 버전 확인 · Save는 필요 없음"
  },
  {
   "start": 385.314,
   "end": 393.314,
   "text": "39 · 연결 후 첫 에이전트 질문"
  },
  {
   "start": 395.126,
   "end": 403.126,
   "text": "40 · 첫 실행 응답 확인"
  },
  {
   "start": 405.397,
   "end": 413.397,
   "text": "41 · 같은 대화에서 이어서 질문"
  },
  {
   "start": 419.268,
   "end": 427.268,
   "text": "42 · 실습 범위를 명확히 한 후속 질문"
  },
  {
   "start": 451.843,
   "end": 455.867,
   "text": "33 · App Insights가 연결되지 않았을 때의 안내"
  },
  {
   "start": 455.917,
   "end": 459.326,
   "text": "34 · Application insights resource name 목록 열기"
  },
  {
   "start": 459.376,
   "end": 467.376,
   "text": "35 · Create new resource 입력 확인"
  },
  {
   "start": 471.52,
   "end": 479.52,
   "text": "36 · 연결 완료 · 트레이스 표 표시"
  },
  {
   "start": 506.013,
   "end": 509.408,
   "text": "43 · Monitor 개요와 토큰 사용량"
  },
  {
   "start": 509.458,
   "end": 512.344,
   "text": "44 · 실행 수와 토큰 차트 확인"
  },
  {
   "start": 512.394,
   "end": 515.417,
   "text": "45 · 오류 확인"
  },
  {
   "start": 515.467,
   "end": 523.467,
   "text": "46 · 연결된 관측성 리소스 재확인"
  },
  {
   "start": 528.55,
   "end": 533.965,
   "text": "47 · 세 번 실행과 트레이스 목록 일치 확인"
  },
  {
   "start": 534.015,
   "end": 536.535,
   "text": "48 · Trace ID와 에이전트·모델 span 확인"
  },
  {
   "start": 536.585,
   "end": 540.136,
   "text": "49 · 기록된 질문과 실제 응답 대조"
  },
  {
   "start": 540.186,
   "end": 545.437,
   "text": "50 · Response ID와 실제 실행자 확인"
  },
  {
   "start": 545.487,
   "end": 552.47,
   "text": "51 · 모델 span의 입력·출력 토큰 확인"
  },
  {
   "start": 552.52,
   "end": 558.486,
   "text": "52 · 한 대화의 세 실행을 묶어서 확인"
  },
  {
   "start": 558.536,
   "end": 562.443,
   "text": "53 · 대화 안의 에이전트·모델 호출 구조"
  },
  {
   "start": 562.493,
   "end": 567.59,
   "text": "54 · User view로 대화 흐름 확인"
  }
 ]
};
