import styles from "../styles/SearchOpen.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormControl, Button, Row, Card } from "react-bootstrap";
import { GrPlayFill } from "react-icons/gr";

const CLIENT_ID = "bacd91762e97436a91a8aafbd2efa67f";
const CLIENT_SECRET = "2b78c907a98e4713810424fee3bdc44d";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  async function search() {
    console.log("Search for " + searchInput);

    const searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log("Artist ID is" + artistID);

    const returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });
  }
  console.log(albums);
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.container3}>
          <div className={styles.searchbutton}>
            <FormControl
              className={styles.search}
              placeholder="Search For Artist"
              type="input"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  search();
                }
              }}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <Button className={styles.button} onClick={search}>
              Search
            </Button>
          </div>
          <Row className={styles.row}>
            {albums.map((album, i) => {
              console.log(album);
              return (
                <Card className={styles.song}>
                  <Card.Img src={album.images[0].url} />
                  <div className={styles.play}>
                    <GrPlayFill className={styles.icon} />
                  </div>
                  <div>
                    <Card.Title className={styles.exp}>{album.name}</Card.Title>
                  </div>
                </Card>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Search;
