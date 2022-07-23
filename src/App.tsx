
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import Todos from './components/Todos/Todos'
import Todo from './model/todo'
import { useState } from 'react';



function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  }

  const handleRemove = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <div className="App">
      <TodoForm onAddTodo={addTodoHandler} />
      <Todos items={todos} removeTodo={handleRemove} />
    </div>
  )
}

export default App
