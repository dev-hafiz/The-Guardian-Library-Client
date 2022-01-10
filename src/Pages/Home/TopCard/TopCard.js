import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import './TopCard.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import card1 from '../../../../src/Assets/images/topBarImages/library1.jpg';
import card2 from '../../../../src/Assets/images/topBarImages/library2.jpg';
import card3 from '../../../../src/Assets/images/topBarImages/library3.jpg';
import card4 from '../../../../src/Assets/images/topBarImages/library4.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';



const TopCard = () => {

     useEffect(()=>{
          Aos.init({duration:2500});
     },[])

     return (
          <Container>
          <Box data-aos="fade-up" className="Project_Wrapper" sx={{ flexGrow: 1, marginTop:'-120px' }}>
               <Grid container spacing={{ xs: 8, md: 3 }} sx={{display:'flex',  alignItems: 'flex-end'}}>
               <Grid item xs={6} md={3}>
                    <img width="100%" src={card1} alt="" />
               </Grid>
               <Grid item xs={6} md={3}>
               <Box className="Singel_Project">
               <img width="100%" src={card2} alt="" />
               <Box className="Project_Info">
               <Box className="Project_meata">
               <Box className="Project_aLink">
                    <Link className="myLink" to="/storebook">Reading Books</Link>
                    <h2>Studies serve for delight, for ornaments, and for ability</h2>
               </Box>
               <Link className="ProjecticonBtn" to="/storebook">Learn more <i className="fas fa-arrow-right"></i></Link>
               </Box>
               </Box>
               </Box>
               </Grid>
               <Grid item xs={6} md={3}>
               <Box className="Singel_Project">
               <img width="100%" src={card3} alt="" />
               <Box className="Project_Info">
               <Box className="Project_meata">
               <Box className="Project_aLink">
                    <Link className="myLink" to="/storebook">Reading Books</Link>
                    <h2>Self thought book which help to growth your strength</h2>
               </Box>
               <Link className="ProjecticonBtn" to="/storebook">Learn more <i className="fas fa-arrow-right"></i></Link>
               </Box>
               </Box>
               </Box>
               </Grid>
               <Grid item xs={6} md={3}>
               <Box  className="Singel_Project">
               <img width="100%" src={card4} alt="" />
               <Box className="Project_Info">
               <Box className="Project_meata">
               <Box className="Project_aLink">
                    <Link className="myLink" to="/storebook">Redaing Books</Link>
                    <h2>Make sure your focus and still hard work untill  you success</h2>
               </Box>
               <Link className="ProjecticonBtn" to="/storebook">Learn more <i className="fas fa-arrow-right"></i></Link>
               </Box>
               </Box>
               </Box> 
               </Grid>
               </Grid>
          </Box>
          </Container>
     );
};

export default TopCard;