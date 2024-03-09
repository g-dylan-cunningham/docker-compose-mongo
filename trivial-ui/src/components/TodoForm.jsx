import React, { useState, useContext } from "react";
import useTodoContext from '../hooks/useTodoContext'
import useAuthContext from "../hooks/useAuthContext";

const TodoForm = () => {
  const { dispatch } = useTodoContext();
  const { user } = useAuthContext()

  const [title, setTitle] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { title, isComplete }
    const response = await fetch('http://localhost:4000/todo', {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify(body),
    })
    const todo = await response.json();
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Todo Title
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <label>
          Is Completed?
          <input
            type="checkbox"
            id="isComplete"
            value={isComplete}
            onChange={(e) => setIsComplete(e.target.checked)}
          />
        </label>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default TodoForm;
