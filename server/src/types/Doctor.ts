import { PrismaClient } from "@prisma/client";
import { objectType } from "nexus";
const prisma = new PrismaClient();
export const Doctor = objectType({
    name:"Doctor",
    definition(t) {
        t.id('id')
        t.string('email')
        t.string('firstName')
        t.string('lastName')
        t.string('phoneNumber')
        t.string('password')
        t.string('roleId')
        t.list.field('Role', { type: 'Role',
		resolve(_parent, _args, ctx) {
				return prisma.role.findMany({
                    where:{
                        id:2
                    }
                })
			  }, 
		});
    },
})
