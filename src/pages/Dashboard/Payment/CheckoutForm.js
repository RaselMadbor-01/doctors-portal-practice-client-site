import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({appointment}) => {
    const {price,patentName,_id}=appointment;
    const[error,setError]=useState('');
    const{user}=useAuth();
    const[clientSecret,setClientSecret]=useState('');
    const[processing,setProcessing]=useState(false);
    const[success,setSuccess]=useState('');
 useEffect(()=>{
     fetch("https://whispering-sierra-38369.herokuapp.com/create-payment-intent",{
         method:"POST",
         headers:{
            "content-type":"application/json"
         },
         body:JSON.stringify({price})
     })
     .then(res=>res.json())
     .then(data=>setClientSecret(data.clientSecret))
 },[price])

    const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
setProcessing(true);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if(error){
          setError(error.message);
          setSuccess('');
      }
      else{
          setError('');
          console.log(paymentMethod);
      }
//payment intent
const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
    clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          name: patentName,
          email:user.email,
        },
      },
    },
  );
  if(intentError){
      setError(intentError.message);
      setSuccess("");
  }
  else{
      setError('');
      setProcessing(false);
      setSuccess('Your payment process is successfully done');
      console.log(paymentIntent);

      //saved to database
const payment={
    amount:paymentIntent.amount,
    created:paymentIntent.created,
    last4:paymentMethod.card.last4,
    transaction:paymentIntent.client_secret.slice("_secret")[0]

};
      const url=`https://whispering-sierra-38369.herokuapp.com/appointments/${_id}`;
      fetch(url,{
          method:"PUT",
          headers:{
              "content-type":'application/json'
          },
          body:JSON.stringify(payment)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))

  }
    

  
  };
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {processing? <CircularProgress></CircularProgress>:<button type="submit" disabled={!stripe||success}>
        Pay ${price}
      </button>}
    </form>
    {
        error&& <p style={{color:"red"}}>{error}</p>
    }
    {
        success&& <p style={{color:"green"}}>{success}</p>
    }
            
        </div>
    );
};

export default CheckoutForm;