import { Button, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { AdminNavBar } from '../../components/AdminNavBar'
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Admin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const DoctorSpeciality = () => {
    const paper = {
        padding: '10px',
        backgroundColor: "#DCD6F7",
        marginTop: "2rem",
        marginLeft: "15rem",
        borderRadius: "15px"
    }
    const typography = {
        color: "#424874",
        textAlign: "Center",
        fontSize: "20px",
        fontWeight: "bold"
    }
    const box = {
        backgroundColor: "#424874",
        width: "30rem",
        height: "30rem"
    }
    const listItem = {
        color: "white",
        fontSize: "20px",
    }
    const itemIcon = {
        color: "white",
        size: "30px"
    }
    const addSpecialization = {
        width: "20rem",
        padding: '10px',
        backgroundColor: "#DCD6F7",
        marginTop: "2rem",
        borderRadius: "15px",
       
    }
    const addTypo = {
        color: "#424874",
        fontSize: "18px",
        textAlign: "center",
        marginLeft:"2rem"
    }
    let navigate = useNavigate();
    const [doctors, setDoctors] = useState([])
    const [specializations,setSpecializations]=useState({
        name:"",
    })
    const {name}=specializations;

    useEffect(() => {
        loadDoctors();
    }, [])

    const loadDoctors = async () => {
        const result = await axios.get(`http://localhost:8081/specializations`)
        setDoctors(result.data);
        console.log(result.data);
    }
    const onInputChange = (e) => {
        setSpecializations({ ...specializations, [e.target.name]: e.target.value });
    };
    const onSubmitForm = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8081/specializations", specializations)
        loadDoctors();
        setShow(false)
    }

    const [show, setShow] = useState(false)
    return (
        <Grid container justifyContent="center" justifyItems="center" >
            <AdminNavBar />
            <Stack direction='row' spacing={2}>
            
                <Paper style={paper} >
                    <Typography style={typography} >Specializations</Typography>
                    <Box style={box}>
                        <List >
                            {
                                doctors.map((doctor) => (
                                    <ListItem style={listItem} >
                                        <ListItemButton className='itemButton' onClick={() => { navigate(`/admin/specialities/${doctor.id}/doctors`) }} >
                                            <ListItemIcon style={itemIcon}>
                                                <FolderSpecialOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText >{doctor.name}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                </Paper>
                <Stack>
                <form onSubmit={(e) => onSubmitForm(e)}>
                    <Paper style={addSpecialization}>
                        <Stack direction='row'>
                            <Typography style={addTypo}>Add new specializations</Typography>
                            <Button onClick={() => setShow(true)}><AddCircleOutlineIcon /></Button>
                        </Stack>
                        {show ?
                        <Stack spacing={2}>
                             <TextField label='Specialization Name' name='name' value={name} onChange={(e) => onInputChange(e)}/>
                             <Stack direction='row' spacing={2}>
                             <Button type='submit'>Add</Button>
                             <Button onClick={() => setShow(false)}>Cancel</Button>
                             </Stack>
                             
                        </Stack>
                       
                        : null} 
                    </Paper>
                    </form>
                </Stack>

            </Stack>

        </Grid>
    )
}

export default DoctorSpeciality