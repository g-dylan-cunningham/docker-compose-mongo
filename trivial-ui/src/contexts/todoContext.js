import { createContext, useReducer } from 'react';

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  const { type, payload } = action;
  console.log('payload', type, payload)

  switch (type)  {
    case "SET_TODOS": 
      return { todos: payload, ...state }
    case "ADD_TODO":
      return { payload, ...state }
    case "UPDATE_TODO":
      return { ...state }
    case "DELETE_TODO":
      return { ...state }
    default:
      return { ...state }
  }
}

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: null })

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}