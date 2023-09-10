import { Grid, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AdminNavBar } from '../../components/AdminNavBar'
import image1 from '../../images/vivid-blurred-colorful-background.jpg';
const AdminHome = () => {
  const doctorPaper={
    width:"15rem",
    height:"6rem",
    padding:"40px",
    borderRadius:"15px",
    backgroundImage:`url(${image1})`,
    backgroundSize:"320px"
  }
  const staffPaper={
    width:"15rem",
    height:"6rem",
    padding:"40px",
    borderRadius:"15px",
    marginLeft:"2rem",
    backgroundImage:`url(${image1})`,
    backgroundSize:"320px"
  }
  const typography={
    fontSize:"20px",
    fontWeight:"bold",
    color:"#424874",
    textAlign:"center"
  }
  const typography1={
    fontSize:"40px",
    fontWeight:"bold",
    color:"#424874",
    textAlign:"center"
  }
  const [doctorCount,setDoctorCount]=useState('');
  const [scheduleCount,setScheduleCount]=useState('');
  const [appointmentCount,setAppointmentCount]=useState('');
  useEffect(() => {
    loadDoctorCount();
    loadScheduleCount();
    loadAppointmentCount();
}, [])
const loadDoctorCount = async () => {
  const result = await axios.get(`http://localhost:8081/doctors/count`)
  setDoctorCount(result.data);
  console.log(result.data);
}
const loadScheduleCount = async () => {
  const result = await axios.get(`http://localhost:8080/schedules/count`)
  setScheduleCount(result.data);
  console.log(result.data);
}
const loadAppointmentCount = async () => {
  const result = await axios.get(`http://localhost:8080/appointments/count`)
  setAppointmentCount(result.data);
  console.log(result.data);
}
  return (
    <Grid container justifyContent="center"><AdminNavBar/>
    <Stack direction='rwo' spacing={4} marginTop="5rem" marginLeft="5rem">
    <Paper style={doctorPaper}>
      <Typography style={typography}>Registered Doctors</Typography>
      <Typography style={typography1}>{doctorCount}</Typography>
    </Paper>
    <Paper style={staffPaper}>
      <Typography style={typography}>Available Schedules </Typography>
      <Typography style={typography1}>{scheduleCount} </Typography>
    </Paper>
    <Paper style={staffPaper}>
      <Typography style={typography}>Total Appointments</Typography>
      <Typography style={typography1}>{appointmentCount}</Typography>
    </Paper>
    </Stack>
    </Grid>
  )
}

export default AdminHome