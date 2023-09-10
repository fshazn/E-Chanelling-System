import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AdminNavBar } from '../../components/AdminNavBar'
import './Admin.css'
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'
import { Stack } from '@mui/system'

const Doctors = () => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        loadDoctors();
    }, [])
    const { specializationId } = useParams()
    const { doctorId } = useParams()

    const loadDoctors = async () => {
        const result = await axios.get(`http://localhost:8081/doctors/specializations/${specializationId}`)
        setDoctors(result.data);
        console.log(result.data);
    }
    const deleteDoctor = async (doctorId) => {
        await axios.delete(`http://localhost:8081/doctors/${doctorId}`)
        loadDoctors();
        setOpen(false);
    }
    const doctorPaper = {
        width: "60rem",
        backgroundColor: "#424874",
        borderRadius: "15px",
        marginTop: "2rem"
    }
    const tableHead = {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "#424874"
    }
    const tableContainer = {
        width: "60rem",
        margin: "auto",
        borderRadius: "15px"
    }
   const addDcotorPaper={
    width:"15rem",
    height:"2rem",
    marginTop:"2rem",
    padding:"10px",
    marginBottom:"1rem"
   }
    return (
        <Grid container justifyContent="center" justifyItems="center">
            <AdminNavBar />
            <Stack>
                <Paper style={addDcotorPaper}>
                    <Stack direction='row'>
                        <Typography variant='h6'>Add New Doctor: </Typography>
                        <Button variant='contained' size='small' sx={{ marginLeft: '1rem' }} onClick={() => { navigate(`/admin/specialities/${specializationId}/doctors/new-doctor`) }} ><AddIcon /></Button>
                    </Stack>
                </Paper>

                <TableContainer style={tableContainer}>
                    <TableHead >
                        <TableRow  >
                            <TableCell style={tableHead}></TableCell>
                            <TableCell style={tableHead} >Doctor Name</TableCell>
                            <TableCell style={tableHead}>Email</TableCell>
                            <TableCell style={tableHead}>Contact</TableCell>
                            <TableCell style={tableHead}>Edit</TableCell>
                            <TableCell style={tableHead}>Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ backgroundColor: "#DCD6F7" }} >
                        {
                            doctors.map((doctor) => (
                                <TableRow>
                                    <TableCell><Avatar alt={doctor.firstName} src='.' /></TableCell>
                                    <TableCell align="left" width="400px">Dr. {doctor.firstName + " " + doctor.lastName}</TableCell>
                                    <TableCell align="left" width="400px">{doctor.email}</TableCell>
                                    <TableCell align="left" width="400px">+94{doctor.contact}</TableCell>
                                    <TableCell >
                                        <Button style={{ backgroundColor: "#424874" }} variant='contained' onClick={()=> setOpen1(true)}>
                                            <EditIcon />
                                        </Button>
                                    </TableCell>
                                    <Dialog
                                        open={open1}
                                        onClose={() => setOpen1(false)}
                                        aria-labelledby='dialog-title'
                                        aria-describedby='dialog-description'>
                                        <DialogTitle id='dialog-title'>Do you want to edit details?</DialogTitle>
                                        <DialogActions>
                                            <Button onClick={()=> {navigate(`/admin/specialities/${specializationId}/doctors/${doctor.doctorId}/edit`)}}>OK</Button>
                                            <Button onClick={() => setOpen1(false)}>Cancel</Button>
                                        </DialogActions>
                                    </Dialog>
                                    <TableCell >
                                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => setOpen(true) }>
                                            <DeleteOutlineOutlinedIcon />
                                        </Button>
                                    </TableCell>
                                    <Dialog
                                        open={open}
                                        onClose={() => setOpen(false)}
                                        aria-labelledby='dialog-title'
                                        aria-describedby='dialog-description'>
                                        <DialogTitle id='dialog-title'>Do you want to Remove this Doctor?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id='dialog-description'>
                                                Specified doctor will be removed permanantly!
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => deleteDoctor(doctor.doctorId)}>OK</Button>
                                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                                        </DialogActions>
                                    </Dialog>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TableContainer>

            </Stack>
        </Grid>
    )
}

export default Doctors