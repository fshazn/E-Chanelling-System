import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { DoctorNavBar } from '../../components/DoctorNavBar'
import MedicationIcon from '@mui/icons-material/Medication';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const ViewAppointments = () => {
    const paper = {
        padding: '10px',
        backgroundColor: "#DCD6F7",
        marginLeft: "10rem",
        marginTop: "2rem",
        marginRight: "10rem",
        borderRadius: "15px"
    }
    const tableRow = {
        backgroundColor: "#F4EEFF",

    }
    const tableContainer = {
        borderRadius: "15px"
    }
    const tableCell = {
        color: "#424874",
        fontSize: "18px"
    }
    const { doctorId } = useParams();
    const { id } = useParams();
    const scheduleId = id;
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        loadAppointments();
    }, [])

    const loadAppointments = async () => {
        const result = await axios.get(`http://localhost:8080/appointments/schedules/${scheduleId}`)
        setAppointments(result.data);
        console.log(result.data);
    }
    const addnewPrescription = async (appointmentId) => {
        await axios.post("http://localhost:8082/prescriptions", {
            doctorId:doctorId,
            scheduleId:scheduleId,
            appointmentId:appointmentId,
        })
         navigate(`/doctors/${doctorId}/schedules/${scheduleId}/appointments/${appointmentId}`)
        setOpen(false);
    };
    return (
        <div><DoctorNavBar />
            <Grid container justifyItems="center" justifyContent="center">


                <Paper style={paper}>
                    <Typography variant='h5' fontWeight='bold' textAlign='center' style={{ color: "#424874" }}>Appointments</Typography>
                    <TableContainer style={tableContainer} >
                        <TableBody sx={{ backgroundColor: "lightgray", border: 1, borderColor: "primary.main" }} >
                            {
                                appointments.map((appointment, index) => (
                                    <TableRow style={tableRow} >
                                        <TableCell align="left" width="300px" style={tableCell} key={index} >{index + 1}</TableCell>
                                        <TableCell align="left" width="300px" style={tableCell}>{appointment.firstName + "  " + appointment.lastName}</TableCell>
                                        <TableCell align="left" width="300px" style={tableCell}>{appointment.age}</TableCell>
                                        <TableCell align="left" width="300px" style={tableCell}>{appointment.gender}</TableCell>
                                        <TableCell align="left" width="300px" style={tableCell}>{appointment.email}</TableCell>
                                        <TableCell align="left" width="300px" style={tableCell}>{appointment.contact}</TableCell>
                                        <TableCell width="250px">
                                            <Button style={{ backgroundColor: "#424874" }} variant='contained' onClick={() => addnewPrescription(appointment.appointmentId)}>
                                                <MedicationIcon /></Button>
                                        </TableCell>
                                        {/* <Dialog
                                            open={open}
                                            onClose={() => setOpen(false)}
                                            aria-labelledby='dialog-title'
                                            aria-describedby='dialog-description'>
                                            <DialogTitle id='dialog-title'>Do you want to issue a prescription?</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id='dialog-description'>
                                                    A prescription will be issued for relevant patient
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={() => addnewPrescription(appointment.appointmentId)}>OK</Button>
                                                <Button onClick={() => setOpen(false)}>Cancel</Button>
                                            </DialogActions>
                                        </Dialog> */}
                                    </TableRow>

                                ))
                            }
                        </TableBody>
                    </TableContainer>

                </Paper>
            </Grid>

        </div>
    )
}

export default ViewAppointments