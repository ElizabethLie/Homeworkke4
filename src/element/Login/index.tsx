import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../modulredux/tokenSlice";
import url from "../../spotifydetail/spotify";
import Button from '@mui/material/Button';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken(getToken()));
  }, [dispatch]);

  const getToken = () => {
    const queryString = new URL(window.location.href.replace("#", "?"))
      .searchParams;
    const accessToken = queryString.get("access_token");

    return accessToken;
  };

  return (
    <div>
      <Button className="login" variant="contained" color="success" href={url}>Login</Button>
    </div>
  );
};

export default Login;