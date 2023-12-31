import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { userInterface } from '../../../interface/interfaces';
import { Grid, Typography } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import Popup from '../../Popup';
import Button from '../../Button';
import PatientEditForm from '../patient/PatientEditForm';
import { USER_QUERY } from '../../../graphql/Users';
export const UserList = ({title,roleId}:any) => {
    const [openPopup,setOpenPopup] =useState(false);
    const  [openCofirmPopup,setOpenConfirimPopup]=useState(false);
    const [newData,setNewData]=useState("");
    const { loading, error, data } = useQuery(USER_QUERY, {
      variables: { roleId },
    });
    
    if(loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    console.log(data)
    const row = data.users.map((row:userInterface)=>(
        [row.id,row.firstName,row.lastName,row.phoneNumber,row.email,row.roleId]
    ))
    const columns = [
        {
          name: "#Id",
          options: {
            filter: true,
          }
        },
        {
          label: "First Name",
          name: "Title",
          options: {
            filter: true,
          }
        },
        {
          name: "Last Name",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Phone Number",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Email",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Role",
          options: {
            filter: true,
            sort: false,
          }
        },
        {
          name: "Edit",
          options: {
            filter: true,
            sort: false,
            empty: true,
            customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
              return (
                <Button
                  text="Edit"
                  variant="outlined"
                  onClick={() => { setOpenPopup(true);setNewData(tableMeta.rowData);  }}
                />
              );
            }
          }
        },
        {
          name: "Delete",
          options: {
            filter: true,
            sort: false,
            empty: true,
            customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
              return (
                <Button
                  text="Delete"
                  variant="outlined"
                  onClick={() => { setOpenConfirimPopup(true);setNewData(tableMeta.rowData);  }}
                />
              );
            }
          }
        }
      ];
      return (
        <Grid>
             <MUIDataTable
               title={title}
               data={row}
               columns={columns}
               options={{
                 filterType: "checkbox",
               }}
             />
   <Popup
                    title="Patient Edit Form"
                    openPopup={openCofirmPopup}
                    setOpenPopup={setOpenConfirimPopup}
                >
                  <Grid>
    <Typography>Are you sure you want to delete this post?</Typography>
    <Grid>
    <Button
     //onClick={handleDelete(newData[0])}
            text="Yes" />
    <Button
            type="submit"
            text="No" />
    </Grid>
   </Grid>
  </Popup>
  <Popup
                    title="Patient Edit Form"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
     <PatientEditForm id = {newData[0]} firstName={newData[1]} lastName={newData[2]}  dateOfBirth={newData[3]}   phoneNumber={newData[4]} martialStatus={newData[5]}  email={newData[6]}  address={newData[7]}  country={newData[8]} />
         </Popup>
        </Grid>
      )
}
