import { AppBar, Button, Dialog, DialogActions, DialogTitle, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import { useNavigate, useParams } from 'react-router-dom';

export default function StaffNavBar() {
  const{staffId}=useParams();
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
          <Button style={{ color: "white" }} onClick={() => { navigate("/staff") }}>Home</Button>
          <Button style={{ color: "white" }}>Doctors</Button>
          <Button style={{ color: "white" }} onClick={() => { navigate("/staff/appointments") }}>Appointments</Button>
          <Button style={{ color: "white" }}>Billing</Button>

        </Stack>
        <IconButton sx={{ marginRight: '1rem', marginLeft: "50rem" }} color='inherit' size='large' onClick={()=>{navigate(`/staff/${staffId}/profile`)}}><AccountCircleOutlinedIcon /></IconButton>
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
