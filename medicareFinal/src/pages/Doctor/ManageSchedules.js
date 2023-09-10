import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DoctorNavBar } from '../../components/DoctorNavBar'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ManageSchedules = () => {
    const paper = {
        padding: '10px',
        backgroundColor: "#DCD6F7",
        marginLeft: "10rem",
        marginTop: "2rem",

        borderRadius: "15px"
    }
    const tableRow = {
        backgroundColor: "#F4EEFF",

    }
    const tableContainer = {
        borderRadius: "15px"
    }
    const tableCell = {
        color: "#424874",
        fontSize: "18px"
    }
    const addSchedulePaper = {
        width: "20rem",
        padding: '10px',
        backgroundColor: "#DCD6F7",
        marginTop: "2rem",
        borderRadius: "15px",
        marginRight: "5rem"
    }
    const addScheduleTypography = {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        color: "#424874",
        marginLeft: "3rem"
    }
    const scheduleTypography = {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        color: "#424874"
    }
    const { doctorId } = useParams()

    let navigate = useNavigate();
    const [schedules, setSchedules] = useState([])

    useEffect(() => {
        loadSchedules();
    }, [])

    const loadSchedules = async () => {
        const result = await axios.get(`http://localhost:8080/schedules/${doctorId}`)
        setSchedules(result.data);
        console.log(result.data);
    }
    const [schedule, setSchedule] = useState({
        date: "",
        time: "",
        doctorId: doctorId
    });
    const { date, time } = schedule;

    const onInputChange = (e) => {
        setSchedule({ ...schedule, [e.target.name]: e.target.value });
    };
    const onSubmitForm = async (e) => {
        await axios.post("http://localhost:8080/schedules", schedule);
        setOpen(false);
        loadSchedules();
    };
    const deleteSchedule = async (id) => {
        await axios.delete(`http://localhost:8080/schedules/${id}`)
        loadSchedules();
        setOpen1(false);
    }
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false)
    return (
        <div>
            <DoctorNavBar />
            <Grid container justifyItems="center" justifyContent="center">

                <Stack direction='row' spacing={2}>
                    <Paper style={paper}>
                        <Typography style={scheduleTypography}>Schedule List</Typography>
                        <TableContainer style={tableContainer} >
                            <TableBody sx={{ backgroundColor: "lightgray", border: 1, borderColor: "primary.main" }} >
                                {
                                    schedules.map((schedule) => (
                                        <TableRow style={tableRow} >
                                            <TableCell align="left" width="300px" style={tableCell}>{schedule.date}</TableCell>
                                            <TableCell align="left" width="300px" style={tableCell}>{schedule.time}</TableCell>
                                            <TableCell >
                                                <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={{}}>
                                                    Edit</Button>
                                            </TableCell>
                                            <TableCell >
                                                <Button style={{ backgroundColor: "#e91e63" }} variant='contained' onClick={() => setOpen1(true)}>
                                                    Remove</Button>
                                            </TableCell>
                                            <Dialog
                                                open={open1}
                                                onClose={() => setOpen1(false)}
                                                aria-labelledby='dialog-title'
                                                aria-describedby='dialog-description'>
                                                <DialogTitle id='dialog-title'>Do you want to Remove this Doctor?</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id='dialog-description'>
                                                        Specified doctor will be removed permanantly!
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={() => deleteSchedule(schedule.id)}>OK</Button>
                                                    <Button onClick={() => setOpen1(false)}>Cancel</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </TableRow>

                                    ))
                                }
                            </TableBody>
                        </TableContainer>
                    </Paper>
                    <Stack>
                        <Stack>
                            <form >
                                <Paper style={addSchedulePaper}>
                                    <Stack direction='row' spacing={2}>
                                        <Typography style={addScheduleTypography}>Add New Schedule</Typography>
                                        <Button onClick={() => setShow(true)} ><AddCircleOutlineIcon /></Button>
                                    </Stack>
                                    {show ?
                                        <Stack>
                                            <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                                                <TextField id="date" label="Schedule Date" type="date" defaultValue="2017-05-24" sx={{ textAlign: 'center', width: '20rem' }} InputLabelProps={{ shrink: true, }} name='date' value={date} onChange={(e) => onInputChange(e)} required />
                                            </Stack>
                                            <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                                                <TextField id="time" label="Time" type="time" defaultValue="07:30" InputLabelProps={{ shrink: true, }} inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                                    sx={{ textAlign: 'center', width: '20rem' }} name='time' value={time} onChange={(e) => onInputChange(e)} required />

                                            </Stack>

                                            <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">

                                            </Stack>

                                            <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
                                                <Button style={{ backgroundColor: "#e91e63" }} sx={{ textAlign: 'center', width: '5rem' }} variant='contained' onClick={() => setOpen(true)}>Save</Button>
                                                <Button style={{ backgroundColor: "#e91e63" }} sx={{ textAlign: 'center', width: '5rem' }} variant='contained' onClick={() => setShow(false)} >Cancel</Button>
                                            </Stack>

                                            <Dialog
                                                open={open}
                                                onClose={() => setOpen(false)}
                                                aria-labelledby='dialog-title'
                                                aria-describedby='dialog-description'>
                                                <DialogTitle id='dialog-title'>Do you want to add this schedule?</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id='dialog-description'>
                                                        This schedule details will be visible for all users after adding!
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={(e) => onSubmitForm(e)}>OK</Button>
                                                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Stack>
                                        : null}
                                </Paper>

                            </form>
                        </Stack>
                        <Stack>
                            {show1 ?
                                <form >
                                    <Paper style={addSchedulePaper}>
                                        <Stack direction='row' spacing={2}>
                                            <Typography style={addScheduleTypography}>Update Schedule</Typography>

                                        </Stack>

                                        <Stack>
                                            <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                                                <TextField id="date" label="Schedule Date" type="date" defaultValue="2017-05-24" sx={{ textAlign: 'center', width: '20rem' }} InputLabelProps={{ shrink: true, }} name='date' value={date} onChange={(e) => onInputChange(e)} required />
                                            </Stack>
                                            <Stack direction='row' spacing={2} marginTop='30px' container justifyContent="center">
                                                <TextField id="time" label="Time" type="time" defaultValue="07:30" InputLabelProps={{ shrink: true, }} inputProps={{
                                                    step: 300, // 5 min
                                                }}
                                                    sx={{ textAlign: 'center', width: '20rem' }} name='time' value={time} onChange={(e) => onInputChange(e)} required />

                                            </Stack>

                                            <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">

                                            </Stack>

                                            <Stack direction='row' spacing={2} marginTop='20px' container justifyContent="center">
                                                <Button style={{ backgroundColor: "#e91e63" }} sx={{ textAlign: 'center', width: '5rem' }} variant='contained' onClick={() => setOpen(true)}>Save</Button>
                                                <Button style={{ backgroundColor: "#e91e63" }} sx={{ textAlign: 'center', width: '5rem' }} variant='contained' onClick={() => setShow1(false)} >Cancel</Button>
                                            </Stack>

                                            <Dialog
                                                open={open}
                                                onClose={() => setOpen(false)}
                                                aria-labelledby='dialog-title'
                                                aria-describedby='dialog-description'>
                                                <DialogTitle id='dialog-title'>Do you want to add this schedule?</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id='dialog-description'>
                                                        This schedule details will be visible for all users after adding!
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={(e) => onSubmitForm(e)}>OK</Button>
                                                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Stack>

                                    </Paper>

                                </form>
                                : null}
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
        </div>
    )
}

export default ManageSchedules