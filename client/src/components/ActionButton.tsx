import { Button } from '@mui/material';
import React from 'react'




export default function ActionButton(props:any) {

    const {  children, onClick } = props;
   // const classes = useStyles();

    return (
        <Button

            onClick={onClick}>
            {children}
        </Button>
    )
}