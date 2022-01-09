import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../../Home/Services/Service/Service';



const Services = () => {

     const [services, SetServices] = useState([])

     useEffect( ()=>{
          fetch('/services.json')
          .then(res => res.json())
          .then(data => SetServices(data))
     },[])

     return (
          <Box sx={{ flexGrow: 1, marginTop:'100px', marginBottom: '100px' }}>
          <Container>
          <Box sx={{width: '400px', marginBottom: '50px'}}>
          <Typography variant='h2' style={{fontFamily: 'Abril Fatface', color:'#333333'}} >
               Top Focuses Features
          </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
            {
               services.map(service => <Service
               key={service.id}
               service={service}
               ></Service>)
            }
          </Grid>
          </Container>
        </Box>
     );
};

export default Services;