import React from 'react'

const TodoForm = () => {
  return (
    <form> 
        <label htmlFor='text'>Todo Input</label> <br />
        <input type="text" id='text' />   <br />
        <button>Submit</button>
     </form>
  )
}

export default TodoForm