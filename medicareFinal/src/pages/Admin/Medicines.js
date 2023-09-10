import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { AdminNavBar } from '../../components/AdminNavBar'
import axios from 'axios';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Medicines = () => {
    const [open, setOpen] = useState(false)
    const [medicines, setMedicines] = useState([])
    const [show, setShow] = useState(false)
    useEffect(() => {
        loadMedicines();
    }, [])
    const loadMedicines = async () => {
        const result = await axios.get(`http://localhost:8082/medicines`)
        setMedicines(result.data);
        console.log(result.data);
    }
    const [addMedicines, setAddMedicines] = useState({
        name: "",
        dosage: "",
        price: ""
    })
    const { name, dosage, price } = addMedicines;
    const onInputChange = (e) => {
        setAddMedicines({ ...addMedicines, [e.target.name]: e.target.value });
    };
    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8082/medicines", addMedicines)
        loadMedicines();
    };
    const deleteMedicine = async (id) => {
        await axios.delete(`http://localhost:8082/medicines/${id}`)
        loadMedicines();
        setOpen(false);
    }

    const medicinePaper={
        width:"60rem",
        marginRight:"2rem",
        padding:"10px",
        borderRadius:"15px",
        backgroundColor:"#424874"
    }
    const medicineTypo={
        textAlign:"center",
        fontSize:"20px",
        fontWeight:"bold",
        color:"#F4EEFF",
    }
    const tableHead={
        backgroundColor:"#DCD6F7",
    }
    const tableHeadCell ={
        fontSize:"14px",
        fontWeight:"bold",
        width:"400px"
    }
    const tableBodyCell={
        width:"400px",
        backgroundColor:"#F4EEFF"
    }
    const addMedicinepaper={
        width:"20rem",
        padding:"10px",
        borderRadius:"15px",
    }
    const addMedicineTextField={
        width:"20rem"
    }
    const addMedicineTypo={
        color:"#424874",
        fontSize:"20px",
        fontWeight:"bold"
    }
    return (
        <Grid container justifyContent='center' >
            <AdminNavBar />
            <Stack direction='row' marginTop='2rem'>
                <Paper style={medicinePaper}><Typography style={medicineTypo}>Medicine List</Typography>
                    <TableContainer>
                        <TableHead style={tableHead}>
                            <TableRow >
                                <TableCell >
                                </TableCell>
                                <TableCell  style={tableHeadCell}>
                                    Medicine Name
                                </TableCell>
                                <TableCell style={tableHeadCell}>
                                    Dosage
                                </TableCell>
                                <TableCell style={tableHeadCell}>
                                    Price
                                </TableCell>
                                <TableCell />
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody style={tableBodyCell}>
                            {
                                medicines.map((medicine, index) => (
                                    <TableRow>
                                        <TableCell key={index}>{index + 1}</TableCell>
                                        <TableCell >{medicine.name}</TableCell>
                                        <TableCell >{medicine.dosage}</TableCell>
                                        <TableCell >Rs.{medicine.price}.00</TableCell>
                                        <TableCell ><Button>Edit</Button></TableCell>
                                        <TableCell ><Button onClick={() => setOpen(true)}>Remove</Button></TableCell>
                                        <Dialog
                                            open={open}
                                            onClose={() => setOpen(false)}
                                            aria-labelledby='dialog-title'
                                            aria-describedby='dialog-description'>
                                            <DialogTitle id='dialog-title'>Do you want to Remove this medicine?</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id='dialog-description'>
                                                    The medicine will be removed permanantly!
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={() => deleteMedicine(medicine.id)}>OK</Button>
                                                <Button onClick={() => setOpen(false)}>Cancel</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </TableContainer>
                </Paper >
                <Stack>
                    <Stack>
                <Paper style={addMedicinepaper}>
                    <form onSubmit={(e) => onSubmitForm(e)}>
                        <Stack direction='row'>
                            <Typography style={addMedicineTypo}>Add New Medicine</Typography>
                            <Button onClick={() => setShow(true)}><AddCircleOutlineIcon /></Button>
                        </Stack>
                        {show ?
                        <Stack spacing={2}>
                        <Stack spacing={2} marginTop='2rem'>
                            <TextField label='Medicine Name' required style={addMedicineTextField}  name='name' value={name} onChange={(e) => onInputChange(e)} />
                            <TextField label='Dosage' required style={addMedicineTextField} name='dosage' value={dosage} onChange={(e) => onInputChange(e)} />
                            <TextField label='Price' required style={addMedicineTextField} name='price' value={price} onChange={(e) => onInputChange(e)} />
                        </Stack>
                        <Stack direction='row' spacing={2} marginTop='2rem'>
                            <Button type='submit' >Save</Button>
                            <Button onClick={() => setShow(false)}>Cancel</Button>
                        </Stack>
                        </Stack>
                        : null} 
                    </form>
                </Paper>
                </Stack>
                
                </Stack>
            </Stack>
        </Grid>
    )
}

export default Medicines