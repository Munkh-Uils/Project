import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";
import team from "./assets/team.svg";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Header = () => {
  const { theme, changeDarkTheme, setFix, bg } = useContext(ThemeContext);
  window.addEventListener("scroll", setFix);

  return (
    <div className={bg ? styles.containerBg : styles.container}>
      <div className={styles.team}>
        <Link to="/">
          <img src={team} />
        </Link>
      </div>
      <div className={styles.pages}>
        <Form.Check type="switch" id="custom-switch" onClick={changeDarkTheme}/>
        <Link to="/products">
          <div className={styles.page}>Products</div>
        </Link>
        <Link to="/services">
          <div className={styles.page}>Services</div>
        </Link>
        <Link to="/contact">
          <div className={styles.page}>Contact</div>
        </Link>
        <Link to="/login">
          <div className={styles.page}>Log in</div>
        </Link>
        <Link to="/getaccess">
          <div className={styles.access}>Get Access</div>
        </Link>
      </div>
    </div>
  );
};
