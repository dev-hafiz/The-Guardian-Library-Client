import * as React from 'react';
import Calendar from '../../../Shared/Calendar/Calendar';
import PlaceBook from '../PlaceBook/PlaceBook';
import {  Grid } from '@mui/material';
const DashboardHome = () => {

     const [date, setDate] =  React.useState(new Date());
     
     return (
          <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
          <Calendar
               date={date}
               setDate={setDate}
          />
          </Grid>
          <Grid item xs={12} md={8}>
          <PlaceBook
               date={date}
          />
          </Grid>
          </Grid>
     );
};

export default DashboardHome;