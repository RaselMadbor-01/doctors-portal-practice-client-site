import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calender = ({pickedDate,setPickedDate}) => {
   
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
        displayStaticWrapperAs="desktop"
          value={pickedDate}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setPickedDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
};

export default Calender;