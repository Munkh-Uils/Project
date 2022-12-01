import styles from "../styles/Login.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Login = () => {
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
            ? `${styles.login} ${styles.textWhite}`
            : styles.login
        }
      >
        Login
      </div>
    </div>
  );
};
export default Login;
