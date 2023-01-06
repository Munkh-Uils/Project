import styles from "../styles/Lists.module.css";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const YourLibrary = () => {
  const { data, setData } = useContext(DataContext);
  const { id } = useParams();

  console.log(data);

  return (
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.lists}>
            <div>Id: {id}</div>
          </div>
        </div>
      </div>
  );
};
export default YourLibrary;
