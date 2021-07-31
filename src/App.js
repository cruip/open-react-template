import React, { useRef, useEffect, useContext } from "react";
import { useLocation, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ReactGA from "react-ga";

// Layouts

// Views

// import configureStore from "./store/config";

// Loading
import PageLoader from "./globalUtils/PageLoader";

import Landing from "./landing";
import Academy from "./academy";

// import "./Landing/utils/translation";

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
              <Landing />
            </>
          ),
          learn: (
            <>
              {/* {loading && <PageLoader />} */}
              <Academy />
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
