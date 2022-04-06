import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from './modulredux/tokenSlice';
import Song from "./components/Song";
import url from "./spotifydetail/spotify";


function App() {
  //const [token, setToken] = useState("");
  const [searchSong, setSearchSong] = useState("");
  const [data, setdata] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [combineSongs, setCombineSongs] = useState([]);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [accToken, setAccToken] = useState('');

  useEffect(() => {
    const queryString = new URL(window.location.href.replace("#", "?"))
      .searchParams;
    const accessToken = queryString.get("access_token");
    setAccToken(accessToken);
    if (accessToken !== null) {
      setAccToken(accessToken);

      const setUserProfile = async () => {
        try {
          const requestOptions = {
            headers: {
              'Authorization': 'Bearer ' + accessToken,
              'Content-Type': 'application/json',
            },
          };
          console.log(requestOptions);

          const response = await fetch(`https://api.spotify.com/v1/me`, requestOptions).then(data => data.json());
          console.log(response);
        } catch(err) {
          alert(err)
        }
      }
      dispatch(setToken(accessToken));
      setUserProfile();
    }
  }, [dispatch]);

  useEffect(() => {
    const handleCombineTracks = data.map((song) => ({
      ...song,
      isSelected: selectedSongs.find((data) => data === song.uri),
    }));
    setCombineSongs(handleCombineTracks);
    console.log(handleCombineTracks);
  }, [data, selectedSongs]);

  const getSong = async () => {
    await axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchSong}&type=track&access_token=${accToken}`
      )
      .then((response) => {
        setdata(response.data.tracks.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelect = (uri) => {
    const selected = selectedSongs.find((song) => song === uri);
    selected
      ? setSelectedSongs(selectedSongs.filter((song) => song !== uri))
      : setSelectedSongs([...selectedSongs, uri]);
  };

  return (
    <div class="PCreate">
      <h1 class="title">Create Playlist</h1>
      <form action="#" id="form">
        <label for="title">Title</label>
        <br />
        <input placeholder="Title" type="text" name="title" id="title" />
        <br /><br />
        <label for="desctitle">Description</label>
        <br />
        <textarea
          placeholder="Description"
          name="desctitle"
          id="desctitle"
        ></textarea>
        <br /><br />
        <input class="Tombol1" type="submit" value="Create Playlist" />
      </form>
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
        {combineSongs.map((song) => {
          const { name, artists, album, uri, isSelected } = song;
          return (
            <Song
              key={uri}
              title={name}
              image={album.images[0]?.url}
              album={album.name}
              artists={artists[0]?.name}
              url={album.artists[0]?.external_urls.spotify}
              uri={uri}
              selectState={handleSelect}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
}

//export
export default App;