import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useNavigate,useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from "../../../images/login.png";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Login = () => {
    const{signInWithLogin,signInWithGoogle,isLoading,user,error,setUser,setError,setIsLoading}=useAuth();
    let navigate = useNavigate();
    let location = useLocation();
     const redirect_url=location?.state?.from||"/home";
    console.log(location?.state?.from);
    const[loginData,setLoginData]=useState({});
    const handleBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleSubmit=(e)=>{
        alert("helo");
        handleLogin();
        console.log(loginData);
        e.preventDefault();
    }
    const handleLogin=()=>{
        signInWithLogin(loginData.email,loginData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            console.log(user);
            setError("");
            navigate(redirect_url);
            // ...
          })
          .catch((error) => {setError(error.message);setUser({})})
          .finally(()=>setIsLoading(false));

    }
    const handleGoogle=()=>{
        signInWithGoogle(navigate,redirect_url);
    }
    return (
        <Container>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt:8}}>
            <Typography variant="body1" gutterBottom>Login</Typography>
            {
                isLoading ?<Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box> :<form onSubmit={handleSubmit}>
                <TextField id="standard-basic" onBlur={handleBlur} type="email" name="email" label="Your Email" sx={{width:"75%",m:1}} variant="standard" />
                <TextField id="standard-basic" onBlur={handleBlur} name="password" type="password" label="Your Password" sx={{width:"75%",m:1}} variant="standard" />
                <Button type="submit" sx={{width:"75%",m:1}} variant="contained">Sign in</Button>
               <NavLink style={{textDecoration:"none"}} to="/register"> <Button sx={{width:"75%",m:1}} variant="text">New user?Please Register</Button></NavLink>
                </form>
            }
            {
                user?.email &&<Alert severity="success">User Created Successfully</Alert>
            }
            {
                error&&<Alert severity="error">{error}</Alert>
            }
            <p> <Button type="submit" onClick={handleGoogle} sx={{width:"75%",m:1}} variant="contained">Google Sign In</Button></p>
          
        </Grid>
        <Grid item xs={12} md={6}>
           <img style={{width:"100%"}} src={logo} alt="" />
        </Grid>

            </Grid>
        </Container>
    );
};

export default Login;