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
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
     
    }
  }
`;