import { PrismaClient } from "@prisma/client";
import { arg, idArg, queryType, stringArg } from "nexus"
import { type } from "os";

const prisma = new PrismaClient();
export const Query = queryType({
  definition(t) {
      t.list.field('users',{
       type:"User",
       resolve: (_, _args, ctx) => {
        return prisma.user.findMany();
       }
      });
      t.list.field('admins',{
        type:"Admin",
        resolve: (_, _args, ctx) => {
         return prisma.user.findMany({
          where:{
            roleId:1
          }
         });
        }
       });
      t.list.field('doctors',{
        type:"Doctor",
        resolve: (_, _args, ctx) => {
         return prisma.user.findMany({
          where:{
            roleId:2
          }
         });
        }
       });
       t.list.field('nurses',{
        type:"Nurse",
        resolve: (_, _args, ctx) => {
         return prisma.user.findMany({
          where:{
            roleId:3
          }
         });
        }
       });
       t.list.field('cashiers',{
        type:"Cashier",
        resolve: (_, _args, ctx) => {
         return prisma.user.findMany({
          where:{
            roleId:3
          }
         });
        }
       });
      t.list.field('user',{
        type:"User",
        args: { id: idArg() },
        resolve: (_parent,{id},ctx)=>{
            return prisma.user.findMany({
              
            })
        }
      });
      t.list.field('patients',{
        type:"Patient",
        args: { id: idArg() },
        resolve: (_parent,{id},ctx)=>{
            return prisma.patient.findMany({
              
            })
        }
      });
      t.list.field('checkups',{
        type:"Checkup",
        args: { id: idArg() },
        resolve: (_parent,{id},ctx)=>{
            return prisma.checkUp.findMany({
            })
        }
      });
      t.list.field('PatientVitals',{
        type:"PatientVitals",
        args: { id: idArg() },
        resolve: (_parent,{id},ctx)=>{
            return prisma.patientVitals.findMany({
            })
        }
      });
      t.list.field('appointments',{
        type:"Appointment",
        args: { id: idArg() },
        resolve: (_parent,{id},ctx)=>{
            return prisma.appointment.findMany({
            })
        }
      });
  },
});