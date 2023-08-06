import { idArg, intArg, list, mutationType, stringArg } from "@nexus/schema";
import { PrismaClient } from "@prisma/client";
//import { LikedTweet } from "./LikedTweet";
import { APP_SECRET } from "../utils";
import { sign } from "jsonwebtoken"
import { compareSync } from "bcryptjs";
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();
export const Mutation = mutationType({
    definition(t){
      //login mutation
      t.field("login", {
        type:"AuthPayload",
        args: {
          email: stringArg(),
          password: stringArg()
        },
        resolve: async (_parent, { email, password }, ctx) => {
          const user = await prisma.user.findFirst({
            where: {
              email
            }
          })
          if (!user) {
            throw new Error(`No user found for email: ${email}`)
          }
          const passwordValid = await compareSync(password, user.password)
          if (!passwordValid) {
            throw new Error("Invalid password")
          }
          return {
            token: sign({ userId: user.id }, APP_SECRET),
            user
          }
        }
      });
      //end Login
      //create Users
      t.field('createUser', {
        type: 'User',
        args: {
          firstName: stringArg(),
          lastName: stringArg(),
          email: stringArg(),
          phoneNumber: stringArg(),
          password: stringArg(),
          role:intArg(),
       
        },
        resolve: (_parent, { 
            firstName, 
            lastName,
            email,
            phoneNumber,
            password,
            role
             }, ctx) => {
             const pass = bcrypt.hashSync(password,10);
          return prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                phoneNumber,
                password:pass,
                role: { connect: { id: Number(role) } },

            },
          })
        },
      });
      //end Create USers
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
          t.field('updatePatient', {
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