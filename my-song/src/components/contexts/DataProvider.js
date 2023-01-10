import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState();
  const [song, setSong] = useState();
  const [create, setCreate] = useState(false);
  const [add, setAdd] = useState(false);
  const [playlistId, setPlaylistId] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        const uid = user.uid;
        console.log(user);
        console.log("uid", uid);
      } else {
        setUser(null);
        navigate("/open");
        console.log("user is logged out");
      }
    });
    axios.get("http://localhost:3001/playlists").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
    axios.get("http://localhost:3001/songs").then((response) => {
      console.log(response.data);
      setSong(response.data);
    });
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        create,
        setCreate,
        add,
        setAdd,
        song,
        setSong,
        playlistId,
        setPlaylistId,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
