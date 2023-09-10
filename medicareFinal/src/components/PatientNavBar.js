import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import { useNavigate } from 'react-router-dom';
import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
export const PatientNavBar = () => {
    let navigate = useNavigate();
  return (
    <AppBar position='static' className='appbar' >
        <Toolbar>
            <MedicalInformationOutlinedIcon/>
            <Typography variant='h6'>
                Medicare
            </Typography>
            <Tabs size='large'>
              <Tab label='Home' style={{color:"white"}} onClick={() => { navigate("/") }}></Tab>
              <Tab label='Doctors' style={{color:"white"}} onClick={() => { navigate("") }}></Tab>
              <Tab label='My Bookings' style={{color:"white"}} onClick={() => { navigate("") }}></Tab>
            </Tabs>
            <IconButton sx={{marginLeft:'auto'}} color="inherit" size='large' onClick={() => { navigate("/doctors/profile") }}><AccountCircleOutlinedIcon/></IconButton>
           
        </Toolbar>
    </AppBar>
  )
}
