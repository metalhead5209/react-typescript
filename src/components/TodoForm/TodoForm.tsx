import React, { useRef } from 'react';


const TodoForm: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const inputText = todoInputRef.current!.value;
        if (inputText!.trim().length === 0) {

            return;
        }

        props.onAddTodo(inputText);
    }

  return (
    <form onSubmit={handleSubmit}> 
        <label htmlFor='text'>Todo Input</label> <br />
        <input type="text" id='text' ref={todoInputRef} />   <br />
        <button>Submit</button>
     </form>
  )
}

export default TodoForm