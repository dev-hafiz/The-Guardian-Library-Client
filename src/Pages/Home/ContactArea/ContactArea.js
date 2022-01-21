import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import TopBar from '../../Shared/TopBar/TopBar';
import BottomFooter from '../BottomFooter/BottomFooter';
import Footer from '../Footer/Footer';
import './ContactArea.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactArea = () => {

     useEffect(()=>{
          Aos.init({duration:2000});
     },[])

     return (
          <>
               <TopBar/>

                   <Container sx={{marginTop:'140px'}}>
                   <Typography variant='h4'>
                        GET IN TOUCH
                   </Typography>
                   <Box className='Dashcontact'></Box>
                   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid data-aos="fade-right" item xs={12} md={8}>

                    <form>

                    <Grid sx={{mt:8}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                         <Grid item xs={12} md={6}>
                         <span className='spanContact'><i className="far fa-user contactIcon"></i>
                         <input required className='ContactInput' type="name" name="" placeholder='Enter Your Full Name' id="" />
                         </span><br />
                         </Grid>
                         <Grid item xs={12} md={6}>
                         <span className='spanContact'><i className="far fa-envelope contactIcon"></i>
                         <input required className='ContactInput' type="email" name="" placeholder='Enter Your Email' id="" />
                         </span><br />
                         </Grid>
                         <Grid item xs={12} md={6}>
                         <span className='spanContact'><i className="fas fa-phone-alt contactIcon"></i>
                         <input required className='ContactInput' type="number" name="" placeholder='Phone Number' id="" />
                         </span><br />
                         </Grid>
                         <Grid item xs={12} md={6}>
                         <span className='spanContact'><i className="far fa-comment-alt contactIcon"></i>
                         <input required className='ContactInput' type="text" name="" placeholder='Subject' id="" />
                         </span><br />
                         </Grid>
                         </Grid>

                         <span className='spanContact'>
                         <i className="far fa-edit contactIcon"></i>
                         <textarea required type="text" className='ContactInput' rows='10'  name="" placeholder=" Type Your Massage Here" id="" />
                         </span><br />

                         <button className='btnPost' type='submit'><i class="fas fa-paper-plane "></i> Post</button>

                    </form>
                    </Grid>
                    <Grid data-aos="fade-left"  item xs={12} md={4}>
                   
                    <Typography variant='h4'>
                      Contact Information
                    </Typography>
                    <Box sx={{display:'flex', alignItems:'center', mt:5}}>
                    <Box>
                    <i className="fas  fa-map-marker-alt social_icon"></i>
                    </Box>
                    <Box>
                         <Typography variant='subtitle1'>
                         3174 Shelia Bazar, Sylhet <br />
                         Dhaka, Bangladesh
                         </Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', mt:5}}>
                    <Box>
                    <i className="fas  fa-phone social_icon"></i>
                    </Box>
                    <Box>
                         <Typography variant='subtitle1'>
                         +880 195 064 6560 <br />
                         +880 178 658 9600
                         </Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', mt:5}}>
                    <Box>
                    <i className="fas fa-envelope social_icon"></i>
                    </Box>
                    <Box >
                         <Typography variant='subtitle1'>
                         hafizurrahman.jr@gmail.com <br />
                         
                         </Typography>
                    </Box>
                    </Box>
                    
                    <Box sx={{mt:5}}>
                         <NavLink  style={{textDecoration:'none'}} to="#"><i class="fab fa-linkedin-in social_icon"></i> </NavLink>
                         <NavLink style={{textDecoration:'none'}} to="#"><i class="fab fa-twitter social_icon"></i> </NavLink>
                         <NavLink style={{textDecoration:'none'}} to="#"><i class="fab fa-facebook social_icon"></i> </NavLink>
                         <NavLink style={{textDecoration:'none'}} to="#"><i class="fab fa-reddit social_icon"></i> </NavLink>
                    </Box>
                    </Grid>
                    </Grid>
                   </Container> 

               <Footer/>
               <BottomFooter/>
          </>
     );
};

export default ContactArea;