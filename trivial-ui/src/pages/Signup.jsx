import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await signup(email, password);
    if (!error) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
      <h3>Sign Up:</h3>

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
