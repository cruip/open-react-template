import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import refreshToken from "../globals/RefreshToken";

// import { fetchData } from "../reducers/MainPage";
// import { fetchPracticeData } from "../reducers/PracticeState";
// import { fetchProfileData } from "../reducers/Profile";
// import { fetchUnitData } from "../reducers/UnitData";
import { getData } from "../reducers/DataGenerator";

import PageLoader from "../../globalUtils/PageLoader";

const DataLoader = ({ children, getData, loading }) => {
  useEffect(() => {
    refreshToken();
    getData();
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
};

const mapState = (state) => ({
  loading: state.GlobalAppState.loading,
  // locale: state.GlobalState.locale
});

export default connect(mapState, { getData })(DataLoader);
