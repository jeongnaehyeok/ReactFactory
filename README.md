# React Factory

react 개발을 빠르게 하기위한 setup입니다.

## version

- node/12.19.0
- create-react-app/3.4.1

## visual studio 설정

### 자동 Formatting 설정

`⌘(command) + ,(comma)`를 눌러서 설정을 열고
![](https://drive.google.com/uc?id=1maTB_bG86oe59UoIbeRW0vaavDVfZV4t)
해당 아이콘을 눌러서 json파일로 `settings`파일 하단에 다음 내용을 추가한다

```json
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"],
  "files.autoSave": "onFocusChange",
```

## Issue

### node-sass 버전때문에 생기는 이슈(20.11.18)

node-sass버전 확인 필요
`5.0.0`버전에서는 이슈있음. `4.14.1`버전으로 변경해줬음

```bash
npm uninstall node-sass
npm install node-sass@4.14.1
```
