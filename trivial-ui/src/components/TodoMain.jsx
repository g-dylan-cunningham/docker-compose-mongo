import { useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoDisplay from './TodoDisplay';
import useTodoContext from "../hooks/useTodoContext";


const TodoMain = () => {
  const { dispatch } = useTodoContext();
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:4000/todo', {
        method: "GET",
      })
      const todos = await response.json();
      dispatch({ type: "SET_TODOS", payload: todos })
    }
    fetchTodos();
  }, [])
  return (
    <div>
      <TodoDisplay />
      <TodoForm />
    </div>
  )
}

export default TodoMain