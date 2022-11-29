import styles from "./styles/Page3.module.css";
import group from "./assets/group.svg";
import { BsArrowRight } from "react-icons/bs";
import { Container } from "react-bootstrap";

export const Page3 = () => {
  return (
    <div className={styles.container}>
        <img className={styles.image} src={group}></img>
        <div className={styles.button}>
          <h1 className={styles.your}>Simple task management</h1>
          <p className={styles.give}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place. Learn more
          </p>
          <div className={styles.more}>
            <div className={styles.learn}>Learn more</div>
            <BsArrowRight className={styles.arrow} />
          </div>
        </div>
    </div>
  );
};
