import styles from "./styles/Team.module.css";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
// import { Stars } from "./Stars";

export const Team = () => {
  //   const stars = Array(5).fill(0);
  //   for (let i = 0; i < props.too; i++) {
  //     stars[i] = 1;
  //   }

  const baseUrl = "https://dummyapi.io/data/v1/";
  const [data, setData] = useState(null);
  const [pos, setPos] = useState(0);

  const goRight = () => setPos((prev) => prev + 1);
  const goLeft = () => setPos((prev) => prev - 1);

  useEffect(() => {
    axios
      .get(baseUrl + "post", {
        headers: {
          "app-id": "63735986247171afa7542a77",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.home}>
          <h1 className={styles.instant}>
            Instant collaborations for remote teams
          </h1>
          <p className={styles.all}>
            All in one for your remote team chats, collaboration and track
            projects
          </p>
          <div className={styles.buttons}>
            <input className={styles.email} placeholder="Email" />
            <div className={styles.get}>Get early access</div>
          </div>
        </div>
      </div>
      <div className={styles.zai}></div>
      <Page2 />
      <div className={styles.zai}></div>
      <Page3 />
      <div className={styles.zai}></div>
      <Page4 />
      <div className={styles.zaii}></div>
      <Container>
        <div className={styles.container1}>
          <div className={styles.stars}>
            {/* {stars.map((item) => (
            <FaStar className={styles["star" + item]} />
          ))} */}
          </div>
          <div className={styles.textt}>
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className={styles.bruhh}>
            <div className={styles.profile}></div>
            <div className={styles.name}>Amy Klassen</div>
          </div>
        </div>
        <div className={styles.lera}>
          <Button onClick={goRight}>Right</Button>
          <Button onClick={goLeft}>Left</Button>
        </div>
      </Container>
    </div>
  );
};
