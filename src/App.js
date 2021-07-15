import React, { useRef, useEffect, useContext } from "react";
import { useLocation, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ReactGA from "react-ga";

// Layouts

// Views

// import configureStore from "./store/config";

// Loading
import PageLoader from "./globalUtils/PageLoader";

import WWWContent from "./wwwContent";
import LearnContent from "./learnContent";

// import "./wwwContent/utils/translation";

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = (page) => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

const App = ({ auth, loading }) => {
  const subdomain = window.location.host.split(".")[0];

  return (
    <>
      {
        {
          www: (
            <>
              {loading && <PageLoader />}
              <WWWContent />
            </>
          ),
          learn: (
            <>
              {loading && <PageLoader />} <LearnContent />
            </>
          ),
        }[subdomain]
      }
    </>
  );
};

const mapState = (state) => ({
  auth: state.GlobalAppState.auth,
  loading: state.GlobalAppState.loading,
});

export default connect(mapState)(App);
