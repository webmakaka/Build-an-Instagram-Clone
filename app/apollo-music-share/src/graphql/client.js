import ApolloClient from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://build-an-instagram-clone.herokuapp.com/v1/graphql',
    options: {
      reconnect: true,
    },
  }),
  cache: new InMemoryCache(),
});

// export const client = new ApolloClient({
//   uri: 'https://build-an-instagram-clone.herokuapp.com/v1/graphql',
// });
