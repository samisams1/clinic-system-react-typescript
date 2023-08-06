import React from 'react'
import { Box } from '@mui/system'
import { Toolbar } from '../../components/scensComponents/toolbar'
import { UserForm } from '../../components/scensComponents/user/userForm'
import { UserList } from '../../components/scensComponents/user/userTable'
import { USER_QUERY } from '../../graphql/Users'
export const Cashier = () => {
  return (
   <Box>
    <Toolbar name ="Cashier" addName="Create New Cashier" fechQuery = {USER_QUERY} formName ={<UserForm roleId={2} />} />
    <UserList title={"Cashier"} roleId={4}/>
   </Box>
  )
}

