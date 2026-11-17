# TODO · Ignite 2026 Microsoft Foundry 실습 가이드

Ignite 2026 가이드 작업 목록입니다. 끝낸 항목은 `[x]`로 바꿉니다.

## 원칙

- 범위는 Microsoft IQ와 Microsoft Foundry입니다. Azure 인프라·Windows 등의 실습은 범위 밖입니다.
- 기존 내용·id·앵커와 화면·영상은 보존하고 이동·번호 변경·추가로 재구성합니다.
- 가이드의 근거는 공개 Book of News·공식 블로그·Learn뿐입니다. 비공개 설정·실행 기록은 Git 제외 경로에 보관합니다.
- **실습은 직접 실행해 확인한 것만 추가합니다(2026-11-18 결정).** 실행하지 못한 기능은 소개 카드(무엇·발표 상태·왜 실습하지 않는지·해 보려면·공식 문서 링크)로 충분히 설명하고 링크로 갈음합니다. 절차를 지어내지 않습니다.

## 사전 작업

- [x] 공개 전 내부 메모·구조 초안·골격은 Ignite 공개 뒤 사용자 지시(2026-11-18)로 삭제했습니다. 가이드는 공개된 Book of News·공식 블로그·Learn 문서만 근거로 하며, 확인한 출처와 시각은 `internal/tools/facts-check-*.txt`(Git 제외)에 있습니다.

## 작업

1. [x] 한글 Microsoft IQ·Foundry 가이드 완성
   - [x] 2026.11.17 New Foundry 화면 기반 본문과 화면 51장 추가
   - [x] 참가자 리전을 North Central US로 통일: 예제 설정·운영자 `location`·실습자 안내. 구 포털 화면·영상의 East US 2는 녹화 예시로 보존
   - [x] 공식 문서·릴리스 노트 대조(2026.11.17): 공식 자료 대조표와 Optimize의 '포털 최적화는 하네스를 쓰지 않는 Prompt Agent 대상' 경고 반영
   - [x] Book of News·공식 블로그·Learn 대조(2026.11.18): **Microsoft IQ(GA)**를 개요·로드맵·공식 대조표 첫 항목으로 두고 Foundry 발표·모델 배포·완료 기준·운영자 준비에 반영
   - [x] **실습 10개 재구성**: 필수 1~5, 선택 6~10(하네스·Insights·평가·Optimize·Manage). `labs-data.js`·`labs.js`가 순서·번호·선행·목차·관련 카드를 계산합니다. 기존 앵커 87개·영상 챕터를 보존하고 실습별 화면 근거 배지·필수/선택 완료 기준을 표시했습니다. Foundry IQ는 현재 실습으로 활성화하지 않았습니다.
   - [x] **Foundry IQ는 소개 카드로 확정**: 2026.11.18 일반 포털 로그인이 기존 OTP에서 중단되어 참가자 권한 E2E를 확인하지 못함. 기능 불가·권한 오류 판정은 아님. 개념·구성별 상태·관리 ID 역할·검색 무료 계층·공식 절차를 설명하고 미검증 실습·샘플 문서·갤러리는 만들지 않음
   - [x] **Microsoft IQ 블록 확장**: Foundry IQ·Web IQ·Work IQ·Fabric IQ를 각각 별도 행·Tier A 소개 카드로 명시. 컨텍스트 → 에이전트 → 지속 개선 도식, 용어 풀이·공식 대조표에도 반영
   - [x] **Tier B 카드 9개·공식 대조표 누락 행**: Business plugins·Hosted agents·에이전트용 Microsoft 365 계정·Toolboxes/브라우저·Foundry MCP Server·Safety·Training·새 모델·Azure/Windows. Cost는 추정치/청구 기준을 구분하고 Fabric IQ MCP GA와 Foundry 도구 Preview를 분리. 실습별 관련 카드와 연결하며 공개 근거만 사용
   - [x] Toolboxes·Safety 후보 판정: 기존 OTP에서 포털 로그인이 중단되어 라이브 점검은 하지 못했으며 소개 카드로 처리. 포털 부재·기능 오류·참가자 권한 오류를 확인했다고 쓰지 않음
   - [x] 운영자 선택 실습 준비: 기존 `#part2-prep` 앵커를 유지하고 하네스·평가·Optimize·Manage의 리전·TPM·역할·비용·정리와 연결 안내를 새 용어로 통일. 참가자 필수 역할 3개 표는 변경하지 않음
   - [x] 참가자 권한 재현(2026.11.17, North Central US, 역할 3개·계정 1개): 필수 실습 E2E, 10,000·30,000 TPM 하네스(10,000 실패), Manage·Insights·평가자·평가, 하네스 없는 Prompt Agent Optimize(승격 안 함), Azure Policy Audit 할당·해제. 결과를 해당 실습·문제 대응·운영자 준비에 반영
   - [x] 한글 가이드 점검·보완(2026-11-18): 외부 링크·3개 뷰포트·화면 114장·확대·테마·한국어 점검, 흐름도·용어 풀이, TPM·429 교차 안내와 '30,000 TPM은 천천히 단건만 통과' 정정. 실습 재구성 후 87개 기존 앵커·전체 순서·동적 재번호·딥링크 정렬 재검증
   - [x] 개인 식별 정보 점검: New Foundry 51장 OCR 통과. 구 포털 19장의 기존 공개 식별자는 소유자 결정 전 재마스킹하지 않음. 새 Azure 화면은 마스킹·OCR 필수
   - [x] 운영자 IQ 참고·최종 QA: Foundry IQ 참고 단락과 Web/Work/Fabric 전제 조건 표, 참가자 필수 역할 표 보존. 테스트 50개·한국어 lint 0·링크 75/75·두 가이드/3뷰포트·전체 갤러리 통과. 최종 미리보기 8장 시각 검토·OCR 금지 문자열 0건. 새 Azure 캡처는 없음
2. [ ] Portal 화면 캡처 및 동영상 녹화
   - **범위 조정(2026-11-18): 일단 한글 가이드만.** 영문 가이드·영문 화면·동영상·PPT는 보류입니다(`internal/deferred-plan.md`, Git 제외·이번 작업에서 읽거나 실행하지 않음). Foundry IQ는 실습 검증을 충족할 때만 촬영하며 미검증이면 소개 카드입니다. 실습 1~5의 New Foundry 재촬영도 보류입니다.
   - **진행 순서(2026-11-18 지시):** 2~5번(동영상 녹화·영문 가이드·영문 화면·PPT)은 Ignite 2026 발표 뒤에 공개된 자료와 대조한 다음 진행합니다. 발표(2026-11-17 PT 키노트)는 끝났고 Book of News 대조와 가이드 갱신은 2026-11-18에 마쳤습니다(위 항목). 인계 프롬프트는 `internal/next-session-prompt.md`(Git 제외)입니다.
   - [ ] 녹화용 로그인 준비: `se01`의 일반 포털 로그인은 기존 OTP 입력까지 도달했으나 유효 코드가 없어 중단. 인증 방법 삭제·`se02` 생성은 미승인이라 하지 않았고 테넌트 설정도 변경하지 않음
   - [x] 정지 화면 51장 캡처(영문 UI + 한국어 입력, 개인 정보 가림·OCR 검사)
   - [ ] (보류) 동영상 녹화(하네스 생성·실행, 평가 실행, Manage 화면)와 가이드의 영상 버튼 연결
3. [ ] (보류) 가이드 영문화(지시문·질문·평가 기준 문장도 영어로)
4. [ ] (보류) 영문 Portal·영문 데이터 기준으로 Portal 화면 캡처 및 동영상 녹화
5. [ ] (보류) 국문/영문 각 단계별 데모 PPT 슬라이드 작성
6. [x] 공개 원격 생성·push·GitHub Pages 자동 게시(2026-11-18)
   - [x] `junwoojeong100/microsoft-foundry-ignite-2026`을 공개 저장소로 생성하고 `origin/main`에 커밋 푸시
   - [x] Pages 원본을 GitHub Actions로 설정. `main` 푸시마다 테스트·정적 사이트 빌드·배포가 실행되며 실습자·운영자 HTML과 기존 영상을 웹에서 제공
   - 신규 동영상·PPT 제작과 완성 후 해당 링크 추가는 계속 보류. 비공개 로컬 설정·인증 파일·`internal/`은 게시하지 않음

## 남은 현장 검증 · 가이드 완성과 별도

- [ ] **Foundry IQ 참가자 권한 검증 남음**: 정상 인증 후 운영자 사전 준비부터 지식 구성·에이전트 연결·출처 응답·Traces·비용·정리까지 직접 실행하고 마스킹·OCR 증거를 남겨야 실습으로 승격할 수 있음. 현재는 소개 카드가 최종 결과
- [ ] 발표 뒤 Foundry 포털(메뉴·배지·Insights·Optimize·Cost·Gateways·Knowledge)과 Toolboxes·Safety 후보 재확인: 기존 OTP에서 로그인 중단으로 기능 화면 미검증
- [ ] AI Gateway 생성, Publish·채널 연결, Optimize 후보 승격·하네스 Optimize 제출은 미실행 유지. 운영 구독 쿼터, 비용 데이터가 쌓인 Cost와 Cost Management Reader 필요 여부, Compliance 정책 평가·Asset 안내 원인, 실제 교육망·다중 참가자 부하는 개최 전 별도 검증
- [ ] 기존 재현 계정·RG·모델 배포와 `config/workshop.local.json`·`.workshop-runs/`는 녹화 재사용을 위해 보존. 삭제 승인 전 변경·정리하지 않으며 기존 리소스의 비용은 계속될 수 있음. 이번 작업에서 새 Azure 리소스·추가 역할·TPM 변경은 없음

## 나중에

- [ ] 작업할 때 사용하는 모델을 `gpt-6.1-terra`로 설정
