import { PrismaClient } from "@prisma/client";
import { objectType } from "nexus";
const prisma = new PrismaClient();
export const Role = objectType({
    name:"Role",
    definition(t) {
        t.int('id')
        t.string('name')
    },

})

