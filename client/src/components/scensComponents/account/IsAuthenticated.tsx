/*import React,{ ReactNode } from "react"
import { gql, useQuery } from "@apollo/client"
import {  useNavigate } from "react-router-dom"

export const IS_LOGGED_IN = gql`
  {
    me {
      id
    }
  }
`
interface Props {
    children?: ReactNode
}
function IsAuthenticated(props: { children: ReactNode }) {
    const { loading, error, data } = useQuery(IS_LOGGED_IN)
    const history = useNavigate()
    if (loading) return <p>Loading...</p>
    if (error)
        return <p>{error.message}</p>
    if (!data.me) {
      return   history("/landing")  
    }
    return props.children
}

export default IsAuthenticated

*/
import React, { ReactNode } from 'react';
import { gql, useQuery } from "@apollo/client";
import {  useNavigate } from "react-router-dom";

export const IS_LOGGED_IN = gql`
  query Me {
  me {
    id
    email
    firstName
    lastName
    phoneNumber
    password
    roleId
    role
  }
}
`
function IsAuthenticated(props: { children: ReactNode }) {
  const history = useNavigate()
  const { loading, error, data } = useQuery(IS_LOGGED_IN)
  if (loading) return <p>Loading...</p>
  if (error)
  return <p>{error.message}</p>
  if (!data.me) {
    return  <p>{"samisams"  }</p> 
    
  }
  return <div>{props.children}</div>;
}
export default IsAuthenticated