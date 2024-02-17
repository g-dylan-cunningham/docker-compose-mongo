import React from "react";
import useTodoContext from "../hooks/useTodoContext";

const TodoDisplay = () => {
  const { todos, dispatch } = useTodoContext();

  const handleCheckClick = async (todo) => {
    const response = await fetch(`http://localhost:4000/todo?id=${todo._id}`, {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isComplete: todo.isComplete }),
    });
    const payload = await response.json();
    dispatch({ type: "UPDATE_TODO", payload });
  };
  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo._id}>
          <label>title:</label>
          <span>{todo.title}</span>
          <label>is complete?</label>
          <input
            type="checkbox"
            defaultChecked={todo.isComplete}
            onChange={(e) => {
              e.preventDefault();
              handleCheckClick(todo);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoDisplay;
