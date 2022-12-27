import styles from "../styles/YourLibrary.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
      // signOut(auth).then(() => {
      //   // Sign-out successful.
      // }).catch((error) => {
      //   // An error happened.
      // });
  };
  return (
    <div>
      <div>
        <h1>Log in</h1>
        <form>
          <div>
            <label htmlFor="email-address">Email address</label>
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <button type="submit" onClick={onLogin}>
            Log in
          </button>
        </form>
        <p>
          Already have an account? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </div>
    </div>
  );
};
export default Login;
