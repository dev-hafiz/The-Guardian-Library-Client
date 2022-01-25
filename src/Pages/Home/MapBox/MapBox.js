import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import { Box } from '@mui/system';
import './MapBox.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFmaXp1cnJhaGFtYW4iLCJhIjoiY2t4YTlzMXh5MDhnZjJvcXExY3M2eGhxdCJ9.kWOWkCqkx4KvwLF9f8sLpw';

const MapBox = () => {

     useEffect(()=>{
          Aos.init({duration:2000});
     },[])

     useEffect(()=>{
          const map = new mapboxgl.Map({
               container: 'map',
               style: 'mapbox://styles/mapbox/streets-v11',
               center: [91.880722, 24.886436],
               zoom: 13
               });
                
               map.addControl(
               new MapboxDirections({
               accessToken: mapboxgl.accessToken
               }),
               'top-left'
               );
     },[])

     return (
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:'120px', marginBottom:'80px'}}>
          <Grid data-aos="fade-right" className='mapDirection' item xs={12} md={6}>
         

         <div id="map"></div>

         
          </Grid>
          <Grid data-aos="fade-left" item xs={12}  md={6} >
          <Box sx={{marginLeft:'20px', marginTop:'10px'}}>
          <Typography variant='h4' sx={{textAlign:'center', paddingBottom:'10px',fontFamily: 'Abril Fatface', textTransform:'uppercase'}}>
               Love to hear from you
          </Typography>
          <Box className='contactDash'></Box>
         <Box sx={{marginTop:'30px', marginBottom:'30px',textAlign:'center'}}>
         <form>
          <span className='contactSpan'><i className="fas fa-envelope-open contactIcon"></i>
          <input required className='ContactInput' type="email" name="" placeholder='Enter Your Email' id="" />
          </span><br />
          <span className='contactSpan'>
          <i className="fas fa-comment-alt contactIcon"></i>
          <textarea required type="text" className='ContactInput' rows='10' name="" placeholder=" What is your massage" id="" />
          </span><br />
          
           <button className='postBtn' type='submit'><i class="fas fa-paper-plane"></i> Post</button>
          
          </form>
         </Box>

          </Box>
          </Grid>

        </Grid>
     );
};

export default MapBox;