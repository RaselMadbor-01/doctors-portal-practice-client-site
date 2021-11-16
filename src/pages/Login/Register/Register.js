import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useNavigate,useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from "../../../images/login.png";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Register = () => {
    const{signInWithRegister,isLoading,error,user,setUser,setError,setIsLoading}=useAuth();
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
        if(loginData.password!=loginData.password2){
            alert("password didnot match");
            return
        };
        signInWithRegister(loginData.email,loginData.password,loginData.name,navigate,redirect_url)
       
        alert("helo");
        console.log(loginData);
        e.preventDefault();
    };
    // const handleRegister=()=>{
    //     signInWithRegister(loginData.email,loginData.password)
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //         setUser(user);
    //         console.log(user);
    //         setError("");
    //         navigate(redirect_url);
    //         // ...
    //       })
    //       .catch((error) => {setError(error.message);setUser({})})
    //       .finally(()=>{
    //         setIsLoading(false)
    //       });

    // }
    return (
        <Container>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt:8}}>
            <Typography variant="body1" gutterBottom>Register</Typography>
            {
                isLoading ?<Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box> :<form onSubmit={handleSubmit}>
                <TextField id="standard-basic" onBlur={handleBlur} type="text" name="name" label="Your Name" sx={{width:"75%",m:1}} variant="standard" />
                <TextField id="standard-basic" onBlur={handleBlur} type="email" name="email" label="Your Email" sx={{width:"75%",m:1}} variant="standard" />
                <TextField id="standard-basic" onBlur={handleBlur} name="password" type="password" label="Your Password" sx={{width:"75%",m:1}} variant="standard" />
                <TextField id="standard-basic" onBlur={handleBlur} name="password2" type="password" label="Confirm Password" sx={{width:"75%",m:1}} variant="standard" />
                <Button type="submit" sx={{width:"75%",m:1}} variant="contained">Sign in</Button>
               <NavLink style={{textDecoration:"none"}} to="/login"> <Button sx={{width:"75%",m:1}} variant="text">Already Register?Please Login</Button></NavLink>
                </form>
            }
            {
                user?.email &&<Alert severity="success">User Created Successfully</Alert>
            }
            {
                error&&<Alert severity="error">{error}</Alert>
            }
          
        </Grid>
        <Grid item xs={12} md={6}>
           <img style={{width:"100%"}} src={logo} alt="" />
        </Grid>

            </Grid>
        </Container>
    );
};

export default Register;