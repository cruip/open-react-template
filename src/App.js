import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Store
import Store from "../src/utils/Store";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import HowItWork from "./views/how-works";
import Levels from "./views/Levels";
import Plans from "./views/Scheme";
import Login from "./views/Login";
import Register from "./views/Register";
import Efficacy from "./views/Efficacy";
import Certificates from "./views/certificates";

import "./utils/translation";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Store>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute
              exact
              path="/login"
              component={Login}
              layout={LayoutDefault}
            />
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute
              exact
              path="/how-it-works"
              component={HowItWork}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/levels"
              component={Levels}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/Plans"
              component={Plans}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/register"
              component={Register}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/efficacy"
              component={Efficacy}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/certificates"
              component={Certificates}
              layout={LayoutDefault}
            />
          </Switch>
        )}
      />
    </Store>
  );
};

export default App;
