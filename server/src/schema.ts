import { makeSchema } from "nexus";
//import { nexusPrisma } from "nexus-plugin-prisma";
import {Query,User,Role,Patient,Mutation,PatientVitals,Checkup, Appointment, Doctor, Nurse, Admin } from "./types";

const schema =makeSchema({
    types:[Query,Mutation,Patient,User,Role,Appointment,Checkup,PatientVitals,Admin,Doctor,Nurse],
   // plugins: [nexusPrisma()],
    outputs:{
        schema:`${__dirname}/generated/schema.graphql`,
        typegen:`${__dirname}/generated/types.ts`
    }
   
});

export default schema;
