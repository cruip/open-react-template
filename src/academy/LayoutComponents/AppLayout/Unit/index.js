import React from "react";

import SignupPopup from "../../../globals/SignupPopup";

const UnitLayout = ({ children }) => {
  return (
    <>
      {/* <SignupPopup /> */}
      <div style={{ width: "100%", minHeight: "100vh", background: "#181c20" }}>
        {children}
      </div>
    </>
  );
};

export default UnitLayout;
