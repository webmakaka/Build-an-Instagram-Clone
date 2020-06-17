import { gql } from 'apollo-boost';

export const GET_SONGS = gql`
  query MyQuery {
    songs {
      id
      artist
      duration
      thumbnail
      title
      url
    }
  }
`;
