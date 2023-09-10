import { Avatar, Grid, MenuItem, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StaffNavBar from '../../components/StaffNavBar'

const StaffDoctors = () => {
    //Css
    const doctorPaper = {
        width: "60rem",
        backgroundColor: "#424874",
        borderRadius: "15px",
        marginTop: "2rem"
    }
    const tableHead = {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "#424874"
    }
    const tableContainer = {
        width: "60rem",
        margin: "auto",
        borderRadius: "15px"
    }
    //
    useEffect(() => {
        loadSpeciality()
    }, [])
    const [speciality, setSpeciality] = useState([]);
    const [selects, setSelect] = useState({
        specializationId: ""
    });
    const { specializationId } = selects;

    const loadSpeciality = async () => {
        const result = await axios.get("http://localhost:8081/specializations")
        setSpeciality(result.data)
    };
    const onInputChange = (e) => {
        setSelect({ ...selects, [e.target.name]: e.target.value });
    };
    //getting all doctors//
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        loadDoctors()
    }, [])
    const loadDoctors = async () => {
        const result = await axios.get("http://localhost:8081/doctors")
        setDoctors(result.data)
    };
    return (
        <Grid>
            <StaffNavBar />
            <TextField label='Select Specialization' select name='specializationId' value={specializationId} onChange={(e) => onInputChange(e)} sx={{ textAlign: 'center', width: '20rem' }} required >
                {speciality.map((specialityResult, index) => (
                    <MenuItem value={specialityResult.id}>{specialityResult.name}</MenuItem>
                ))
                }
            </TextField>
            <Stack>
            <TableContainer style={tableContainer}>
                    <TableHead >
                        <TableRow >
                            <TableCell style={tableHead}></TableCell>
                            <TableCell style={tableHead} >Doctor Name</TableCell>
                            <TableCell style={tableHead}>Email</TableCell>
                            <TableCell style={tableHead}>Contact</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ backgroundColor: "#DCD6F7" }} >
                        {
                            doctors.map((doctor) => (
                                <TableRow>
                                    <TableCell><Avatar alt={doctor.firstName} src='.' /></TableCell>
                                    <TableCell align="left" width="400px">Dr. {doctor.firstName + " " + doctor.lastName}</TableCell>
                                    <TableCell align="left" width="400px">{doctor.email}</TableCell>
                                    <TableCell align="left" width="400px">+94{doctor.contact}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TableContainer>

            </Stack>
        </Grid>
    )
}

export default StaffDoctors