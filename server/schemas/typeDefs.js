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
    list: [List]
    User(_id: ID!): [User]
  }
  type Mutation {
    createList(_id: ID!, assigned: String!)
    deleteList(_id: ID!, assigned: String! )
    updateList(_id: ID!, assigned: String!)
  }
`;

module.exports = typeDefs;