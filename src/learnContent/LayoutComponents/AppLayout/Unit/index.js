import React from "react";

const UnitLayout = ({ children }) => {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#181c20" }}>
      {children}
    </div>
  );
};

export default UnitLayout;
