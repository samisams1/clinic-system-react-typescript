import React from 'react'
import { Box } from '@mui/material'
import { Toolbar } from '../../components/scensComponents/toolbar'
import PatientVitalsForm from '../../components/scensComponents/patientvitals/PatientVitalsForm'
import { PatientVitalsList } from '../../components/scensComponents/patientvitals'
const PatientVitals = () => {
  return (
    <Box>
    <Toolbar name = "Patient Vitals" addName ="Create Patient Vitals" formName = {<PatientVitalsForm/>}/> 
    <PatientVitalsList/>     
    </Box>
  )
}
export default PatientVitals
