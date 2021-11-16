import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from '@mui/material';

const appointmentBg={
    background:`url(${bg})`,
    backgroundColor:"rgb(21 28 53 / 86%)",
    backgroundBlendMode:" darken",
    backgroundSize:"120% 100%",
    marginTop:175
};

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
              <img  src={doctor} style={{width:400,marginTop:-"110"}} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent: 'flex-start',alignItems: 'center' ,textAlign:"left"}}>
              <Box>
              <Typography variant="h5" style={{color:"#67C0C3 ",fontWeight:400}}>
                  Appointment
              </Typography>
              <Typography variant="h4" style={{color:"white",fontWeight:500}} sx={{my:3}}>
                  Make an appointment Today
              </Typography>
              <Typography varient="h6" style={{color:"white"}} sx={{mb:5,pr:5}}>
                  It is a long established fact that a reader will be distractedby the readable content of a page when looking at its
              </Typography>
              <Button variant="contained" style={{backgroundColor:"#0ABAB6"}}>
                  Learn More

              </Button>
          
              </Box>
          </Grid>
        
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;