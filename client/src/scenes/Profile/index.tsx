import { Box } from '@mui/material';
import React from 'react'
import { ProfileList, ProfileToolbar } from '../../components/scensComponents/Profile';

const Profile = () => {
  return (
   <Box>
    <ProfileToolbar/>
    <ProfileList/>
   </Box>
  )
}

export default Profile;
