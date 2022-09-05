import { Alert, AlertTitle, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink , useLocation, useNavigate} from "react-router-dom";
import LoginImg from "../../../src/Assets/images/loginPic.png";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginWithGoogle, loginWithOwnEmaiAndPass, isLoading, error, user } = useAuth();

  //Location & navigate
  const location = useLocation()
  const navigate = useNavigate()
  //State for store input data
  const [loginData, setLoginData] = useState({});
  // console.log(loginData)
  // Onchange Handler
  const handleOnchange = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[filed] = value;
    setLoginData(newLoginData);
  };

  //handle google login
  const handleGoogleLogin = () => {
    loginWithGoogle(location , navigate);
  };
  
  //Form handler
  const handleLoginSubmit = (e) => {

    loginWithOwnEmaiAndPass(loginData.email, loginData.password, location, navigate)
    e.preventDefault();
  };
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ paddingLeft: "30px" }}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Abril Fatface", color: "#333333" }}
          >
            Login Please With Your Willing
          </Typography>

          <form onSubmit={handleLoginSubmit}>
            <TextField
              id="standard-basic"
              sx={{ width: "90%", mt: 3, mb: 1 }}
              label="Your Email"
              variant="standard"
              onChange={handleOnchange}
              type="email"
              name="email"
              required
            />
            <TextField
              id="standard-basic"
              sx={{ width: "90%", mt: 3, mb: 1 }}
              label="Your Password"
              variant="standard"
              onChange={handleOnchange}
              type="password"
              name="password"
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="inherit"
              sx={{
                width: "90%",
                mt: 5,
                background: "#D1C4BB",
                color: "#171717",
                fontWeight: "bold",
              }}
            >
              Please Login
            </Button>
          </form>

          <Button
            variant="contained"
            color="inherit"
            onClick={handleGoogleLogin}
            sx={{
              width: "90%",
              mt: 5,
              background: "#D1C4BB",
              color: "#171717",
              fontWeight: "bold",
            }}
          >
            <i
              style={{ marginRight: "2px" }}
              className="fab fa-2x fa-google"
            ></i>
            oogle Login
          </Button>

          <Box sx={{mt:5}}>
          {isLoading && <CircularProgress/> }
          {user.email && <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Okay! You Are Authenticate User — <strong>Congrats</strong>
        </Alert>}
        {error && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error} <strong>check it out!</strong>
        </Alert>}
          </Box>

          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button variant="text" sx={{ color: "#333", mt: 3 }}>
              Don't have an account ? please register
            </Button>
          </NavLink>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <img width="100%" src={LoginImg} alt="" />
      </Grid>
    </Grid>
  );
};

export default Login;
