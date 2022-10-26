const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type List {
    _id: ID!
    name: String!
    description: String!
    assigned: String!
    important: String!
    done: Boolean!
    user_id: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    todo: Object!
  }

  type Query {
    list: [Tech]
    User(_id: String): [User]
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;