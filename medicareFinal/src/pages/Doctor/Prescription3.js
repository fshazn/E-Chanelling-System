import { Button, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import { DoctorNavBar } from '../../components/DoctorNavBar'

const Prescription3 = () => {
    const prescriptionPaper={
        width:"40rem",
        height:"40rem",
        backgroundColor:"#DCD6F7",
        borderRadius:"15px",
        marginTop:"2rem"
    }
    const prescriptionTextField={
        width:"400px",
    }
   const prescriptionTypo={
        fontSize:"20px",
        fontWeight:"bold",
        color:"#424874",
        textAlign:"center"
   }
   const prescriptionAddButton={
        backgroundColor:"#424874",
        color:"white",
        height:"2rem",
        marginTop:"8rem"
   }
   const prescriptionTableHead={
        backgroundColor:"#424874"
   }
   const prescriptionTableCell={
        width:"250px",
        color:"white",
        fontWeight:"bold"
   }
   const divstyle={
    fontWeight:"bold",
    border:"2px",
    borderColor:"black"
   }
   const prescriptionButton={
    
    color:"white",
    backgroundColor:"#424874"
   }
   let navigate =useNavigate();
    const { doctorId } = useParams()
    const { scheduleId } = useParams()
    const { patientId } = useParams()
    const { appointmentId } = useParams()
    const [duration, setduration] = useState('')
    const [medicines, setMedicines] = useState([]);
    const [searchedMeicine, setSearchedMedicine] = useState('')
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
    })
    useEffect(() => {
        loadMedicines();
    }, [])
    const loadMedicines = async () => {
        const result = await axios.get(`http://localhost:8082/medicines`)
        setMedicines(result.data);
        console.log(result.data);
    }
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onSearch = async (searchTerm) => {
        setValue(searchTerm)
        const result = await axios.get(`http://localhost:8082/medicines/${searchTerm}/details`)
        setSearchedMedicine(result.data)
        console.log(result.data)
        console.log('search', searchTerm);
    }
    const submitItem = () => {
        console.log({ duration, searchedMeicine });
        axios.post(`http://localhost:8082/prescription-items`, {
            appointmentId: appointmentId,
            medicineId: searchedMeicine,
            duration: duration
        });  
        setValue('');
        setduration('');
        loadDuration();
        loadMedicineItems();
        window.location.reload();
    }
    const [medicineItems, setMedicineItems] = useState([])
    const [prescDuration, setPrescDuration] = useState([])
    useEffect(() => {
        loadMedicineItems();
    }, [])
    const loadMedicineItems = async () => {
        const result = await axios.get(`http://localhost:8082/prescriptions/${appointmentId}/prescription-items`)
        setMedicineItems(result.data);
        console.log(result.data);
    }
    useEffect(() => {
        loadDuration();
    }, [])
    const loadDuration = async () => {
        const result = await axios.get(`http://localhost:8082/prescription-items/${appointmentId}`)
        setPrescDuration(result.data);
        console.log(result.data);
    }
    const handleDuration = (e) => {
        setduration(e.target.value)
    }
    const [value, setValue] = useState('')
    return (
        <Grid container justifyContent='center'>
            <DoctorNavBar/>
            <Stack>
                <Paper style={prescriptionPaper}>
                <Stack>
                    <Typography style={prescriptionTypo}>Prescription</Typography>
                    <Stack direction='row' spacing={2} >
                    <Stack marginTop="2rem" marginLeft="5rem" spacing={2}>
                    <TextField style={prescriptionTextField} label='Medicine Name' value={value} onChange={onChange} />
                    <div>
                        {
                            medicines.filter(medicine => {
                                const searchTerm = value.toLowerCase();
                                const name = medicine.name.toLowerCase();
                                return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                            }).slice(0,4)
                                .map((medicine) => (
                                    <div onClick={() => onSearch(medicine.name)} key={medicine.id} style={divstyle}>
                                        {medicine.name}
                                    </div>
                                ))
                        }
                    </div>
                    <TextField  label='Duration'value={duration} onChange={handleDuration} />
                    
                    </Stack>
                    <Button onClick={submitItem} style={prescriptionAddButton}>Add</Button>
                    </Stack>
                    
                </Stack>
                <Stack direction='row' spacing={0} ref={componentRef}>
                    <Stack marginLeft="5rem" marginTop="2rem">
                    <TableContainer >
                        <TableHead style={prescriptionTableHead}>
                            <TableRow>
                                <TableCell style={prescriptionTableCell}>Name</TableCell>
                                <TableCell style={prescriptionTableCell}>Dosage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                medicineItems.map((md) => (
                                    <TableRow>
                                        <TableCell> {md[0][0]}</TableCell>
                                        <TableCell> {md[0][1]}</TableCell>
                                    </TableRow>
                                ))
                            }
                            <TableRow>
                            </TableRow>
                        </TableBody>
                    </TableContainer>
                    </Stack>
                    <Stack marginTop="2rem" marginRight="5rem">
                    <TableContainer>
                        <TableHead style={prescriptionTableHead}>
                            <TableRow>
                                <TableCell style={prescriptionTableCell}>Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                prescDuration.map((pd) => (
                                    <TableRow>
                                        <TableCell width="250px"> {pd.duration}</TableCell>
                                    </TableRow>
                                ))

                            }
                            <TableRow>
                            </TableRow>
                        </TableBody>
                    </TableContainer>
                    </Stack>
                </Stack>
                <Stack direction='row' spacing={2} marginLeft="15rem" marginTop="2rem">
                <Button style={prescriptionButton} onClick={handlePrint}>Save</Button>
                <Button onClick={() => { navigate(`/doctors/${doctorId}/schedules/${scheduleId}/appointments`) }} style={prescriptionButton}>Cancel</Button>
                </Stack>
                </Paper>
            </Stack>
        </Grid>
    )
}

export default Prescription3