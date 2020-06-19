import ApolloClient from 'apollo-client';
import { gql } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GET_QUEUED_SONGS } from './queries';

export const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://build-an-instagram-clone.herokuapp.com/v1/graphql',
    options: {
      reconnect: true,
    },
  }),
  cache: new InMemoryCache(),
  typeDefs: gql`
    type Song {
      id: uuid!
      title: String!
      artist: String!
      thumbnail: String!
      duration: Float!
      url: String!
    }

    input SongInput {
      id: uuid!
      title: String!
      artist: String!
      thumbnail: String!
      duration: Float!
      url: String!
    }

    type Query {
      queue: [Song]!
    }

    type Mutation {
      addOrRemoveFromQueue(input: SongInput!): [Song]!
    }
  `,
  resolvers: {
    Mutation: {
      addOrRemoveFromQueue: (_, { input }, { cache }) => {
        const queryResult = cache.readQuery({
          query: GET_QUEUED_SONGS,
        });
        if (queryResult) {
          const { queue } = queryResult;
          const isInQueue = queue.some((song) => song.id === input.id);
          const newQueue = isInQueue
            ? queue.filter((song) => song.id !== input.id)
            : [...queue, input];
          cache.writeQuery({
            query: GET_QUEUED_SONGS,
            data: { queue: newQueue },
          });

          return newQueue;
        }

        return [];
      },
    },
  },
});

const hasQueue = Boolean(localStorage.getItem('queue'));

const data = {
  queue: hasQueue ? JSON.parse(localStorage.getItem('queue')) : [],
};

client.writeData({ data });
