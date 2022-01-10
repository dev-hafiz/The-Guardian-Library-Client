import { CardMedia, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookingModal from '../../../src/StoreBook/BookingModal/BookingModal';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BookingSlot = ({bookslot, date}) => {
     const {title, time, space, Price, img} = bookslot || {}
     const [openBooking, setOpenBooking] = React.useState(false);
     const handleOpenBooking = () => setOpenBooking(true);
     const handleCloseBooking = () => setOpenBooking(false);

     useEffect(()=>{
          Aos.init({duration:2500});
     },[])


     return (
       <>
          <Grid data-aos="fade-left"  item xs={12} sm={4} md={4}>
          
          <Card sx={{ minWidth: 275 }}>
               <CardContent sx={{display:'flex', justifyContent:'space-between'}}>
               <Box>
               <CardMedia
               component="img"
               style={{width:'120px', height:'100px'}}
               image={img}
               alt="Paella dish"
               />  
               </Box>
               <Box>
               <Typography variant="subtitle1"  sx={{color:'#CF8F51', fontWeight:'bold'}}>
                    {title}
               </Typography> 
               <Typography variant="subtitle1">
                  Time: {time}
               </Typography> 
               <Typography variant="subtitle1">
                  Space:{space}
               </Typography> 
               <Typography variant="subtitle1" sx={{color:'#CF8F51', fontWeight:'bold'}}>
               Price: $ {Price}
               </Typography> 
               <CardActions>
               <Button onClick={handleOpenBooking}  size="small" sx={{display:'flex', justifyContent:'center', alignItems:'center', color:'#ED9800'}}> Add To cart <i className="fab fa-2x fa-shopify" style={{marginLeft:'10px', marginTop:'-6px'}}></i></Button>
               </CardActions>
               </Box>
               </CardContent>
               
          </Card>   
       
          </Grid>
          <BookingModal
          date={date}
          bookslot={bookslot}
          openBooking={openBooking}
          handleCloseBooking={handleCloseBooking}
          />
       </>
     );
};

export default BookingSlot;