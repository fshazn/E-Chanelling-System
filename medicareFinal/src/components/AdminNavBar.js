import { AppBar, IconButton, Button, Toolbar, Typography, Dialog, DialogTitle, DialogActions } from '@mui/material'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import "./Components.css"
import { Stack } from '@mui/system';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';

export const AdminNavBar = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='static' className='appbar' style={{ backgroundColor: "#424874" }} >
      <Toolbar>
        <MedicalInformationOutlinedIcon />
        <Typography variant='h6'>
          Medicare
        </Typography>
        <Stack direction='row' spacing={2} >
          <Button style={{ color: "white" }} onClick={() => { navigate("/admin") }}>Home</Button>
          <Button style={{ color: "white" }} onClick={() => { navigate("/admin/specialities") }}>Doctors</Button>
          {/* <Button style={{color:"white"}} onClick={() => { navigate("/admin/patients") }}>Patients</Button> */}
          <Button style={{ color: "white" }} onClick={() => { navigate("/admin/staff") }}>Staff</Button>
          <Button style={{ color: "white" }} onClick={() => { navigate("/admin/medicines") }}>Medicines</Button>
          <Button style={{ color: "white" }} onClick={() => { navigate("/admin/billings") }}>Billing</Button>


        </Stack>
        <IconButton sx={{ marginRight: '1rem', marginLeft: "45rem" }} color='inherit' size='large' onClick={{}}><AccountCircleOutlinedIcon /></IconButton>
        <IconButton sx={{ marginRight: "5rem" }} color='inherit' size='large' onClick={() => setOpen(true)}><LogoutIcon /></IconButton>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby='dialog-title'
          aria-describedby='dialog-description'>
          <DialogTitle id='dialog-title'>Do you want to Log Out?</DialogTitle>
          <DialogActions>
            <Button onClick={() => navigate('/')}>OK</Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  )
}
