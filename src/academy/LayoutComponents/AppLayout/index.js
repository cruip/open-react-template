import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import FooterWrapp from "../Footer";
import Sidebar from "../Sidebar";
import Header from "../Header";

const AppLayout = ({ children }) => {
  const location = useLocation();

  const [removeHeader, setRemoveHeader] = useState(true);

  useEffect(() => {
    if (location.pathname === "/profile/info") setRemoveHeader(false);
  }, [location]);

  return (
    <>
      <Sidebar />
      <div className='wrapper'>
        {removeHeader && <Header />}
        {children}
        {/* <FooterWrapp /> */}
      </div>
    </>
  );
};

const mapState = (state) => ({
  practiceFinished: state.PracticeState.practiceFinished,
});

export default connect(mapState)(AppLayout);
