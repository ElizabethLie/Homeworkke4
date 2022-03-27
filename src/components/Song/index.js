const playlistdetail = ({ image, title, album, url, artists }) => {
    return (
      <div className="App">
          <img className="img-1" src={image}/>
          <h3>{title}</h3>
          <h4>{album}</h4>
          <p>{artists}</p>
          <button className="btn-1"><a href={url}>Select</a></button>
      </div>
    );
  };
  
  export default playlistdetail;