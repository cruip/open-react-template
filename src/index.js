import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import 'tailwindcss/dist/base.min.css'
import './assets/scss/style.scss';
import dotenv from 'dotenv';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

dotenv.config();

const apollo_client = new ApolloClient({
  uri: process.env.REACT_APP_GCMS_URL
});

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ApolloProvider client={ apollo_client }>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
