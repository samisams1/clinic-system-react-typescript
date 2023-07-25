import gql from "graphql-tag"
export const NURSE_QUERY = gql`
query Nurses {
  nurses {
    id
    email
    firstName
    lastName
    phoneNumber
    password
    roleId
    Role {
      name
    }
  }
}
`
export const CREATE_USER =gql`
mutation CreateUser($firstName:String!,$lastName:String!,$email:String!,$phoneNumber:String!,$password:String!) {
  createUser(firstName:$firstName,lastName:$lastName,email:$email,phoneNumber:$phoneNumber,password:$password,role:4) {
    id
    email
    firstName
    lastName
    phoneNumber
    password
    roleId
  }
}
`