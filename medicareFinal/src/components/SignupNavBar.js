import { AppBar, Stack, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import { useNavigate } from 'react-router-dom';
export const SignupNavBar = () => {
  let navigate = useNavigate();
  return (
    <AppBar position='static' className='appbar' style={{backgroundColor:"#424874"}}>
    <Toolbar>
        <MedicalInformationOutlinedIcon/>
        <Typography variant='h6'>
            Medicare
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button  style={{color:"white"}} onClick={() => { navigate("/") }}>Home</Button>
          <Button  style={{color:"white"}}>About Us</Button>
          <Button  style={{color:"white"}}>Contact Us</Button>
          
        </Stack>
    </Toolbar>
</AppBar>
  )
}
