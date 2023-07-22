export interface patientInterface {
    id?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    martialStatus?: string;
    phoneNumber?: string;
    maritalStatus?: string;
    email?: string;
    address?: string;
    country?: string;
  }
  export interface userInterface {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    martialStatus?: string;
    phoneNumber?: string;
    password?:string;
    role?:roleInterface;
  }
  export interface appointmentInterface {
    id?: string;
    symptoms?: string;
    diagosis?: string;
    checkUpDate?: string;
    nextvist?: string;
    doctor?: userInterface;
    patient?: userInterface;

  }
  export interface checkUpInterface {
    id?: string;
    symptoms?: string;
    diagosis?: string;
    checkUpDate?: string;
    nextvist?: string;
    doctor?: userInterface;
    Patient: userInterface;
  }
  export interface PatientVitals {
    id?: string;
    temperature?: string;
    bpSystolic?: string;
    bpDiastolic?: string;
    notes?: userInterface;
    patient?: userInterface;
    doctor?: userInterface;
  }
  export interface roleInterface {
    id?: string;
    name?: string;
  }

