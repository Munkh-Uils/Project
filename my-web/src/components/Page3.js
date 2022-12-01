import styles from "./styles/Page3.module.css";
import group from "./assets/group.svg";
import { BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Page3 = () => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme.pallate.dark
          ? `${styles.container} ${styles.dark}`
          : styles.container
      }
    >
      <img className={styles.image} src={group}></img>
      <div className={styles.button}>
        <h1
          className={
            theme.pallate.dark
              ? `${styles.your} ${styles.textWhite}`
              : styles.your
          }
        >
          Simple task management
        </h1>
        <p
          className={
            theme.pallate.dark
              ? `${styles.give} ${styles.textWhite}`
              : styles.give
          }
        >
          Give everyone you work with—inside and outside your company—a more
          productive way to stay in sync. Respond faster with emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place. Learn more
        </p>
        <div className={styles.more}>
          <div className={styles.learn}>Learn more</div>
          <BsArrowRight className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};
