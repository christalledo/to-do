const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type List {
    _id: ID
    name: String
    description: String
    assigned: String
    important: String
    done: Boolean
    user_id: String
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    todo: String!
  }
  type Query {
    list: [List]
    user(_id: ID!): [User]
  }
  type Mutation {
    createList(_id: ID!, assigned: String!) : List
    deleteList(_id: ID!, assigned: String! ) : List
    updateList(_id: ID!, assigned: String!) : List
  }
`;

module.exports = typeDefs;