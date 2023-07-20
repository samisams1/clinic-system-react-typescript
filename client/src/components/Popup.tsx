import React from 'react'
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import Controls from "./Controls";


export default function Popup(props:any) {

    const { title, children, openPopup, setOpenPopup } = props;
   // const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" >
            <DialogTitle >
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        color="primary"
                        onClick={()=>{setOpenPopup(false)}}>
                        CloseIcon 
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}


