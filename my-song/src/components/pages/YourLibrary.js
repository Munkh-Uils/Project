import styles from "../styles/YourLibrary.module.css";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";

const YourLibrary = () => {
  const {data} = useContext(DataContext);

  console.log(data);
  
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.library}>
          <div className={styles.playlists}>
            {data &&
              data.map((item, index) => {
                return (
                  <div className={styles.playlist}>
                    <div key={item.title + index}>Title:</div>
                    {item.title}
                    <div key={item.description + index}>Description:</div>
                    {item.description}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default YourLibrary;
