import styles from "./styles/Page4.module.css";
import { BsArrowRight } from "react-icons/bs";
import brooke from "./assets/brooke.svg";
import { Container } from "react-bootstrap";

export const Page4 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.button}>
          <h1 className={styles.your}>Scheduling that actually works</h1>
          <p className={styles.give}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className={styles.more}>
            <div className={styles.learn}>Learn more</div>
            <BsArrowRight className={styles.arrow} />
          </div>
        </div>
        <img className={styles.image} src={brooke}></img>
    </div>
  );
};
