import React from 'react';
import { Box } from '@mui/system';
import {  DoctorList } from '../../components/scensComponents/user/doctor';
import { Toolbar } from '../../components/scensComponents/toolbar';
import { UserForm } from '../../components/scensComponents/user/userForm';

export const Doctor = () => {
  return (
   <Box>
    <Toolbar name ="Doctor" addName = "Create New Doctor" formName={<UserForm userId={2} />}/>
    <DoctorList/>
   </Box>
  )
}


