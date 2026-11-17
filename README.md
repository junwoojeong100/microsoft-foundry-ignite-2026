# Microsoft Foundry · Ignite 2026 실습 가이드

Microsoft Ignite 2026에서 발표되는 **Microsoft Foundry 신규 기능을 소개하고 직접 실습**하는 가이드를 만들기 위한 리포입니다. 기존 Foundry 워크샵의 **실습자·운영자 가이드를 그대로 가져온 기반(baseline)** 위에, 실습자 가이드 끝에 **PART 2 · 2026.11.17 새 Foundry 포털 화면**을 추가했습니다. 기존 PART 1 본문과 운영자 가이드는 **리전 안내를 North Central US로 통일한 것 외에는** 바꾸지 않았으며, 영문판·동영상·슬라이드는 아직 없습니다.

> 운영자가 **계정·리소스 그룹(RG)·권한**을 준비하고, 참가자는 **본인 RG 안에서 Foundry·프로젝트·모델·관측성을 직접 만듭니다.** 이 틀을 유지한 채 본문을 Ignite 2026 신규 기능으로 바꿔 나갑니다.

## 현재 상태 · 가져온 기반

| 항목 | 내용 |
|---|---|
| 원본 | [junwoojeong100/internal-guest-hands-on-guide](https://github.com/junwoojeong100/internal-guest-hands-on-guide) `main`의 `1524c3e`(2026.11.14). [이후 변경 보기](https://github.com/junwoojeong100/internal-guest-hands-on-guide/compare/1524c3e...main) |
| 가져온 것 | Foundry 실습자·운영자 가이드, 공통 자산(CSS·JS·화면 63장·영상 2개·로그인/MFA 이미지·검증 JSON), 운영자 자동화 스크립트와 설정 예제, 오프라인 테스트, Pages 워크플로 |
| 가져오지 않은 것 | GitHub Copilot 실습자·운영자 가이드, Codespaces·Copilot CLI 가이드, 고객 안내 EDM, 그 가이드들의 이미지 |
| 가져오며 바꾼 것 | 가이드 전환 메뉴를 Foundry 2종으로 축소 · GitHub 가이드로 가는 링크·안내·인계 템플릿 줄 제거 · 저장소·Pages 주소를 이 리포로 변경 · 테스트와 워크플로를 2종 기준으로 조정하고 화면·영상 파일 점검 추가 · `ATTRIBUTION.txt`에서 가져오지 않은 이미지 항목 제거 · `.gitignore`에 `.playwright-mcp/` 추가 · README 재작성 |
| 그대로인 것 | 본문, 화면·영상(2026.11.05 녹화, East US 2·GPT-5 mini), 검증 JSON, 스크립트. 다만 참가자가 입력·선택하는 리전 안내는 North Central US로 바꿨습니다(아래 PART 2 표의 '리전' 행). 이 부분(PART 1)은 Ignite 신규 기능 기준으로 다시 확인한 내용이 아닙니다. 신규 화면은 아래 PART 2에만 있습니다. |

첫 커밋이 원본 그대로이므로 `git diff <첫 커밋> HEAD`로 가져오며 바꾼 내용을 모두 볼 수 있습니다.

## PART 2 · 새 Foundry 포털 화면 (2026.11.17)

| 항목 | 내용 |
|---|---|
| 위치 | 실습자 가이드 `index.html`의 `#ignite-overview`~`#ignite-finish` 9개 섹션(사이드바 `PART 2`·`N1`~`N8`). 기존 내용은 삭제·수정하지 않고 **추가만** 했습니다(히어로 버튼 1개, `#finish`의 다음 단계 링크 1줄 포함). |
| 흐름 | New Foundry 시작 → 가드레일·`gpt-6.1-terra` 배포 → Microsoft Copilot 하네스 에이전트 생성·도구 제한·실행 → Traces·Monitor → Insights·커스텀 루브릭 평가자·평가 실행·Optimize → Manage의 Fleet·Cost·Compliance·Gateways |
| 화면 | `assets/ignite/screenshots/ko/` 51장(1600×900, 영문 UI + 한국어 입력). 계정·구독·테넌트 값은 가렸고 OCR로 개인 정보 문자열이 없는지 검사했습니다. **동영상은 아직 없습니다.** |
| 데이터·코드 | `assets/ignite/ignite-data.js`(화면별 설명과 확인 위치 좌표), `assets/ignite-part2.js`(갤러리·사이드바 렌더링). 확대 창은 PART 1과 공유합니다. |
| 직접 실행 | 가드레일 목록, `gpt-6.1-terra` 배포(Global Standard·100,000 TPM), 하네스 에이전트 생성·도구 제한·저장(Version 4)·실행, Insights 스캔, 커스텀 루브릭 평가자, 합성 질문 15개 평가 실행(12행 채점·3행 rate limit 오류) |
| 화면만 확인 | Manage의 Fleet·Operations·Cost·Compliance·Gateways, Routines·Workflows, Optimize |
| 하지 않음 | Azure Policy 할당, AI Gateway 생성, Optimize 실행, Publish·채널 연결, 참가자 역할(RG Contributor + Foundry User + 구독 Usages Reader)만으로 재현, North Central US에서 PART 1(Foundry 리소스 생성~Prompt Agent)을 처음부터 재현(샌드박스 프로젝트에는 모델 배포·에이전트가 이미 있었음) |
| 리전 | PART 1·PART 2 모두 **North Central US**(`northcentralus`)로 통일했습니다. 공식 하네스 지원 리전 22곳에 포함됩니다(2026.11.17 문서 기준). 예제 설정(`config/workshop.example.json`), `operator.html`의 JSON 예시·표, 실습자 가이드의 리전 안내를 맞췄고 값이 어긋나면 테스트가 실패합니다. PART 1 화면·영상은 East US 2에서 녹화해 바꿀 수 없으므로 '녹화 예시: East US 2'로 남기고 '화면은 녹화 당시 East US 2'라고 덧붙였습니다. |
| 운영자에게 알릴 점 | 하네스 한 번 실행이 약 4만 토큰이라 **10,000 TPM 배정으로는 부족**할 수 있습니다(평가 15행 중 3행이 rate limit). Fleet·Cost는 Log Analytics Reader·Cost Management Reader, 평가자 트레이스 컨텍스트는 프로젝트 관리 ID의 Monitoring Reader가 필요합니다. **`operator.html`에는 리전 값만 반영했고 TPM·역할 안내는 아직 반영하지 않았습니다.** |

화면 기준일은 2026.11.17이며 어떤 항목이 Ignite에서 공식 발표된 기능인지는 발표 자료·릴리스 노트로 따로 확인해야 합니다.

## 가이드

| 나는… | 가이드 | 소스 | 게시 주소 (Pages 배포 후) |
|---|---|---|---|
| **참가자(실습자)** | Foundry 실습자 가이드<br>로그인·MFA → 리소스 생성 → 실행·추적 | [`index.html`](index.html) | <https://junwoojeong100.github.io/microsoft-foundry-ignite-2026/> |
| **운영자(SE)** | Foundry 운영자 가이드<br>역할 → 스크립트/포털 → 필수 점검 → 인계·종료 | [`operator.html`](operator.html) | <https://junwoojeong100.github.io/microsoft-foundry-ignite-2026/operator.html> |

```mermaid
flowchart LR
  O["Foundry 운영자 가이드<br/>계정·RG·권한·모델 쿼터"] -->|"계정·RG·역할·배정값"| P["Foundry 실습자 가이드<br/>로그인·MFA → 생성 → 실행·추적"]
```

두 가이드는 라이트/다크 테마를 지원하고, 명령·JSON·인계 템플릿에는 **복사 버튼**이 있습니다. 실습자 가이드에는 63장의 실제 화면, 3분 요약 영상, 51분 전체 영상이 포함되며 끝에 PART 2(새 포털 화면 51장)가 이어집니다. CDN·빌드 없이 정적 파일로 열리며, 로컬에서는 다음처럼 확인합니다.

```bash
python3 -m http.server 8000   # http://localhost:8000/index.html · /operator.html
```

## Ignite 2026 가이드로 바꿀 때 고칠 곳

| 바꾸려는 것 | 고칠 곳 |
|---|---|
| 실습자 본문·문제 대응표·완료 기준 | `index.html` |
| 실습 단계(제목·설명·순서) | `index.html` 아래쪽 인라인 스크립트의 `stages` |
| 단계별 화면·번호 표시·영상 시점·Instructions·녹화 예시값 | `assets/guide-data.js`. 화면 수가 바뀌면 `index.html`의 `data.shots.length !== 63`도 맞춥니다. |
| PART 2(새 포털 화면) 본문 | `index.html`의 `id="ignite-*"` 섹션. 사이드바 이름은 섹션의 `data-ignite-nav`·`data-ignite-title`로 정합니다. |
| PART 2 화면·설명·확인 위치 | `assets/ignite/ignite-data.js`와 `assets/ignite/screenshots/ko/`. 화면 그룹을 만들면 `index.html`에 `data-ignite-gallery="<그룹>"` 자리표시자를 하나씩 둡니다. 화면 번호는 파일 이름의 `NN`과 갤러리 순서가 같아야 합니다. |
| 화면 이미지·영상·자막 | `assets/screenshots/`, `assets/video/`. `assets/capture-manifest.json`은 같은 구조의 캡처 기록(다운로드용)이므로 함께 갱신합니다. |
| 운영자 본문(역할·준비 절차·점검·인계·종료) | `operator.html` |
| 참가자 Azure 역할·리소스 공급자(RP) 등록 목록 | `scripts/workshop_common.py`의 `ROLES`·`PROVIDERS`, 그리고 두 가이드의 역할 표 |
| 계정·RG 규모·이름·지역 | `config/workshop.example.json`, `scripts/provision_workshop.py`. 예제 설정은 `operator.html`의 JSON 예시·`location` 행과 같아야 하며 테스트가 확인합니다. |
| 로그인·MFA 이미지와 출처 | `assets/onboarding/`, `assets/onboarding/ATTRIBUTION.txt` |
| 기준일·검증 근거 | 두 가이드의 `기준일`과 `assets/verification.json`·`assets/guest-auth-verification.json`. 새 기능을 직접 검증하기 전에는 원본의 검증 범위를 신규 기능으로 확장해 쓰지 않습니다. |
| 스타일·동작 | `assets/guide.css`, `theme.js`, `navigation.js`, `copy.js` |

가이드의 모든 `<pre>`에는 복사 버튼 이름으로 쓰는 `aria-label`이 필요합니다. 이 규칙과 링크·앵커는 아래 [테스트](#테스트)가 확인합니다.

## 운영자 빠른 시작 · Azure 계정·RG·권한 일괄 준비

**Azure Cloud Shell Bash(영구 저장소), Linux/macOS 또는 WSL · Python 3.11+ · Azure CLI**가 필요하며 추가 Python 패키지는 없습니다. 소규모·수동 준비는 [B · 포털 절차](https://junwoojeong100.github.io/microsoft-foundry-ignite-2026/operator.html#portal)를 따르고, 같은 환경에 A/B를 중복 실행하지 않습니다.

```bash
git clone https://github.com/junwoojeong100/microsoft-foundry-ignite-2026.git
cd microsoft-foundry-ignite-2026
cp config/workshop.example.json config/workshop.local.json
# local.json의 tenantId·subscriptionId·고유 workshopId·지역·계정 수를 확인/수정한 뒤 로그인합니다.
az login --tenant "REPLACE_WITH_TENANT_ID"

# 1) 읽기 전용 계획 (기본값: 계정·RG·역할·암호 파일을 만들지 않습니다)
python3 scripts/provision_workshop.py --config config/workshop.local.json

# 2) 검토한 계획을 실제 적용
python3 scripts/provision_workshop.py --config config/workshop.local.json --apply

# 3) 실제 Graph/ARM 상태를 다시 읽어 독립 검증 (실패 시 종료 코드 1)
python3 scripts/verify_workshop.py --config config/workshop.local.json
```

예제 설정(`participantCount=75`, `seTestAccountCount=5`, `nameFormat="user-se"`)은 **고객 `user01`~`user70` + SE 테스트 `se01`~`se05`** 계정, RG `rg-user01`~`rg-user70`·`rg-se01`~`rg-se05`, 직접 RBAC **225개**를 만듭니다. 이름 충돌·재실행·복구·비공개 파일 취급은 [운영자 가이드 A](https://junwoojeong100.github.io/microsoft-foundry-ignite-2026/operator.html#automation)를 따르세요.

## 꼭 지킬 기준

| 주제 | 기준 |
|---|---|
| 참가자 권한 | **본인 RG의 Contributor·Foundry User + 구독의 Cognitive Services Usages Reader**. Entra 관리자 역할은 없습니다. 운영자 Owner 권한은 참가자에게 전달되지 않습니다. |
| 첫 로그인 | 초기 암호 그대로 로그인하며 변경을 강제하지 않습니다(`forceChangePasswordNextSignIn=false`). **MFA 등록·인증은 본인이 완료**하고 MFA·조건부 액세스는 해제하지 않습니다. |
| 인계 전 필수 | **실제 교육망에서 MFA 미등록 테스트 Guest 2개의 첫 로그인·MFA 등록·재로그인**을 확인합니다. 스크립트 PASS나 운영자 계정 성공으로 대신하지 않습니다. |
| 모델·TPM | 일반 실습은 **`gpt-6.1-terra`를 개인별 TPM으로 배분**합니다((70 + 5) × 10,000 = 750,000 TPM은 계산 예시). Optimizer 등 모델 고정 설정은 지정 모델을 유지합니다. |
| 관측성 | 참가자가 Agent → Traces → **Connect → Create new resource**로 Application Insights를 본인 RG에 만들고 바로 연결합니다. |
| 비공개 파일 | `.workshop-runs/<workshopId>/`(초기 암호 포함)는 Git·Pages에서 제외하고 승인된 비공개 저장소에 백업합니다. 참가자 암호는 별도 경로로 개별 전달합니다. |

## 검증 현황

- **확인한 것:** Internal Guest 1명의 기본 Prompt Agent E2E(2026.11.05, GPT-5 mini)와 새 Guest 1개의 초기 암호 + Software OATH(TOTP) MFA 로그인(2026.11.08). [비밀 값 없는 검증 JSON](assets/guest-auth-verification.json)을 제공합니다. PART 2는 2026.11.17에 샌드박스 프로젝트 1개에서 직접 실행한 범위(위 PART 2 표)만 확인했습니다.
- **아직 확인하지 않은 것:** **PART 2에서 직접 실행하지 않은 신규 화면(Azure Policy 할당·AI Gateway·Optimize 실행 등)과 참가자 역할로의 PART 2 재현**, North Central US에서 PART 1(Foundry 리소스 생성 화면의 Region 포함)을 처음부터 재현, 운영 구독의 North Central US `gpt-6.1-terra` 쿼터, 10,000 TPM 배포에서의 하네스 실행, 75개 환경 생성·동시 부하, `gpt-6.1-terra` 참가자 E2E, 고객 교육망, Microsoft Authenticator 푸시, Traces의 Create new resource 이후 화면(녹화에는 Azure Portal 사전 생성 방식만 있음). 개최 전 운영자 가이드의 필수 점검으로 확인하세요.

## 테스트

Azure에 접속하지 않고 스크립트(가짜 API), 가이드의 링크·앵커(상대·절대 주소), 화면·영상 파일 존재, PART 2 화면 데이터(파일·1600×900·확인 위치 범위)와 갤러리 자리표시자·사이드바 연결, 예제 설정과 운영자 가이드 JSON 예시의 일치, 전환 메뉴와 Pages 워크플로 범위를 검사합니다. 가이드나 자산을 고친 뒤에는 항상 실행하세요.

```bash
python3 -m unittest discover -s tests -v
```

## 배포

`main`에 푸시하면 GitHub Actions가 위 테스트를 통과한 뒤 HTML·영상·공개 스크립트·예제 설정만 빌드해 GitHub Pages에 배포합니다. CI는 Azure 계정·RG·역할을 만들지 않습니다. 화면 출처·재사용 조건은 [ATTRIBUTION](assets/onboarding/ATTRIBUTION.txt)에 있습니다.

- **아직 하지 않은 것:** 원격 저장소 생성과 푸시. 만든 뒤 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정하면 배포됩니다.
- **주소 가정:** 가이드와 이 문서는 저장소를 `junwoojeong100/microsoft-foundry-ignite-2026`, 게시 주소를 `https://junwoojeong100.github.io/microsoft-foundry-ignite-2026/`로 가정합니다. 이름이나 계정이 다르면 `operator.html`의 clone·Pages·저장소 주소(인계 템플릿 포함)와 이 README를 고치고, `tests/test_guides.py`의 `SITE_URL`도 바꾸면 테스트가 남은 옛 주소를 찾아 줍니다.
- **영상 크기:** `assets/video/full-walkthrough.mp4`는 약 62 MiB로 GitHub의 50 MiB 권장 한도를 넘어 푸시할 때 경고가 나옵니다(100 MiB부터 차단). 새 영상으로 교체할 때 크기를 확인하세요.
- **예시 식별자:** `config/workshop.example.json`, `operator.html`의 JSON 예시, `assets/guide-data.js`, `assets/capture-manifest.json`, `assets/verification.json`에는 원본 E2E에 쓴 테넌트·구독 ID와 계정·리소스 이름이 들어 있습니다. 공개하기 전에 Ignite용 값으로 바꿀지 검토하세요.
