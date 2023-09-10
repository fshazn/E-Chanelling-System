import { Button, Card, CardActions, CardContent, CardMedia, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../images/Medicare.png';

export const Homecard1 = () => {
    let navigate = useNavigate();
    useEffect(() => {
        loadSpeciality()
    }, [])
    const [speciality, setSpeciality] = useState([]);

    const [selects, setSelect] = useState({
        specializationId:""
    });
    const {specializationId} = selects;

    const loadSpeciality = async () => {
        const result = await axios.get("http://localhost:8081/specializations")
        setSpeciality(result.data)
    };
    const onInputChange = (e) => {
        setSelect({ ...selects, [e.target.name]: e.target.value });
      };

    const [show, setShow] = useState(false)
    return (
        <Box width='500px' >
            
            <Card>
                <CardMedia component="img"
                    height="140"
                    image={image}/>
                <CardContent>
                    <Typography gutterBottom variant='h5'>
                        Medicare
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Channel your doctor with very easy steps
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button size='medium' onClick={() => setShow(true)}>Channel Your Doctor</Button>
                </CardActions> 
                {show ? <Stack spacing={4} alignItems="center">
                <Stack>
                    <Stack direction="row" spacing={3}>
                        <TextField label='Select Specialization' select name='specializationId' value={specializationId} onChange={(e) => onInputChange(e)} sx={{ textAlign: 'center', width: '20rem' }} required >
                            {speciality.map((specialityResult, index) => (
                                <MenuItem value={specialityResult.id}>{specialityResult.name}</MenuItem>
                            ))
                            }      
                        </TextField>
                    </Stack>
                    <CardActions>
                        <Button type='submit' onClick={() => { navigate(`/specializations/${specializationId}`) }}>Search</Button>
                        <Button onClick={() => setShow(false)} >Cancel</Button>
                    </CardActions>
                    </Stack>     
                </Stack> : null}     
            </Card>
          
        </Box>
    )
}
