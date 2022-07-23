
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import Todos from './components/Todos/Todos'
import Todo from './model/todo'

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ]

  return (
    <div className="App">
      <Todos items={todos}/>
      <TodoForm />
    </div>
  )
}

export default App
