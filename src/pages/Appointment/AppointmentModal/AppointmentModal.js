import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AltRouteTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AppointmentModal = ({ openBookng, handleBookingClose, booking,date,setBookingSuccess }) => {
 
  const{user}=useAuth();
  const initialValue={patentName:user.displayName,email:user.email,phone:""};
  const [bookingInfo,setBookingInfo]=useState(initialValue);
  const { name, time,price } = booking;
  const handleSubmit=(e)=>{
      const appointmentDetails={...bookingInfo,time,price,ServiceName:name,date:date.toLocaleDateString()};
      fetch("https://whispering-sierra-38369.herokuapp.com/appointment",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(appointmentDetails)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          setBookingSuccess(true);
          handleBookingClose();

        }
      })
      e.preventDefault();
  };
  const handleBlur=(e)=>{
    const field=e.target.name;
    const value=e.target.value;
    const newBooking={...bookingInfo};
    newBooking[field]=value;
    setBookingInfo(newBooking);
  }
 console.log(date);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBookng}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBookng}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              disabled
              onBlur={handleBlur}
              sx={{width:"95%",m:1}}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{width:"95%",m:1}}
              id="outlined-size-small"
              onBlur={handleBlur}
              name="patentName"
              type="text"
              defaultValue={user?.displayName}
              size="small"
            />
            <TextField
              sx={{width:"95%",m:1}}
              id="outlined-size-small"
              onBlur={handleBlur}
              name="email"
              type="email"
              defaultValue={user?.email}
              size="small"
            />
            <TextField
              sx={{width:"95%",m:1}}
              id="outlined-size-small"
              onBlur={handleBlur}
              name="phone"
              type="text"
              defaultValue={user?.phoneNumber||"Phone Number"}
              size="small"
            />
            <TextField
              disabled
              sx={{width:"95%",m:1}}
              onBlur={handleBlur}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
             <Button variant="contained" type="submit" style={{backgroundColor:"#0ABAB6  ",textAlign:"right"}}>SEND</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppointmentModal;
