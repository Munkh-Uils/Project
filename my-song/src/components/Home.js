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
import anne from "./assets/anne.jpeg";
import moira from "./assets/moira.jpeg";
import john from "./assets/john.jpeg";
import cam from "./assets/cam.jpeg";
import ales from "./assets/ales.jpeg";
import luka from "./assets/luka.jpeg";
import anita from "./assets/anita.jpeg";
import best from "./assets/best.jpeg";
import best85 from "./assets/1985.jpeg";
import soft from "./assets/80s.jpeg";
import best80 from "./assets/best80.jpeg";
import happy80 from "./assets/happy80.jpeg";
import deep80 from "./assets/deep80.jpeg";
import best87 from "./assets/best87.jpeg";
import softpo from "./assets/softpop.jpeg";
import chill from "./assets/chill.jpeg";
import zone from "./assets/zone.jpeg";
import aco from "./assets/aco.jpeg";
import you from "./assets/you.jpeg";
import softrock from "./assets/softrock.jpeg";
import lofi from "./assets/lofi.jpeg";
import shower from "./assets/shower.jpeg";
import indie from "./assets/indie.jpeg";
import karital from "./assets/karital.jpeg";
import claold from "./assets/claold.jpeg";
import karesp from "./assets/karesp.jpeg";
import karhi from "./assets/karhi.jpeg";
import pade from "./assets/pade.jpeg";

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
          {/* More like Ed Sheeran */}
          <div className={styles.button}>
            <div className={styles.texts}>
              <h1 className={styles.text}>More like Ed Sheeran</h1>
              <h1 className={styles.show}>SHOW ALL</h1>aksdfhjalskdj
            </div>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.artist} src={anne}></img>
                <div className={styles.exp}>Anne-Marie</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.artist} src={moira}></img>
                <div className={styles.exp}>Moira Dela Torre</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.artist} src={john}></img>
                <div className={styles.exp}>John Legend</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.artist} src={cam}></img>
                <div className={styles.exp}>Camila Cabello</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.artist} src={ales}></img>
                <div className={styles.exp}>Alessia Cara</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.artist} src={luka}></img>
                <div className={styles.exp}>Lukas Graham</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.artist} src={anita}></img>
                <div className={styles.exp}>Anita Baker</div>
                <p className={styles.expmini}>Artist</p>
              </div>
            </div>
          </div>
          {/* More like All Out 80s */}
          <div className={styles.button}>
            <h1 className={styles.text}>More like All Out 80s</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={best}></img>
                <div className={styles.exp}>Anne-Marie</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={best85}></img>
                <div className={styles.exp}>Moira Dela Torre</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={soft}></img>
                <div className={styles.exp}>John Legend</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={best80}></img>
                <div className={styles.exp}>Camila Cabello</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={happy80}></img>
                <div className={styles.exp}>Alessia Cara</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={deep80}></img>
                <div className={styles.exp}>Lukas Graham</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={best87}></img>
                <div className={styles.exp}>Anita Baker</div>
                <p className={styles.expmini}>Artist</p>
              </div>
            </div>
          </div>
          {/* Chill */}
          <div className={styles.button}>
            <h1 className={styles.text}>Chill</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={softpo}></img>
                <div className={styles.exp}>Anne-Marie</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={chill}></img>
                <div className={styles.exp}>Moira Dela Torre</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={zone}></img>
                <div className={styles.exp}>John Legend</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={aco}></img>
                <div className={styles.exp}>Camila Cabello</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={you}></img>
                <div className={styles.exp}>Alessia Cara</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={softrock}></img>
                <div className={styles.exp}>Lukas Graham</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={lofi}></img>
                <div className={styles.exp}>Anita Baker</div>
                <p className={styles.expmini}>Artist</p>
              </div>
            </div>
          </div>
          {/* Sing-along */}
          <div className={styles.button}>
            <h1 className={styles.text}>Sing-along</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={shower}></img>
                <div className={styles.exp}>Anne-Marie</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={indie}></img>
                <div className={styles.exp}>Moira Dela Torre</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={karital}></img>
                <div className={styles.exp}>John Legend</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={claold}></img>
                <div className={styles.exp}>Camila Cabello</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={karesp}></img>
                <div className={styles.exp}>Alessia Cara</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={karhi}></img>
                <div className={styles.exp}>Lukas Graham</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={pade}></img>
                <div className={styles.exp}>Anita Baker</div>
                <p className={styles.expmini}>Artist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
