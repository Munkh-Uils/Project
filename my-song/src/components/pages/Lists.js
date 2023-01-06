import styles from "../styles/Lists.module.css";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const YourLibrary = () => {
  const { data, setData } = useContext(DataContext);

  console.log(data);

  return (
    data && (
      <div className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.lists}>
            {data &&
              data.map((item, index) => {
                return (
                  <div className={styles.playlist}>
                    <div key={item.name + index}>{item.name}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    )
  );
};
export default YourLibrary;
