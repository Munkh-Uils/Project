import styles from "../styles/Lists.module.css";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";
import { useParams } from "react-router-dom";
import { RiMusic2Line } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";  
import { Link } from "react-router-dom";
import axios from "axios";

const YourLibrary = () => {
  const { data, setData, add, setAdd, song, setSong } = useContext(DataContext);
  const { id } = useParams();

  const Add = () => {
    setAdd(!add);
  }
  console.log(data);
  console.log(add);

  return (
    <div className={styles.container}>
      <div className={add ? styles.container3 : `${styles.container2}`}>
        <div className={add ? styles.songs : `${styles.songss}`}>
          <div className={styles.goy}>
            <div className={styles.goyl}>
              <RiMusic2Line className={styles.goyicon} />
            </div>
          </div>
          <div className={styles.getsongs}>
            {song &&
              song.map((item, index) => {
                return (
                  <div className={styles.mapsongs}>
                      <div className={styles.song} key={item.name + index}>{item.name}</div>
                      <AiFillPlusCircle className={styles.plus}/>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={!add ? styles.displayNone : `${styles.listss}`}>
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
          <div className={styles.cont}>
            <button onClick={Add} className={styles.add}>Add Songs</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default YourLibrary;
