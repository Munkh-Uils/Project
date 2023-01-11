import styles from "../styles/Lists.module.css";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataProvider";
import { useParams } from "react-router-dom";
import { RiMusic2Line } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import axios from "axios";

const Lists = ({ index }) => {
  const { data, add, setAdd, song, playlistId } = useContext(DataContext);
  const { id } = useParams();
  const [listData, setListData] = useState();
  const [state, setState] = useState([]);
  const [songId, setSongId] = useState();
  const [songName, setSongName] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/playlist/" + id).then((res) => {
      console.log(res.data);
      setListData(res.data);
      setState(res.data.songs)
    });
  }, []);

  const Add = (_id) => {
    setAdd(!add);
  };

  const addSongs = ({ name, _id }) => {
      setSongName(name);
      console.log(songName)

      console.log(name);
      axios
        .put("http://localhost:3001/playlist/" + id, {
          id: _id,
        })
        .then(() => {
          axios.get("http://localhost:3001/song/" + _id).then((res) => {
          setState([...state, res.data]);
        });
        });
      setAdd(!add);
  }; 
  
  console.log(add);
  console.log(state)

  return (
    <div className={styles.container}>
      <div className={add ? styles.container3 : `${styles.container2}`}>
        <div className={add ? styles.songs : `${styles.songss}`}>
          <div className={styles.goy}>
            <div className={styles.goyl}>
              <RiMusic2Line className={styles.goyicon} />
            </div>
            <MdClear onClick={() => Add(index)} className={styles.x} />
          </div>
          <div className={styles.getsongs}>
            {song &&
              song.map((item, index) => {
                return (
                  <div className={styles.mapsongs} key={item.name + index}>
                    <div className={styles.song}>{item.name}</div>
                    <AiFillPlusCircle
                      onClick={() => addSongs ({ ...item })}
                      className={styles.plus}
                    />
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
              <div className={styles.name}>{listData && listData.name}</div>
              <p className={styles.user}>Munkh-Uils</p>
            </div>
          </div>
          <div className={styles.cont}>
            <button onClick={Add} className={styles.add}>
              Add Songs
            </button>
            {state && state.map((item, index) => {
                return (
                  <div key={item.name + index}>
                    <div className={styles.songname}>{item.name}</div>
                  </div>
                );
              })}
          </div>
        </div>  
      </div>
    </div>
  );
};
export default Lists;
