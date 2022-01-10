import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import teacherImg from '../../../../src/Assets/images/HarryTeacher.png';
import teacherBg from '../../../../src/Assets/images/teacherBG.png';
import {  Typography } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

const talkBG  = {
     background: `url(${teacherBg})`,
     backgroundPosition: 'center center',
     backgroundRepeat:'no-repeat',
     backgroundColor: 'rgba(62, 61, 61, 0.8)',
     backgroundBlendMode: 'darken, luminosity',
     marginTop:'190px',
     paddingTop:'30px',
     
     width:'100%'
     
}

const TeacherTalk = () => {

    useEffect(()=>{
        Aos.init({duration:1000});
    },[])

    const [services, SetServices] = useState([])

     return (
          <Box style={talkBG} sx={{ flexGrow: 1, marginTop:'100px', marginBottom:'100px' }}>
          <Grid container  spacing={2}>
            
            <Grid item xs={12} md={5} sx={{display:'flex', justifyContent:'center'}}>
              <img
               style={{width:'100%', marginTop:'-120px', paddingTop:'20px'}}
              src={teacherImg} alt="" />
            </Grid>
            <Grid item xs={12} md={7} sx={{
                 display:'flex',
                 justifyContent:'flex-start',
                 alignItems:'center',
                 textAlign:'center',
                 
                 }}>
              <Box sx={{width:'80%', padding:'20px'}}>
               <Box data-aos="fade-left" sx={{textAlign:'start'}}>
               <Typography variant='h4'sx={{color:'#fff', mb:2, fontWeight:'bold'}}>
               Talk With Teacher
               </Typography>
               <Typography variant='h6' sx={{color:'#fff', mb:3, fontWeight:"300"}}>
               Time is the coin of your life. It is the only coin you have, and only you can determine how it will be spent. Be careful lest you let other people spend it for you
               </Typography>
               <butto className="Mu-btn" sx={{display:'flex', justifyContent:'center'}}>Skills Talk <i style={{marginLeft:'8px'}} className="fas fa-arrow-right"></i></butto>
                 </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
     );
};

export default TeacherTalk;