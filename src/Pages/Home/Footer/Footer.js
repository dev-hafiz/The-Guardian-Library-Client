import React, { useEffect } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

     useEffect(()=>{
          Aos.init({duration:2000});
     },[])

     return (
          <Box data-aos="fade-bottom"  style={{padding:'100px 30px 50px 30px', background:'#777777', color:'#f8f8f8', marginTop:'120px'}}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
               <Grid item xs={12} md={3}>
                <Typography variant='h6' sx={{mt:3}}>
                     ABOUT
                     <Box className='dashBar'></Box>
                </Typography>
                <Typography variant='subtitle1' style={{fontFamily:'sans-serif', marginTop:'20px', marginBottom:'10px'}}>
                    This is the English books services and selling platform. Throughout this site you can order a book and take the proper suggetions how you can read the best way! 
                     <Box></Box>
                </Typography>
                <Box>
                     <Link to="#">
                     <i className="fab fa-facebook social-icon"></i> 
                     </Link>
                     <Link to="#">
                     <i className="fab fa-linkedin-in social-icon"></i> 
                     </Link>
                     <Link to="#">
                     <i className="fab fa-twitter social-icon"></i> 
                     </Link>
                     <Link to="#">
                     <i className="fab fa-reddit-alien social-icon"></i> 
                     </Link>
                </Box>
               </Grid>
               <Grid item xs={12} md={3}>
               <Typography variant='h6' sx={{mt:3}}>
                     LATEST OFFER DATE
                     <Box className='dashBar'></Box>
                </Typography>
                <Box sx={{display:'flex', alignItems:'center'}}>
                     <Box className='dateBox'>
                        <Typography variant='h6'  sx={{fontWeight:'900'}}>
                             01
                        </Typography>  
                        <Typography variant='subtitle2'  sx={{fontWeight:'900'}}>
                             JAN
                        </Typography>  
                     </Box>
                     <Box sx={{borderBottom:'1px solid #f8f8f8'}}>
                     <Typography variant='subtitle1'>
                            Stay connect with visit, If you interested want to more packages
                     </Typography>  
                     </Box>
                </Box>
                <Box sx={{display:'flex', alignItems:'center', mt:1}}>
                     <Box className='dateBox'>
                        <Typography variant='h6'  sx={{fontWeight:'900'}}>
                             14
                        </Typography>  
                        <Typography variant='subtitle2'  sx={{fontWeight:'900'}}>
                             JUN
                        </Typography>  
                     </Box>
                     <Box  sx={{borderBottom:'1px solid #f8f8f8'}}>
                     <Typography variant='subtitle1'>
                             Share the opportunity with your network to get bundle of discount 
                     </Typography>  
                     </Box>
                </Box>
                <Box sx={{display:'flex', alignItems:'center', mt:1}}>
                     <Box className='dateBox'>
                        <Typography variant='h6'  sx={{fontWeight:'900'}}>
                             16
                        </Typography>  
                        <Typography variant='subtitle2'  sx={{fontWeight:'900'}}>
                             DEC
                        </Typography>  
                     </Box>
                     <Box  sx={{borderBottom:'1px solid #f8f8f8'}}>
                     <Typography variant='subtitle1'>
                             We provide officialy discount.You are interested? connect 3 times
                     </Typography>  
                     </Box>
                </Box>
               </Grid>
               <Grid item xs={12} md={3}>
               <Typography variant='h6' sx={{mt:3}}>
                     SERVICE PAGES
                     <Box className='dashBar'></Box>
               </Typography>
               <NavLink className='bottom-link'  to="#">
                    <Typography className='hoverActive' sx={{marginBottom:'-10px'}}>
                    <i className="fas fa-arrow-right right-icon"></i> Home
                    </Typography>
               </NavLink> <br />
               <NavLink className='bottom-link'  to="#">
                    <Typography className='hoverActive' sx={{marginBottom:'-10px'}}>
                    <i className="fas fa-arrow-right right-icon"></i> Store Books
                    </Typography>
               </NavLink> <br />
               <NavLink className='bottom-link'  to="#">
                    <Typography  className='hoverActive' sx={{marginBottom:'-10px'}}>
                    <i className="fas fa-arrow-right right-icon"></i> Login
                    </Typography>
               </NavLink> <br />
               <NavLink className='bottom-link'  to="#">
                    <Typography className='hoverActive' sx={{marginBottom:'-10px'}}>
                    <i className="fas fa-arrow-right right-icon"></i> Dash Board
                    </Typography>
               </NavLink> <br />
               <NavLink className='bottom-link'  to="#">
                    <Typography className='hoverActive' sx={{marginBottom:'-10px'}}>
                    <i className="fas fa-arrow-right right-icon"></i> Review
                    </Typography>
               </NavLink> <br />
               <NavLink className='bottom-link'  to="/contact">
                    <Typography className='hoverActive' sx={{marginBottom:'-10px'}}>
                    <i className="fas fa-arrow-right right-icon"></i> Contact
                    </Typography>
               </NavLink> <br />
               
               </Grid>
               <Grid item xs={12} md={3}>
               <Typography variant='h6' sx={{mt:3}}>
                     NEWSLETTER WITH E-MAIL
                     <Box className='dashBar'></Box>
                </Typography>
               <Typography variant='subtitle1' sx={{fontFamily:'sans-serif', mb:2}}>
                             Enter your e-mail, we will send you a coupon with 15% off your next order. Write your mail here
               </Typography> 
               <Box>
               <input className="mailBox" placeholder='Enter Your Mail' type="email" name=" " id="" /> <br />
               <button className='newsBtn'>NEWS LETTER !</button>
               </Box> 
               </Grid>
               </Grid> 
          </Box>
     );
};

export default Footer;