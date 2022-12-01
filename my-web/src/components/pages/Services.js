import styles from "../styles/Services.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Services = () => {
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
            ? `${styles.services} ${styles.textWhite}`
            : styles.services
        }
      >
        Services
      </div>
    </div>
  );
};
export default Services;
