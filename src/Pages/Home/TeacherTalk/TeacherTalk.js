import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import teacherImg from '../../../../src/Assets/images/Teacher.png';
import teacherBg from '../../../../src/Assets/images/teacherBG.png';
import { Button, Typography } from '@mui/material';

const talkBG  = {
     background: `url(${teacherBg})`,
     backgroundPosition: 'center center',
     backgroundRepeat:'no-repeat',
     backgroundColor: 'rgba(62, 61, 61, 0.7)',
     backgroundBlendMode: 'darken, luminosity',
     marginTop:'180px',
     width:'100%'
     
}

const TeacherTalk = () => {
     return (
          <Box style={talkBG} sx={{ flexGrow: 1, marginTop:'100px', marginBottom:'100px' }}>
          <Grid container  spacing={2}>
            
            <Grid item xs={12} md={5} sx={{display:'flex', justifyContent:'center'}}>
              <img
               style={{width:'100%', marginTop:'-120px'}}
              src={teacherImg} alt="" />
            </Grid>
            <Grid item xs={12} md={7} sx={{
                 display:'flex',
                 justifyContent:'flex-start',
                 alignItems:'center',
                 textAlign:'center',
                 
                 }}>
              <Box sx={{width:'80%', padding:'20px'}}>
               <Box sx={{textAlign:'start'}}>
               <Typography variant='h4'sx={{color:'#fff', mb:2, fontWeight:'bold'}}>
               Best Industry Leaders
               </Typography>
               <Typography variant='h6' sx={{color:'#fff', mb:2, fontWeight:"300"}}>
               Coluta nobis est eligendi optio cumque nihil impedit quo minusd quod maxime placeat facere possimus, omnis voluptas assumenda est Donec velit neque, auctor sit amet aliquam vel
               </Typography>
               <Button  variant="contained"  sx={{background:'#333333', color:'#fff'}}>Skills Talk</Button>
                 </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
     );
};

export default TeacherTalk;