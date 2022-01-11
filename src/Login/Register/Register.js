import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginImg from "../../../src/Assets/images/loginPic.png";

const Register = () => {
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
  //Form handler
  const handleLoginSubmit = (e) => {
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
            Register Please With Your Willing
          </Typography>

          <form onSubmit={handleLoginSubmit}>
            <TextField
              id="standard-basic"
              sx={{ width: "90%", mt: 3, mb: 1 }}
              label="Your Name"
              variant="standard"
              onChange={handleOnchange}
              type="text"
              name="text"
              required
            />
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
            <TextField
              id="standard-basic"
              sx={{ width: "90%", mt: 3, mb: 1 }}
              label="Re-Type Password"
              variant="standard"
              onChange={handleOnchange}
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
          </form>

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
