import React from 'react'
import { Box } from '@mui/material'
import { CheckupForm, CheckupList } from '../../components/scensComponents/checkup'
import { Toolbar } from '../../components/scensComponents/toolbar'
const Checkup = () => {
  return (
   <Box>
    <Toolbar name = "Checkup"addName="Create  New Checkup" formName ={<CheckupForm/>} />
    <CheckupList/>
   </Box>
  )
}

export default Checkup
