import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import './OfficeArea.css';
import officeImg from '../../../../src/Assets/images/libraryPhoto.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OfficeArea = () => {

     useEffect(()=>{
          Aos.init({duration:5000});
     },[])

     return (
          <Container  style={{paddingTop:'80px'}}>
               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
               <Grid data-aos="fade-right" item xs={12} md={5}>
               <Box>
               <Typography variant='h2' style={{fontFamily: 'Abril Fatface', color:'#333333', marginTop:'16px'}} >
               Get Involved
               </Typography>
               <Typography  variant="subtitle1" sx={{ lineHeight:'30px', fontSize:'18px', marginTop:'14px', textAlign:'justify'}}>
               As gateways to knowledge and culture, libraries play a fundamental role in society. The resources and services they offer create opportunities for learning, support literacy and education, and help shape the new ideas and perspectives that are central to a creative and innovative society.
               </Typography>
               </Box>
               <Box sx={{display:'flex', justifyContent:'flex-end', textAlign:'right', marginTop:'52px', marginRight:'-20px'}}>
                    <Box>
                         <button className='donateBtn'>DONATE TO SUPPORT <i className="fas fa-arrow-right right-icon"></i> </button> <br />
                         <button className='getBtn'>GET YOUR LIBRARY CARD TODAY <i className="fas fa-arrow-right right-icon"></i></button>
                    </Box>
               </Box>
               
               </Grid>
               <Grid data-aos="fade-left" item xs={12} md={7}>
               <img width='100%' src={officeImg} alt="" />
               </Grid>
               
               </Grid>
          </Container>
     );
};

export default OfficeArea;