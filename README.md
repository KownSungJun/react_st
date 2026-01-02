# react_st
리엑트 기본 공부

# React 시작하기
프로젝트 만들기 : npx create-react-app [프로젝트 이름]
프로젝트 시작하기 : npm start
vite react 프로젝트 만들기 : npm create vite@latest [프로젝트 이름]
vite react 프로젝트 시작하기 : npm run dev
# 24장 프론트엔드 프로젝트
## blog-frontend
src/pages
- LoginPage.jsx : 로그인
- RegisterPage.jsx : 회원가입
- WritePage.jsx : 글쓰기
- PostPage.jsx : 포스트 읽기
- PostListPage.jsx : 포스트 목록

# 공부 링크
https://redtrain.tistory.com/900 : react 필수 라이브러리
https://sillimmouse.tistory.com/85 : 2024 react 라이브러리 생태계 정리
https://daunje0.tistory.com/224 : react 라이브러리 추천
https://news.hada.io/topic?id=19538 : react 기술 스택 2025
https://medium.com/@iamkjw/react-wysiwyg-editor-%EB%B9%84%EA%B5%90-6ea919ffab8a : 위즈윅 에디터
https://news.hada.io/topic?id=19556 : 2025년을 위한 필수 react 라이브러리들

# 리엑트 프로젝트 시 받은 질문, 요구사항
server

src

auth dto, controller, module, service, jwt-auth.guard, jwt.strategy
comments dto, schema, module, service, controller
posts dtos, schema, controller, module, service
users schema, controller, module, service

CRUD 게시판 

DB: ORM
nestJs, react(js, ts)
몽고 DB, 
베포 railway, aws
명세서 만들기
페이지 라우팅
프론트 에디터 위즈윅
모노레포 pnpm
엔티티 구조
post 모듈, auth 모듈
프론트도 일단 스타일 최대한 없이 mvp 구현부터 해봐
깃 브랜치 전략 > main dev(elop) feat(ure)
분기따서 feat/server/auth feat/client/login
브랜치 만들어서 merge하는 걸로
개발 환경 세팅, jest 적용 로깅 md 파일로 정리
styled component 보단 tailwind 가 좋음
비즈니스 로직이랑 상관없는 css 코드가 파일 안에 있으니 보기 불편함

클라이언트가 ts면 타입을 가져다 쓸 수 있다
명세서 : 서버 소스코드 읽는거 어디 열고 읽어야 하는지
DTO 만들어서 JSDoc 문법으로 타입 가져다가 쓸 수 있게 하는 방법도 있음
-> JS파일에 주석 달아서 일부분만 타입스크립트 문법 사용하는 방법이라 생각하면 됨

js랑 ts랑 자동완성 기능이 연동이 안됨 -> ㅈ같네

src
auth
comments
posts
users
각 폴더가 모듈임

user모듈을 제외한 모듈들은 dto라는 폴더가 각각 있음
dto는 data transfer object의 줄임말

서버 클라이언트가 주고받는 데이터 엔티티 구조화 해놓은 파일

userDTO가 없는 이유 -> 유저 개체는 회원가입 로직에서 생성하기 때문

dto 파일 보면 전부 다 서버가 클라이언트에 요구하는 데이터 정보임
그니까 그 객체를 클라이언트에 만들어서 서버에 요청을 날려야해

유의해야할게
post 모듈 보면 find dto가 3개 있는데
각각 
유저 아이디(유저별로 남긴 댓글 조회)
게시물 아이디(게시물 별 댓글 조회)
부모 댓글 아이디(부모 댓글별)

이런 DTO인데

파일을 보면 QueryDto라고 dto 클래스명 작성 되어 있음
그래서 이거는 쿼리로 넘겨줘야 한다

/comments?postId=asdf1234&page=2&limit=5 이런 맹키로

page랑 limit 기본 값은 DTO에 써져 있을 것

값 안넘기면 그걸로 기본 설정됨

근데 postId나 parentCommentId 같은 건 필수값이라 꼭 넘겨줘야 함
안넘기면 400번대 에러 뜨게 설계되어 있음

DI(의존성 주입)개념이 스프링에서도 나오는데 nestjs에서도 똑같음

post 모듈 보면 posts.controller.ts가 유저 요청 처리해주는 최상위레이어고
그 컨트롤러에 posts.service.ts 라는 비즈니스로직 담겨있는 함수들 담겨있는 레이어 이다
컨트롤러 켜서 this.postsService. * 함수명 *
이 함수명의 반환값이 클라이언트에서 받게될 반환값임

그니까 컨트롤러의 반환값이 클라이언트가 받게될 반환값이다

결국 그 리턴문이 service 클래스의 함수를 리턴하고 있으니까 이렇게 설명했다

root 폴더에서 npm run dev하면 서버랑 클라이언트 둘다 켜지고
클라이언트랑 서버 연결되도록 실행할 수 있도록 mongodb도 만들고 명령어 설정도 하고 있을 것이다

