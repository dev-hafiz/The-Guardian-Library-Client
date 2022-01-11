import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const TopBar = () => {
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
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'Abril Fatface', color:'#333333'}}>
                Okshi's Learner
              </Typography>
              <Link  to="/"> 
              <Button sx={{color:'#171717'}}>Home</Button> 
              </Link>
              <Link  to="/storebook"> 
              <Button sx={{color:'#171717'}}>Store Books</Button> 
              </Link>
              <Link  to="/Login"> 
              <Button sx={{color:'#171717'}}>Login</Button> 
              </Link>
              
              
            </Toolbar>
          </AppBar>
        </Box>
     );
};

export default TopBar;