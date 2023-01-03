import styles from "../styles/CreatePlaylist.module.css";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useContext, useState } from "react";

const CreatePlaylist = () => {
  const { data } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div>{data}</div>
      </div>
    </div>
  );
};
export default CreatePlaylist;
