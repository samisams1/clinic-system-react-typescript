import { PrismaClient } from "@prisma/client";
import { objectType } from "nexus";
const prisma = new PrismaClient();
export const User = objectType({
    name:"User",
    definition(t) {
        t.id('id')
        t.string('email')
        t.string('firstName')
        t.string('lastName')
        t.string('phoneNumber')
        t.string('password')
        t.string('roleId')
        t.string('role')
        
    },
})
