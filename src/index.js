import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import Cookies from "universal-cookie";

import configureStore from "./storeConfig";

import config from "./app.config.json";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import './App.css';
import "./assets/scss/style.scss";

const history = createBrowserHistory({ forceRefresh: true });
const store = configureStore();
const cookies = new Cookies();

const render = () => {
  const subdomain = window.location.host.split(".")[0];

  console.log(cookies.get("user.id") === undefined);

  if (cookies.get("user.id") === undefined && subdomain === "learn") {
    window.location.href = config.app_url + "login/";
  } else if (cookies.get("user.id") !== undefined && subdomain === "www") {
    window.location.href = config.redirect_url;
  } else {
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.getElementById("root")
    );
  }
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
