import styles from "../styles/Lists.module.css";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";
import { useParams } from "react-router-dom";
import { RiMusic2Line } from "react-icons/ri";
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
          <div className={styles.top}>
            <div className={styles.music}>
              <RiMusic2Line className={styles.icon} />
            </div>
            <div className={styles.names}>
              <p className={styles.playlist}>PLAYLIST</p>
              <div className={styles.name}>{id}</div>
              <p className={styles.user}>Munkh-Uils</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default YourLibrary;
