import styles from "../styles/YourLibrary.module.css";
import { NavLink, userNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
  }
  return (
    <button>
      <input></input>
      <input></input>
    </button>
  );
};
export default Signup;
