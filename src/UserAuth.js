
import React, { useState } from "react";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { app, auth } from './Firebase'; // Adjust the path based on your project structure
import './UserAuth.css';

const UserAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signUp = (e) => {
    e.preventDefault();
  
    console.log(app)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        // ...
      })
      .catch((error) => {
       console.log(error)
        // ..
      });
  };

  const signIn = (e) => {
    e.preventDefault();
   
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    console.log(error)
  });
  };

  return (
    <div className="auth-container">
      <center>
        <form autoComplete="off">
          <h1>Authentication</h1>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={changeHandler}
          />{" "}
          <br />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <button onClick={signIn}>Sign In</button> &nbsp; &nbsp;
          <button onClick={signUp}>Sign UP</button>
          <p>{email}</p>
        </form>
      </center>
    </div>
  );
};

export default UserAuth;