import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Fluride from "../../../images/fluoride.png";
import Cavity from "../../../images/cavity.png";
import Whitening from "../../../images/whitening.png";
import Service from '../Service/Service';


const services = [
    {
        name:"Fluoride Treatment",
        description:"Fluoride treatments are typically professional treatments containing a high concentration of fluoride hygienist will apply to a person's teeth to improve health.",
        image:Fluride,

    },
    {
        name:"Cavity Filling",
        description:"Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth.",
        image:Cavity
    },
    {
        name:"Teath Whitening",
        description:"Whitening your teeth too often increases the risk of negative side effects, such as tooth sensitivity and damage to tooth enamel and gums.",
        image:Whitening
    }


]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container fixed>
        <Typography variant="h6" component="div" style={{textTransform:"uppercase"}} sx={{  fontWeight: 'bold',m:2 ,color: 'info.main'}}>
           Our Services
          </Typography>
          <Typography variant="h4" component="div" sx={{  color: 'primary.main' , fontWeight: 'bold',m:5 }}>
            Services We Provide
          </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service=><Service key={service.name} service={service}></Service>)
          }
        </Grid>

        </Container>
      </Box>
    );
};

export default Services;