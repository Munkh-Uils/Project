import styles from "../styles/Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
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
  };
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.signup}>
          <h1 className={styles.text}>Log in</h1>
          <form>
            <div>
              <label className={styles.emtext} htmlFor="email-address">
                Email address
              </label>
              <input
                className={styles.email}
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </div>
            <div>
              <label className={styles.patext} htmlFor="password">
                Password
              </label>
              <input
                className={styles.pass}
                type="password"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <a className={styles.forgot}>Forgot your password?</a>
            <div className={styles.rem}>
              <div className={styles.remember}>
                <input className={styles.check} type="checkbox" />
                Remember me
              </div>
              <div className={styles.logbut}>
                <button
                  className={styles.button}
                  type="submit"
                  onClick={onLogin}
                >
                  LOG IN
                </button>
              </div>
            </div>
            <div
              style={{
                width: "450px",
                border: "0.5px solid grey",
                marginTop: "25px",
              }}
            ></div>
          </form>
          <p className={styles.dont}>Don't have an account?</p>
          <NavLink to="/signup">
            <button className={styles.nuguuduh} >SIGN UP FOR SPOTIFY</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Login;
