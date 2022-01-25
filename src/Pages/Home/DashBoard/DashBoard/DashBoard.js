import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const drawerWidth = 230;

function DashBoard(props) {
     const {userLogOut, isAdmin} = useAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar  />
     
      <NavLink style={{textDecoration:"none"}}  to="/"> 
      <Button sx={{color:'#171717', px:4, my:5}} variant='text'><i className="fas fa-home" style={{marginRight:'8px', fontSize:'20px'}}></i>  Home</Button> 
      </NavLink>
      <NavLink style={{textDecoration:"none"}}  to="/storebook"> 
      <Button sx={{color:'#171717', px:4, my:5, marginTop:'-44px'}} variant='text'><i className="fas fa-book-reader" style={{marginRight:'8px', fontSize:'20px'}}></i>  Store Books</Button> 
      </NavLink>
      <Button onClick={userLogOut} sx={{color:'#171717', px:4,marginTop:'-60px' }} variant='text'><i className="fas fa-sign-out-alt" style={{marginRight:'8px', fontSize:'20px'}}></i> Log Out</Button> 
      
      
      <NavLink style={{textDecoration:"none"}}  to="/dashboard"> 
      <Button sx={{color:'#171717', px:4, my:5, marginTop:'-20px'}} variant='text'><i className="fas fa-clone" style={{marginRight:'8px', fontSize:'20px' }}></i>  Dash Board</Button> 
      </NavLink>
      
      {isAdmin && <Box>
        <NavLink style={{textDecoration:"none"}}  to="/dashboard/makeAdmin"> 
      <Button sx={{color:'#171717', px:4, my:5,marginTop:'-38px'}} variant='text'><i className="fas fa-user-shield" style={{marginRight:'8px', fontSize:'20px' }}></i>  Make Admin</Button> 
      </NavLink>
        <NavLink style={{textDecoration:"none"}}  to="/dashboard/addBooksCollections"> 
      <Button sx={{color:'#171717', px:4, my:5,marginTop:'-38px'}} variant='text'><i className="fas fa-book-medical" style={{marginRight:'8px', fontSize:'20px' }}></i>  Add Books</Button> 
      </NavLink>
        <NavLink style={{textDecoration:"none"}}  to="/dashboard/manageAllBooks"> 
      <Button sx={{color:'#171717', px:4, my:5,marginTop:'-38px'}} variant='text'><i className="fas fa-user-edit" style={{marginRight:'8px', fontSize:'20px' }}></i> Manage Books</Button> 
      </NavLink>
      <NavLink style={{textDecoration:"none"}}  to="/dashboard/addTeacher"> 
      <Button sx={{color:'#171717', px:4, my:5,marginTop:'-38px'}} variant='text'><i className="fas fa-user-graduate" style={{marginRight:'8px', fontSize:'20px' }}></i>  Add Teacher</Button> 
      </NavLink>
      </Box>}
     
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
        
        <Outlet/>
          
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
