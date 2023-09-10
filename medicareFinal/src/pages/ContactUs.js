import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'

const ContactUs = () => {
    const paper={
        marginTop:"2rem",
        width:"30rem"
    }
    const typo={
        fontSize:"18px",
        fontWeight:"bold",
        color:"#424874",
        textAlign:"center"
    }
  return (
    <Grid container justifyContent='center'><Navbar/>
    <Paper style={paper}>
        <Typography style={typo}>COHDSE221F-005 : Sandaru Perera</Typography>
        <Typography style={typo}> COHDSE221F-006 : Fathima Shazna</Typography>
        <Typography style={typo}> COHDSE221F-027 : Sadamal Senanayake</Typography>
        <Typography style={typo}> COHDSE221F-038 : Rukshan Tharindu</Typography>
    </Paper>
    </Grid>
  )
}

export default ContactUs