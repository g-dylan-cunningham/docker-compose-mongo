import React, { useEffect, useState, useRef } from "react";

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
      <h1>response:</h1>
      <ul>
        {data?.map((elem) => (
          <li id={elem._id}>
            <h4>{elem.title}</h4>
            <p>reps: {elem.reps}</p>
            <p>load: {elem.load}</p>
          </li>
        ))}
      </ul>

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
}

export default App;
