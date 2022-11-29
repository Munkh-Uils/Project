import styles from "./styles/Team.module.css";
import { ThemeContext } from "../App";
import { useState, useEffect, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Footer } from "./Footer";
import axios from "axios";
import { Container, Button, Spinner } from "react-bootstrap";

export const Team = () => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);

  const baseUrl = "https://dummyapi.io/data/v1/";
  const [data, setData] = useState(null);
  const [pos, setPos] = useState(0);

  const goRight = () => {
    if (pos < 40) {
      setPos((prev) => prev + 1);
    }
  };
  const goLeft = () => {
    if (pos != 0) {
      setPos((prev) => prev - 1);
    }
  };

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
      <Page3 />
      <Page4 />
      <div className={styles.sectionTwo}>
        <div style={{transition: "500ms", }}
          className={
            theme.pallate.dark
              ? `${styles.ContainerBottom} ${styles.dark}`
              : styles.ContainerBottom
          }
        >
          <Container>
            <h1 className={styles.what}>
              <span style={{transition: "500ms", }}
                className={
                  theme.pallate.dark
                    ? `${styles.titleSecond} ${styles.textWhite}`
                    : `${styles.titleSecond} ${styles.textDefault}`
                }
              >
                What people say about us
              </span>
            </h1>
            <div className={styles.cards}>cd
              <div
                style={{
                  transform: `translateX(${-10 * pos}%)`,
                  transition: "300ms",
                  display: "flex",
                  // overflow:"hidden",
                }}
              >
                {!data && <Spinner />}
                {data && data.data.map((item) => <Item {...item} key={item} />)}
              </div>
            </div>
            <div style={{ marginBottom: 100 }}>
              <Button onClick={goLeft}>Left</Button>
              <Button onClick={goRight}>Right</Button>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const Item = (props) => {
  console.log(props);
  const stars = Array(5).fill(0);
  for (let i = 0; i < props.too; i++) {
    stars[i] = 1;
  }
  return (
    <div className={styles.container1}>
      <div className={styles.stars}>
        {stars.map((item) => (
          <FaStar className={styles["star" + item]} />
        ))}
      </div>
      <div className={styles.textt}>
        Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </div>
      <div className={styles.bruhh}>
        <div className={styles.profile} src={props.owner.picture}></div>
        <div className={styles.name}>Amy Klassen</div>
      </div>
    </div>
  );
};
