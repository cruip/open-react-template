import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  position: "fixed",
  background: "white",
  left: 0,
  top: 0,
  zIndex: 999999,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const PageLoader = ({ children }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Box style={styles}>
        <CircularProgress />
      </Box>
      {children}
    </div>
  );
};

export default PageLoader;
