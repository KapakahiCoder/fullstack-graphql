const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const {models, db} = require('./db')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    // whatever you return below is the "context" and you should pass models
    // so that you can access it inside your resovlers or you can just imports models 
    // on top of the resolvers file.
    return {models, db}
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
