import React, { useState } from "react";
import { WorkoutContextProvider } from "./contexts/workoutContext";
import { TodoContextProvider } from "./contexts/todoContext";
import Main from "./components/Main";
import TodoMain from "./components/TodoMain";

function App() {
  const [isWorkout, setIsWorkout] = useState(true);

  return (
    <div className="App" style={{ padding: "5em" }}>
      <WorkoutContextProvider>
        <TodoContextProvider>
          {isWorkout ? <Main /> : <TodoMain />}
          <button
            onClick={() => setIsWorkout(!isWorkout)}
            style={{ marginTop: "3em" }}
          >
            switch
          </button>
        </TodoContextProvider>
      </WorkoutContextProvider>
    </div>
  );
}

export default App;
