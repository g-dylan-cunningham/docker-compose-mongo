import React, { useEffect, useState, useRef } from "react";
import { WorkoutContextProvider } from "./contexts/workoutContext";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState([]);

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
            setData(data);
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
    titleRef.current.value = '';
    loadRef.current.value = '';
    repRef.current.value = '';
  }

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
          console.log("elem", elem);
          setData([...data, elem]);
          clearForm()
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <div className="App">
      <WorkoutContextProvider>
        <Main />
      </WorkoutContextProvider>
    </div>
  );
}

export default App;
