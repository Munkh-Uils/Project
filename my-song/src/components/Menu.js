import styles from "./styles/Menu.module.css";
import spotify from "./assets/spotify.png";
import likeds from "./assets/likeds.webp";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { MdLocalLibrary } from "react-icons/md";
import { BsPlusSquareFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.spotify} src={spotify}></img>
      </Link>
      {/* <p>{data && data.name}</p> */}
      <div className={styles.page}>
        <Link to="/" className={styles.link}>
          {location.pathname === "/" && "/open" ? (
            <div className={styles.home}>
              <AiFillHome className={styles.iconswitch} />
              <div className={styles.textswitch}>Home</div>
            </div>
          ) : (
            <div className={styles.home}>
              <AiOutlineHome className={styles.icon} />
              <div className={styles.text}>Home</div>
            </div>
          )}
        </Link>
        <Link to="/search" className={styles.link}>
          {location.pathname === "/search" ? (
            <div className={styles.home}>
              <RiSearchFill className={styles.iconswitch} />
              <div className={styles.textswitch}>Search</div>
            </div>
          ) : (
            <div className={styles.home}>
              <RiSearchLine className={styles.icon} />
              <div className={styles.text}>Search</div>
            </div>
          )}
        </Link>
        <Link to="yourlibrary" className={styles.link}>
          {location.pathname === "/yourlibrary" ? (
            <div className={styles.home}>
              <MdLocalLibrary className={styles.iconswitch} />
              <div className={styles.textswitch}>Your Library</div>
            </div>
          ) : (
            <div className={styles.home}>
              <MdOutlineLocalLibrary className={styles.icon} />
              <div className={styles.text}>Your Library</div>
            </div>
          )}
        </Link>
        <Link to="createplaylist" className={styles.link}>
          <div className={styles.create}>
            <BsPlusSquareFill className={styles.icon} />
            <div className={styles.text}>Create Playlist</div>
          </div>
        </Link>
        <Link to="likedsongs" className={styles.link}>
          {location.pathname === "/likedsongs" ? (
            <div className={styles.home}>
              <img className={styles.liked} src={likeds}></img>
              <div className={styles.textswitch}>Liked Songs</div>
            </div>
          ) : (
            <div className={styles.home}>
              <img className={styles.liked} src={likeds}></img>
              <div className={styles.text}>Liked Songs</div>
            </div>
          )}
        </Link>
      </div>
      <div className={styles.dash}></div>
      <div className={styles.myplaylists}>
        <div className={styles.myplaylist}>
          <Link to="myplaylist1" className={styles.link}>
            <div className={styles.playlist}>My Playlist #1</div>
          </Link>
          <Link to="myplaylist2" className={styles.link}>
            <div className={styles.playlist}>My Playlist #2</div>
          </Link>
          <Link to="myplaylist3" className={styles.link}>
            <div className={styles.playlist}>My Playlist #3</div>
          </Link>
          <Link to="myplaylist4" className={styles.link}>
            <div className={styles.playlist}>My Playlist #4</div>
          </Link>
          <Link to="myplaylist#5" className={styles.link}>
            <div className={styles.playlist}>My Playlist #5</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
