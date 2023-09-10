
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { DoctorNavBar } from '../../components/DoctorNavBar'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FlashOnOutlined } from '@mui/icons-material';

const AddSchedule = () => {
  let navigate = useNavigate();
  const { doctorId } = useParams()
  const [schedule, setSchedules] = useState({
    date: "",
    time: "",
    doctorId: doctorId
  });
  const { date, time } = schedule;

  const onInputChange = (e) => {
    setSchedules({ ...schedule, [e.target.name]: e.target.value });
  };
  const onSubmitForm = async (e) => {
    await axios.post("http://localhost:8080/schedules", schedule);
    setOpen(false);
  };

  const [open, setOpen] = useState(false)
  return (
    <div><DoctorNavBar />
      <Grid container justifyContent="center" marginTop="3rem">
        <form >
          <Paper style={{ height: "35rem", width: "50rem" }}>
            <Typography variant='h5' textAlign="center" marginTop="2rem" fontWeight="bold">Add New Schedule</Typography>
            <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
              <TextField
                id="date"
                label="Schedule Date"
                type="date"
                defaultValue="2017-05-24"
                sx={{ textAlign: 'center', width: '20rem' }}
                InputLabelProps={{
                  shrink: true,
                }} name='date' value={date} onChange={(e) => onInputChange(e)} required
              />
            </Stack>
            <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
              <TextField
                id="time"
                label="Time"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ textAlign: 'center', width: '20rem' }}
                name='time' value={time} onChange={(e) => onInputChange(e)}
                required
              />

            </Stack>

            <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">

            </Stack>

            <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
              <Button style={{ backgroundColor: "#e91e63" }} sx={{ textAlign: 'center', width: '5rem' }} variant='contained' onClick ={()=> setOpen(true)}>Save</Button>
              <Button style={{ backgroundColor: "#e91e63" }} sx={{ textAlign: 'center', width: '5rem' }} variant='contained' onClick={() => { navigate(`/doctors/${doctorId}`) }} >Cancel</Button>
            </Stack>
            <Dialog 
          open ={open}
          onClose ={()=> setOpen(false)}
          aria-labelledby='dialog-title' 
          aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>Do you want to add this schedule?</DialogTitle>
            <DialogContent>
              <DialogContentText id='dialog-description'>
                This schedule details will be visible for all users after adding!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick ={(e)=> onSubmitForm(e)}>OK</Button>
              <Button onClick ={()=> setOpen(false)}>Cancel</Button>
            </DialogActions>
          </Dialog>
          </Paper>
          
        </form>
      </Grid>

    </div>
  )
}

export default AddSchedule