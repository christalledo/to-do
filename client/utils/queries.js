import { gql } from '@apollo/client';

export const QUERY_LIST = gql`
 query List {
  list {
    user_id
    name
    important
    done
    description
    assigned
    _id
  }
}

`;

export const QUERY_USER = gql`
  query User($id: ID!) {
  user(_id: $id) {
    _id
    username
    email
    password
    todo
  }
}
`;