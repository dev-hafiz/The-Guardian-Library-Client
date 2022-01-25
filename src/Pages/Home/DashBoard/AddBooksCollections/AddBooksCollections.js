import { Box, Grid } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddBooksCollections.css';
import bookFrame from '../../../../Assets/images/bookWall1.jpg';

const AddBooksCollections = () => {

     const { register, handleSubmit , reset} = useForm();
     const onSubmit = data =>{
          
          
           fetch("http://localhost:5000/libraryBook", {
               method: "POST",
               headers: { "content-type": "application/json" },
               body: JSON.stringify(data),
               })
               .then((res) => res.json())
               .then(result =>{
                    if(result.insertedId){
                         alert('Your Order successfully')
                         reset()
                    }
               })
          
          };

     return (
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
          <img style={{width:'100%',position:'relative', top:50, right:-40}} src={bookFrame} alt="" />
          </Grid>
          <Grid item xs={12} md={8}>

          <Box className="product-form" >
              <form onSubmit={handleSubmit(onSubmit)}>
               <input  {...register("title",  { required: true })} placeholder="Book Title" />
               <input  {...register("time",  { required: true })} placeholder= "Time Ex. 07:00 PM - 08:00 PM" />
               <input   type="number" {...register("space",  { required: true })} placeholder="Write Space" />
               <input   type="number" {...register("Price",  { required: true })} placeholder="Price" />
               <input  {...register("img",  { required: true })} placeholder="Image url" />
               <input className="placebtn" type="submit"  value="Place Order"/>
               </form>
              </Box>
            
          </Grid>
        </Grid>
     );
};

export default AddBooksCollections;