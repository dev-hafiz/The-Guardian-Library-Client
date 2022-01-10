import { Box } from '@mui/system';
import React from 'react';
import TopBar from '../../Pages/Shared/TopBar/TopBar';
import AvailableBooks from '../AvailableBooks/AvailableBooks';
import StoreBookHeader from '../StoreBookHeader/StoreBookHeader';

const StoreBook = () => {
     return (
          <Box>
               <TopBar/>
               <StoreBookHeader/>
               <AvailableBooks/>
          </Box>
     );
};

export default StoreBook;