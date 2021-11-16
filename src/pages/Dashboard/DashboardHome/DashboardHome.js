import { Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import SpecificeAppointments from '../SpecificeAppointments/SpecificeAppointments';

const DashboardHome = () => {
    const [pickedDate, setPickedDate] = React.useState(new Date());
    return (
        
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Calender pickedDate={pickedDate} setPickedDate={setPickedDate}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <SpecificeAppointments date={pickedDate}/>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;