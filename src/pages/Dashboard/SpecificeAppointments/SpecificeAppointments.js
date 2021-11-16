import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const SpecificeAppointments = ({date}) => {
    const {user,token}=useAuth();
    const[specificeAppointment,setSpecificeAppointment]=useState([]);
    useEffect(()=>{
      
        fetch(`http://localhost:5000/appointment?email=${user.email}&date=${date}`,{
            method:"GET",
            headers:{
              "authorization":`Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setSpecificeAppointment(data);
        })
    },[date])
    return (
        <div>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {specificeAppointment.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patentName}
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default SpecificeAppointments;