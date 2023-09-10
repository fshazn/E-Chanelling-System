import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SignupNavBar } from './components/SignupNavBar'

const BookingSignIn = () => {
    let navigate = useNavigate();
    const {specializationId} = useParams()
    const {doctorId}= useParams()
  return (
    <div><SignupNavBar/>
    <Grid container justifyContent="center" marginTop="3rem">
            
                <Paper style={{ height: "30rem", width: "40rem" }}>
                    <Typography variant='h5' textAlign="center" marginTop="2rem" fontWeight="bold">Sign In</Typography>
                    <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                        <TextField label="Username" sx={{ textAlign: 'center', width: '20rem' }}   />
            
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                        <TextField label="Password" sx={{ textAlign: 'center', width: '20rem' }} />
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' type='submit'>Sign In</Button>
                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => { navigate(`/specializations/${specializationId}/doctors/${doctorId}/schedules`) }}>Cancel</Button>
                    </Stack>
                </Paper>
                
            </Grid>
    </div>
  )
}

export default BookingSignIn