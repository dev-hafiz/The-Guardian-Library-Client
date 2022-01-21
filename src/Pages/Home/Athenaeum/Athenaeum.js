import React, { useEffect } from 'react';
import './Athenaeum.css';
import library from '../../../Assets/images/Carft.jpg';
import { Box, Grid, Typography } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Athenaeum = () => {

     useEffect(()=>{
          Aos.init({duration:2000});
     },[])

     return (
          <Box>
               <Grid  container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               <Grid data-aos="fade-right" className='libraryLeftBox' sx={{background:'#E2A58F'}} item xs={12} md={6}>
               <img width='90%' height='100%' src={library} alt="" />
               </Grid>
               <Grid data-aos="fade-left" item xs={12} md={6}>
               <Box sx={{background:'#eee', marginLeft:'-91px',padding:' 0 20px 80px 100px'}}>
                    <Typography variant='h2' style={{fontFamily: 'Abril Fatface', color:'#333333', paddingTop:'100px'}}>
                    Ancient Athenaeum
                    </Typography>
                    <Typography variant='subtitle1' sx={{textAlign: 'justify', mt:2}}>
                    The world's oldest known library was founded sometime in the 7th century B.C. for the “royal contemplation” of the Assyrian ruler Ashurbanipal. Located in Nineveh in modern day Iraq, the site included a trove of some 30,000 cuneiform tablets organized according to subject matter.
                    </Typography>
               </Box>
               <Box>
               <Typography variant='h4' style={{color:'#333333', paddingTop:'100px', paddingRight:'20px', fontWeight:'bold', textTransform:'uppercase'}}>
               Bilingual Storytime
               </Typography>
               <hr />

               <Box>
               <Typography variant='h5' style={{color:'#333333', paddingTop:'70px', paddingRight:'20px', fontWeight:'bold'}}>
               READING LITERATURE WHEN YOU ARE SEATING FREE
               </Typography>
               <Typography>
               If you try to become a Millionaire! But was a running proverb that, You don't makes a million of dollars, if you don't makes a million sacrifices!
               </Typography>
               </Box>

               <Box>
               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               <Grid style={{display:'flex', alignItems:'center', justifyContent:'space-between'}} item xs={6} md={6}>
               <Box>
               <i className="fas ancientIcon fa-book-open"></i>  
               </Box>
               <Box sx={{mt:5}}>
                    <Typography variant='subtitle1' sx={{fontWeight:'bold'}}>
                    TEACH SELF OWN'S THOUGHT
                    </Typography>
                    <Typography variant='subtitle2' sx={{fontWeight:'500'}} >
                    Present work are saying you! Which type of future are build
                    </Typography>
               </Box>
               </Grid>
               <Grid style={{display:'flex', alignItems:'center', justifyContent:'space-between'}} item xs={6} md={6}>
               <Box>
               <i className="fas fa-user-graduate ancientIcon"></i>  
               </Box>
               <Box sx={{mt:5}}>
                    <Typography variant='subtitle1' sx={{fontWeight:'bold'}}>
                     BEING EDUCATE PERSON
                    </Typography>
                    <Typography variant='subtitle2' sx={{fontWeight:'500'}} >
                    Present work are saying you! Which type of future are build
                    </Typography>
               </Box>
               </Grid>
               <Grid style={{display:'flex', alignItems:'center', justifyContent:'space-between'}} item xs={6} md={6}>
               <Box>
               <i className="fas fa-calendar-alt ancientIcon"></i>  
               </Box>
               <Box sx={{mt:5}}>
                    <Typography variant='subtitle1' sx={{fontWeight:'bold'}}>
                     FUTURE DEPEND ON PRESENT
                    </Typography>
                    <Typography variant='subtitle2' sx={{fontWeight:'500'}} >
                    Present work are saying you! Which type of future are build
                    </Typography>
               </Box>
               </Grid>
               <Grid style={{display:'flex', alignItems:'center', justifyContent:'space-between'}} item xs={6} md={6}>
               <Box>
               <i className="fas fa-thumbtack ancientIcon"></i>  
               </Box>
               <Box sx={{mt:5}}>
                    <Typography variant='subtitle1' sx={{fontWeight:'bold'}}>
                     MAKE STUDY AND USE IT
                    </Typography>
                    <Typography variant='subtitle2' sx={{fontWeight:'500'}} >
                    Present work are saying you! Which type of future are build
                    </Typography>
               </Box>
               </Grid>


               </Grid>  
               </Box>

               </Box>
               </Grid>
               </Grid>
          </Box>
     );
};

export default Athenaeum;