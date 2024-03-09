import { useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoDisplay from '../components/TodoDisplay';
import useTodoContext from "../hooks/useTodoContext";
import useAuthContext from "../hooks/useAuthContext";

const TodoMain = () => {
  const { dispatch } = useTodoContext();
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:4000/todo', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      const todos = await response.json();
      dispatch({ type: "SET_TODOS", payload: todos })
    }
    if (user) {

      fetchTodos();
    }
  }, [])
  return (
    <div>
      <TodoDisplay />
      <TodoForm />
    </div>
  )
}

export default TodoMain