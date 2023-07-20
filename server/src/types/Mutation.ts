import { idArg, intArg, list, mutationType, stringArg } from "@nexus/schema";
import { PrismaClient } from "@prisma/client";
//import { LikedTweet } from "./LikedTweet";
const prisma = new PrismaClient();
export const Mutation = mutationType({
    definition(t){
        t.field('createDraft', {
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
    }
    });