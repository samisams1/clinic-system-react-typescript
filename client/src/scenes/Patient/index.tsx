import React from 'react';
import { Box } from "@mui/material";
import PatientList from '../../components/scensComponents/patient/PatientList';
import { PatientToolbar } from '../../components/scensComponents/patient/PatientToolbar';
export default function Patient(){
        return (
            <Box>
            <PatientToolbar/>
            <PatientList/>
            </Box>
              );
    }
      