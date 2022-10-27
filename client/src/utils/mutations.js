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

// export const CREATE_NAME = gql`
//   mutation createName($: String!, $: String!) {
//     createMatchup() {
//       _id
      
//     }
//   }
// `;

// export const CREATE_VOTE = gql`
//   mutation createName($_id: String!, $: Int!) {
//     createVote(_id: $_id, techNum: $techNum) {
//       _id
      
//     }
//   }
// `;
