import { AppBar, IconButton, Stack, Button, Toolbar, Typography, Dialog, DialogTitle, DialogActions } from '@mui/material'
import React, { useState } from 'react'
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export const DoctorNavBar = () => {
  let navigate = useNavigate();
  const { doctorId } = useParams()
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='static' className='appbar' style={{ backgroundColor: "#424874" }}>
      <Toolbar>
        <MedicalInformationOutlinedIcon />
        <Typography variant='h6'>
          Medicare
        </Typography>
        <Stack direction='row' spacing={2} >
          <Button style={{ color: "white" }} onClick={() => { navigate(`/doctors/${doctorId}`) }}>Home</Button>
          <Button style={{ color: "white" }} sx={{width:"200px"}} onClick={() => { navigate(`/doctors/${doctorId}/schedules/manage`) }}>Manage Schedule</Button>

        </Stack>
        <IconButton sx={{ marginRight: '1rem', marginLeft: "57rem" }} color='inherit' size='large' onClick={() => { navigate(`/doctors/${doctorId}/profile`) }}><AccountCircleOutlinedIcon /></IconButton>
        <IconButton sx={{ marginRight: "2rem" }} color='inherit' size='large' onClick={() => setOpen(true)}><LogoutIcon /></IconButton>
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
