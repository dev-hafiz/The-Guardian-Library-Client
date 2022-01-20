import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = ({service}) => {
     const {title, img, des} = service;
     return (
          <Grid item xs={12} sm={6} md={4}>
               <Card>
      <CardContent sx={{ color:'#000'}}>

      <CardMedia
          component="img"
          style={{width:'50px', margin:'0 auto', paddingTop:'20px'}}
          image={img}
          alt="Paella dish"
          />
        <Typography variant="h5" sx={{ fontWeight:'bold', textAlign:'center', paddingTop:'20px' }} color="inherits" gutterBottom>
        {title}
        </Typography>
        
        <Typography sx={{ color:'#000', mb:4}} color="text.secondary">
          {des}
        </Typography>
        
      </CardContent>
    
    </Card>  
          </Grid>
     );
};

export default Service;