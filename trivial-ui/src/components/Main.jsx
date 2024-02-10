import React, { useEffect, useRef } from "react";

import Display from "./Display";
import Form from "./Form";
import useWorkoutContext from "../hooks/useWorkoutContext";

function Main() {
  const { dispatch } = useWorkoutContext();



  const fetchData = async () => {
    try {
      fetch("http://localhost:4000/workout", {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.length) {
            dispatch({ type: "SET_WORKOUT", payload: data });
          }
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="Main">
      <Display />
      <Form />
    </div>
  );
}

export default Main;
