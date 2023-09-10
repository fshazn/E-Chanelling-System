import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Presc = () => {
    const { doctorId } = useParams()
    const { scheduleId } = useParams()
    const { patientId } = useParams()
    const { id } = useParams()
    const [prescription,setPrescription]=useState({
        docId:doctorId,
        patId:scheduleId,
        schedId:patientId,
        appId:id
    })
    const { docId, patId, schedId, appId } = prescription;
    
    function onSubmitForm  (e){
        e.preventDefault();
         axios.post("http://localhost:8082/prescriptions", prescription)
    };
    return (
        <div>
            <form >
            
            <Button type='submit' onClick={onSubmitForm}>Submit</Button>
            </form>
        </div>
    )
}

export default Presc