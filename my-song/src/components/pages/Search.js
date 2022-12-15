import styles from "../styles/Search.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    {
      (async () => {
        const res = await axios.get("http://localhost:5000");
        console.log(res.data);
        setList(res.data);
      })();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container2}></div>
    </div>
  );
};

export default Search;
