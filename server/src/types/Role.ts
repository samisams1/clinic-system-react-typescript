import { objectType } from "nexus";

export  const Role = objectType({
    name:"Role",
    definition(t) {
        t.int('id')
        t.string('name')
    },
})