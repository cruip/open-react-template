import React, { useEffect } from "react";
import { connect } from "react-redux";

import UnitsSection from "./parts/UnitsSection";
import CertificateSection from "./parts/CertificateSection";

import { fetchData } from "../../reducers/MainPage";
import { setLoading } from "../../../appReducers/GlobalAppState";

const Home = (props) => {
  const { level, locale, fetchData, setLoading, units, loading } = props;

  // useEffect(() => {
  //   units && setLoading(false);
  // }, [units]);

  useEffect(() => {
    // console.log(loading);
    // fetchData();
  }, [level, locale]);

  return (
    <div className='fl fl-co fl-al-it-en pt-64' style={{ width: "60%" }}>
      <div className='pb-64' style={{ width: "650px" }}>
        <CertificateSection />
        <UnitsSection />
      </div>
    </div>
  );
};

const mapState = (state) => ({
  loading: state.GlobalAppState.loading,
  locale: state.GlobalState.locale,
  level: state.GlobalState.level,
  units: state.MainPage.units,
});

export default connect(mapState, { fetchData, setLoading })(Home);
