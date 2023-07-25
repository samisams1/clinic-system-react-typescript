import React from 'react';
import { Box } from '@mui/material';
import { NurseList } from '../../components/scensComponents/user/nurse';
import { Toolbar } from '../../components/scensComponents/toolbar';
import { UserForm } from '../../components/scensComponents/user/userForm';
export const Nurse = () => {
  return (
   <Box>
    <Toolbar name={"Nurse"} addName={"Create New  Nurse"} formName = {<UserForm userId={3}/>} />
    <NurseList/>
  </Box>
  )
}
