# TODO · Ignite 2026 Microsoft Foundry 실습 가이드

Ignite 2026 가이드 작업 목록입니다. 끝낸 항목은 `[x]`로 바꿉니다.

## 원칙

- 범위는 Microsoft Foundry 기능만입니다. 다른 서비스는 이 가이드의 범위가 아닙니다.
- 신규 내용은 기존 가이드에 **추가만** 합니다. 기존 내용은 삭제하지 않습니다. 추가는 주로 실습자 가이드(`index.html`)입니다.
- Ignite 공개 전 내부 자료는 `internal/`(Git 제외)에만 둡니다. 커밋·푸시하지 않고, 공개된 내용만 가이드로 옮깁니다.

## 사전 작업

- [x] 공개 전 내부 메모·구조 초안·골격은 Ignite 공개 뒤 사용자 지시(2026-11-18)로 삭제했습니다. 가이드는 공개된 Book of News·공식 블로그·Learn 문서만 근거로 하며, 확인한 출처와 시각은 `internal/tools/facts-check-*.txt`(Git 제외)에 있습니다.

## 작업

1. [ ] Ignite 2026에서 공개된 Microsoft Foundry 신규 기능 소개 및 실습 내용 추가
   - [x] 2026.11.17 포털 화면 기준 국문 PART 2 추가: `index.html`의 `#ignite-*` 9개 섹션, 화면 51장
   - [x] 리전을 PART 1·PART 2 모두 North Central US로 통일: 예제 설정·운영자 가이드의 `location`·실습자 가이드와 화면 설명의 리전 안내. 녹화 화면은 East US 2 그대로이며 '화면은 녹화 당시 East US 2'로 표기
   - [x] 공개 문서·Foundry 블로그 릴리스 노트와 대조(2026.11.17): PART 2 개요의 '공식 자료와 맞춰 본 결과' 표와 5-4 Optimize 경고(포털 최적화는 하네스를 쓰지 않는 Prompt Agent 대상) 반영
   - [x] Ignite Book of News가 공개되어 기능 명칭·상태(Preview/GA)를 다시 대조(2026.11.18): **가장 중요한 발표인 Microsoft IQ(GA)**를 PART 2 개요의 `#ignite-microsoft-iq`(구성·상태·이 가이드와의 관계)와 대조 표 첫 행에 올리고, Foundry 항목은 '발표·공식 자료와 맞춰 본 결과' 표(14행)·'한눈에 보기'의 발표 열·N3~N7 안내, PART 1의 02·05단계·모델 배포 한도·완료 기준 안내, 운영자 가이드 `#part2-prep`에 반영. 근거는 Book of News와 그 상세 블로그·Learn 문서
   - [ ] **실습 11개로 재구성(2026-11-18 결정, Foundry IQ를 실습 6으로 추가)**: PART 1/PART 2 구분을 없애고 실습 1~11로 번호·순서를 통일합니다. 실습 1~5는 필수(화면 2026-11-05 구 포털), 6~11은 선택·권장(6 Foundry IQ, 7~11 하네스·Insights·평가·Optimize·Manage, 화면 2026-11-17 New Foundry). 기존 id·앵커는 유지하고 실습마다 화면 기준일을 표기하며, Microsoft IQ는 개요의 첫 항목으로 유지합니다. 영문판·영상 챕터·덱은 이 구조가 끝난 뒤 만듭니다. 계획은 `internal/next-session-prompt.md`(Git 제외)의 Phase R
   - [ ] **Foundry IQ 실습 추가(필수 포함, 2026-11-18 결정)**: 지식 베이스를 만들어 에이전트에 연결하고 출처가 달린 답을 확인하는 실습(실습 6)을 한글 가이드에 넣습니다. 참가자 3개 역할로 가능한 범위와 운영자 준비(검색 서비스·역할·무료 계층·정리)를 직접 확인해 나누어 쓰고, 참가자 권한으로 안 되는 단계는 운영자 준비로 옮깁니다
   - [ ] **Microsoft IQ 블록 확장(2026-11-18 결정)**: 개요의 `#ignite-microsoft-iq`에 Foundry IQ·Web IQ·Work IQ·Fabric IQ를 각각 한 행씩 명시합니다(하는 일·발표 상태·Foundry 에이전트와의 연결·이 가이드에서의 범위·공식 링크). Web·Work·Fabric IQ는 직접 실행하지 않고 소개만 하며 그 이유(별도 리소스·유료 구독·전역 관리자 동의·Fabric 용량)와 전제 조건을 함께 씁니다
   - [ ] 발표 뒤 포털 화면(메뉴 이름·배지·Insights·Optimize·Cost·Gateways·Knowledge) 재확인: 11/17 화면은 키노트 전 캡처이며 아직 다시 열어 보지 않음
   - [x] 운영자 가이드(`operator.html`)에 PART 2 준비 사항 반영: `#part2-prep` 섹션(리전·하네스·평가용 TPM·Log Analytics Reader·Cost Management Reader·Monitoring Reader·Azure Policy·Optimize·비용·정리)과 `#plan`·`#capacity`의 연결 안내, `#managed-identity`의 Monitoring Reader 할당 예. 참가자 필수 역할 3개 표는 바꾸지 않았음(재현에서 3개 역할만으로 화면이 열림. Cost 값 표시에 Cost Management Reader가 필요한지만 미확인. **표를 바꾸지 않기로 결정, 2026-11-18**)
   - [x] 미검증 항목 중 일부를 직접 확인(2026.11.17, 별도 구독의 North Central US, 참가자 역할 3개만 가진 계정 1개): PART 1 처음부터 재현(Foundry 리소스 생성 화면의 Region 포함), 10,000·30,000 TPM에서 하네스 실행(10,000 TPM은 실패), 참가자 역할로 Manage·Insights·평가자·평가 열기·실행, Prompt Agent의 Optimize 실행(후보 승격 안 함), Azure Policy Audit 할당·해제. 결과는 `index.html`의 검증 범위 상자·N1·N6·N7·5-4와 `operator.html`의 `#part2-prep`에 반영
   - [ ] 남은 미검증 항목: AI Gateway 생성, Publish·채널 연결, Optimize 후보 승격·하네스 에이전트의 Optimize 제출, 운영 구독의 North Central US `gpt-6.1-terra` 쿼터, 비용 데이터가 쌓인 뒤 Cost 화면(Cost Management Reader 필요 여부), Compliance 정책 평가·Asset 탭 권한 안내의 원인, 여러 참가자의 동시 실행
   - [ ] 재현용 구독의 테스트 계정·RG·모델 배포(별도 데모 구독)와 로컬 임시 파일(`config/workshop.local.json`, `.workshop-runs/`): **녹화에 재사용하기로 결정(2026-11-18)**. 모든 녹화가 끝나면 정리(삭제는 사용자 승인 후) 여부를 다시 확인
   - [x] 한글 가이드 점검·보완(2026-11-18): 외부 링크 40개·브라우저 렌더(데스크톱·태블릿·모바일, 갤러리 114장, 확대 창·테마 전환)·한국어 문구 점검, 기준일 정리, PART 2 개요에 '한눈에 보기'(흐름도·단계표)와 용어 풀이 추가, PART 1 TPM·429 안내에서 PART 2로 연결, 개요의 '30,000 TPM은 통과'를 '천천히 한 건씩 보낼 때만 통과'로 정정
   - [x] 공개 전 개인 식별 정보 점검(2026-11-18): PART 2 화면 51장은 OCR 통과. PART 1 화면 19장에는 원본 E2E의 구독 표시 이름·테넌트 도메인·테스트 계정이 보이지만 원본 리포와 Pages가 이미 공개 상태라 새로 노출되는 것은 아님(원본에서 가릴지는 소유자 결정). 새로 찍는 화면·영상은 `internal/tools/ocr_scan`으로 검사
2. [ ] Portal 화면 캡처 및 동영상 녹화
   - **범위 조정(2026-11-18 지시): 일단 한글 가이드만 만듭니다.** 영문 가이드·영문 화면·동영상·PPT(아래 2~5번)는 한글 가이드(Foundry IQ 실습 포함)를 끝낸 뒤로 보류합니다(세부 보류 계획: `internal/deferred-plan.md`, Git 제외). 한글 가이드에 쓸 새 화면(Foundry IQ 실습) 캡처는 이 범위에 포함됩니다.
   - **진행 순서(2026-11-18 지시):** 2~5번(동영상 녹화·영문 가이드·영문 화면·PPT)은 Ignite 2026 발표 뒤에 공개된 자료와 대조한 다음 진행합니다. 발표(2026-11-17 PT 키노트)는 끝났고 Book of News 대조와 가이드 갱신은 2026-11-18에 마쳤습니다(위 항목). 인계 프롬프트는 `internal/next-session-prompt.md`(Git 제외)입니다.
   - [ ] 녹화용 로그인 준비: 테스트 계정 `se01`의 인증 앱(Software OATH)을 `az`로는 초기화할 수 없음(Microsoft Graph 403, 토큰에 `UserAuthenticationMethod.*` 스코프 없음). 사용자 승인 뒤 `se02`를 만들거나 Entra 관리 센터에서 직접 삭제해야 함
   - [x] 정지 화면 51장 캡처(영문 UI + 한국어 입력, 개인 정보 가림·OCR 검사)
   - [ ] (보류) 동영상 녹화(하네스 생성·실행, 평가 실행, Manage 화면)와 가이드의 영상 버튼 연결
3. [ ] (보류) 가이드 영문화(지시문·질문·평가 기준 문장도 영어로)
4. [ ] (보류) 영문 Portal·영문 데이터 기준으로 Portal 화면 캡처 및 동영상 녹화
5. [ ] (보류) 국문/영문 각 단계별 데모 PPT 슬라이드 작성
6. [ ] github.io에 동영상과 PPT 슬라이드 링크 추가 (웹에서 모두 접근 가능하게)

## 나중에

- [ ] 작업할 때 사용하는 모델을 `gpt-6.1-terra`로 설정
