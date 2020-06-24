import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import App from './App';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
