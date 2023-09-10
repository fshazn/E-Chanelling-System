import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';

const PatientSignup = () => {

    const paper = {
        width: "50rem",
        height: "35rem",
        backgroundColor: "#DCD6F7",
        borderRadius: "20px",
        marginTop: "1rem"
    }
    const paper2 = {
        width: "20rem",
        margin: "auto",
        height: "4rem",
        backgroundColor: "#424874",

    }
    const typography = {
        color: "#F4EEFF",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "1rem"
    }
    const textField = {
        width: "20rem",
        marginTop: "20px",
        borderRadius: "15px",
        backgroundColor: "#DCD6F7"

    }
    const appNo={
        color: "#424874",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "1rem"
    }

    let navigate = useNavigate();
    const { id } = useParams();
    const { doctorId } = useParams();
    const { specializationId } = useParams();
    const [appointmentCount,setAppointmentCount]=useState()

    const [patient, setPatient] = useState({
        scheduleId: id,
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        email: "",
        contact: "",
        doctorId: doctorId,
        appointmentNo:""
    });
    const { firstName, lastName, age, gender, email, contact ,appointmentNo} = patient;

    useEffect(() => {
        loadAppointmentCount();
    },)
    const loadAppointmentCount = async () => {
        const result = await axios.get(`http://localhost:8080/appointments/${id}/count`)
        setAppointmentCount(result.data);
        console.log(result.data);
        patient.appointmentNo=appointmentCount+1;
    }

    const onInputChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };
    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/appointments", patient,appointmentCount)
        navigate(`/specializations/${specializationId}/doctors/${doctorId}/schedules`)
    };
    return (
        <div>
            <Navbar />
            <Grid container justifyContent="center" marginTop="2rem">
                <Stack>
                    <Paper style={paper2}>
                        <Typography style={typography}>Appointment</Typography>
                    </Paper>
                    <form onSubmit={(e) => onSubmitForm(e)}>
                        <Paper style={paper}>
                        <Typography style={appNo}>Appointment No: {appointmentCount+1}</Typography>
                            <Stack direction='row' container justifyContent="left">
                                <Typography sx={{ marginLeft: "65px", marginTop: "2rem" }}>First Name</Typography>
                                <Typography sx={{ marginLeft: "17rem", marginTop: "2rem" }}>Last Name</Typography>
                            </Stack>
                            <Stack direction='row' spacing={4} container justifyContent="center">
                                <TextField style={textField} variant="outlined" label="First Name" name='firstName' value={firstName} onChange={(e) => onInputChange(e)} required />
                                <TextField style={textField} variant="outlined" label="Last Name" name='lastName' value={lastName} onChange={(e) => onInputChange(e)} required />
                            </Stack>
                            <Stack direction='row' container justifyContent="left">
                                <Typography sx={{ marginLeft: "65px", marginTop: "2rem" }}>Aage</Typography>
                                <Typography sx={{ marginLeft: "312px", marginTop: "2rem" }}>Gender</Typography>
                            </Stack>
                            <Stack direction='row' spacing={4} container justifyContent="center">
                                <TextField style={textField} variant="outlined" label="Age" name='age' value={age} onChange={(e) => onInputChange(e)} required />
                                <FormControl sx={{ width: '20rem' }}>

                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name='gender' value={gender} onChange={(e) => onInputChange(e)} required
                                    >
                                        <FormControlLabel sx={{ width: '6rem', marginTop: "1rem", marginLeft: "1px" }} value="Female" control={<Radio />} label="Female" />
                                        <FormControlLabel sx={{ width: '6rem', marginTop: "1rem" }} value="Male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </Stack>
                            <Stack direction='row' container justifyContent="left">
                                <Typography sx={{ marginLeft: "65px", marginTop: "2rem" }}>Email</Typography>
                                <Typography sx={{ marginLeft: "312px", marginTop: "2rem" }}>Contact</Typography>
                            </Stack>
                            <Stack direction='row' spacing={4} container justifyContent="center">
                                <TextField style={textField} variant="outlined" label="Email" name='email' value={email} onChange={(e) => onInputChange(e)} required />
                                <TextField style={textField} variant="outlined" label="Contact" name='contact' value={contact} onChange={(e) => onInputChange(e)} required />
                            </Stack>
                            <Stack direction='row' spacing={7} marginTop='60px' container justifyContent="center">
                                <Button style={{ backgroundColor: "#e91e63" }} variant='contained' type='submit'>Continue</Button>
                                <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => { navigate(`/specializations/${specializationId}/doctors/${doctorId}/schedules`) }}>Cancel</Button>
                            </Stack>

                        </Paper>
                    </form>
                </Stack>
            </Grid>
        </div>
    )
}

export default PatientSignup