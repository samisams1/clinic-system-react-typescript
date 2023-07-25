import { Box } from '@mui/material'
import React from 'react'
import { PatientAppointmentForm, PatientAppointmentsList } from '../../components/scensComponents/Patientappointments'
import { Toolbar } from '../../components/scensComponents/toolbar'

const PatientAppointments = () => {
  return (
   <Box>
    <Toolbar name = "Patient Appointment" addName="Create New Patient Appointment" formName ={<PatientAppointmentForm/>}/>
    <PatientAppointmentsList/>
   </Box>
  )
}

export default PatientAppointments
