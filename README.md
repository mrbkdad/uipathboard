# uipathboard
uipath custom dashboard
created by park363@daum.net

### Uipath Orchestrator API를 이용한 Dashboard
- Uipath Orchestrator의 Jobs API를 이용하여 선택된 기간의 데이터를 읽어 ROI를 계산
- ROI 계산을 위해 Process를 등록시 Input Parameter에 roi를 Default로 추가
  * roi 데이터를 이용하여 해당 Process의 ROI 계산
  * 실행시 건당 데이터 기준으로 계산할 경우 Output Parameter을 추가 하여 처리(선택)

### Install
- git Clone
- npm install
- npm start
- route/uipath/orchestrator.js 자신의 환경에 맞게 수정 필요
- Board 추가시 D3.js 지식 필요(필요시 요청 하세요!)
