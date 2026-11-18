# TODO · Ignite 2026 Microsoft Foundry 실습 가이드

남은 작업만 적습니다. 끝낸 항목은 지우고 이력은 Git에 남깁니다.

## 원칙

- 범위는 Microsoft IQ와 Microsoft Foundry입니다. Azure 인프라·Windows 등의 실습은 범위 밖입니다.
- 기존 id·앵커는 보존하고 이동·번호 변경·추가로 재구성합니다.
- 가이드의 근거는 공개 Book of News·공식 블로그·Learn뿐입니다. 비공개 설정·실행 기록은 Git 제외 경로에 보관하며, 확인한 출처와 시각은 `internal/tools/facts-check-*.txt`에 있습니다.
- **실습은 직접 실행해 확인한 것만 추가합니다(2026-11-18 결정).** 실행하지 못한 기능은 소개 카드(무엇·발표 상태·왜 실습하지 않는지·해 보려면·공식 문서 링크)로 충분히 설명하고 링크로 갈음합니다. 절차를 지어내지 않습니다.

## 보류

범위 조정(2026-11-18): 일단 한글 가이드만 다룹니다. 영문 가이드·영문 화면·동영상·PPT는 보류이며 계획은 `internal/deferred-plan.md`(Git 제외)에 있습니다.

- [ ] 실습 6~14의 동영상 녹화와 가이드의 영상 버튼 연결(영상은 지금 실습 1~5만 있음)
- [ ] 가이드 영문화(지시문·질문·평가 기준 문장도 영어로). 사용자가 이 확장 작업이 끝난 뒤 요청하기로 함
- [ ] 영문 Portal·영문 데이터 기준으로 Portal 화면 캡처 및 동영상 녹화
- [ ] 국문/영문 각 단계별 데모 PPT 슬라이드 작성. 신규 동영상·PPT를 만들면 완성 후 해당 링크를 가이드에 추가합니다.

## 남은 현장 검증 · 가이드 완성과 별도

- [ ] **Foundry IQ·Hosted agent 규모 검증**: 참가자 1명(se02)으로만 끝까지 확인했습니다. 70명 규모의 serverless Search 서비스 수 한도(공식 문서의 값이 서로 다름), 지식 소스 동시 생성, 임베딩 쿼터(이 구독·지역의 Standard `text-embedding-ada-002`는 350K TPM이 가득 참), 프로젝트 MI 역할을 프로젝트 생성 뒤 일괄 부여하는 절차, Hosted agent의 프로젝트별 일괄 배포와 Foundry Project Manager 요구(이번엔 Foundry User로 됨), Foundry User만 가진 계정의 Hosted 트레이스는 개최 전 리허설로 확인
- [ ] **Cost Control**: 프로젝트 범위의 추적 전용 토큰 예산만 확인했습니다. Send alert(Event Grid)·Block usage·Budget per Agent·달러 예산·필터, Cost 탭의 Project budget 카드 반영, 월말 보고서는 미확인
- [ ] Foundry 포털의 Toolboxes·Safety 후보 재확인(메뉴·배지·Insights·Optimize·Cost·Gateways·Knowledge 메뉴는 2026-11-18 재촬영 화면으로 확인함)
- [ ] AI Gateway 생성, Publish·채널 연결, Optimize 후보 승격·하네스 Optimize 제출·Azure Policy 할당은 이번 재촬영에서 미실행(Policy는 2026-11-17 별도 확인만). 운영 구독 쿼터, 비용 데이터가 쌓인 Cost와 Cost Management Reader 필요 여부, 실제 교육망·다중 참가자 부하는 개최 전 별도 검증
- [ ] 재촬영 환경(`rg-se01`의 `foundry-se02-lab`·`se02-fb-lab-resource` 등, 계정 `se02`, judge 모델 배포)과 soft-delete된 Foundry 계정, `config/workshop.local.json`·`.workshop-runs/`는 보존 중입니다. 삭제 승인 전 정리하지 않으며 기존 리소스의 비용은 계속될 수 있습니다(Speech 계정은 삭제하지 않음).
- [ ] 이번 확장 검증이 `rg-se01`에 남긴 것: serverless 검색 서비스 `se02-lab-srch-rbvs`(지식 소스 `ks-file-515`·인덱스 포함), 지식 베이스 `workshop-kb`, 프로젝트 연결 2개(검색 연결 `se02labsrchrbvsu7ij2k`·지식 베이스 MCP 연결 `kb-workshop-kb-7ij2k`), 에이전트 `workshop-iq-agent`·`workshop-web-agent`·`workshop-hosted-agent`(+자동 생성 툴박스 `workshop-iq-agent-toolbox`·`workshop-web-agent-toolbox`), Cost Control `workshop-cost-control`, 임베딩 배포 `text-embedding-ada-002`, 역할 할당(se02에 RG 범위 Search Service Contributor·Search Index Data Contributor, 검색 서비스 MI에 Cognitive Services User, 프로젝트 MI에 Search Index Data Reader, 운영자 계정에 프로젝트 범위 Foundry User). 승인 전 정리하지 않습니다. 지식 베이스를 Foundry에서 지워도 지식 소스·인덱스는 남으므로 Azure Portal의 검색 서비스에서 따로 지웁니다.
