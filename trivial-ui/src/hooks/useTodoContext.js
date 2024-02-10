import { TodoContext } from "../contexts/todoContext";
import { useContext } from 'react';

export default function useTodoContext() {
  const context = useContext(TodoContext);

  if (!context) {
    throw Error('useTodoContext must be inside its provider')
  }
  return context;
}