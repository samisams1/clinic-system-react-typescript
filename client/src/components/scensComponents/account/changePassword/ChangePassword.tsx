import React from 'react'
import { Box, Stack } from '@mui/material'
import Button from '../../../Button'
import Controls from '../../../Controls'
import { Form } from '../../../useForm'

const ChangePassword = () => {
  return (
    <Box
    sx={{
        backgroundColor: 'background.paper',
        flex: '1 1 auto',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
         <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
       <Form>
         <Stack spacing={3}></Stack>
        <Controls.Input
         name="oldPassword"
         label="Old Password"
         type="text"
         fullWidth
                  
        />
        <Controls.Input
         name="newPassword"
         label="New Password"
         type="text"
         fullWidth
                  
        />
        <Controls.Input
         name="confirmPassword"
         label="Confirm Password"
         type="text"
         fullWidth
                  
        />
         <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
         </Button>
        <Stack/>
        </Form>
    </Box>
   </Box>
  )
}
export default ChangePassword;
