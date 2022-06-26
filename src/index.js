import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createRoot } from 'react-dom/client';

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router history={history}>
    <App />
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
