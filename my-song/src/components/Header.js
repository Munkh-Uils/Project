import styles from "./styles/Header.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./config";
import { useContext } from "react";
import { DataContext } from "./contexts/DataProvider";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  const { user } = useContext(DataContext);

  const navigate = useNavigate();
  const location = useLocation();

  const Login = () => {
    signOut(auth).then(() => {
      navigate("/login");
      console.log("Signed out successfully");
    });
  };
  const Signup = () => {
    signOut(auth).then(() => {
      navigate("/signup");
      console.log("Signed out successfully");
    });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signup");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.top}>
          <div>
            <IoIosArrowBack className={styles.icon} />
            <IoIosArrowForward className={styles.icon2} />
          </div>
          {location.pathname === "/open" || "/signup" ? (
            <div className={styles.header}>
              <div className={styles.a}>
                <div className={styles.premium}>
                  <a href="https://www.spotify.com/mn/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade">
                    Premium
                  </a>
                </div>
                <div className={styles.premium}>
                  <a href="https://support.spotify.com/mn/">Support</a>
                </div>
                <div className={styles.premium}>
                  <a href="https://www.spotify.com/mn/download/mac/">
                    Download
                  </a>
                </div>
                <div className={styles.trash}>
                  {user && <p>{user.email}</p>}
                </div>
              </div>
              <div className={styles.silo}>
                <div className={styles.signtop}>
                  <button className={styles.signup} onClick={Signup}>
                    Sign up
                  </button>
                </div>
                <div className={styles.logtop}>
                  <button className={styles.login} onClick={Login}>
                    Log in
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          {location.pathname === "/" || "/search" ? (
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
                <a className={styles.log} onClick={handleLogout}>
                  Log out
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
