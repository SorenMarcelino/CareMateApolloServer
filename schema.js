const { gql } = require("apollo-server");

const typeDefs = gql`
  input UserDataInput {
    lastname: String
    firstname: String
  }

  type Query {
    hello: String
  }

  type Mutation {
    saveData(userData: UserDataInput, heartRateData: String, hrvData: String): String
  }
`;

module.exports = typeDefs;
