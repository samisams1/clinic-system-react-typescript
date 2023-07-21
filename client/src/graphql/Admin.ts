import gql from "graphql-tag"
export const ADMIN_QUERY = gql`
query Admins {
  admins {
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