import { CardMedia, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Service = (props) => {
  const { name, description, image } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}  justifyContent="center" alignItems="center">
      <Card sx={{ minWidth: 275,border:0,boxShadow:0 }} >
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={image}
          alt="Paella dish"
        />
        <CardContent >
          <Typography variant="h5"  component="div" sx={{ color: 'text.primary',m:2 }}>
            {name}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', m: 2 }}>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
