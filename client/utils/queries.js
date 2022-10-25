import { gql } from '@apollo/client';

export const QUERY_ = gql`
  query tech {
    name {
      _id
      name
      
    }
  }
`;

export const QUERY_NAME = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
     
    }
  }
`;