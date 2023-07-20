import * as React  from 'react';
import { useState } from 'react';
import {
  Box,Typography
} from '@mui/material';
import ActionButton from '../../ActionButton';
import Button from '../../Button';
import Popup from '../../Popup';
export const AdminToolbar =()=>{
   
  const [openPopup, setOpenPopup] = useState(false);
return( 
<Box>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography   sx={{ m: 1 }}
        variant="h4"
      >
        Admin
      </Typography>
      <Box sx={{ m: 1 }}>
      <ActionButton />
        <Button
                       text="Add New Patient"
                        variant="outlined"
                        onClick={() => { setOpenPopup(true);  }}
                    />
      </Box>
    </Box>
    <Popup
                title="Admin Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
   Admin Form
     </Popup>
  </Box>
);
  

  
    }