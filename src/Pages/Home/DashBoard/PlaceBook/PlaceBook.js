import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PlaceBook = ({date}) => {
     const {user, token} = useAuth()
     const [placedBooks, setPlacedBooks] = useState([])

     useEffect(()=>{
     const uri = `http://localhost:5000/booked?email=${user.email}&date=${date}`
     fetch(uri,{
       headers:{
        'authorization' : `Bearer ${token}`,
       }
     })
     .then( res => res.json())
     .then( data => setPlacedBooks(data))
     },[date])

     return (
          <Box>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>
                 Your Placed Books {placedBooks.length}
            </Typography>
            <hr style={{marginBottom:"40px"}} />

            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell>Book Cover</TableCell>
            <TableCell>Book Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Cancle</TableCell>
            <TableCell align="center">Place</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {placedBooks.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.learnerName}
              </TableCell>
              <TableCell><img style={{width:'40px'}} src={row.img} alt="" /></TableCell>
              <TableCell>{row.BookName}</TableCell>
              <TableCell>{row.Price}</TableCell>
              <TableCell><Button variant='text' sx={{color:'#171717'}}> <i className="fas fa-trash"></i></Button></TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Box>
     );
};

export default PlaceBook;