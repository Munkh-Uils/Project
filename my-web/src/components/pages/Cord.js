import styles from "../styles/Cord.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Cord = (props) => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);
  console.log(props);
  return (
    <div
      className={
        theme.pallate.dark
          ? `${styles.container} ${styles.dark}`
          : styles.container
      }
    >
      <img className={styles.image} src={props.image}></img>
      <div className={styles.blaa}>
        <div
          className={
            theme.pallate.dark
              ? `${styles.data} ${styles.textWhite}`
              : `${styles.data} ${styles.textDefault}`
          }
        >
          {props.text}
        </div>
        <div
          className={
            theme.pallate.dark
              ? `${styles.our} ${styles.textWhite}`
              : `${styles.our} ${styles.textDefault}`
          }
        >
          It’s 2020, but women designers still face lower pay and less
          opportunity. What gives?
        </div>
        <div className={styles.bruhh}>
          <img className={styles.pro} src={props.owner.picture}></img>
          <div className={styles.name}>{props.owner.firstName}</div>
          <div className={styles.lname}>{props.owner.lastName}</div>
          <div className={styles.i}>|</div>
          <div className={styles.date}>{props.publishDate}</div>
        </div>
      </div>
    </div>
  );
};
export default Cord;
