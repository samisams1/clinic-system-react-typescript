import { PrismaClient } from "@prisma/client";
import { objectType } from "nexus";
const prisma = new PrismaClient();
export const Checkup = objectType({
    name:"Checkup",
    definition(t) {
        t.int('id')
        t.string('symptoms')
        t.string('diagosis')
        t.string('checkUpDate')
        t.string('nextvist')
		t.int('doctor')
		t.int('patient')
        t.list.field('Patient', { type: 'Patient',
		resolve(_parent, _args, ctx) {
				return prisma.user.findMany({
				  where: {
					id:1,
				  },
				})
			  }, 
		});
        t.list.field('Doctor', { type: 'User',
		resolve(_parent, _args, ctx) {
				return prisma.patient.findMany({
				  where: {
					id:1,
				  },
				})
			  }, 
		
		})
    },

})

