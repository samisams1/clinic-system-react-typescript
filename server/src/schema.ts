import { makeSchema } from "nexus";
//import { nexusPrisma } from "nexus-plugin-prisma";
import {Query,User,Patient, Mutation } from "./types";

const schema =makeSchema({
    types:[Query,Mutation,Patient,User],
   // plugins: [nexusPrisma()],
    outputs:{
        schema:`${__dirname}/generated/schema.graphql`,
        typegen:`${__dirname}/generated/types.ts`
    }
   
});

export default schema;
