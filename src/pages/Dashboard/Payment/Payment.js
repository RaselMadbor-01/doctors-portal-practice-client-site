import { Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CheckoutForm from './CheckoutForm';

const stripePromise=loadStripe(`pk_test_51JwoiiI9M2wzysXs96RQTlnBffovujrVO9ts6fAUqh1Ul1MetIoa3wKf69wD7bmorf3Qp12MWEJ6BsXTFeToaebv00pQbWy5Ww`);

const Payment = () => {
    let params = useParams();
   const [appointment,setAppointment]=useState({});
   useEffect(()=>{
       fetch(`https://whispering-sierra-38369.herokuapp.com/appointments/${params.appointmentId}`)
       .then(res=>res.json())
       .then(data=>setAppointment(data))
   },[params.appointmentId]);
    return (
        <div>
            <Typography varient="h3">Please pay for:{appointment.patentName} for the {appointment.ServiceName}</Typography>
            <Typography varient="h5">price:${appointment.price}</Typography>
            {appointment.price&& <Elements stripe={stripePromise}>
      <CheckoutForm  appointment={appointment}/>
    </Elements>}
        </div>
    );
};

export default Payment;