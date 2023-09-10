import { Button, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const MyBookings = () => {
    const mybookingsSearchPaper={
        width:"20rem",
        borderRadius:"15px",
        marginTop:"2rem",
        padding:"10px"
    }
    const bookingViewPaper={
        width:"60rem",
        borderRadius:"15px",
        marginTop:"2rem",
        padding:"10px"
    }
    const typography={
        fontSize:"16px",
        color:"#424874",
        fontWeight:"bold",
        textAlign:"center"
    }
    const searchTextField={
        width:"15rem",
        marginLeft:"40px",
    }
    const scheduleCell={
        width:"200px"
    }
    const searchButton={
        
    }
    const[show, setShow] = useState(false)
    const[contact, setContact] = useState('')
    const[appointment,setAppointment]=useState([])
    const[doctors,setDoctors]=useState([])
    const[schedules,setSchedules]=useState([])
    const handleContact = (e)=>{
        setContact(e.target.value)
      }

      const handleApi =async () =>{
        const result = await axios.get(`http://localhost:8080/appointments/${contact}`
        ).then(result=>{
            setAppointment(result.data)
            console.log(result.data)
            setShow(true)
        }).catch(error =>{
            console.log(error)
            alert('There is no any bookings for this contact number')

        })
        const result1 = await axios.get(`http://localhost:8080/appointments/doctors/${contact}`
        ).then(result1=>{
            setDoctors(result1.data)
            console.log(result1.data)
            
        })
        const result2 = await axios.get(`http://localhost:8080/appointments/schedules/${contact}/details`
        ).then(result2=>{
            setSchedules(result2.data)
            console.log(result2.data)
            
        })
      }
      
  return (
    
        <Grid container justifyItems="center" justifyContent="center">
        <Navbar/>
        <Stack>
       
        <Stack>
            <form>
            
            <Paper style={mybookingsSearchPaper}>
                <Typography style={typography}>Enter your contact number</Typography>
                <Stack direction='row' spacing={1}>
                <TextField label="Contact Number" style={searchTextField} value={contact} onChange={handleContact} required />
                <Button style={searchButton} onClick={handleApi}><SearchIcon fontSize='large'/></Button>
                </Stack>   
            </Paper>
            </form>
        </Stack>
        {show ?

       
            <Paper style={bookingViewPaper}>
                <Stack direction='row'>
                    
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                    {
                                schedules.map((schedule) => (
                        <TableRow>
                            <TableCell style={scheduleCell}>{schedule[0][0]}</TableCell>
                            <TableCell style={scheduleCell}>{schedule[0][1]}</TableCell>
                        </TableRow>
                        ))
                    }
                    </TableBody>
                </TableContainer>
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>Doctor Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                                doctors.map((doctor) => (
                        <TableRow>
                            <TableCell>{"Dr. "+doctor[0][0]+" "+ doctor[0][1]}</TableCell>
                        </TableRow>
                        ))
                    }
                    </TableBody>
                </TableContainer>
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>Appointment Number</TableCell>
                            <TableCell>Patient Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                                appointment.map((ap) => (
                        <TableRow >
                            <TableCell  >{ap.appointmentNo}</TableCell>
                            <TableCell >{ap.firstName+" "+ap.lastName}</TableCell>
                        </TableRow>
                        ))
                    }
                    </TableBody>
                </TableContainer>
                </Stack>
            </Paper>
         : null}
        </Stack>
        </Grid>
    
  )
}

export default MyBookings