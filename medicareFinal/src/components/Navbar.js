import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { Stack } from '@mui/system';

export const Navbar = () => {
  const mybooking={
    marginLeft:"39rem",
    color:"white",
    borderColor:"white"
  }
  const login={
    marginLeft:"1rem",
    color:"white",
    borderColor:"white"
  }
  let navigate = useNavigate();
  return (

    <AppBar position='static' className='appbar' style={{backgroundColor:"#424874"}}>
        <Toolbar>
            <MedicalInformationOutlinedIcon/>
            <Typography variant='h6'>
                Medicare
            </Typography>
            <Stack direction='row' spacing={2}>
              <Button style={{color:"white"}} onClick={() => { navigate("/") }}>Home</Button>
              <Button style={{color:"white"}} onClick={() => { navigate("/about") }}>About Us</Button>
              <Button style={{color:"white"}} onClick={() => { navigate("/contact") }}>Contact Us</Button>
            </Stack>
            <Stack direction='row' spacing={2} container justifyItems="right" justifyContent="right">
            <Button variant='outlined' style={mybooking} onClick={() => { navigate("/mybookings") }}>My Bookings</Button>
            <Button variant='outlined' style={login} onClick={() => { navigate("/signin") }}>Doctor</Button>
            <Button variant='outlined' style={login} onClick={() => { navigate("/staff/signin") }}>Staff</Button>
             </Stack>
            
            </Toolbar>
    </AppBar>
  )
}
