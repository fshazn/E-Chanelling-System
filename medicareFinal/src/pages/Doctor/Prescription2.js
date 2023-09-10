import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Styled.css'
const Prescription2 = () => {

    //Custom Styles
    const paperStyle = {
        backgroundColor: "#d1c4e9",
        borderRadius: "20px"
    }
    const typostyle = {
        color: "#283593",
        fontWeight: "bold",
        fontSize: "30px",

    }
    //Custom Styles

    //Getting Prescription Details
    const {appointmentId} = useParams()
    const appId= appointmentId;
    
    const[prescription,setPrescription]=useState([])
    useEffect(() => {
        loadPrescription();
    }, [])
    const loadPrescription= async () => {
        const result = await axios.get(`http://localhost:8082/prescriptions/appointments/${appId}`)
        setPrescription(result.data);
    }
    //Posting Data into Prescription Item
    const[prescriptionItems,setPrescriptionItems]=useState({
        prescriptionId:"1",
        medicineName:"",
        duration:""
    })
    const {medicineName,duration}=prescriptionItems;
    function onSubmit (e){
        e.preventDefault();
         axios.post("http://localhost:8082/prescription-items", prescriptionItems)
    }
    const onInputChange = (e) => {
        setPrescriptionItems({ ...prescriptionItems, [e.target.name]: e.target.value });
        console.log(prescriptionItems)
      };
  return (
    <Grid container justifyContent='center'>
        <Paper className='prescription2Paper'style={paperStyle} >
            <Typography textAlign='center'style={typostyle}>PRESCRIPTION</Typography>
            <TextField label='Medicine Name'name='medicineName' value={medicineName} onChange={(e) => onInputChange(e)} />
            <TextField label='Duration' name='duration' value={duration} onChange={(e) => onInputChange(e)}/>
            <Button onClick={onSubmit}>Add</Button>
        </Paper>
    </Grid>
  )
}

export default Prescription2