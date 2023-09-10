import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignupNavBar } from '../../components/SignupNavBar'

const StaffSignIn = () => {
const paper={
    height:"30rem",
    width:"40rem",
    backgroundColor:"#DCD6F7",
    borderRadius:"15px",
    color:"#424874"
}
    let navigate = useNavigate();
    const[username, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const [staffs, setStaffs] = useState({
        staffId:"",
    });
    const{staffId}=staffs;
    const initialvalue = {username:"",password:""};
    const[formValue, serFormValue]= useState(initialvalue);
    const handleUserName = (e)=>{
        setUserName(e.target.value)
      }
      const handlePassword = (e)=>{
        setPassword(e.target.value)
      }
      const handleApi = () =>{
          console.log({username,password})
            axios.post('http://localhost:8081/staff-login',{
                username: username,
                password: password
            })
            .then(result =>{
                console.log(result.data)
                setStaffs(result.data);
                //alert('success')
                navigate(`/staff/${result.data.staffId}`)
            }).catch(error =>{
                console.log(error)
                alert('Invalid Username or Password')
            })
          }
        
  return (
    <div><SignupNavBar/>
    <Grid container justifyContent="center" marginTop="3rem">
                <Paper style={paper}>
                    <Typography variant='h5' textAlign="center" marginTop="2rem" fontWeight="bold">Sign In</Typography>
                    <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                        <TextField label="Username" sx={{ textAlign: 'center', width: '20rem' }} value={username} onChange={handleUserName} required  />
            
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                        <TextField label="Password" sx={{ textAlign: 'center', width: '20rem' }} value={password} onChange={handlePassword} type="password"  required/>
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' type='submit' onClick={handleApi}>Sign In</Button>
                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => { navigate("/") }}>Cancel</Button>
                    </Stack>
                </Paper>
            </Grid>
    </div>
  )
}

export default StaffSignIn