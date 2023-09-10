import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Homecard2 = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardContent>
                <Typography gutterBottom variant='h5'>
                    Medicare
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Channel your doctor with very easy steps
                </Typography>
            </CardContent>
        </Card>
    </Box>
  )
}
