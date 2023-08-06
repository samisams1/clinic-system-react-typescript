import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import { Mutation,Role, Query, User, PatientVitals, Patient, Checkup, Appointment, AuthPayload } from "./types";

const schema =makeSchema({
    types:[User,PatientVitals,Patient,Checkup,Appointment,AuthPayload,Role,Mutation,Query],
    plugins: [nexusPrisma()],
    outputs:{
        schema:`${__dirname}/generated/schema.graphql`,
        typegen:`${__dirname}/generated/types.ts`
    },
    
   
});

export default schema;