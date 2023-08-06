import React from 'react';
import { Box } from '@mui/material';
import { Toolbar } from '../../components/scensComponents/toolbar';
import { UserForm } from '../../components/scensComponents/user/userForm';
import { UserList } from '../../components/scensComponents/user/userTable';
export const Nurse = () => {
  return (
   <Box>
    <Toolbar name={"Nurse"} addName={"Create New  Nurse"} formName = {<UserForm roleId={3}/>} />
    <UserList title={"Nurse"} roleId = {3}/>
  </Box>
  )
}
