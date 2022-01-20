import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
     const {user, isLoading, isAdmin} = useAuth();
     let location = useLocation();
     if(isLoading) { return <CircularProgress/> }
     
     if(user.email && isAdmin){
          return children;
     }
     return <Navigate to="/" state={{from: location }} />


};

export default AdminRoute;