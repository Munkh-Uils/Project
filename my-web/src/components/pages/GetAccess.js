import styles from "../styles/GetAccess.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const GetAccess = () => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme.pallate.dark
          ? `${styles.container} ${styles.dark}`
          : styles.container
      }
    >
      <div
        className={
          theme.pallate.dark
            ? `${styles.getaccess} ${styles.textWhite}`
            : styles.getaccess
        }
      >
        GetAccess
      </div>
    </div>
  );
};
export default GetAccess;
