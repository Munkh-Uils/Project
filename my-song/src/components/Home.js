import styles from "./styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <IoIosArrowBack className={styles.icon} />
          <IoIosArrowForward className={styles.icon2} />
        </div>
        <div className={styles.buser}>
          <div className={styles.upgrade}>Ubgrade</div>
          <div className={styles.user}>Munkh-Uils</div>
        </div>
      </div>
    </div>
  );
};
