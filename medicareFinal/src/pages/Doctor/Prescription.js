import { Button, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DoctorNavBar } from '../../components/DoctorNavBar'
import './Styled.css'
const Prescription = () => {
    const { doctorId } = useParams()
    const { scheduleId } = useParams()
    const { patientId } = useParams()
    const { id } = useParams()
    const [prescriptionItems,setPrescriptionItems]=useState({
        id:id,
        medicineId:"",
        duration:""
    })
    const {duration } = prescriptionItems;
    const onInputChange = (e) => {
        setPrescriptionItems({ ...prescriptionItems, [e.target.name]: e.target.value });
    };
    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8082/prescription-items", prescriptionItems)
        loadMedicines();
    };
    const [medicines, setMedicines] = useState([])
    const [medicines2, setMedicines2] = useState({
        medicineId:"",
        name:"",
        dosage:"",
        price:""
    })
    const { medicineId, name, dosage, price} = medicines2;
    const [suggestions, setSuggestions] = useState([])
    const [text, setText] = useState('')

    useEffect(() => {
        loadMedicines();
    }, [])

    const loadMedicines = async () => {
        const result = await axios.get("http://localhost:8082/medicines")
        setMedicines(result.data)
    };
    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = medicines.filter((medicine) => {
                const regex = new RegExp(`${text}`, "gi")
                return medicine.name.match(regex);
            })
        }
        setSuggestions(matches)
        setText(text)
    }
    const onSuggestHandler = async (text) => {
        setText(text);
        setSuggestions([]);
        const result = await axios.get(`http://localhost:8082/medicines/${text}/details`)
        medicines2(result.data)
        console.log(result.data);
        
    }
    return (
        <Grid container justifyContent='center'>
            <DoctorNavBar />
            <Paper className='prescriptionPaper'>
                
                <Typography variant='h5' textAlign='center'>Prescription</Typography>
                <Stack spacing={2} marginTop='2rem' marginBottom='2rem' marginLeft='2rem'>
                    <TextField label='Search Medicine' onChange={e => onChangeHandler(e.target.value)} value={text} />
                    {suggestions && suggestions.map((suggestions, i) =>
                        <div key={i} onClick={() => onSuggestHandler(suggestions.name)}>{suggestions.name}</div>
                    )}

                    <Button >Add</Button>
                </Stack>
                <Stack spacing={4} marginLeft='2rem' >
                    <TextField label='Name' value={medicineId}/>
                    <TextField label='Duration' />
                </Stack>
                <Stack>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Dosage</TableCell>
                                <TableCell>Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </TableContainer>
                </Stack>
            </Paper>
        </Grid>
    )
}

export default Prescription