import gql from "graphql-tag"
export const CHECKUP_QUERY = gql`
query Checkups {
    checkups {
      id
      symptoms
      diagosis
      checkUpDate
      nextvist
      doctor
      patient
      Patient {
        firstName
      }
      Doctor {
        firstName
      }
    }
  }
`