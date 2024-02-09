import { createContext, useReducer } from 'react';

export const WorkoutContext = createContext();

export const workoutsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_WORKOUT':
      return {
        workouts: payload,
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [payload, ...state.workouts]
      }
    default:
      return state;
  }

}

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  })
  return (
    <WorkoutContext.Provider value={{...state, dispatch}}>
      {children}
    </WorkoutContext.Provider>
  )
}