import React, { useRef } from "react";
import useWorkoutContext from "../hooks/useWorkoutContext";
const Form = ({}) => {
  const { dispatch } = useWorkoutContext();

  const titleRef = useRef();
  const loadRef = useRef();
  const repRef = useRef();

  const clearForm = () => {
    titleRef.current.value = "";
    loadRef.current.value = "";
    repRef.current.value = "";
  };

  const postWorkout = async (e) => {
    e.preventDefault();
    const body = {
      title: titleRef.current.value,
      load: loadRef.current.value,
      reps: repRef.current.value,
    };

    try {
      fetch("http://localhost:4000/workout", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          return response.json();
        })
        .then((elem) => {
          dispatch({ type: "CREATE_WORKOUT", payload: elem });
          clearForm();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log({ e });
    }
  };
  return (
    <div>
      <section>
        <form onSubmit={postWorkout}>
          <label>
            Title:
            <input type="text" id="title" ref={titleRef} />
          </label>
          <label>
            Reps:
            <input type="text" id="reps" ref={repRef} />
          </label>
          <label>
            Load:
            <input type="text" id="load" ref={loadRef} />
          </label>

          <input type="submit" value="SUBMIT" />
        </form>
      </section>
    </div>
  );
};

export default Form;
