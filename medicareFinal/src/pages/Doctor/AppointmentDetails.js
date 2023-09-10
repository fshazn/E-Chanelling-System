import { Button, Dialog, DialogActions, DialogTitle, Grid, Paper, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DoctorNavBar } from '../../components/DoctorNavBar'
import './Styled.css'

const AppointmentDetails = () => {
    
    const [open, setOpen] = useState(false)
    let navigate = useNavigate();
    const [patients, setPatients] = useState({
        patientId: "",
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        bloodGroup: "",
        email: "",
        tellNo: "",
        username: "",
        password: ""
    });

    useEffect(() => {
        loadPatients();
    }, []);
    const { patientId } = useParams();
    const { doctorId } = useParams();
    const { scheduleId } = useParams();
    const { id } = useParams();

    const loadPatients = async () => {
        const result = await axios.get(`http://localhost:8081/patients/${patientId}`)
        setPatients(result.data);
        console.log(result.data);
    }

    const [prescription, setPrescription] = useState({
        docId: doctorId,
        patId: patientId,
        schedId: scheduleId,
        appId: id
    })
    function onSubmitForm(e){
        e.preventDefault();
        axios.post("http://localhost:8082/prescriptions", prescription)
        console.log(prescription)
        navigate(`/doctors/${doctorId}/schedules/${scheduleId}/appointments/${id}/patients/${patientId}/prescription`)
    };
    const { docId, patId, schedId, appId } = prescription;
    return (
        <Grid container justifyItems="center" justifyContent="center">
            <DoctorNavBar />
            <Stack>

                <Paper sx={{
                    padding: '5rem',
                    backgroundColor: "white",
                    marginLeft: "10rem",
                    marginTop: "2rem",
                    marginRight: "10rem",
                    width: "15rem"
                }}>

                    <Stack>
                        <Typography variant='h5' textAlign="center" marginTop="2rem" fontWeight="bold">Pateint Details</Typography>
                        <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="flex-start">
                            <Typography className='apdTextField'>Name :</Typography>
                            <Typography className='apdTextField'>{patients.firstName + " " + patients.lastName}</Typography>
                        </Stack>
                        <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="flex-start">
                            <Typography className='apdTextField'>Age :</Typography>
                            <Typography className='apdTextField'>{patients.age + " years old. "}</Typography>
                        </Stack>
                        <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="flex-start">
                            <Typography className='apdTextField'>Gender :</Typography>
                            <Typography className='apdTextField'>{patients.gender}</Typography>
                        </Stack>
                        <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="flex-start">
                            <Typography className='apdTextField'>Blood Group :</Typography>
                            <Typography className='apdTextField'>{patients.bloodGroup}</Typography>
                        </Stack>
                        <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="flex-start">
                            <Grid><Typography className='apdTextField'>Email :</Typography></Grid>
                            <Grid><Typography className='apdTextField'>{patients.email}</Typography></Grid>
                        </Stack>
                        <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="flex-start">
                            <Typography className='apdTextField'>Contact :</Typography>
                            <Typography className='apdTextField'>{patients.tellNo}</Typography>
                        </Stack>
                        <Stack direction='row' spacing={2} marginTop='50px' container justifyContent="center">
                            <Button style={{ backgroundColor: "#e91e63" }} variant='contained' >Cancel</Button>
                            <Button style={{ backgroundColor: "#e91e63" }} variant='contained'onClick={() => setOpen(true)} >Prescription</Button>
                            <Dialog
                                        open={open}
                                        onClose={() => setOpen(false)}
                                        aria-labelledby='dialog-title'
                                        aria-describedby='dialog-description'>
                                        <DialogTitle id='dialog-title'>Do you want to issue a prescription for this patient?</DialogTitle>
                                        <DialogActions>
                                            <Button onClick={onSubmitForm}>OK</Button>
                                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                                        </DialogActions>
                                    </Dialog>
                        </Stack>
                    </Stack>
                </Paper>
            </Stack>
        </Grid>
    )
}

export default AppointmentDetails