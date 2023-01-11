import {createContext, useState, useEffect} from "react";
import {onAuthStateChanged, signInWithEmailAndPassword} from "@firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../config";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user);
                const uid = user.uid;
                console.log(user);
            } else {
                setUser(null);
                navigate("/open");
                console.log("user is logged out")
            }
        })
    }, []);

    const login = (e, email, password) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log(errorCode, errorMessage);
            })
    };
    return (
        <AuthContext.Provider value={{user, setUser, login}}>
            {props.children}
        </AuthContext.Provider>
    )
}