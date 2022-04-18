import { useEffect, useState } from "react";
import { retrieveUserId, createPlaylist, pushSongs } from "../../axios/axios.service";
import Button from '@mui/material/Button';
import { songUrisInterface } from "extype/extypes";
import { useSelector } from "react-redux";

const Form = ({ songUris }:songUrisInterface) => {
  const token = useSelector((state: any) => state.token.value);
  const [playlistId, setPlaylistId] = useState("");
  const [userId, setUserId] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {    
    const getUserId = () => {
      retrieveUserId(token)
        .then((response) => {
          setUserId(response.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const addSongs =  () => {
      pushSongs(playlistId, songUris, token)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (playlistId) {
      addSongs();
    }
    getUserId();
  }, [playlistId, songUris, token]);

  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (form.title.length > 10) {
      createPlaylist(userId, form.title, form.description, token)
        .then((response) => {
          setPlaylistId(response.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
      setForm({ title: "", description: "" });
      alert("Successfully Created Playlist");
    } else {
      alert("At least 10 words at Title Form");
    }
  };

return (
  <form onSubmit={handleSubmit}>
    <div className="judul">
      <div className="judul">
        <div className="judul">
          <label htmlFor="title" className="judul">
            Title
          </label>
          <input
            type="text"
            className="judul3"
            placeholder="Input Title"
            name="title"
            value={form.title}
            onChange={handleForm}
          />
        </div>
        <div className="keterangan">
          <label htmlFor="title" className="keterangan">
            Description
          </label>
          <input
            type="text"
            className="keterangan3"
            placeholder="Input Description"
            name="description"
            value={form.description}
            onChange={handleForm}
          />
        </div>
        <div>
          <div className="btn-3">
            <Button type="submit" variant="contained" color="success" >Create Playlist</Button>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
};

export default Form;