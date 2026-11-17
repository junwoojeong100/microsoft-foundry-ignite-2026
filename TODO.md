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
   - [ ] 발표 자료·릴리스 노트와 대조해 공식 발표 기능과 명칭을 확정하고 PART 2에 반영
   - [x] 운영자 가이드(`operator.html`)에 PART 2 준비 사항 반영: `#part2-prep` 섹션(리전·하네스·평가용 TPM·Log Analytics Reader·Cost Management Reader·Monitoring Reader·비용·정리)과 `#plan`·`#capacity`의 연결 안내. 참가자 필수 역할 3개 표는 바꾸지 않았음(Fleet·Cost용 역할을 표에 넣을지 결정 필요)
   - [ ] 미검증 항목 확인: 참가자 역할로 재현, Azure Policy 할당, AI Gateway, Optimize 실행, Publish·채널, North Central US에서 PART 1 처음부터 재현(Foundry 리소스 생성 화면의 Region 포함), 운영 구독의 North Central US `gpt-6.1-terra` 쿼터, 10,000 TPM 배포에서의 하네스 실행
2. [ ] Portal 화면 캡처 및 동영상 녹화
   - [x] 정지 화면 51장 캡처(영문 UI + 한국어 입력, 개인 정보 가림·OCR 검사)
   - [ ] 동영상 녹화(하네스 생성·실행, 평가 실행, Manage 화면)와 가이드의 영상 버튼 연결
3. [ ] 가이드 영문화(지시문·질문·평가 기준 문장도 영어로)
4. [ ] 영문 Portal·영문 데이터 기준으로 Portal 화면 캡처 및 동영상 녹화
5. [ ] 국문/영문 각 단계별 데모 PPT 슬라이드 작성
6. [ ] github.io에 동영상과 PPT 슬라이드 링크 추가 (웹에서 모두 접근 가능하게)

## 나중에

- [ ] 작업할 때 사용하는 모델을 `gpt-6.1-terra`로 설정
