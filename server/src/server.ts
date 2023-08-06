import { ApolloServer } from "apollo-server";
//import { createContext } from "./context";
import schema from "./schema";


//import { context } from "./context";   

export const server = new ApolloServer({
    schema,
  //  context,    
});
// The `listen` method launches a web server.
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


