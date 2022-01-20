import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './BottomFooter.css';

const BottomFooter = () => {
     return (
          <Box style={{background:'#5B5B5B', padding:'12px 22px', color:'#f8f8f8'}}>
               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' style={{fontFamily:'sans-serif', marginTop:'8px', color:'#A0A0A0', borderBottom:'1px solid #f8f8f8'}}>
                         NEWS UPDATE ! If you connect you our team with long term. You will become a pro user
                    </Typography>
                    
                    <Typography variant='subtitle2' style={{color:'#A0A0A0', fontFamily:'sans-serif', marginTop:'6px'}}>
                    Copyright 2022 © HAFIZUR RAHMAN
                    </Typography>
               </Grid>
               <Grid style={{display:'flex', justifyContent:'flex-end'}} item xs={12} md={6}>
               <Box>
                    <span><i className="fab card-icon fa-cc-visa"></i></span>
                    <span><i className="fab card-icon fa-cc-paypal"></i></span>
                    <span><i className="fab card-icon fa-cc-stripe"></i></span>
                    <span><i className="fab card-icon fa-cc-mastercard"></i></span>
                    <span><i className="fab card-icon fa-cc-amazon-pay"></i></span>
                    <span><i className="fab card-icon fa-cc-discover"></i></span>
               </Box>
               </Grid>
               </Grid>
          </Box>
     );
};

export default BottomFooter;