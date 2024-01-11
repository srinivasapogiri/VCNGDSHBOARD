// UserAuth.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app, auth } from './Firebase';
import './UserAuth.css';
import Spinner from './Spinner'; // Import the Spinner component

const UserAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      // Handle successful sign-up
    } catch (error) {
      console.error(error);
      // Handle sign-up error
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      // Handle successful sign-in
    } catch (error) {
      console.error(error);
      // Handle sign-in error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {loading && (
        <div className="overlay">
          <Spinner />
        </div>
      )}
      <center>
        <form autoComplete="off">
          <h1>Authentication</h1>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <button onClick={signIn} >
            Sign In
          </button>
          &nbsp; &nbsp;
          <button onClick={signUp}>
            Sign UP
          </button>
        </form>
      </center>
    </div>
  );
};

export default UserAuth;
