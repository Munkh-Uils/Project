import {createContext, useState, useEffect} from "react";
import {onAuthStateChanged, signInWithEmailAndPassword} from "@firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../config";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [inputValue, setInputValue] = useState("");

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
    
    return (
        <AuthContext.Provider value={{user, setUser, inputValue, setInputValue}}>
            {props.children}
        </AuthContext.Provider>
    )
}