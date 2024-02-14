# ⚙️ 내가 쓰려고 만든 next14 프로젝트 setup

## 설치

> 클론 후
> yarn install

## favicon 생성

> 1. [realfavicongenerator](https://realfavicongenerator.net/)에서 원하는 로고 삽입 생성 버튼 클릭 후 다운 받기
> 2. /public 폴더 비우기.
> 3. /public 폴더에 favicon으로 폴더명 짓고 다운받은 폴더 붙여넣기.
> 4. public에 다운 받은 폴더 내 favicon.ico 파일을 복사 붙여준다.

## 실행

> yarn run dev

## 🧨 커밋 실패 -> 커밋 린트 규칙 준수 여부 확인

> ✅ commitlint.config.js에 나온 enum 준수 여부 체크
> ✅ 통과 예시 : 'fix: add error handler for edge cases' ('enum: 내용')
> 오버라이드하고 싶은 규칙은 해당 파일에서 수정하면 됨
