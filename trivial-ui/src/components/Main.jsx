import React, { useEffect, useRef } from "react";

import Display from "./Display";
import Form from "./Form";
import useWorkoutContext from "../hooks/useWorkoutContext";

function Main() {
  const { dispatch } = useWorkoutContext();

  const titleRef = useRef();
  const loadRef = useRef();
  const repRef = useRef();

  const fetchData = async () => {
    try {
      fetch("http://localhost:4000/workout", {
        method: "GET",
      })
        .then((response) => {
          // console.log({ response });
          return response.json();
        })
        .then((data) => {
          console.log("data", data);
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

  const clearForm = () => {
    titleRef.current.value = "";
    loadRef.current.value = "";
    repRef.current.value = "";
  };

  

  return (
    <div className="Main">
      <Display />
      <Form
        clearForm={clearForm}
        titleRef={titleRef}
        loadRef={loadRef}
        repRef={repRef}
      />
    </div>
  );
}

export default Main;
