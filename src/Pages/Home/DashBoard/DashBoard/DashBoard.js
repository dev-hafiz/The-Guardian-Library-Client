import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import Calendar from '../../../Shared/Calendar/Calendar';
import PlaceBook from '../PlaceBook/PlaceBook';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const drawerWidth = 200;

function DashBoard(props) {
     const {userLogOut} = useAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [date, setDate] =  React.useState(new Date());

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar  />
     
      <NavLink style={{textDecoration:"none"}}  to="/storebook"> 
      <Button sx={{color:'#171717', px:4, my:5}} variant='text'><i className="fas fa-book-reader" style={{marginRight:'8px', fontSize:'20px'}}></i>  Store Books</Button> 
      </NavLink>
      <Button onClick={userLogOut} sx={{color:'#171717', px:4,marginTop:'-44px' }} variant='text'><i className="fas fa-sign-out-alt" style={{marginRight:'8px', fontSize:'20px'}}></i> Log Out</Button> 
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
          <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
          <Calendar
               date={date}
               setDate={setDate}
          />
          </Grid>
          <Grid item xs={12} md={8}>
          <PlaceBook
               date={date}
          />
          </Grid>
          </Grid>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
