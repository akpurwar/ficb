const {ApolloServer,gql} = require('apollo-server');

const typeDefs = gql` 




type Query {
    id:ID!
    name: String
    songs :Song
}

type Song{
         genre: String
        composer: String
        year:String
}


# type Query {
# greeting: String
# }
`;

const resolvers = {
//   Query :{
//       greeting : () => "Hello Graphql "

//   },

  Query :{
      id : () => 1,
      name : () => "sonu nigam",
      songs : () => ({
        genre: () => "pop",
        composer: () =>"Ar rehman",
        year: () => "1998"
      })      
  }


  

}


const server = new ApolloServer({typeDefs,resolvers});
server.listen({port : 9000})
.then(({url}) => console.log(`Server running ${url}`));