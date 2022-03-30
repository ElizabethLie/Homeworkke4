import './App.css';
import Song from "./components/Song";
import axios from "axios";
import { useEffect, useState } from "react";
import url from "./spotifydetail/dataspotify";


function App() {
  const [token, setToken] = useState("");
  const [searchSong, setSearchSong] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    const queryString = new URL(window.location.href.replace("#", "?"))
      .searchParams;
    const accessToken = queryString.get("access_token");
    setToken(accessToken);
  }, []);

  const getSong = async () => {
    await axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchSong}&type=track&access_token=${token}`
      )
      .then((response) => {
        setdata(response.data.tracks.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="PlayMusic">
      <div className="PlayMusicMenu">
        <h2 className="PlayMusicName">
           Playlist
        </h2>
        <a href={url} className="login">
          Login
        </a>
      </div>
      <div class="Searching">
        <div class="SearchDetail">
          <div class="SearchMenu">
            <input
              type="search"
              class="SearchValue"
              placeholder="Input Song"
              aria-label="Search"
              onChange={(e) => setSearchSong(e.target.value)}
            />
            <button class="btn-2" type="button" onClick={getSong}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="App">
      {data.map((song) => {
        const { id, name, artists, album } = song;
        return (
          <Song
            key={id}
            title={name}
            image={album.images[0]?.url}
            album={album.name}
            artists={artists[0]?.name}
            url={album.artists[0]?.external_urls.spotify}
          />
          );
        })}
      </div>
    </div>
  );
}

export default App;