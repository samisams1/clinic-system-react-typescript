import { PrismaClient } from "@prisma/client";
import { objectType } from "nexus";
const prisma = new PrismaClient();
export const Admin = objectType({
    name:"Admin",
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
                        id:1
                    }
                })
			  }, 
		});
    },
})
