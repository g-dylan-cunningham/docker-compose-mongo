import React from 'react';
import useWorkoutContext from '../hooks/useWorkoutContext'

const Display = () => {

  const { workouts, dispatch } = useWorkoutContext()

  const handleDelete = (e, workout) => {
    e.preventDefault();

    try {
      fetch("http://localhost:4000/workout", {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: workout._id }),
      })
        .then((response) => {
          return response.json();
        })
        .then((elem) => {
          dispatch({ type: "DELETE_WORKOUT", payload: elem });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log({ e });
    }
  }

  return (
    <div>
      <h1>WORKOUTS:</h1>
        <ul>
          {workouts?.map((elem) => (
            <li key={elem._id}>
              <span>
                title: <strong>{elem.title}</strong>{" "}
              </span>
              <span>reps: {elem.reps} </span>
              <span>load: {elem.load} </span>
              <button type='button' onClick={e=>handleDelete(e, elem)}>DELETE</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Display