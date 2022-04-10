const playlistdetail = ({ image, title, album, artist, selectState, isSelected, uri}) => {
  return (
    <div className="App">
        <img className="img-1" src={image} alt="Album"/>
        <h3>{title}</h3>
        <h4>{album}</h4>
        <p>{artist}</p>
        <button className="btn-1" onClick={() => {selectState(uri);}}>{isSelected ? "Deselect" : "Select"}</button>
    </div>
  );
};

export default playlistdetail;