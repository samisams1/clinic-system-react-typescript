import gql from "graphql-tag"
export const DOCTOR_QUERY = gql`
query Doctors {
    doctors {
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