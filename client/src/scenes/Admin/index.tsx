import { Box } from '@mui/system'
import React from 'react'
import { AdminList, AdminToolbar } from '../../components/scensComponents/admin'

export const Admin = () => {
  return (
  <Box>
    <AdminToolbar/>
    <AdminList/>
  </Box>
  )
}

