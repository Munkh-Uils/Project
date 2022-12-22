import styles from "./styles/Footer.module.css";
import data from "./footerData.json";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div>
          {data.company.map((props) => (
            <p>{props.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
