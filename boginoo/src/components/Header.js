import styles from "./styles/Header.module.css";
import {signOut} from "@firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "./config";
import {useContext} from "react";
import { AuthContext } from "./context/Auth.Provider";

export const Header = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const Login = () => {
        signOut(auth).then(() => {
            navigate("/login");
            console.log("Signed out successfully");
        });
    };
    return (
        <div className={styles.container}>
            <div className={styles.how}>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            <button className={styles.login} onClick={Login}>НЭВТРЭХ</button>
        </div>
    )
};