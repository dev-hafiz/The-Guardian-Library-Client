import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import topImg from '../../../../src/Assets/images/library-banner.png';
import { Button, Typography } from '@mui/material';
import './TopBanner.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const TopBanner = () => {

     useEffect(()=>{
          Aos.init({duration:2500});
     },[])

     return (
          <Box  sx={{background:'#EAE1D0',paddingTop:'170px', paddingBottom:'100px'}}>
           <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>
               <Grid data-aos="fade-right" item xs={12} md={5} sx={{display:'flex', alignItems:'center'}}>
                    <Box sx={{marginLeft:'30px'}}>
                    <Typography variant='h1' sx={{fontFamily: 'Abril Fatface', color:'#333333', fontSize:'90px', marginBottom:'30px'}}>
                         OKSH<span style={{color:'#CC8D52'}}>i</span> <br />
                         ENGLISH
                    </Typography>
                    <Link to="/storebook">
                    <button className="Mu-btn" sx={{display:'flex', justifyContent:'center'}}>Join Today <i style={{marginLeft:'8px'}} className="fas fa-arrow-right"></i></button>
                    </Link>
                    </Box>
               </Grid>
               <Grid item data-aos="fade-left"  xs={12} md={7} >
                   <img
                    style={{width:'100%'}}
                    src={topImg} alt="" />

                    <Typography variant="h6" sx={{width:'90%', marginTop:'20px', color:'#333333', marginLeft:'10px'}}>
                    All the world's a stage, and all the men and women merely players: they have their exits and their entrances; and one man in his time plays many parts, his acts being seven ages
                    </Typography>  
               </Grid>
               
               </Grid>
          </Box>
          </Box>
     );
};

export default TopBanner;