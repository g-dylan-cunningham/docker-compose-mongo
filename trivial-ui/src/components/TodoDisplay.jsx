import React from 'react'
import useTodoContext from '../hooks/useTodoContext'

const TodoDisplay = () => {
  const {todos} = useTodoContext();
  console.log(todos)

  const handleCheckClick = async (id, isComplete) => {
    debugger
    const response = await fetch(`http://localhost:4000/todo?id=${id}`, {
      method: 'PATCH',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isComplete }),
    })
    const todo = await response.json();
    console.log('upated', todo)
  }
  return (
    <ul>
      {
        todos?.map(todo => (
          <li>
            <label>title:</label>
            <span>{todo.title}</span>
            <label>is complete?</label>
            <input type='checkbox' checked={todo.isComplete} onClick={(e) => {
              e.preventDefault()
              handleCheckClick(todo.id, todo.isComplete)
              }}/>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoDisplay