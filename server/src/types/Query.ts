import { PrismaClient } from "@prisma/client";
import { argsToArgsConfig } from "graphql/type/definition";
import { arg, idArg, intArg, queryType, stringArg } from "nexus"
import { type } from "os";
import { getUserId } from "../utils";

const prisma = new PrismaClient();
export const Query = queryType({
  definition(t) {
    t.list.field('me',{
      type:"User",
      resolve: (_parent,_args,ctx)=>{
        const userId = getUserId;
          return ctx.prisma.user.findMany({
where:{id:1}
          })
      }
    });
    t.list.field('users',{
      type:"User",
      args: { roleId: intArg() },
      resolve: (_parent,{roleId},ctx)=>{
          return ctx.prisma.user.findMany({
            where:{roleId:roleId}
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