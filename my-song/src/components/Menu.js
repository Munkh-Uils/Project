import styles from "./styles/Menu.module.css";
import spotify from "./assets/spotify.png";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import { useState, useEffect } from "react";

export const Menu = () => {
  const [data, setData] = useState(null);
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/14/")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={spotify}></img>
      <p>{data && data.name}</p>
      <div className={styles.menu}>
        <div className={styles.home}>
          <div>
            <AiFillHome />
          </div>
          Home
        </div>
        <div className={styles.home}>Search</div>
        <div className={styles.home}>Your Library</div>
      </div>
    </div>
  );
};
