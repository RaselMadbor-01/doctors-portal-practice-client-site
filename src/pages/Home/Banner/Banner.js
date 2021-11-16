import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from "../../../images/chair.png";
import { Button, Container, Typography } from '@mui/material';


const verticalCenter={
    display:"flex",
    alignItems:"center",
    height:450
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow:1}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{...verticalCenter,textAlign:"left"}}>
           <Box>
           <Typography variant="h4" style={{color:"#1E3050 ",fontWeight:600}}>
                Your New Smile <br />
                Starts Here
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary',my:3 }} style={{fontSize:14,fontWeight:300,paddingRight:120}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo suscipit excepturi corrupti nisi corporis ad rerum ab eveniet natus qui obcaecati quasi, delectus iste tempore doloribus eum sit eius quibusdam nesciunt beatae accusamus et a animi adipisci.
            </Typography>
            <Button variant="contained" style={{backgroundColor:"#67C0C3"}}>GET APPOINTMENT</Button>
           </Box>
          
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={6}>
            <img src={chair} style={{width:"400px"}} alt="" />
        
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;