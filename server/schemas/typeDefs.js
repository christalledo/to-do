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
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    list: [List]
    user(_id: ID!): [User]
  }
  type Mutation {
    createList(_id: ID!, assigned: String!) : List
    deleteList(_id: ID!, assigned: String! ) : List
    updateList(_id: ID!, assigned: String!) : List
    createToDo(user_id: ID!, todo: String!) : User
    updatedToDo(user_id: ID!, todo: String!) : User
    deletedToDo(user_id: ID!,  todo: String!) : User
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;


module.exports = typeDefs;