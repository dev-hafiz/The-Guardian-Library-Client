import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import footerBg from '../../../../src/Assets/images/footerBg.jpg';
import b1 from '../../../../src/Assets/images/AncientBook/book1.jpg';
import b2 from '../../../../src/Assets/images/AncientBook/book2.jpg';
import b3 from '../../../../src/Assets/images/AncientBook/book3.jpg';
import b4 from '../../../../src/Assets/images/AncientBook/book4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const footerBanner  = {
     background: `url(${footerBg})`,
     backgroundPosition: 'center center',
     backgroundRepeat:'no-repeat',
     backgroundColor: 'rgba(218, 141, 60, 0.9)',
     backgroundBlendMode: 'darken, luminosity',
     marginTop:'190px',
     paddingTop:'30px',
     width:'100%'
     
}

const PreFooter = () => {

     useEffect(()=>{
          Aos.init({duration:3000});
      },[])

      
     return (
          <Box style={footerBanner}>
              <Container sx={{mt:8, paddingBottom:'60px'}}>
                   <Typography variant='h2' style={{color:'#333333', fontWeight:'300', fontFamily: 'Abril Fatface'}}>
                   Collect Those Books ! 
                   </Typography>
                   <Box>
                   <Grid style={{width:'40%', margin:'0 auto', paddingTop:'70px' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid data-aos="flip-right"  item xs={6} md={6}>
                    <img width='100%' style={{textAlign:'center'}} height='100%' src={b1} alt="" />
                    </Grid>
                    <Grid data-aos="flip-left" item xs={6} md={6}>
                    <img  width='100%' height='100%' src={b2} alt="" />
                    </Grid>
                    <Grid data-aos="fade-left" item xs={6} md={6}>
                    <img width='100%' height='100%' src={b3} alt="" />
                    </Grid>
                    <Grid  data-aos="fade-right" item xs={6} md={6}>
                    <img width='100%' height='100%' src={b4} alt="" />
                    </Grid>
                    </Grid>  
                   </Box>
              </Container>
          </Box>
     );
};

export default PreFooter;