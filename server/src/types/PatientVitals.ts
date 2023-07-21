import { PrismaClient } from "@prisma/client";
import { objectType } from "nexus";
const prisma = new PrismaClient();
export const PatientVitals = objectType({
    name:"PatientVitals",
    definition(t) {
        t.int('id')
        t.string('temperature')
        t.string('bpSystolic')
        t.string('bpDiastolic')
        t.string('notes')
        t.string('patient')
        t.list.field('Patient', { type: 'Patient',
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


