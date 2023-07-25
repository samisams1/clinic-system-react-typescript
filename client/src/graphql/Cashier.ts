import gql from "graphql-tag"
export const CASHIER_QUERY = gql`
query Cashiers {
  cashiers {
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