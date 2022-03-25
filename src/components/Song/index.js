const playlistdetail = ({ image, title, album, url, artists }) => {
    return (
      <div className="App">
        <img className="img-1" src={image} height="200" width="200"/>
        <h2>{title}</h2>
        <h3>{album}</h3>
        <p>{artists}</p>
        <button className="btn-1"><a href={url}>Select</a></button>
      </div>
    );
  };
  
  export default playlistdetail;