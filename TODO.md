# TODO · Ignite 2026 Microsoft Foundry 실습 가이드

남은 작업만 적습니다. 끝낸 항목은 지우고 이력은 Git에 남깁니다.

## 원칙

- 범위는 Microsoft IQ와 Microsoft Foundry입니다. Azure 인프라·Windows 등의 실습은 범위 밖입니다.
- 기존 id·앵커는 보존하고 이동·번호 변경·추가로 재구성합니다.
- 가이드의 근거는 공개 Book of News·공식 블로그·Learn뿐입니다. 비공개 설정·실행 기록은 Git 제외 경로에 보관하며, 확인한 출처와 시각은 `internal/tools/facts-check-*.txt`에 있습니다.
- **실습은 직접 실행해 확인한 것만 추가합니다(2026-11-18 결정).** 실행하지 못한 기능은 소개 카드(무엇·발표 상태·왜 실습하지 않는지·해 보려면·공식 문서 링크)로 충분히 설명하고 링크로 갈음합니다. 절차를 지어내지 않습니다.

## 보류

범위 조정(2026-11-18): 일단 한글 가이드만 다룹니다. 영문 가이드·영문 화면·동영상·PPT는 보류이며 계획은 `internal/deferred-plan.md`(Git 제외)에 있습니다.

- [ ] 선택 실습 6~10의 동영상 녹화와 가이드의 영상 버튼 연결
- [ ] 가이드 영문화(지시문·질문·평가 기준 문장도 영어로)
- [ ] 영문 Portal·영문 데이터 기준으로 Portal 화면 캡처 및 동영상 녹화
- [ ] 국문/영문 각 단계별 데모 PPT 슬라이드 작성. 신규 동영상·PPT를 만들면 완성 후 해당 링크를 가이드에 추가합니다.

## 남은 현장 검증 · 가이드 완성과 별도

- [ ] **Foundry IQ 참가자 권한 검증 남음**: 정상 인증 후 운영자 사전 준비부터 지식 구성·에이전트 연결·출처 응답·Traces·비용·정리까지 직접 실행하고 마스킹·OCR 증거를 남겨야 실습으로 승격할 수 있음. 현재는 소개 카드가 최종 결과
- [ ] Foundry 포털의 Toolboxes·Safety 후보 재확인(메뉴·배지·Insights·Optimize·Cost·Gateways·Knowledge 메뉴는 2026-11-18 재촬영 화면으로 확인함)
- [ ] AI Gateway 생성, Publish·채널 연결, Optimize 후보 승격·하네스 Optimize 제출·Azure Policy 할당은 이번 재촬영에서 미실행(Policy는 2026-11-17 별도 확인만). 운영 구독 쿼터, 비용 데이터가 쌓인 Cost와 Cost Management Reader 필요 여부, 실제 교육망·다중 참가자 부하는 개최 전 별도 검증
- [ ] 재촬영 환경(`rg-se01`의 `foundry-se02-lab`·`se02-fb-lab-resource` 등, 계정 `se02`, judge 모델 배포)과 soft-delete된 Foundry 계정, `config/workshop.local.json`·`.workshop-runs/`는 보존 중입니다. 삭제 승인 전 정리하지 않으며 기존 리소스의 비용은 계속될 수 있습니다(Speech 계정은 삭제하지 않음).
