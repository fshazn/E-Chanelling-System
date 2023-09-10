
import { Grid } from '@mui/material'
import React from 'react'
import { Homecard1 } from '../components/Homecard1'
import { Navbar } from '../components/Navbar'

const Home = () => {
  return (
    <Grid alignItems="center">
      <Navbar/>
      <Grid marginTop="100px" container justifyItems="center" justifyContent="center" spacing={3} alignItems="center">
      <Homecard1/>
      </Grid>
      <Grid>
      
      </Grid>
      
      
    </Grid>
  )
}

export default Home