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
  },
});