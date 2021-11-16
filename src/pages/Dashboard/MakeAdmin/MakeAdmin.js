import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const[email,setEmail]=useState("");
    const{token}=useAuth();
    const [success,setSuccess]=useState(false);
    const handleBlur=(e)=>{
        setEmail(e.target.value);
    }
    const handleSubmit=(e)=>{
        const user={email};
        console.log(user);
        fetch("http://localhost:5000/users/admin",{
            method:"PUT",
            headers:{
                "authorization":`Bearer ${token}`,
                "content-type":"application/json"
              },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    console.log(email);
    return (
        <div>
            <h2>This make admin page</h2>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" sx={{width:"50%"}} label="Your email" type="email" onBlur={handleBlur} variant="outlined" />
            <Button type="submit" variant="contained">Submit</Button>
            </form>
            {
                success?<Alert severity="success">This is a success alert — check it out!</Alert>:""
            }
        </div>
    );
};

export default MakeAdmin;