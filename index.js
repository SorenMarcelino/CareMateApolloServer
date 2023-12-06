require("dotenv").config();
const {ApolloServer} = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers")

const server = new ApolloServer({typeDefs, resolvers});  // Creates a new instance of ApolloServer and passes the imported schema via the typeDefs property

// Choose the port and start the server
const PORT = process.env.PORT || 4000;
const IP_ADDRESS = '192.168.1.74'; // Replace with your computer's local IP address
server.listen(PORT, IP_ADDRESS).then( () => {
    console.log(`Server running at http://${IP_ADDRESS}:${PORT}${server.graphqlPath}`);
});
