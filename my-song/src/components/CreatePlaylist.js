import styles from "./styles/CreatePlaylist.module.css";
import { useContext, useState, useRef } from "react";
import { DataContext } from "./contexts/DataProvider";
import axios from "axios";

const CreatePlaylist = () => {
    const {create, setCreate, data, setData} = useContext(DataContext);

    let name = useRef();
    let des = useRef();

    const newPlaylist = () => {
        const title = name.current.value;
        console.log(name.current.value);
        setCreate(!create);
        axios
            .post("http://localhost:3001/playlists", {
                title: name.current.value,
                description: des.current.value,
            })
            .then((res) => {
                console.log(res.data);
                setData([...data, res.data]);
            })
            .catch((err) => {
                console.log(err);
            })
    }

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.create}>
            <div className={create ? styles.open : `${styles.open2} ${styles.displayNone}`}>
                <div className={styles.inputs}>
                    <input
                    className={styles.input}    
                    placeholder="Playlist name"
                    ref={name}
                    />
                    <input
                    className={styles.input}    
                    placeholder="Description"
                    ref={des}
                    />
                    <div className={styles.buttons}>
                    <button className={styles.button} onClick={newPlaylist}>Create</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePlaylist;
