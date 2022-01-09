import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';
import topImg from '../../../../src/Assets/images/library-banner.png';
import { Button, Typography } from '@mui/material';
import './TopBanner.css';

const TopBanner = () => {
     return (
          <Box sx={{background:'#EAE1D0', marginTop:'-20px', paddingBottom:'100px'}}>
           <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>
               <Grid item xs={12} md={5}>
                    <Box sx={{marginLeft:'100px', marginTop:'260px'}}>
                    <Typography variant='h1' sx={{fontFamily: 'Abril Fatface', color:'#333333', fontSize:'90px', marginBottom:'30px'}}>
                         OKSH<span style={{color:'#171717'}}>i</span> <br />
                         ENGLISH
                    </Typography>
                    <butto className="Mu-btn" sx={{display:'flex', justifyContent:'center'}}>Join Today <i style={{marginLeft:'8px'}} className="fas fa-arrow-right"></i></butto>
                    </Box>
               </Grid>
               <Grid item  xs={12} md={7} >
                   <img
                    style={{width:'100%', paddingTop:'170px'}}
                    src={topImg} alt="" />

                    <Typography variant="h6" sx={{width:'90%', marginTop:'20px', color:'#333333'}}>
                    My Class is a flexible English course that you can tailor to your needs. Our highly qualified teachers will guide you to achieve desired your's goals
                    </Typography>  
               </Grid>
               
               </Grid>
          </Box>
          </Box>
     );
};

export default TopBanner;