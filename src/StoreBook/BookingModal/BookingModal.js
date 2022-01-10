import React, { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import TextField from '@mui/material/TextField';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({openBooking, handleCloseBooking, bookslot, date}) => {

     const {title, time, space, Price, img} = bookslot || {}


     //Submit Form Handle
     const handleBookingSubmit = e =>{
          alert('Information submited')
          handleCloseBooking()
          e.preventDefault()
     }

     return (
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleCloseBooking}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style} style={{borderRadius:'20px', border:'none'}}>
          <CardMedia
          component="img"
          style={{width:'70px', height:'90px', border:'1px solid #ED9800', margin:'0 auto'}}
          image={img}
          alt="Paella dish"
          /> 
            <Typography id="transition-modal-title" variant="h4" component="h2">
              ${Price}
            </Typography>
           
            <form onSubmit={handleBookingSubmit}>
            <TextField id="standard-basic"
             disabled
             sx={{width:'90%', mt:3, mb:1}} 
             variant="standard" 
             defaultValue={time}
             />

            <TextField id="standard-basic"
             sx={{width:'90%', mt:3, mb:1}} 
             variant="standard" 
             defaultValue='Your Name'
             />

            <TextField id="standard-basic"
             sx={{width:'90%', mt:3, mb:1}} 
             variant="standard" 
             defaultValue='Phone Number'
             />

            <TextField id="standard-basic"
             sx={{width:'90%', mt:3, mb:1}} 
             variant="standard" 
             defaultValue='Your Email'
             />

            <TextField id="standard-basic"
             disabled
             sx={{width:'90%', mt:3, mb:1}} 
             variant="standard" 
             defaultValue={date.toDateString()}
             />

             <Button type="submit" variant="outlined" sx={{mt:3, mb:3, color:'#ED9800', border:'1px solid #ED9800'}}>Please Booking</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
     );
};

export default BookingModal;