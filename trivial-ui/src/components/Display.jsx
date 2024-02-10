import React, { useRef } from 'react';
import useWorkoutContext from '../hooks/useWorkoutContext'

const Display = ({ data }) => {

  const {workouts} = useWorkoutContext()
  return (
    <div>
      <h1>response:</h1>
        <ul>
          {workouts?.map((elem) => (
            <li id={elem._id}>
              <span>
                title: <strong>{elem.title}</strong>{" "}
              </span>
              <span>reps: {elem.reps} </span>
              <span>load: {elem.load} </span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Display