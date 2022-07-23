
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import Todos from './components/Todos/Todos'
import Todo from './model/todo'
import { useState } from 'react';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ]

  return (
    <div className="App">
      <TodoForm />
      <Todos items={todos}/>
    </div>
  )
}

export default App
