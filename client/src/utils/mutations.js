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


export const CREATE_LIST  = gql`mutation CreateList($id: ID!, $assigned: String!) {
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

export const DELETE_LIST = gql`mutation DeleteList($id: ID!, $assigned: String!) {
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

export const UPDATE_LIST = gql`mutation UpdateList($id: ID!, $assigned: String!) {
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

export const CREATE_TODO = gql`mutation creatTodo($userId: ID!, $todo: String!) {
  createToDo(user_id: $userId, todo: $todo) {
    _id
    username
    email
    password
    todo
  }
}
`;

export const DELETE_TODO = gql`mutation deleteToDo($userId: ID!, $todo: String!) {
  deleteToDo(user_id: $userId, todo: $todo) {
    _id
    username
    email
    password
    todo
  }
}
`;

export const UPDATE_TODO = gql`mutation updateToDo($userId: ID!, $todo: String!) {
  updateToDo(user_id: $userId, todo: $todo) {
    _id
    username
    email
    password
    todo
  }
}
`;

export const ADD_USER = gql`mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const LOGIN = gql`mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      
    }
  }
}
`;

export const SIGNUP = gql`mutation Signup($email: String!, $password: String!, $userid: ID) {
  signup(email: $email, password: $password) {
    token
    user {
      _id
      username
      password
      email
      
    }
  }
}
`;
