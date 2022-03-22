import './App.css';
import data from './Data1.js';

function App() {
  return (
    <div className="App">
      <div>
        <img className="img-1" src={data.album.images[0].url} width="200" height="200" />
      </div>
      <div>
        <h2>{data.name}</h2>
        <h3>{data.album.name}</h3>
        <p>{data.artists[0].name}</p>
	<button class="btn-1"><a href={data.album.artists[0].external_urls.spotify}>Select</a></button>
      </div>
    </div>
  );
}

export default App;
