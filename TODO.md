# TODO · Ignite 2026 Microsoft Foundry 실습 가이드

Ignite 2026 가이드 작업 목록입니다. 끝낸 항목은 `[x]`로 바꿉니다.

## 원칙

- 범위는 Microsoft Foundry 기능만입니다. 다른 서비스는 이 가이드의 범위가 아닙니다.
- 신규 내용은 기존 가이드에 **추가만** 합니다. 기존 내용은 삭제하지 않습니다. 추가는 주로 실습자 가이드(`index.html`)입니다.
- Ignite 공개 전 내부 자료는 `internal/`(Git 제외)에만 둡니다. 커밋·푸시하지 않고, 공개된 내용만 가이드로 옮깁니다.

## 사전 작업

- [x] 내부 자료 정리와 구조 초안: `internal/01-source-notes.md` · `internal/02-guide-structure.md` · `internal/part2-skeleton.html` (Git 제외). 골격은 아래 데이터 기반 PART 2로 대체돼 더는 쓰지 않습니다.

## 작업

1. [ ] Ignite 2026에서 공개된 Microsoft Foundry 신규 기능 소개 및 실습 내용 추가
   - [x] 2026.11.17 포털 화면 기준 국문 PART 2 추가: `index.html`의 `#ignite-*` 9개 섹션, 화면 51장
   - [x] 리전을 PART 1·PART 2 모두 North Central US로 통일: 예제 설정·운영자 가이드의 `location`·실습자 가이드와 화면 설명의 리전 안내. 녹화 화면은 East US 2 그대로이며 '화면은 녹화 당시 East US 2'로 표기
   - [x] 공개 문서·Foundry 블로그 릴리스 노트와 대조(2026.11.17): PART 2 개요의 '공식 자료와 맞춰 본 결과' 표와 5-4 Optimize 경고(포털 최적화는 하네스를 쓰지 않는 Prompt Agent 대상) 반영
   - [ ] Ignite Book of News·발표 자료가 공개되면 기능 명칭·상태(Preview/GA)를 다시 대조하고 '확인하지 못함'을 갱신
   - [x] 운영자 가이드(`operator.html`)에 PART 2 준비 사항 반영: `#part2-prep` 섹션(리전·하네스·평가용 TPM·Log Analytics Reader·Cost Management Reader·Monitoring Reader·Azure Policy·Optimize·비용·정리)과 `#plan`·`#capacity`의 연결 안내, `#managed-identity`의 Monitoring Reader 할당 예. 참가자 필수 역할 3개 표는 바꾸지 않았음(재현에서 3개 역할만으로 화면이 열림. Cost 값 표시에 Cost Management Reader가 필요한지만 미확인. **표를 바꾸지 않기로 결정, 2026-11-18**)
   - [x] 미검증 항목 중 일부를 직접 확인(2026.11.17, 별도 구독의 North Central US, 참가자 역할 3개만 가진 계정 1개): PART 1 처음부터 재현(Foundry 리소스 생성 화면의 Region 포함), 10,000·30,000 TPM에서 하네스 실행(10,000 TPM은 실패), 참가자 역할로 Manage·Insights·평가자·평가 열기·실행, Prompt Agent의 Optimize 실행(후보 승격 안 함), Azure Policy Audit 할당·해제. 결과는 `index.html`의 검증 범위 상자·N1·N6·N7·5-4와 `operator.html`의 `#part2-prep`에 반영
   - [ ] 남은 미검증 항목: AI Gateway 생성, Publish·채널 연결, Optimize 후보 승격·하네스 에이전트의 Optimize 제출, 운영 구독의 North Central US `gpt-6.1-terra` 쿼터, 비용 데이터가 쌓인 뒤 Cost 화면(Cost Management Reader 필요 여부), Compliance 정책 평가·Asset 탭 권한 안내의 원인, 여러 참가자의 동시 실행
   - [ ] 재현용 구독의 테스트 계정·RG·모델 배포(별도 데모 구독)와 로컬 임시 파일(`config/workshop.local.json`, `.workshop-runs/`): **녹화에 재사용하기로 결정(2026-11-18)**. 모든 녹화가 끝나면 정리(삭제는 사용자 승인 후) 여부를 다시 확인
   - [x] 한글 가이드 점검·보완(2026-11-18): 외부 링크 40개·브라우저 렌더(데스크톱·태블릿·모바일, 갤러리 114장, 확대 창·테마 전환)·한국어 문구 점검, 기준일 정리, PART 2 개요에 '한눈에 보기'(흐름도·단계표)와 용어 풀이 추가, PART 1 TPM·429 안내에서 PART 2로 연결, 개요의 '30,000 TPM은 통과'를 '천천히 한 건씩 보낼 때만 통과'로 정정
   - [x] 공개 전 개인 식별 정보 점검(2026-11-18): PART 2 화면 51장은 OCR 통과. PART 1 화면 19장에는 원본 E2E의 구독 표시 이름·테넌트 도메인·테스트 계정이 보이지만 원본 리포와 Pages가 이미 공개 상태라 새로 노출되는 것은 아님(원본에서 가릴지는 소유자 결정). 새로 찍는 화면·영상은 `internal/tools/ocr_scan`으로 검사
2. [ ] Portal 화면 캡처 및 동영상 녹화
   - **진행 순서(2026-11-18 지시):** 2~5번(동영상 녹화·영문 가이드·영문 화면·PPT)은 Ignite 2026 발표(2026-11-18 03시 30분경 KST 예정) 뒤에 공개된 자료와 대조한 다음 진행합니다. 인계 프롬프트는 `internal/next-session-prompt.md`(Git 제외)입니다.
   - [ ] 녹화용 로그인 준비: 테스트 계정 `se01`의 인증 앱(Software OATH)을 `az`로는 초기화할 수 없음(Microsoft Graph 403, 토큰에 `UserAuthenticationMethod.*` 스코프 없음). 사용자 승인 뒤 `se02`를 만들거나 Entra 관리 센터에서 직접 삭제해야 함
   - [x] 정지 화면 51장 캡처(영문 UI + 한국어 입력, 개인 정보 가림·OCR 검사)
   - [ ] 동영상 녹화(하네스 생성·실행, 평가 실행, Manage 화면)와 가이드의 영상 버튼 연결
3. [ ] 가이드 영문화(지시문·질문·평가 기준 문장도 영어로)
4. [ ] 영문 Portal·영문 데이터 기준으로 Portal 화면 캡처 및 동영상 녹화
5. [ ] 국문/영문 각 단계별 데모 PPT 슬라이드 작성
6. [ ] github.io에 동영상과 PPT 슬라이드 링크 추가 (웹에서 모두 접근 가능하게)

## 나중에

- [ ] 작업할 때 사용하는 모델을 `gpt-6.1-terra`로 설정
