import React from 'react'
import { Grid } from '@mui/material'
import { Form, useForm } from '../../useForm';
import Controls from '../../Controls';
import { userInterface } from '../../../interface/interfaces';
import { useMutation } from '@apollo/client';
import Button from '../../Button';
import { CREATE_USER, USER_QUERY } from '../../../graphql/Users';

interface Props {
	roleId: number
}

export const UserForm = ({roleId}:Props) => {
  const [createProfile] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: USER_QUERY }],
  })
  const initialFValues: userInterface = {
    firstName: '',
    lastName:'',
    email: '',
    phoneNumber:'',
    password:'',
    roleId:roleId
  };
  const validate = (fieldValues: userInterface = values): boolean => {
    let temp:userInterface = { ...errors };
    if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName ? '' : 'This field is required.';
    if ('lastName' in fieldValues)  temp.lastName =  fieldValues.lastName ? '' : 'This field is required.';
    if ('email' in fieldValues) temp.email = fieldValues.email ? '' : 'This field is required.';
    if ('phoneNumber' in fieldValues) temp.phoneNumber = fieldValues.phoneNumber ? '' : 'This field is required.';
    if ('password' in fieldValues) temp.password = fieldValues.password ? '' : 'This field is required.';
    
    setErrors({
      ...temp
    });
    //  setMessage('');
    return fieldValues === values ? Object.values(temp).every(x => x === '') : false;
};

  const { values, errors, setErrors, handleInputChange, resetForm }:any = useForm(initialFValues, true, validate);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
    //  saveService(values);
    createProfile({
      variables: values,
    })
      console.log(values);
      resetForm();
    }
  };
  return (
     <Form onSubmit={handleSubmit}>
      <Grid container>
      <Grid item xs={12}>
      <Grid item xs={6}>
      <Controls.Input
                name="firstName"
                label="firstName"
                value={values.firstName }
                onChange={handleInputChange}
                error={errors.firstName}
            />
       <Controls.Input
                name="lastName"
                label="lastName"
               value={values.lastName }
                onChange={handleInputChange}
                error={errors.lastName}
            />
       <Controls.Input
                name="email"
                label="email"
                value={values.email }
                onChange={handleInputChange}
                error={errors.email}
            />
     <Controls.Input
                name="phoneNumber"
                label="phoneNumber"
                value={values.phoneNumber }
                onChange={handleInputChange}
                error={errors.phoneNumber}
            />
      </Grid>
      <Grid item xs={6}>
    
       <Controls.Input
                name="password"
                label="password"
                value={values.password }
                onChange={handleInputChange}
                error={errors.password}
            />
      
      </Grid>
      <Grid>
      <Button
        type="submit"
        text="Submit" />
         <Button
          text="Reset"
         // onClick={resetForm}
          />
      </Grid>
     
       </Grid>
      </Grid>     
      </Form>
  )
}



