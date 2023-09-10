import { Button, Dialog, DialogActions, DialogTitle, Grid, Paper, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DoctorNavBar } from '../../components/DoctorNavBar'

const EditProfile = () => {
    const profilePaper = {
        height: "35rem",
        width: "45rem",
        borderRadius: "15px"
    }
    const { staffId } = useParams();
    let navigate = useNavigate();
    const [open,setOpen]=useState(false);
    const [staff, setStaff] = useState({
        staffId: staffId,
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        username: "",
        password: ""
    });
    const { firstName, lastName, email, contact, username, password } = staff;
    const onInputChange = (e) => {
        setStaff({ ...staff, [e.target.name]: e.target.value });
      };
      const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:8081/doctors", staff)
        setOpen(false);
        navigate(`/staff/${staffId}`);
      };
    useEffect(() => {
        loadStaff();
    }, [])
    const loadStaff = async () => {
        const result = await axios.get(`http://localhost:8081/staffs/${staffId}`)
        setStaff(result.data);
        console.log(result.data);
    }
    return (
        <div><DoctorNavBar />
            <Grid container justifyContent="center" marginTop="3rem">
            
                <Paper style={profilePaper}>
                    <Typography variant='h5' textAlign="center" marginTop="2rem" fontWeight="bold">Profile</Typography>
                    <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                        <TextField label="First Name" sx={{ textAlign: 'center', width: '20rem' }} name='firstName' value={firstName} onChange={(e) => onInputChange(e)} />
                        <TextField label="Last Name" sx={{ textAlign: 'center', width: '20rem' }} name='lastName' value={lastName} onChange={(e) => onInputChange(e)} />
                    </Stack>

                    <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
                        <TextField label="Email" sx={{ textAlign: 'center', width: '20rem' }} name='email' value={email} onChange={(e) => onInputChange(e)} />
                        <TextField label="Contact" sx={{ textAlign: 'center', width: '20rem' }} name='contact' value={contact} onChange={(e) => onInputChange(e)} />
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
                        <TextField label="Username" sx={{ textAlign: 'center', width: '20rem' }} name='username' value={username} onChange={(e) => onInputChange(e)}/>
                        <TextField label="Password" sx={{ textAlign: 'center', width: '20rem' }} type='password' name='password' value={password} onChange={(e) => onInputChange(e)}/>
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained'  onClick={() => setOpen(true)}>Update</Button>
                        <Dialog
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby='dialog-title'
                            aria-describedby='dialog-description'>
                            <DialogTitle id='dialog-title'>Do you want to update the profile?</DialogTitle>
                            <DialogActions>
                                <Button onClick={(e) => onSubmitForm(e)}>OK</Button>
                                <Button onClick={() => setOpen(false)}>Cancel</Button>
                            </DialogActions>
                        </Dialog>
                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => { navigate(`/staff/${staffId}`) }} >Cancel</Button>
                    </Stack>
                </Paper>
                

            </Grid>
        </div>
    )
}

export default EditProfile