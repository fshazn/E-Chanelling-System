import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AdminNavBar } from '../../components/AdminNavBar'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManagePatients = () => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [patients, setPatients] = useState([])
    useEffect(() => {
        loadPatients();
    }, [])
    const loadPatients = async () => {
        const result = await axios.get(`http://localhost:8081/patients`)
        setPatients(result.data);
        console.log(result.data);
    }
    const deletePatient = async (patientId) => {
        await axios.delete(`http://localhost:8081/patients/${patientId}`)
        loadPatients();
    }
    return (
        <Grid>
            <AdminNavBar />
            <Paper className='patientpaper'>
                <TableContainer>
                    <TableHead >
                        <TableRow  >
                            <TableCell></TableCell>
                            <TableCell><Typography className='doctorcell' fontWeight='bold' align='left'>Patient Name</Typography></TableCell>
                            <TableCell><Typography className='doctorcell' fontWeight='bold' align='left'>Age</Typography></TableCell>
                            <TableCell><Typography className='doctorcell' fontWeight='bold' align='left'>Gender</Typography></TableCell>
                            <TableCell><Typography className='doctorcell' fontWeight='bold' align='left'>Blood Group</Typography></TableCell>
                            <TableCell><Typography className='doctorcell' fontWeight='bold' align='left'>Email</Typography></TableCell>
                            <TableCell><Typography className='doctorcell' fontWeight='bold' align='left'>Contact</Typography></TableCell>
                            <TableCell><Typography className='doctorcell' fontWeight='bold' align='center'>Edit</Typography></TableCell>
                            <TableCell><Typography className='doctorcell' fontWeight='bold' align='center'>Remove</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ backgroundColor: "#9fa8da", border: 5, borderColor: "#ffeb3b" }} >
                        {
                            patients.map((patient) => (
                                <TableRow>
                                    <TableCell><Avatar src='.' /></TableCell>
                                    <TableCell align="left" width="400px">{patient.firstName + " " + patient.lastName} </TableCell>
                                    <TableCell align="left" width="400px">{patient.age}</TableCell>
                                    <TableCell align="left" width="400px">{patient.gender}</TableCell>
                                    <TableCell align="left" width="400px">{patient.bloodGroup} </TableCell>
                                    <TableCell align="left" width="400px">{patient.email}</TableCell>
                                    <TableCell align="left" width="400px">{patient.tellNo}</TableCell><TableCell >
                                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => setOpen(true)} >
                                            Edit
                                        </Button>
                                    </TableCell>
                                    <Dialog
                                        open={open}
                                        onClose={() => setOpen(false)}
                                        aria-labelledby='dialog-title'
                                        aria-describedby='dialog-description'>
                                        <DialogTitle id='dialog-title'>Do you want to edit this patient details?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id='dialog-description'>
                                                The updated patient details will be avalaible after this process!
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => { navigate(`/admin/patients/${patient.patientId}`) }}>OK</Button>
                                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                                        </DialogActions>
                                    </Dialog>
                                    <TableCell >
                                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => setOpen1(true)}>
                                            <DeleteOutlineOutlinedIcon />
                                        </Button>
                                    </TableCell>
                                    <Dialog
                                        open={open1}
                                        onClose={() => setOpen1(false)}
                                        aria-labelledby='dialog-title'
                                        aria-describedby='dialog-description'>
                                        <DialogTitle id='dialog-title'>Do you want to Remove this patient?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id='dialog-description'>
                                                The patient will be removed permanantly!
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => deletePatient(patient.patientId)}>OK</Button>
                                            <Button onClick={() => setOpen1(false)}>Cancel</Button>
                                        </DialogActions>
                                    </Dialog>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TableContainer>

            </Paper>
        </Grid>
    )
}

export default ManagePatients