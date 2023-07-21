import gql from "graphql-tag"
export const NURSE_QUERY = gql`
query Nurse {
    nurse {
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