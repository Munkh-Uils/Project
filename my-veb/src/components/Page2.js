import styles from "./styles/Page2.module.css";
import { BsArrowRight } from "react-icons/bs";
import meeting from "./assets/meetings.svg";

export const Page2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <h1 className={styles.your}>
                    Your Hub for teamwork
                </h1>
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
            <img className={styles.image} src={meeting}></img>
        </div>
    );
};