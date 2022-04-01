import Button from "./button";
const playlistdetail = ({ image, title, album, artists }) => {
  return (
    <div className="App">
        <img className="img-1" src={image}/>
        <h3>{title}</h3>
        <h4>{album}</h4>
        <p>{artists}</p>
        <Button/>
    </div>
  );
};

export default playlistdetail;