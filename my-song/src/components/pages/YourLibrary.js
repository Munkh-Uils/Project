import styles from "../styles/YourLibrary.module.css";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";
import { RiMusic2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

const YourLibrary = (props) => {
  const { data, setData } = useContext(DataContext);
  const deletePlaylist = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3001/playlist/" + id)
      .then(() => {
        axios.get("http://localhost:3001/playlists").then((res) => {
          setData(res.data);
        });
      })
      .catch((err) => console.log(err));
  };

  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.library}>
          <div className={styles.playlists}>
            {data &&
              data.map((item, index) => {
                return (
                  <Link to={'/playlist/' + item._id}>
                    <div className={styles.playlist}>
                      <div className={styles.icon}>
                        <RiMusic2Line className={styles.music} />
                      </div>
                      <div key={item.title + index}>{item.name}</div>
                      <button
                        className={styles.delete}
                        onClick={() => {
                          deletePlaylist(item._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default YourLibrary;
