import { useState } from "react";
import useAuthContext from './useAuthContext';

export const useSignup = () => {
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true)
    setError(false)
    const body = JSON.stringify({
      email, password,
    })

    const response = await fetch('http://localhost:4000/user/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    setIsLoading(false)

    const userData = await response.json();
    if (!response.ok) {
      setError(userData.error);
    }

    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(userData))
      dispatch({ type: "LOGIN", payload: userData })
    }
  }

  return {
    isLoading,
    error,
    signup
  }
}