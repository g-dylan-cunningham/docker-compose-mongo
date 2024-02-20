import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Signup = () => {
  const { error, isLoading, login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (!error) {
      setEmail('')
      setPassword('')
    }
  };
  return (
    <form onSubmit={handleSubmit} className="login">
      <h3>Login</h3>

      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "LOADING" : "SUBMIT"}
      </button>
      {error ? <h3>{error}</h3> : null}
    </form>
  );
};

export default Signup;
