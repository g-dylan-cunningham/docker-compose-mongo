import { WorkoutContext } from "../contexts/workoutContext";
import { useContext } from 'react';

export default function useWorkoutContext() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error('useWorkoutContext must be inside its provider')
  }
  return context;
}