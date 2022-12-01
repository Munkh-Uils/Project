import styles from "./styles/Page2.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Container } from "react-bootstrap";
import meeting from "./assets/meetings.svg";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Page2 = () => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme.pallate.dark
          ? `${styles.container} ${styles.dark}`
          : styles.container
      }
    >
      <div className={styles.button}>
        <h1
          className={
            theme.pallate.dark
              ? `${styles.your} ${styles.textWhite}`
              : styles.your
          }
        >
          Your Hub for teamwork
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
          into one place.
        </p>
        <div className={styles.more}>
          <div className={styles.learn}>Learn more</div>
          <BsArrowRight className={styles.arrow} />
        </div>
      </div>
      <img className={styles.image} src={meeting}></img>
    </div>
  );
};
