import { Box } from '@mui/material'
import React from 'react'
import { NurseList, NurseToolbar } from '../../components/scensComponents/nurse'

export const Nurse = () => {
  return (
   <Box>
    <NurseToolbar/>
    <NurseList/>
   </Box>
  )
}

