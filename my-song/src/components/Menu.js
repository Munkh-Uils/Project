import styles from "./styles/Menu.module.css";
import spotify from "./assets/spotify.png";
import likeds from "./assets/likeds.webp";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { BsPlusSquareFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.spotify} src={spotify}></img>
      </Link>
      {/* <p>{data && data.name}</p> */}
      <div className={styles.page}>
        <Link to="/" className={styles.link}>
          <div className={styles.home}>
            <AiOutlineHome className={styles.icon} />
            <div className={styles.text}>Home</div>
          </div>
        </Link>
        <Link to="/search" className={styles.link}>
          <div className={styles.home}>
            <RiSearchLine className={styles.icon} />
            <div className={styles.text}>Search</div>
          </div>
        </Link>
        <Link to="yourlibrary" className={styles.link}>
          <div className={styles.home}>
            <MdOutlineLocalLibrary className={styles.icon} />
            <div className={styles.text}>Your Library</div>
          </div>
        </Link>
        <Link to="createplaylist" className={styles.link}>
          <div className={styles.create}>
            <BsPlusSquareFill className={styles.icon} />
            <div className={styles.text}>Create Playlist</div>
          </div>
        </Link>
        <Link to="likedsongs" className={styles.link}>
          <div className={styles.home}>
            <img className={styles.liked} src={likeds}></img>
            <div className={styles.text}>Liked Songs</div>
          </div>
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
