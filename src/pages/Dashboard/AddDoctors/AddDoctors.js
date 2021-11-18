import { Alert, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctors = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[image,setImage]=useState(null);
    const[success,setSuccess]=useState("");
    const handleSubmit=e=>{
        e.preventDefault();
        if(!image){
            return
        }
        const formData=new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('image',image);
        fetch(`https://whispering-sierra-38369.herokuapp.com/doctors`,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Add Doctor successfully")
                setSuccess("Add Doctor successfully")
            }
        })
    }
    return (
        <div>
            <h3>This is add doctors page</h3>
            <form onSubmit={handleSubmit}>
            <TextField sx={{width:"50%"}} label="Name" onChange={(e)=>setName(e.target.value)} required type="text" variant="standard" />
            <br />
            <TextField sx={{width:"50%"}} label="Email" onChange={(e)=>setEmail(e.target.value)} required type="email" variant="standard" />
            <br />
            <label htmlFor="contained-button-file">
            <Input accept="image/*" onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <Button variant="contained" type="submit">
                Add Doctor
            </Button>
            </label>
            </form>
            {success&&<Alert severity="success">{success}</Alert>}
        </div>
    );
};

export default AddDoctors;