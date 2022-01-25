import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const TopBar = () => {

  const {userLogOut , user} = useAuth()

     return (
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar sx={{background: '#fff'}}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
               
              </IconButton>
             
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'Abril Fatface'}}>
              <NavLink style={{textDecoration:'none', color:'#333333'}} to="/">The Guardian</NavLink>
              </Typography>
             

              {user.email && <NavLink style={{textDecoration:"none"}}  to="/dashboard"> 
              <Button sx={{color:'#171717'}}>DashBoard</Button> 
              </NavLink> }

              <NavLink style={{textDecoration:"none"}}  to="/"> 
              <Button sx={{color:'#171717'}}>Home</Button> 
              </NavLink>
              <NavLink style={{textDecoration:"none"}}  to="/storebook"> 
              <Button sx={{color:'#171717'}}>Store Books</Button> 
              </NavLink>
              <NavLink style={{textDecoration:"none"}}  to="/contact"> 
              <Button sx={{color:'#171717'}}>Contact US</Button> 
              </NavLink>
              { !user.email ? <NavLink style={{textDecoration:"none"}}  to="/Login"> 
              <Button sx={{color:'#171717'}}>Login</Button> 
              </NavLink>
              :
              <Button onClick={userLogOut} sx={{color:'#171717'}}>Log Out</Button>} 
              
              
            </Toolbar>
          </AppBar>
        </Box>
     );
};

export default TopBar;