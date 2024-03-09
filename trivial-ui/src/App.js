import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";
import Navbar from './components/Navbar'
import Home from "./components/Main";
import TodoMain from "./pages/TodoMain";
import Login from './pages/Login'
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App" style={{ padding: "5em" }}>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={user ? <TodoMain /> : <Navigate to="/login" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* {isWorkout ? <Main /> : <TodoMain />}
      <button
        onClick={() => setIsWorkout(!isWorkout)}
        style={{ marginTop: "3em" }}
      >
        switch
      </button> */}
    </div>
  );
}

export default App;
