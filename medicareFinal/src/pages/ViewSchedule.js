
import { Button, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Stack } from '@mui/system'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const ViewSchedule = () => {
    const tableContainer = {
        width: "40rem",
        margin: "auto",
        marginTop: "2rem",
        backgroundColor: "#F4EEFF",
        borderRadius: "15px",
    }
    const paper = {
        width: "60rem",
        height: "40rem",
        backgroundColor: "#DCD6F7",
        borderRadius: "20px",
        marginTop: "1rem"
    }
    const tableCell = {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#424874",
        width: "400px",
        textAlign: "center"
    }
    const tableCell2 = {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#DCD6F7",
        width: "400px",
        textAlign: "center"
    }
    const tableHead = {
        backgroundColor: "#424874",
    }
    const tableBody = {
        backgroundColor: "#F4EEFF"
    }
    const button = {
        backgroundColor: "#424874",
        color: "#A6B1E1",
        width: "5rem",
    }
    const paper2 = {
        width: "20rem",

        height: "4rem",
        backgroundColor: "#424874",
        marginTop: "2rem"
    }
    const typography = {
        color: "#F4EEFF",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "1rem"
    }
    const backButton = {
        height: "4rem",
        backgroundColor: "#424874",
        marginTop: "2rem"
    }
    let navigate = useNavigate();
    const [schedules, setSchedules] = useState([])

    useEffect(() => {
        loadSchedules();
    }, [])
    const { doctorId } = useParams()
    const { specializationId } = useParams()

    const loadSchedules = async () => {
        const result = await axios.get(`http://localhost:8080/schedules/${doctorId}`)
        setSchedules(result.data);
        console.log(result.data);
    }
    
    return (
        <Grid container justifyItems="center" justifyContent="center">
            <Navbar />
            <Stack>
                <Stack direction='row' spacing={2} container justifyItems="center" justifyContent="center">
                    <Button style={backButton} onClick={() => { navigate(`/specializations/${specializationId}`) }}><ArrowBackIosNewIcon /></Button>
                    <Paper style={paper2}>
                        <Typography style={typography}>
                            Schedule List
                        </Typography>
                    </Paper>
                </Stack>


                <Paper style={paper}>
                    <TableContainer style={tableContainer}>
                        <TableHead style={tableHead} >
                            <TableRow >
                                <TableCell style={tableCell2}>Date</TableCell>
                                <TableCell style={tableCell2}>Time</TableCell>
                                <TableCell align='center'></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody style={tableBody} >
                            {
                                schedules.map((schedule) => (

                                    <TableRow>
                                        <TableCell style={tableCell}>{schedule.date}</TableCell>
                                        <TableCell style={tableCell}>{schedule.time}</TableCell>
                                        <TableCell align='center' ><Button style={button} variant='contained' onClick={() => { navigate(`/specializations/${specializationId}/doctors/${doctorId}/schedules/${schedule.id}/signin`) }}>
                                            <TurnedInNotIcon />Book</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </TableContainer>

                </Paper>
            </Stack>
        </Grid>
    )
}

export default ViewSchedule