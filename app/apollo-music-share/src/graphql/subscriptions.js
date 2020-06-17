import { gql } from 'apollo-boost';

export const GET_SONGS = gql`
  subscription MyQuery {
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
