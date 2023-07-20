import { Box } from '@mui/system'
import React from 'react'
import { CashierList, CashierToolbar } from '../../components/scensComponents/cashier'

export const Cashier = () => {
  return (
   <Box>
    <CashierToolbar/>
    <CashierList/>
   </Box>
  )
}

