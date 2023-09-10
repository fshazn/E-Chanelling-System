import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect,useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StaffNavBar from '../../components/StaffNavBar'
import { useReactToPrint } from 'react-to-print'
import { fontSize } from '@mui/system'

const AppBillPrint = () => {
    const recreiptTypo={
        color:"#424874",
        fontSize:"20px",
        textAlign:"center",
        fontWeight:"bold"
    }
    const receipt={
        width:"35rem",
        height:"30rem",
        backgroundColor:"#DCD6F7",
        padding:"15px"
    }
    const button ={
        backgroundColor:"#424874",
        color:"white"
    }
    const {appointmentId}=useParams()
    const[apps,setapps]=useState([]);
    const[doctors,setDoctors]=useState([]);
    const componentRef = useRef();
    const[chargers,setChargers]=useState({
        doctorCharge:"",
        bookingCharge:"",
        medicareCharge:""
    });
    const{doctorCharge,bookingCharge,medicareCharge}=chargers;
    


    useEffect(() => {
        loadApps();
    }, [])

    const loadApps = async () => {
        const result = await axios.get(`http://localhost:8080/appointments/${appointmentId}/details`)
        setapps(result.data);
        console.log(result.data);
        const result1 = await axios.get(`http://localhost:8081/doctors/${result.data.doctorId}`)
        console.log(result1.data);
        setDoctors(result1.data);

    }
    useEffect(() => {
        loadChargers();
    },[])

    const loadChargers = async () => {
        const result3 = await axios.get(`http://localhost:8083/chargers/${1}`)
        setChargers(result3.data);
        console.log(result3.data);
        

    }
function saveBill(e){
    e.preventDefault();
    axios.post("http://localhost:8083/bills", {
        date:date,
        appointmentId:appointmentId,
        doctorId:doctors.doctorId,
        contact:apps.contact,
        total:chargers.bookingCharge+chargers.doctorCharge+chargers.medicareCharge
    })
}
const handlePrint = useReactToPrint({
    content:()=>componentRef.current,
})
    
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
 let navigate = useNavigate();
  return (
    <Grid container justifyContent='center'>
<StaffNavBar/>
<Stack marginTop="2rem">
    <Paper >
        <div ref={componentRef} style={receipt}>
        <Typography style={recreiptTypo}>RECEIPT</Typography>
        <Stack direction='row' spacing={2} marginTop="1rem" marginLeft="3rem">
            <Grid item xs={4}>
            <Typography>Date</Typography>
            </Grid>
            <Grid item xs={8}>
            <Typography>: {date}</Typography>
            </Grid>
        </Stack>
        <Stack direction='row' spacing={2} marginTop="1rem" marginLeft="3rem">
        <Grid item xs={4}>
        <Typography>Doctor Name</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography>: Dr.{doctors.firstName+" "+doctors.lastName}</Typography>
        </Grid>
        </Stack>
        <Stack direction='row' spacing={2} marginTop="1rem" marginLeft="3rem">
        <Grid item xs={4}>
        <Typography>Appointment Number</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography>: {apps.appointmentNo}</Typography>
        </Grid>
        </Stack>
        <Stack direction='row'spacing={2} marginTop="1rem" marginLeft="3rem">
        <Grid item xs={4}>
        <Typography>Patient Name</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography>: {apps.firstName+" "+apps.lastName}</Typography> 
        </Grid>
        </Stack>
        <Stack direction='row'spacing={2} marginTop="1rem" marginLeft="3rem">
        <Grid item xs={4}>
        <Typography>Contact Number</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography>: {apps.contact}</Typography>
        </Grid>
        </Stack>
        <Stack direction='row'spacing={2} marginTop="1rem" marginLeft="3rem">
        <Grid item xs={4}>
        <Typography>Doctor Charges</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography>: Rs.{chargers.doctorCharge}.00</Typography>
        </Grid>
        </Stack>
        <Stack direction='row'spacing={2} marginTop="1rem" marginLeft="3rem">
        <Grid item xs={4}>
        <Typography>Booking Charges</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography>: Rs.{chargers.bookingCharge}.00</Typography>
        </Grid>
        </Stack>
        <Stack direction='row'spacing={2} marginTop="1rem" marginLeft="3rem">
        <Grid item xs={4}>
        <Typography>Medical Center Charges</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography>: Rs.{chargers.medicareCharge}.00</Typography>
        </Grid>
        </Stack>
        <Stack direction='row' spacing={2} marginTop="1rem" marginLeft="3rem">
        <Grid item xs={4}>
        <Typography>Total Charges</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography>: Rs.{chargers.bookingCharge+chargers.doctorCharge+chargers.medicareCharge}.00</Typography>
        </Grid>
        </Stack>
        </div>
        <Stack direction='row' spacing={2} marginTop="1rem" marginLeft="12rem" marginBottom="1rem">
        <Button onClick={saveBill} style={button}>Save</Button>
    <Button onClick={handlePrint} style={button}>Print</Button>
    <Button onClick={() => { navigate(`/staff/appointments`) }} style={button}>Cancel</Button>
    </Stack>
    </Paper>
    
</Stack>
    </Grid>
  )
}

export default AppBillPrint