import { Box } from '@mui/material'
import React from 'react'
import { PatientAppointmentsList } from '../../components/scensComponents/Patientappointments'
import PatientAppointmentToolbar from '../../components/scensComponents/Patientappointments/PatientAppointmentToolbar'

const PatientAppointments = () => {
  return (
   <Box>
    <PatientAppointmentToolbar/>
    <PatientAppointmentsList/>
   </Box>
  )
}

export default PatientAppointments
