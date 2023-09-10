import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AdminNavBar } from '../../components/AdminNavBar'
import './Admin.css'
const AdminEditStaff = () => {
const editPaper={
  marginTop:"2rem",
  width:"40rem",
  height:"40rem",
  backgroundColor:"#DCD6F7",
  borderRadius:"15px"
}
const textField1={
  marginLeft:"2rem",
  width:"10rem"
}
const profileTitle={
  fontSize:"20px",
  fontWeight:"bold",
  color:"424874",
  textAlign:"center"
}
  let navigate = useNavigate();
  const{staffId}=useParams();
  const [staffs,setStaffs]= useState({
    staffId:staffId,
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    username:"",
    password:"",
  })
  const{firstName,lastName,email,contact,username,password}=staffs;
  const onInputChange = (e) => {
    setStaffs({ ...staffs, [e.target.name]: e.target.value });
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:8081/staffs", staffs)
    
  };
  useEffect(() => {
    loadStaffs();
}, [])
const loadStaffs = async () => {
    const result = await axios.get(`http://localhost:8081/staffs/${staffId}`)
    setStaffs(result.data);
    console.log(result.data);
}

  return (
    <Grid container justifyContent='center'>
        <AdminNavBar/>
        <form onSubmit={(e) => onSubmitForm(e)}>
        <Paper style={editPaper}>
            <Typography style={profileTitle}>Edit Doctor Details</Typography>
            <Stack direction='row' spacing={2} marginTop='2rem' >
            <TextField InputProps={{readOnly:true}} value="First Name:" style={textField1}/>
            <TextField label='First Name' className='textfield2' name='firstName' value={firstName} onChange={(e) => onInputChange(e)}></TextField>
            </Stack>
            <Stack direction='row' spacing={2} marginTop='2rem'>
            <TextField InputProps={{readOnly:true}} value="Last Name:" style={textField1}/>
            <TextField label='Last Name' className='textfield2' name='lastName' value={lastName} onChange={(e) => onInputChange(e)}></TextField>
            </Stack>
            <Stack direction='row' spacing={2} marginTop='2rem'>
            <TextField InputProps={{readOnly:true}} value="Email :" style={textField1}/>
            <TextField label='Email' className='textfield2' name='email' value={email} onChange={(e) => onInputChange(e)}></TextField>
            </Stack>
            <Stack direction='row' spacing={2} marginTop='2rem'>
            <TextField InputProps={{readOnly:true}} value="Contact :" style={textField1}/>
            <TextField label='Contact' className='textfield2' name='contact' value={contact} onChange={(e) => onInputChange(e)}></TextField>
            </Stack>
            <Stack direction='row' spacing={2} marginTop='2rem'>
            <TextField InputProps={{readOnly:true}} value="Username :" style={textField1}/>
            <TextField label='Username' className='textfield2' name='username' value={username} onChange={(e) => onInputChange(e)}></TextField>
            </Stack>
            <Stack direction='row' spacing={2} marginTop='2rem'>
            <TextField InputProps={{readOnly:true}} value="Password :" style={textField1}/>
            <TextField label='Password' className='textfield2'type='password' name='password' value={password} onChange={(e) => onInputChange(e)}></TextField>
            </Stack>
            <Stack direction='row' spacing={2} marginTop='2rem' container justifyContent="center" >
            <Button type='submit'>Update</Button>
            <Button onClick={()=> {navigate(`/admin/staff`)}}>Cancel</Button>
            </Stack>
        </Paper>
        </form>
    </Grid>
  )
}

export default AdminEditStaff