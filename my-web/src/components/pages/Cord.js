import styles from "../styles/Cord.module.css";
import { Container } from "react-bootstrap";

const Cord = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image}></img>
      <div className={styles.blaa}>
        <div className={styles.data}>{props.text}</div>
        <div className={styles.our}>
          It’s 2020, but women designers still face lower pay and less
          opportunity. What gives?
        </div>
        <div className={styles.bruhh}>
          <img className={styles.pro} src={props.owner.picture}></img>
          <div className={styles.name}>{props.owner.firstName}</div>
          <div className={styles.lname}>{props.owner.lastName}</div>
          <div className={styles.i}>|</div>
          <div className={styles.date}>{props.publishDate}</div>
        </div>
      </div>
    </div>
  );
};
export default Cord;
