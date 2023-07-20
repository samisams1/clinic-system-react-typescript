import { Box } from '@mui/system';
import React from 'react';
import { DoctorList } from '../../components/scensComponents/doctor';
import DoctorToolbar from '../../components/scensComponents/doctor/DoctorToolbar';

export const Doctor = () => {
  return (
   <Box>
    <DoctorToolbar/>
    <DoctorList/>
   </Box>
  )
}


