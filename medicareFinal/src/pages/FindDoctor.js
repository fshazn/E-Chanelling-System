import { Avatar, Button, Grid, Paper, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import { useNavigate, useParams } from 'react-router-dom';

const FindDoctor = () => {

    const paper={
        width:"60rem",
        height:"40rem",
        backgroundColor:"#DCD6F7",
        borderRadius:"20px"
    }
    const tableContainer={
        width:"40rem",
        margin:"auto",
        marginTop:"2rem",
        backgroundColor:"#F4EEFF",
        borderRadius:"15px",
    }
    const tableCell={
        fontSize:"18px",
        fontWeight:"bold",
        color:"#424874"
    }
    let navigate = useNavigate();
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        loadDoctors();
    }, [])
    const { specializationId } = useParams()

    const loadDoctors = async () => {
        const result = await axios.get(`http://localhost:8081/doctors/specializations/${specializationId}`)
        setDoctors(result.data);
        console.log(result.data);
    }
    return (
        <Grid container justifyContent="center">
            <Navbar />
            <Grid marginTop="100px" container justifyItems="center" justifyContent="center" spacing={3} alignItems="center">
                <Paper style={paper}  >
                <TableContainer style={tableContainer}  >
                    
                    <TableBody >
                        {
                            doctors.map((doctor) => (
                                <TableRow >
                                    <TableCell align="center" width="200px" style={tableCell} >{doctor.doctorId}</TableCell>
                                    <TableCell><Avatar alt={doctor.firstName} src='.'  style={tableCell}/></TableCell>
                                    <TableCell width="800px" align="left" style={tableCell}>
                                       Dr. {doctor.firstName + " " + doctor.lastName}
                                    </TableCell>
                                    <TableCell  ><Button style={{ backgroundColor: "#424874", color:"#A6B1E1" }} variant="contained" onClick={() => { navigate(`/specializations/${specializationId}/doctors/${doctor.doctorId}/schedules`) }}>
                                        <BookOnlineOutlinedIcon />Channel</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TableContainer>
                </Paper>
                
            </Grid>
        </Grid>
    )
}

export default FindDoctor