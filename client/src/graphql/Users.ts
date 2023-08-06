import gql from "graphql-tag"
export const USER_QUERY = gql`
query User($roleId:Int!) {
  users(roleId: $roleId) {
    id
    email
    firstName
    lastName
    phoneNumber
    password
    roleId
  }
}`
export const CREATE_USER =gql`
mutation CreateUser($firstName:String!,$lastName:String!,$email:String!,$phoneNumber:String!,$password:String!,$roleId:Int!) {
  createUser(firstName:$firstName,lastName:$lastName,email:$email,phoneNumber:$phoneNumber,password:$password,role:$roleId) {
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