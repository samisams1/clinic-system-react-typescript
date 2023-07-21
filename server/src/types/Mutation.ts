import { idArg, intArg, list, mutationType, stringArg } from "@nexus/schema";
import { PrismaClient } from "@prisma/client";
//import { LikedTweet } from "./LikedTweet";
const prisma = new PrismaClient();
export const Mutation = mutationType({
    definition(t){
      // start patient mutation
        t.field('createPatient', {
            type: 'Patient',
            args: {
                  firstName: stringArg(),
                  lastName:stringArg(),
                  dateOfBirth:stringArg(),
                    martialStatus:stringArg(),
                    phoneNumber:stringArg(),
                    email:stringArg(),
                    address:stringArg(),
                    country:stringArg()
            },
            resolve: (_parent, { 
                firstName, 
                lastName,
                dateOfBirth,
                martialStatus,
                phoneNumber,
                email,
                address,
                country }, ctx) => {
              return prisma.patient.create({
                data: {
                    firstName,
                    lastName,
                    dateOfBirth,
                    martialStatus,
                    phoneNumber,
                    email,
                    address,
                    country

                },
              })
            },
          });
          t.field('updatePost', {
            type: 'Patient',
            args: {
              id: intArg(),
              firstName:stringArg(),
              lastName:stringArg(),
              dateOfBirth:stringArg(),
              martialStatus:stringArg(),
              phoneNumber:stringArg(),
              email:stringArg(),
              address:stringArg(),
              country:stringArg(),
            },
            resolve: (_parent, { id,firstName,lastName, dateOfBirth,martialStatus,phoneNumber, email, address,country }, ctx) => {
              return prisma.patient.update({
                where: { id: id},
                data: { 
                  firstName: firstName,
                  lastName: lastName,
                  dateOfBirth: dateOfBirth,
                  martialStatus: martialStatus,
                  phoneNumber: phoneNumber,
                  email: email,
                  address: address,
                  country: country,
                 },
              })
            },
          });
          t.field("deletePatient", {
            type: "Patient",
            args: {
              id: intArg()
            },
            resolve: (parent, { id }, ctx) => {
              return prisma.patient.delete({
                where: { id: id }
              })
            }
          }) 
        
        
        // end patient mutation
        //start Apointment  mutation
        t.field('createAppointment', {
          type: 'Appointment',
          args: {
            symptoms: stringArg(),
            diagosis:stringArg(),
            checkUpDate:stringArg(),
            nextvist:stringArg(),
            doctor:intArg(),
            patient:intArg()
          },
          resolve: (_parent, { 
            symptoms, 
            diagosis,
            checkUpDate,
            nextvist,
            doctor,
            patient
           }, ctx) => {
            return prisma.appointment.create({
              data: {
                symptoms,
                diagosis,
                checkUpDate,
                nextvist,
                doctor: { connect: { id: Number(doctor) } },
                patient: { connect: { id: Number(doctor) } },

              },
            })
          },
        });
      //end Appointment mutation
      //start checkup  mutation
      
      t.field('createCheckup', {
        type: 'Checkup',
        args: {
          symptoms: stringArg(),
          diagosis:stringArg(),
          checkUpDate:stringArg(),
          nextvist:stringArg(),
          doctor:intArg(),
          patient:intArg()
        },
        resolve: (_parent, { 
          symptoms, 
          diagosis,
          checkUpDate,
          nextvist,
          doctor,
          patient
         }, ctx) => {
          return prisma.checkUp.create({
            data: {
              symptoms,
              diagosis,
              checkUpDate,
              nextvist,
              doctor: { connect: { id: Number(doctor) } },
              patient: { connect: { id: Number(patient) } },
            },
          })
        },
      });
    //end checkup mutation
    //start patientVitals  mutation
    t.field('createPatientVitals', {
      type: 'PatientVitals',
      args: {
        temperature: stringArg(),
        bpSystolic:stringArg(),
        bpDiastolic:stringArg(),
        notes:stringArg(),
        patient:intArg()
      },
      resolve: (_parent, { 
        temperature, 
        bpSystolic,
        bpDiastolic,
        notes,
        patient
       }, ctx) => {
        return prisma.patientVitals.create({
          data: {
            temperature,
            bpSystolic,
            bpDiastolic,
            notes,
            patient: { connect: { id: Number(patient) } },

          },
        })
      },
    });
  //end PatientVitals mutation
    }
    });