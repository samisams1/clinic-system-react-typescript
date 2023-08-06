import React from 'react'
import { Box } from '@mui/system'
import { Toolbar } from '../../components/scensComponents/toolbar'
import { UserForm } from '../../components/scensComponents/user/userForm'
import { UserList } from '../../components/scensComponents/user/userTable'

export const Admin = () => {
  return (
  <Box>
    <Toolbar name="Admin" addName="Create New Admin" formName = {<UserForm roleId={1}/>}/>
    <UserList title={"Admin"} roleId = {4}/>
  </Box>
  )
}

