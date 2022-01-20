import { Alert, AlertTitle, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import BookingSlot from '../BookingSlot/BookingSlot';

const AvailableBooks = ({date}) => {

     const [bookSlots, setBookSlots] = useState([])
     const [bookedSuccess, setBookeSuccess] = useState(false)
     useEffect(()=>{
          fetch(`http://localhost:5000/libraryBook`)
          .then(res => res.json())
          .then(data => setBookSlots(data))
     },[])

     return (
          <Container sx={{marginTop:'120px'}}>
               <Typography variant='h2' sx={{fontFamily: 'Abril Fatface', color:'#333333'}}>
               Here Available Books
               </Typography>
               <Typography variant='h6' sx={{color:'#333333'}}>
               Selected Date : {date.toString()} 
               </Typography>
               <hr />
               {bookedSuccess && <Alert sx={{color:'#fff', background:'#333333'}} severity="success">
               <AlertTitle>Success</AlertTitle>
               Your Booked is successfull — <strong>Congrats</strong>
             </Alert>}

               <Box sx={{ flexGrow: 1, marginTop:'80px', marginBottom:'100px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                         bookSlots.map(bookslot=><BookingSlot
                              setBookeSuccess={setBookeSuccess}
                              date={date}
                              key={bookslot.id}
                              bookslot={bookslot}
                         />)
                    }
                    </Grid>
               </Box>
          </Container>
     );
};

export default AvailableBooks;