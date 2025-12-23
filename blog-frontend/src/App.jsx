import {Route, Routes} from 'react-router-dom'
import PostListPage from './pages/PostListPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import WritePage from './pages/WritePage'
import PostPage from './pages/PostPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PostListPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/write" element={<WritePage/>}/>
        {/**
         * PostPage의 경우 / 경로에서도 보여지고 /@:username 경로에서도 보여진다.
         * username URL 파라미터가 주어졌을 때는 특정 사용자가 작성한 포스트의 목록이 보여지고,
         * 이 URL 파라미터가 주어지지 않았을 때는 전체 포스트 목록을 보여준다.
         */
        }
        <Route path="/@:username">
          <Route index element={<PostListPage/>}/>
          <Route path=":postId" element={<PostPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
