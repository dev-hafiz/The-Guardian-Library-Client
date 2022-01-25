import { Box } from '@mui/system';
import React from 'react';
import TopBar from '../Shared/TopBar/TopBar';
import './ErrorPage.css';

const ErrorPage = () => {
     return (
          <>
               <TopBar/>
               <Box className='errorArea'>
                    <h1>Ohh 404</h1>
               </Box>
          </>
     );
};

export default ErrorPage;