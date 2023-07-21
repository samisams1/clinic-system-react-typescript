import gql from "graphql-tag"
export const CHECKUP_QUERY = gql`
query Patients {
    patients {
      id
      firstName
      lastName
      dateOfBirth
      martialStatus
      phoneNumber
      email
      address
      country
    }
  }
`