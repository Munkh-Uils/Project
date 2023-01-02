import styles from "./styles/Header.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.top}>
          <div>
            <IoIosArrowBack className={styles.icon} />
            <IoIosArrowForward className={styles.icon2} />
          </div>
          <div className={styles.buser}>
            <div className={styles.upgrade}>Upgrade</div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.dropbtn}>
              <AiOutlineUser className={styles.icon3} />
              Munkh-Uils
              <TiArrowSortedDown className={styles.arrow} />
            </div>
            <div className={styles.dropdowncontent}>
              <a href="#">Account</a>
              <a href="#">Profile</a>
              <a href="#">Download</a>
              <a href="#">Settings</a>
              <a className={styles.log} href="signup">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
