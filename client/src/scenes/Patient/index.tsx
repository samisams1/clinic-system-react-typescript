import React from 'react';
import { Box } from "@mui/material";
import PatientList from '../../components/scensComponents/patient/PatientList';
import { Toolbar } from '../../components/scensComponents/toolbar';
import PatientForm from '../../components/scensComponents/patient/PatientForm';
export default function Patient(){
        return (
            <Box>
          <Toolbar name="Patient" addName ="Create New Form" formName={<PatientForm/>}/>
            <PatientList/>
            </Box>
              );
    }
      