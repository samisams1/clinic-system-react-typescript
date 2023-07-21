import gql from "graphql-tag"
export const PATIENT_QUERY = gql`
query Appointments {
    appointments {
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