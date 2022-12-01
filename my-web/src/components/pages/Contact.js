import styles from "../styles/Contact.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Contact = () => {
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
            ? `${styles.contact} ${styles.textWhite}`
            : styles.contact
        }
      >
        Contact
      </div>
    </div>
  );
};
export default Contact;
