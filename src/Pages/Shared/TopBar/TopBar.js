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
                Okshi English
              </Typography>
              <Button color="inherit" sx={{color:'#171717'}}>Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
     );
};

export default TopBar;