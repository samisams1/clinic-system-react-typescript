import React from 'react'
import { Box } from '@mui/system'
import { CashierList,  } from '../../components/scensComponents/user/cashier'
import { Toolbar } from '../../components/scensComponents/toolbar'
import { UserForm } from '../../components/scensComponents/user/userForm'
import { CASHIER_QUERY } from '../../graphql/Cashier'
export const Cashier = () => {
  return (
   <Box>
    <Toolbar name ="Cashier" addName="Create New Cashier" fechQuery = {CASHIER_QUERY} formName ={<UserForm userId={4} />} />
    <CashierList/>
   </Box>
  )
}

