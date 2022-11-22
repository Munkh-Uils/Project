import styles from "./styles/Footer.module.css";
import { Container, Button } from "react-bootstrap";
import data from "./footerData.json";

export const Footer = () => {
  return (
    <div className={styles.bottombutton}>
      <Container>
        <div className={styles.flexContainer}>
          <div>
            {/* {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))} */}
            <div className={styles.logo} />
            {data.links.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            {/* {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))} */}
            <p style={{ marginBottom: "4vh" }}>Use cases</p>
            {data.cases.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            {/* {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))} */}
            <p style={{ marginBottom: "4vh" }}>Explore</p>
            {data.explore.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            {/* {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))} */}
            <p style={{ marginBottom: "4vh" }}>Resources</p>
            {data.resources.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            <h4>Subscribe to our newsetter</h4>
            <Button
              styles={{
                width: "100%",
                borderRaduis: 0,
                marginTop: 24,
                textAlign: "left",
              }}
              size="lg"
              variant="light"
            >
              Email
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
