import { createContext, useReducer } from 'react';

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  const { type, payload } = action;
  console.log('payload', type, payload)

  switch (type)  {
    case "SET_TODOS": 
      return { ...state, todos: payload }
    case "ADD_TODO":
      return { ...state, todos: [payload, ...state.todos] }
    case "UPDATE_TODO":
      // const todos = ;
      const todos = [ ...state.todos ].map(elem => {
        if (payload.id && elem.id === payload.id) {
          return payload;
        }
        return elem
      })
      return { ...state, todos }
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