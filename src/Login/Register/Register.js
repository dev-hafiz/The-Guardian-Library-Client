import { Alert, AlertTitle, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LoginImg from "../../../src/Assets/images/loginPic.png";
import useAuth from "../../../src/hooks/useAuth";

const Register = () => {

  const {registerUser, isLoading, error, user} = useAuth()
  //State for store input data
  const [loginData, setLoginData] = useState({});

  const location = useLocation()
  const navigate = useNavigate()
  // console.log(loginData)
  // onBlur Handler
  const handleOnBlur = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[filed] = value;
    console.log(newLoginData)
    setLoginData(newLoginData);
  };

  
  //Form handler
  const handleLoginSubmit = (e) => {
    if(loginData.password !== loginData.password2){
      alert('Your Password did not match')
      return;
    }

    registerUser(loginData.email, loginData.password, loginData.name, location, navigate )
    e.preventDefault();
  };
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent:'center', textAlign:'center' }}>
        <Box sx={{ paddingLeft: "30px" }}>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Abril Fatface", color: "#333333" }}
          >
            Register Please With Your Willing
          </Typography>

          {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
              id="standard-basic"
              sx={{ width: "90%", mt: 3, mb: 1 }}
              label="Your Name"
              variant="standard"
              onBlur={handleOnBlur}
              type="text"
              name="name"
              required
            />
            <TextField
              id="standard-basic"
              sx={{ width: "90%", mt: 3, mb: 1 }}
              label="Your Email"
              variant="standard"
              onBlur={handleOnBlur}
              type="email"
              name="email"
              required
            />
            <TextField
              id="standard-basic"
              sx={{ width: "90%", mt: 3, mb: 1 }}
              label="Your Password"
              variant="standard"
              onBlur={handleOnBlur}
              type="password"
              name="password"
              required
            />
            <TextField
              id="standard-basic"
              sx={{ width: "90%", mt: 3, mb: 1 }}
              label="Re-Type Password"
              variant="standard"
              onBlur={handleOnBlur}
              type="password"
              name="password2"
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
              Please Register
            </Button>
          </form>}

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

          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button variant="text" sx={{ color: "#333", mt: 3 }}>
              Already have an account ? please login
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

export default Register;
