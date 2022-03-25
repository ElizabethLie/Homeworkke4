import './App.css';
import data from "./Data1";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Song
        title={data.name}
        image={data.album.images[0].url}
        album={data.album.name}
        artists={data.artists[0].name}
        url={data.album.artists[0].external_urls.spotify}
      />
    </div>
  );
}

export default App;