
import { Button, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignupNavBar } from '../components/SignupNavBar'
const SignUp = () => {
    let navigate = useNavigate();

    const [patient, setPatient] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        bloodGroup: "",
        email: "",
        tellNo: "",
        username: "",
        password: ""   
      });
      const { firstName, lastName, age, gender,bloodGroup,email,tellNo, username, password} = patient;

      const onInputChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
      };
      const onSubmitForm = async (e) => {
        
        await axios.post("http://localhost:8081/patients", patient)
        
      };
    return (
        <div><SignupNavBar />
            <Grid container justifyContent="center" marginTop="3rem">
            <form onSubmit={(e) => onSubmitForm(e)}>
                <Paper style={{ height: "35rem", width: "50rem" }}>
                    <Typography variant='h5' textAlign="center" marginTop="2rem" fontWeight="bold">Register</Typography>
                    <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                        <TextField label="First Name" sx={{ textAlign: 'center', width: '20rem' }} name='firstName' value={firstName} onChange={(e) => onInputChange(e)} />
                        <TextField label="Last Name" sx={{ textAlign: 'center', width: '20rem' }} name='lastName' value={lastName} onChange={(e) => onInputChange(e)}/>
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                        <TextField label="Age" sx={{ textAlign: 'center', width: '20rem' }} name='age' value={age} onChange={(e) => onInputChange(e)}/>
                        <TextField label="Select Blood Group" select sx={{ textAlign: 'left', width: '20rem' }} name='bloodGroup' value={bloodGroup} onChange={(e) => onInputChange(e)}>
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="O+">O+</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>
                        </TextField>
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='30px' marginLeft='5rem' container justifyContent="left">
                        <FormControl sx={{ width: '20rem' }}>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name='gender' value={gender} onChange={(e) => onInputChange(e)} 
                            >
                                <FormControlLabel sx={{ width: '6rem' }} value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel sx={{ width: '6rem' }} value="Male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
                        <TextField label="Email" sx={{ textAlign: 'center', width: '20rem' }} name='email' value={email} onChange={(e) => onInputChange(e)}/>
                        <TextField label="Contact" sx={{ textAlign: 'center', width: '20rem' }} name='tellNo' value={tellNo} onChange={(e) => onInputChange(e)}/>
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
                        <TextField label="Username" sx={{ textAlign: 'center', width: '20rem' }} name='username' value={username} onChange={(e) => onInputChange(e)}/>
                        <TextField label="Password" sx={{ textAlign: 'center', width: '20rem' }} name='password' value={password} onChange={(e) => onInputChange(e)}/>
                    </Stack>
                    <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' type='submit'>Register</Button>
                        <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => { navigate("/") }}>Cancel</Button>
                    </Stack>
                </Paper>
                </form>
            </Grid>
        </div>
    )
}

export default SignUp