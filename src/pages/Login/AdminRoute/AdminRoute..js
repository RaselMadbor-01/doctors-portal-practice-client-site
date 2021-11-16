import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation} from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, redirectTo }) => {
  const {user,admin,isLoading} = useAuth();
  const location=useLocation();
  if(isLoading){
    return  <CircularProgress />
  }
 
  
  return  user?.email&&admin ? children : <Navigate to="/"  state={{ from: location }}  />;
};

export default AdminRoute;