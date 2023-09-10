import { Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AdminNavBar } from '../../components/AdminNavBar'

const AdminNewStaff = () => {
    let navigate = useNavigate();
    const [staff, setStaff] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        username: "",
        password: "",
    });
    const { firstName, lastName, email, contact, username, password } = staff;

    const onInputChange = (e) => {
        setStaff({ ...staff, [e.target.name]: e.target.value });
    };
    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/staffs", staff)
        alert('A new staff member has been added successfully')
        navigate(`/admin/staff`)
    };
    
    const addDoctorPaper={
        width:"45rem",
        height:"30rem",
        borderRadius:"15px",
        padding:"15px",
        marginTop:"2rem",
        backgroundColor:"#DCD6F7"
    }
    const addDoctortypography={
        fontWeight:"bold",
        fontSize:"20px",
        color:"#424874",
        textAlign:"center"
    }

    return (
        <Grid container justifyContent='center'>
            <AdminNavBar />
            <form onSubmit={(e) => onSubmitForm(e)}>
                <Paper style={addDoctorPaper}>
                    <Typography style={addDoctortypography}>Add New Staff Member</Typography>
                    <Grid container justifyContent='center'>
                        
                        <Stack direction='row' marginTop='2rem' spacing={2}>

                            <TextField label='First Name' className='adddoctortextfield' required name='firstName' value={firstName} onChange={(e) => onInputChange(e)} />
                            <TextField label='Last Name' className='adddoctortextfield' required name='lastName' value={lastName} onChange={(e) => onInputChange(e)} />
                        </Stack>
                        <Stack direction='row' marginTop='2rem' spacing={2}>
                            <TextField label='Email' className='adddoctortextfield' required name='email' value={email} onChange={(e) => onInputChange(e)} />
                            <TextField label='Contact' className='adddoctortextfield' required name='contact' value={contact} onChange={(e) => onInputChange(e)} />
                        </Stack>
                        <Stack direction='row' marginTop='2rem' spacing={2}>
                            <TextField label='Username' className='adddoctortextfield' required name='username' value={username} onChange={(e) => onInputChange(e)} />
                            <TextField label='Password' className='adddoctortextfield' required name='password' value={password} onChange={(e) => onInputChange(e)} />
                        </Stack>
                        <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
                            <Button style={{ backgroundColor: "#e91e63" }} variant='contained' type='submit'>Register</Button>
                            <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => { navigate(`/admin/staff`) }}>Cancel</Button>
                        </Stack>
                    </Grid>
                </Paper>
            </form>
        </Grid>
    )
}

export default AdminNewStaff