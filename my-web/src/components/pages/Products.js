import { useState, useEffect } from "react";
import { Container, Spinner, Button } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import Cord from "./Cord";
import axios from "axios";
import styles from "../styles/Products.module.css";

const Products = () => {
  const { theme, changeDarkTheme } = useContext(ThemeContext);

  const baseUrl = "https://dummyapi.io/data/v1/";
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(9);

  const nextPage = () => {
    setData(null);
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setData(null);
    setPage((prev) => {
      if (prev > 0) return prev - 1;
    });
  };
  useEffect(() => {
    axios
      .get(baseUrl + `post?limit=${limit}&page=${page}`, {
        headers: {
          "app-id": "63735986247171afa7542a77",
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit]);

  return (
    <div
      className={theme.pallate.dark ? `${styles.co} ${styles.dark}` : styles.co}
    >
      <Container>
        <div className={styles.container}>
          <div className={styles.blogs}>
            <h1
              className={
                theme.pallate.dark
                  ? `${styles.blog} ${styles.textWhite}`
                  : `${styles.blog} ${styles.textDefault}`
              }
            >
              Blog post
            </h1>
            <p
              className={
                theme.pallate.dark
                  ? `${styles.our} ${styles.textWhite}`
                  : styles.our
              }
            >
              Our latest updates and blogs about managing your team
            </p>
          </div>
        </div>
        <div
          className={styles.cord}
        >
          {!data && <Spinner />}
          {data && data.data.map((item) => <Cord {...item} />)}
        </div>
        <div className={styles.button}>
          <Button className={styles.prev} onClick={prevPage}>
            prev
          </Button>
          <Button className={styles.next} onClick={nextPage}>
            next
            <MdOutlineKeyboardArrowRight className={styles.arrow} />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Products;
