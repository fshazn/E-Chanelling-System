import { Button, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DoctorNavBar } from '../../components/DoctorNavBar'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import axios from 'axios';
import './Styled.css';
const DoctorHome = () => {
const paper={
          padding: '10px',
          backgroundColor: "#DCD6F7",
          marginLeft: "10rem",
          marginTop: "2rem",
          marginRight: "10rem",
          borderRadius:"15px"
}
const tableRow={
  backgroundColor:"#F4EEFF",
  
}
const tableContainer={
  borderRadius:"15px"
}
const tableCell={
  color:"#424874",
  fontSize:"18px"
}

  const { doctorId } = useParams()

  let navigate = useNavigate();
    const [schedules, setSchedules] = useState([])
    
    useEffect(() => {
        loadSchedules();
    }, [])

    const loadSchedules = async () => {
        const result = await axios.get(`http://localhost:8080/schedules/${doctorId}`)
        setSchedules(result.data);
        console.log(result.data);
    }
  return (
    <div><DoctorNavBar />
      <Grid container justifyItems="center" justifyContent="center">


        <Paper style={paper}>
          <Typography variant='h5' fontWeight='bold' textAlign='center' style={{ color: "#424874" }}>Schedule List</Typography>
          <TableContainer style={tableContainer} >
            <TableBody sx={{ backgroundColor: "lightgray", border: 1, borderColor: "primary.main" }} >
            {
                            schedules.map((schedule) => (
              <TableRow style={tableRow} >
                <TableCell align="left" width="300px" style={tableCell}>{schedule.date}</TableCell>
                <TableCell align="left" width="300px" style={tableCell}>{schedule.time}</TableCell>
                <TableCell width="250px">
                  <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={()=> {navigate(`/doctors/${schedule.doctorId}/schedules/${schedule.id}/appointments`)}}>
                  <TurnedInNotIcon />View Appointments</Button>
                </TableCell>
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

export default DoctorHome