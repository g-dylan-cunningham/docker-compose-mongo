import React, { useState } from "react";

const TodoForm = () => {
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
      },
      body: JSON.stringify(body),
    })
    const todo = await response.json();
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
