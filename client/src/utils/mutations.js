import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;



export const MUTATION_CREATE_LIST  = gql`mutation CreateList($id: ID!, $assigned: String!) {
  createList(_id: $id, assigned: $assigned) {
    _id
    name
    description
    assigned
    important
    done
    user_id
  }
}
`;

export const MUTATION_DELETE_LIST = gql`mutation DeleteList($id: ID!, $assigned: String!) {
  deleteList(_id: $id, assigned: $assigned) {
    _id
    name
    description
    assigned
    important
    done
    user_id
  }
}
`;

export const MUTATION_UPDATE_LIST = gql`mutation UpdateList($id: ID!, $assigned: String!) {
  updateList(_id: $id, assigned: $assigned) {
    _id
    name
    description
    assigned
    important
    done
    user_id
  }
}
`;

export const MUTATION_CREATE_TODO = gql`mutation createToDo($userId: ID!, $todo: String!) {
  createToDo(user_id: $userId, todo: $todo) {
    _id
    username
    email
    password
    todo
  }
}
`;

export const MUTATION_DELETE_TODO = gql`mutation Delet($userId: ID!, $todo: String!) {
  deleteToDo(user_id: $userId, todo: $todo) {
    _id
    username
    email
    password
    todo
  }
}
`;

export const MUTATION_UPDATE_TODO = gql`($userId: ID!, $todo: String!) {
  updateToDo(user_id: $userId, todo: $todo) {
    _id
    username
    email
    password
    todo
  }
}
`;

export const ADD_USER = gql`($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      
    }
  }
}
`;

export const MUTATION_LOGIN = gql`($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      
    }
  }
}
`;
