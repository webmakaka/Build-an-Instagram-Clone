import ApolloClient from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

const headers = { 'x-hasura-admin-secret': 'ADMIN_SECRET' };

export const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://build-an-instagram-clone.herokuapp.com/v1/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  }),
  cache: new InMemoryCache(),
});
