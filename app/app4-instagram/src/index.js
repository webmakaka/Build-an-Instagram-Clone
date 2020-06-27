import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import App from './App';
import { AuthProvider } from './auth';
import { client } from './graphql/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
