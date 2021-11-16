import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [pickedDate, setPickedDate] = React.useState(new Date());
    console.log(pickedDate);
    return (
        <div>
            <Navigation/>
            <AppointmentHeader pickedDate={pickedDate} setPickedDate={setPickedDate}/>
            <AvailableAppointment pickedDate={pickedDate}/>
        </div>
    );
};

export default Appointment;