import gql from "graphql-tag"
export const CASHIER_QUERY = gql`
query Cashier {
    cashier {
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