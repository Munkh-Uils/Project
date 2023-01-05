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
import life from "./assets/life.jpeg";
import vibes from "./assets/vibes.jpeg";
import sad from "./assets/sad.jpeg";
import comfort from "./assets/comfort.jpeg";
import booster from "./assets/booster.jpeg";
import ultimate from "./assets/ultimate.jpeg";
import alone from "./assets/alone.jpeg";
import edshee from "./assets/edshee.jpeg";
import guilty from "./assets/guilty.jpeg";
import { GrPlayFill } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./config";
import axios from "axios";
export const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signup");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        const uid = user.uid;
        console.log(user);
        console.log("uid", uid);
      } else {
        setUser(null);
        navigate("/open");
        console.log("user is logged out");
      }
    });
  }, []);

  const createPlaylist = () => {
    axios
      .post("http://localhost:3001" + "/playlists", {
        title: "Uils's ...",
        description: "String",
        creatorId: user.uid,
        isPrivate: true,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.buttons}>
          {user && <p>{user.email}</p>}
          {/* Recently Played */}
          <div className={styles.button}>
            <h1 className={styles.text}>Recently played</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={jazz}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Jazz in the Background</div>
                <p className={styles.expmini}>
                  Soft instrumental Jazz for all your aztivities
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={all}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
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
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Daily Mix 1</div>
                <p className={styles.expmini}>
                  Ed Sheeran, David Guetta, Kygo and more
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={wh}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
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
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Top Songs-Global</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={usa}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Top Songs - USA</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={top50global}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Top 50 - Global</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={top50usa}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Top 50 - USA</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={viral50global}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Viral 50 - Global</div>
                <p className={styles.expmini}>
                  Your weakly update of the most played tracks right...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={viral50usa}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
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
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Anne-Marie</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song2}>
                <img className={styles.artist} src={moira}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Moira Dela Torre</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song3}>
                <img className={styles.artist} src={john}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>John Legend</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song4}>
                <img className={styles.artist} src={cam}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Camila Cabello</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song5}>
                <img className={styles.artist} src={ales}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Alessia Cara</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song6}>
                <img className={styles.artist} src={luka}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Lukas Graham</div>
                <p className={styles.expmini}>Artist</p>
              </div>
              <div className={styles.song7}>
                <img className={styles.artist} src={anita}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
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
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Best of Rock: 1984</div>
                <p className={styles.expmini}>
                  Big rock tracks from 1984. Cover: Bruce Springsteen
                </p>
              </div>
              <div className={styles.song2}>
                <img className={styles.image} src={best85}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Best of Rock: 1985</div>
                <p className={styles.expmini}>
                  Big rock tracks from 1985. Cover: Jim Kerr of Simple...
                </p>
              </div>
              <div className={styles.song3}>
                <img className={styles.image} src={soft}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>80s Soft Rock</div>
                <p className={styles.expmini}>
                  The best soft rock from the 1980s.
                </p>
              </div>
              <div className={styles.song4}>
                <img className={styles.image} src={best80}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Best of Rock: 1980</div>
                <p className={styles.expmini}>
                  Big rock tracks from 1980. Cover: AC/DC.
                </p>
              </div>
              <div className={styles.song5}>
                <img className={styles.image} src={happy80}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Happy 80s</div>
                <p className={styles.expmini}>
                  The best feel-good songs of the 1980s.
                </p>
              </div>
              <div className={styles.song6}>
                <img className={styles.image} src={deep80}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Deep Dive: 80s Pop</div>
                <p className={styles.expmini}>
                  Digging deep into the history of 80s pop.
                </p>
              </div>
              <div className={styles.song7}>
                <img className={styles.image} src={best87}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Best of Rock: 1987</div>
                <p className={styles.expmini}>Big rock tracks from 1987.</p>
              </div>
            </div>
          </div>
          {/* Chill */}
          <div className={styles.button}>
            <h1 className={styles.text}>Chill</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={softpo}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Soft Pop Hits</div>
                <p className={styles.expmini}>
                  Listen to easy songs from your favorite artists! Cove...
                </p>
              </div>
              <div className={styles.song2}>
                <img className={styles.image} src={chill}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Chill Hits</div>
                <p className={styles.expmini}>
                  Kick back to the best new and recent chill hits.
                </p>
              </div>
              <div className={styles.song3}>
                <img className={styles.image} src={zone}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Comfort Zone</div>
                <p className={styles.expmini}>
                  Chilled songs that you are familiar with - no surprises!
                </p>
              </div>
              <div className={styles.song4}>
                <img className={styles.image} src={aco}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Acoustic Hits: Oldies ...</div>
                <p className={styles.expmini}>
                  Instant classics from over the years loaded into one...
                </p>
              </div>
              <div className={styles.song5}>
                <img className={styles.image} src={you}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>You & Me</div>
                <p className={styles.expmini}>
                  It's just us—and this awesome alt soundtrack.
                </p>
              </div>
              <div className={styles.song6}>
                <img className={styles.image} src={jazz}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Jazz in the Background</div>
                <p className={styles.expmini}>
                  Soft instrumental Jazz for all your activities.
                </p>
              </div>
              <div className={styles.song7}>
                <img className={styles.image} src={lofi}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>lofi beats</div>
                <p className={styles.expmini}>
                  The chillest beats to help you relax, study, code, an...
                </p>
              </div>
            </div>
          </div>
          {/* Sing-along */}
          <div className={styles.button}>
            <h1 className={styles.text}>Sing-along</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={shower}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Songs to Sing in the S...</div>
                <p className={styles.expmini}>
                  Make your shower more uplifting by singing along ...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={indie}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Sing-Along Indie Hits</div>
                <p className={styles.expmini}>
                  Get those vocal chords working with these Indie...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={karital}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Karaoke Italiano</div>
                <p className={styles.expmini}>
                  Solo canzoni italiane da cantare a squarciagola!
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={claold}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Classic Oldies</div>
                <p className={styles.expmini}>
                  Classic hits from the 50s and 60s.
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={karesp}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Karaoke en Español</div>
                <p className={styles.expmini}>
                  Saca la estrella que llevas dentro.
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={guilty}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Guilty Pleasures</div>
                <p className={styles.expmini}>
                  You say guilty, we say non stop bangers!
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={pade}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Party Deluxe</div>
                <p className={styles.expmini}>
                  Hits zum Tanzen und Mitsingen - von damals bi...
                </p>
              </div>
            </div>
          </div>
          {/* Mood */}
          <div className={styles.button}>
            <h1 className={styles.text}>Mood</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={life}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Life Sucks</div>
                <p className={styles.expmini}>
                  Having a bad day? We know how it feels!
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={vibes}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Good Vibes</div>
                <p className={styles.expmini}>
                  Set it off with these epic anthems. Only good vibes...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={sad}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>sad hour</div>
                <p className={styles.expmini}>
                  Somehow heartbreak feels good in a place like this...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={comfort}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Comfort Zone</div>
                <p className={styles.expmini}>
                  Chilled songs that you are familiar with - no surprises!
                </p>
              </div>
            </div>
          </div>
          {/* Try something else */}
          <div className={styles.button}>
            <h1 className={styles.text}>Try something else</h1>
            <div className={styles.songs}>
              <div className={styles.song}>
                <img className={styles.image} src={booster}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Mood Booster</div>
                <p className={styles.expmini}>
                  Get happy with today's dose of feel-good songs!
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={ultimate}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>The Ultimate Hit Mix</div>
                <p className={styles.expmini}>
                  Mixing the decades: 1990s, 2000s, 2010s and 2020s.
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={alone}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>Alone Again</div>
                <p className={styles.expmini}>
                  Being alone (again) can be tough, but these songs wi...
                </p>
              </div>
              <div className={styles.song}>
                <img className={styles.image} src={edshee}></img>
                <div className={styles.play}>
                  <GrPlayFill className={styles.icon} />
                </div>
                <div className={styles.exp}>This is Ed Sheeran</div>
                <p className={styles.expmini}>
                  All his biggest hits, in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
