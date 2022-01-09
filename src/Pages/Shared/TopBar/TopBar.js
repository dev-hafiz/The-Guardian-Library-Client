import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => {
     return (
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{background: '#fff'}}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
               
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1, color:'#171717', fontWeight:'900' }}>
                edWard english
              </Typography>
              <Button color="inherit" sx={{color:'#171717'}}>Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
     );
};

export default TopBar;