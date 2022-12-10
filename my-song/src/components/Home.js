import styles from "./styles/Home.module.css";
import jazz from "./assets/jazz.jpeg";
import all from "./assets/all.jpeg";
import ed from "./assets/ed.jpeg";
import wh from "./assets/wh.jpeg";
import global from "./assets/global.jpeg";
import usa from "./assets/usa.jpeg";
import top50global from "./assets/50.jpeg";
import top50usa from "./assets/50usa.jpeg";
import viral50global from "./assets/viral50global.jpeg";
import viral50usa from "./assets/viral50usa.jpeg";
import babyface from "./assets/babyface.jpeg";
import faith from "./assets/faith.jpeg";
import tamia from "./assets/tamia.jpeg";
import emi from "./assets/emi.jpeg";
import i from "./assets/i.jpeg";
import love from "./assets/90s.jpeg";
import control from "./assets/controll.jpeg";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.buttons}>
          {/* Recently Played */}
          <div className={styles.button}>
            <h1 className={styles.text}>Recently played</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={jazz}></img>
                <div className={styles.exp}>Jazz in the Background</div>
                <p className={styles.expmini}>
                  Soft instrumental Jazz for all your aztivities
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={all}></img>
                <div className={styles.exp}>All Out 80s</div>
                <p className={styles.expmini}>
                  The biggest songs of the 1980s.
                </p>
              </div>
            </div>
          </div>
          {/* Made for Munkh-Uils */}
          <div className={styles.button}>
            <h1 className={styles.text}>Made for Munkh-Uils</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={ed}></img>
                <div className={styles.exp}>Daily Mix 1</div>
                <p className={styles.expmini}>
                  Ed Sheeran, David Guetta, Kygo and more
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={wh}></img>
                <div className={styles.exp}>Daily Mix 2</div>
                <p className={styles.expmini}>
                  Whitney Houston, Diana Ross, Cyndi Lauper and...
                </p>
              </div>
            </div>
          </div>
          {/* Featured Charts */}
          <div className={styles.button}>
            <h1 className={styles.text}>Featured Charts</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={global}></img>
                <div className={styles.exp}>Top Songs-Global</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={usa}></img>
                <div className={styles.exp}>Top Songs - USA</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={top50global}></img>
                <div className={styles.exp}>Top 50 - Global</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={top50usa}></img>
                <div className={styles.exp}>Top 50 - USA</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={viral50global}></img>
                <div className={styles.exp}>Viral 50 - Global</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={viral50usa}></img>
                <div className={styles.exp}>Viral 50 - USA</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
            </div>
          </div>
          {/* More like Whitney Houston */}
          <div className={styles.button}>
            <h1 className={styles.text}>More like Whitney Houston</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.artist} src={babyface}></img>
                <div className={styles.exp}>Babyface</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.artist} src={faith}></img>
                <div className={styles.exp}>Faith Evans</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.artist} src={tamia}></img>
                <div className={styles.exp}>Tamia</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.artist} src={emi}></img>
                <div className={styles.exp}>Eminem</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={i}></img>
                <div className={styles.exp}>I Love My '90s R&B</div>
                <p className={styles.expmini}>The most essential R&B songs from the 90s. Cove...</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={love}></img>
                <div className={styles.exp}>90s Love Songs</div>
                <p className={styles.expmini}>Tight Roll your jeans, break out the CK1, and set the...</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={control}></img>
                <div className={styles.exp}>Control: The Remixes</div>
                <p className={styles.expmini}>Janet Jackson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
