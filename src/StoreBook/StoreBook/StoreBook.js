import { Box } from '@mui/system';
import React from 'react';
import TopBar from '../../Pages/Shared/TopBar/TopBar';
import AvailableBooks from '../AvailableBooks/AvailableBooks';
import StoreBookHeader from '../StoreBookHeader/StoreBookHeader';

const StoreBook = () => {
     const [date, setDate] = React.useState(new Date());

     return (
          <Box>
               <TopBar/>
               <StoreBookHeader date={date} setDate={setDate}/>
               <AvailableBooks date={date}/>
          </Box>
     );
};

export default StoreBook;