import { useState } from "react"
import TodoInsert from "./components/TodoInsert"
import TodoTemplate from "./components/TodoTemplate"
import TodoList from "./components/TodoList"
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '리엑트 기초 공부',
      checked: false,
    },
    {
      id: 3,
      text: '아이디어 브레인 스토밍하기',
      checked: false,
    },
  ])
  return <TodoTemplate>
    <TodoInsert />
    <TodoList todos={todos}/>
  </TodoTemplate>
}

export default App