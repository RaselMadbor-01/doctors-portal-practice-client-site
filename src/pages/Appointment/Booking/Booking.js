import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const Booking = ({ booking,pickedDate,setBookingSuccess }) => {
  const [openBookng, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
   <>
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{py:3}}>
      <Typography variant="h5" style={{color:"#0ABAB6",fontWeight:600}} gutterBottom component="div">
        {booking.name}
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        {booking.time}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {booking.space} SPACES AVAILABLE
      </Typography>
      <Button variant="contained" onClick={handleBookingOpen} style={{backgroundColor:"#0ABAB6  "}}>BOOK APPOINTMENT</Button>
      </Paper>
    </Grid>
    <AppointmentModal setBookingSuccess={setBookingSuccess} booking={booking} date={pickedDate} openBookng={openBookng} handleBookingClose={handleBookingClose}></AppointmentModal>
   </>
  );
};

export default Booking;
