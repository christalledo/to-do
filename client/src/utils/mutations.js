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

export const MUTATION = gql`mutation CreateList($id: ID!, $assigned: String!) {
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

export const MUTATION_C  = gql`mutation CreateList($id: ID!, $assigned: String!) {
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