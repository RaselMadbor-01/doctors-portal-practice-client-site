import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation} from 'react-router';
import useAuth from '../../../hooks/useAuth';

const RequireAuth = ({ children, redirectTo }) => {
  const {user,isLoading} = useAuth();
  const location=useLocation();
  if(isLoading){
    return  <CircularProgress />
  }
 
  
  return  user?.email ? children : <Navigate to="/login"  state={{ from: location }}  />;
};

export default RequireAuth;

