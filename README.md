# React Factory

react 개발을 빠르게 하기위한 setup입니다

### 자동 Formatting 설정

`⌘(command) + ,(comma)`를 눌러서 설정을 열고
![](https://drive.google.com/uc?id=1maTB_bG86oe59UoIbeRW0vaavDVfZV4t)
해당 아이콘을 눌러서 json파일로 `settings`파일에 다음 내용을 추가한다

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
