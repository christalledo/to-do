import { gql } from '@apollo/client';

export const CREATE_NAME = gql`
  mutation createName($: String!, $: String!) {
    createMatchup() {
      _id
      
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createName($_id: String!, $: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      
    }
  }
`;
