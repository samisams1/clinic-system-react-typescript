import gql from "graphql-tag"
export const PATIENT_VITALS_QUERY = gql`
query PatientVitals {
    PatientVitals {
      id
      temperature
      bpSystolic
      bpDiastolic
      notes
      patient
      Patient {
        firstName
      }
    }
  }
`