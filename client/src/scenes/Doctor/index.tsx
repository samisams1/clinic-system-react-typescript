import React from 'react';
import { Box } from '@mui/system';
import { Toolbar } from '../../components/scensComponents/toolbar';
import { UserForm } from '../../components/scensComponents/user/userForm';
import { UserList } from '../../components/scensComponents/user/userTable';

export const Doctor = () => {
  return (
   <Box>
    <Toolbar name ="Doctor" addName = "Create New Doctor" formName={<UserForm roleId={2} />}/>
    <UserList title={"Doctor"} roleId = {2}/>
    
   </Box>
  )
}


