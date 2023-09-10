import { Button, Dialog, DialogActions, DialogTitle, Grid, Paper, Stack, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AdminNavBar } from '../../components/AdminNavBar'

const AdminBilling = () => {
    const doctorPaper = {
        width: "50rem",
        backgroundColor: "#424874",
        borderRadius: "15px",
        marginTop: "2rem"
    }
    const tableHead = {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "#424874",
        
    }
    const tableContainer = {
        width: "50rem",
        margin: "auto",
        borderRadius: "15px"
    }
    const billdetails = {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        color: "#424874"
    }
    const paper = {
        width: "25rem",
        borderRadius: "15px",
        backgroundColor: "#F4EEFF"
    }
    const button = {
        color: "white",
        backgroundColor: "#424874",
        marginLeft: "8rem",
        marginTop: "1rem"
    }
    const cell = {
        backgroundColor: "#DCD6F7",
        borderRadius: "15px"
    }
    const textField = {
        width: "250px",
        marginTop: "15px",
        marginLeft: "5rem"
    }
    const updateButton = {
        backgroundColor: "#424874",
        color: "white"
    }
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [show, setShow] = useState(false)
    const [bills, setBills] = useState([])
    const [chargers, setChargers] = useState({
        doctorCharge: "",
        bookingCharge: "",
        medcareCharge: ""
    })

    const { doctorCharge, bookingCharge, medicareCharge } = chargers;
    useEffect(() => {
        loadDoctors();
    }, [])

    const loadDoctors = async () => {
        const result = await axios.get(`http://localhost:8083/bills`)
        setBills(result.data);
        console.log(result.data);
    }
    useEffect(() => {
        loadChargers();
    }, [])

    const loadChargers = async () => {
        const result = await axios.get(`http://localhost:8083/chargers/1`)
        setChargers(result.data);
        console.log(result.data);
    }
    const onInputChange = (e) => {
        setChargers({ ...chargers, [e.target.name]: e.target.value });
      };
    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:8083/chargers", chargers)
        setOpen1(false);
        
      };
      function updateScreen(e){
        e.preventDefault();
        setOpen(false);
        setShow(true)
      }
    return (
        <Grid container justifyContent="center"><AdminNavBar />
            <Stack marginTop="2rem" direction="row" spacing={4}>
                <Stack>
                    <Typography style={billdetails}>Bill details</Typography>
                    <Stack>
                    <TableContainer style={tableContainer}>
                        <TableHead >
                            <TableRow  >
                                <TableCell style={tableHead}>Bill No</TableCell>
                                <TableCell style={tableHead} >Date</TableCell>
                                <TableCell style={tableHead}>Appointment ID</TableCell>
                                <TableCell style={tableHead}>Doctor ID</TableCell>
                                <TableCell style={tableHead}>Patient Contact</TableCell>
                                <TableCell style={tableHead}>Total Charge</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: "#DCD6F7" }} >
                            {
                                bills.map((bill) => (
                                    <TableRow>
                                        <TableCell align="left" width="200px">{bill.billId}</TableCell>
                                        <TableCell align="left" width="200px">{bill.date}</TableCell>
                                        <TableCell align="left" width="200px">{bill.appointmentId}</TableCell>
                                        <TableCell align="left" width="200px">{bill.doctorId}</TableCell>
                                        <TableCell align="left" width="200px">{bill.contact}</TableCell>
                                        <TableCell align="left" width="200px">Rs.{bill.total}.00</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </TableContainer>
                    </Stack>
                </Stack>
                <Stack width="25rem" marginTop="0px">
                    <Typography style={billdetails}>Charging Fee Details</Typography>
                    <Paper style={paper}>
                        <TableContainer style={tableContainer}>

                            <TableBody>
                                <TableRow>
                                    <TableCell style={tableHead}>Doctor Charge</TableCell>
                                    <TableCell style={cell} >Rs.{doctorCharge}.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={tableHead}>Booking Charge</TableCell>
                                    <TableCell style={cell} >Rs.{bookingCharge}.00</TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={tableHead}>Medicare Center Charge</TableCell>
                                    <TableCell width="170px" style={cell} >Rs.{medicareCharge}.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </TableContainer>
                        <Button style={button}  onClick={() => setOpen(true)}>Update Chargers</Button>
                        <Dialog
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby='dialog-title'
                            aria-describedby='dialog-description'>
                            <DialogTitle id='dialog-title'>Do you want to update prices?</DialogTitle>
                            <DialogActions>
                                <Button onClick={updateScreen}>OK</Button>
                                <Button onClick={() => setOpen(false)}>Cancel</Button>
                            </DialogActions>
                        </Dialog>
                        {show ?
                        <Stack>
                            <form >
                        <Stack>
                            <TextField style={textField} label="Doctor Charge" name='doctorCharge' value={doctorCharge} onChange={(e) => onInputChange(e)}/>
                            <TextField style={textField} label="Booking Charge" name='bookingCharge' value={bookingCharge} onChange={(e) => onInputChange(e)}/>
                            <TextField style={textField} label="Medicare Charge" name='medicareCharge' value={medicareCharge} onChange={(e) => onInputChange(e)}/>
                        </Stack>
                        <Stack direction="row" spacing={2} marginLeft="7rem" marginTop="2rem" marginBottom="2rem">
                            <Button style={updateButton} onClick={() => setOpen1(true)}>Update</Button>
                            <Dialog
                            open={open1}
                            onClose={() => setOpen1(false)}
                            aria-labelledby='dialog-title'
                            aria-describedby='dialog-description'>
                            <DialogTitle id='dialog-title'>Do you want to save changes?</DialogTitle>
                            <DialogActions>
                                <Button onClick={(e) => onSubmitForm(e)}>OK</Button>
                                <Button onClick={() => setOpen1(false)}>Cancel</Button>
                            </DialogActions>
                        </Dialog>
                            <Button style={updateButton} onClick={() => setShow(false)}>Cancel</Button>
                        </Stack>
                        </form>
                        </Stack>
                       
                        : null}  
                    </Paper>
                    <Stack>
                        <Paper>

                        </Paper>
                    </Stack>
                </Stack>
            </Stack>
        </Grid>
    )
}

export default AdminBilling