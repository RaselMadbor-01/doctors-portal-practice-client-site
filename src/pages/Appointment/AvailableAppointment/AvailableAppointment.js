import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Booking from "../Booking/Booking";
import { Alert, Typography } from "@mui/material";

const appointmentBooking = [
  { id: 1, name: "Teeth Orthodontics", time: "8:00 AM - 9:00 AM", space: 8 },
  { id: 2, name: "Cosmetic Dentistry", time: "10:05 AM - 11:30 AM", space: 6 },
  { id: 3, name: "Teeth Cleaning", time: "5:00 AM - 6:30 PM", space: 9 },
  { id: 4, name: "Cavity Protection", time: "11:00 AM - 12:00 AM", space: 5 },
  { id: 5, name: "Peditatric Dental", time: "06:00 PM - 07:00 PM", space: 7 },
  { id: 6, name: "Oral Surgery", time: "07:00 PM - 08:00 PM", space: 10 }
];

const AvailableAppointment = ({ pickedDate }) => {
  const[bookingSuccess,setBookingSuccess]=useState(false);
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ mt: 8, mb: 5 }}
        style={{ color: "#0ABAB6", fontWeight: 600 }}
        gutterBottom
        component="div"
      >
        AvailableAppointment on {pickedDate.toDateString()}
      </Typography>
      {
        bookingSuccess&&<Alert severity="success">Your Appointment Booking Successfully Done</Alert>
      }
      <Grid container spacing={2}>
        {appointmentBooking.map((booking) => (
          <Booking key={booking.id} pickedDate={pickedDate} setBookingSuccess={setBookingSuccess} booking={booking}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
