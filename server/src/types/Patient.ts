import { objectType } from "nexus";

export const Patient = objectType({
    name:"Patient",
    definition(t) {
        t.int('id')
        t.string('firstName')
        t.string('lastName')
        t.string('dateOfBirth')
        t.string('martialStatus')
        t.string('phoneNumber')
        t.string('email')
        t.string('address')
        t.string('country')

    },
})

