import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllBooks = () => {

     
     const [placedBooks, setPlacedBooks] = useState([])
     console.log(placedBooks);

     useEffect(()=>{
     fetch(`http://localhost:5000/libraryBook`)
     .then(res => res.json())
     .then(data => setPlacedBooks(data))
     },[])

     const handleDelete = id => {
      
      const proceed = window.confirm("Are you sure to delete this one")
      if(proceed){
           const url = `http://localhost:5000/libraryBook/${id}`
      fetch(url,{
           method:'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
           if(data.deletedCount> 0){
                alert('delete successfully')
                const remainingplacedBooks = placedBooks.filter(order => order._id !== id)
                setPlacedBooks(remainingplacedBooks)
           }
      })
      }
 }
     return (
          <Box>
          <Typography variant='h5' sx={{fontWeight:'bold'}}>
               Manage Total placedBooks {placedBooks.length}
          </Typography>
          <hr style={{marginBottom:"40px"}} />

          <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
         
          <TableCell>Book Cover</TableCell>
          <TableCell>Book Title</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Cancle</TableCell>
          <TableCell>Update</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {placedBooks.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
           
            <TableCell><img style={{width:'40px'}} src={row.img} alt="" /></TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.Price}</TableCell>
            <TableCell><Button
            onClick={()=> handleDelete(placedBooks[0]._id)}
             variant='text' sx={{color:'#171717'}}> <i className="fas fa-trash"></i></Button></TableCell>
            <TableCell><Button variant='text' sx={{color:'#171717'}}> <i className="fas fa-pen-alt"></i></Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
        </Box>
     );
};

export default ManageAllBooks;