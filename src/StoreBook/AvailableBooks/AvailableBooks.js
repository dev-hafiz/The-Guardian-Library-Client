import { Container, Typography } from '@mui/material';
import React from 'react';

const AvailableBooks = ({date}) => {
     return (
          <Container sx={{marginTop:'120px'}}>
               <Typography variant='h2' sx={{fontFamily: 'Abril Fatface', color:'#333333'}}>
               Here Available Books
               </Typography>
               <Typography variant='h6' sx={{color:'#333333'}}>
               Selected Date : {date.toString()} 
               </Typography>
               <hr />
          </Container>
     );
};

export default AvailableBooks;