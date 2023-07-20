import React from 'react'
import { Box } from '@mui/material'
import { CheckupList, CheckupToolbar } from '../../components/scensComponents/checkup'
const Checkup = () => {
  return (
   <Box>
    <CheckupToolbar/>
    <CheckupList/>
   </Box>
  )
}

export default Checkup
