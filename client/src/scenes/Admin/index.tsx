import React from 'react'
import { Box } from '@mui/system'
import { Toolbar } from '../../components/scensComponents/toolbar'
import { AdminList } from '../../components/scensComponents/user/admin'
import { UserForm } from '../../components/scensComponents/user/userForm'

export const Admin = () => {
  return (
  <Box>
    <Toolbar name="Admin" addName="Create New Admin" formName = {<UserForm userId={1}/>}/>
    <AdminList/>
  </Box>
  )
}

