import { Container, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import topImg from '../../../src/Assets/images/library-banner.png';
import Calendar from '../../../src/Pages/Shared/Calendar/Calendar';
const StoreBookHeader = ({date, setDate}) => {
     return (
          <Container sx={{ paddingTop:'170px'}}>
          <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={5} sx={{display:'flex', alignItems:'center'}}>
               <Calendar date={date} setDate={setDate}></Calendar>
          </Grid>
          <Grid item xs={12} md={7}>
          <img style={{width:'100%'}} src={topImg} alt="" />

               <Typography variant="h6" sx={{width:'90%', marginTop:'20px', color:'#333333', marginLeft:'10px', textAlign:'justify'}}>
               All the world's a stage, and all the men and women merely players: they have their exits and their entrances; and one man in his time plays many parts, his acts being seven ages
               </Typography> 
          </Grid>
      </Grid>
    </Box>
          </Container>
     );
};

export default StoreBookHeader;