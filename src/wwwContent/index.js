import React, { useRef, useEffect, useContext } from "react";
import { useLocation, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

import Store from "./utils/Store";

import { setLoading } from "../appReducers/GlobalAppState";

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
import Certificates from "./views/Certificates";

import "./utils/translation";

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const WWWContent = ({ setLoading }) => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 400);
  }, []);

  return (
    <Store>
      <div className='body-wrap'>
        <ScrollReveal
          ref={childRef}
          children={() => (
            <Switch>
              <AppRoute
                exact
                path='/login'
                component={Login}
                layout={LayoutDefault}
              />
              <AppRoute
                exact
                path='/'
                component={Home}
                layout={LayoutDefault}
              />
              <AppRoute
                exact
                path='/how-it-works'
                component={HowItWork}
                layout={LayoutDefault}
              />
              <AppRoute
                exact
                path='/levels'
                component={Levels}
                layout={LayoutDefault}
              />
              <AppRoute
                exact
                path='/Plans'
                component={Plans}
                layout={LayoutDefault}
              />
              <AppRoute
                exact
                path='/register'
                component={Register}
                layout={LayoutDefault}
              />
              <AppRoute
                exact
                path='/efficacy'
                component={Efficacy}
                layout={LayoutDefault}
              />
              <AppRoute
                exact
                path='/certificates'
                component={Certificates}
                layout={LayoutDefault}
              />
            </Switch>
          )}
        />
      </div>
    </Store>
    // </Provider>
  );
};

export default connect(null, { setLoading })(WWWContent);
