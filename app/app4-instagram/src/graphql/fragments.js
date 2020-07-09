import { gql } from 'apollo-boost';

export const userFields = gql`
  fragment userFields on users {
    id
    username
    name
    profile_image
  }
`;

export const gridPostFields = gql`
  fragment gridPostFields on posts {
    id
    media
    likes_aggregate {
      aggregate {
        count
      }
    }
    comments_aggregate {
      aggregate {
        count
      }
    }
  }
`;
