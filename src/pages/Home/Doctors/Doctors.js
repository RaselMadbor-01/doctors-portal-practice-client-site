import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const[doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch("https://whispering-sierra-38369.herokuapp.com/doctors")
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <Container fixed sx={{mt:16}}>
            <Grid container spacing={4}>
               {
                   doctors.map(dc=><Doctor key={dc._id} doctor={dc}></Doctor>)
               }
            </Grid>

        </Container>
    );
};

export default Doctors;