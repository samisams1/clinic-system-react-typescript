import gql from "graphql-tag"
export const ME_QUERY = gql`
query Profiles {
    profiles {
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