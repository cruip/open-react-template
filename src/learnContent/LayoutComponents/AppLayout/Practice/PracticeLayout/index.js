import React from "react";
import { connect } from "react-redux";

import PracticeFinished from "../PracticeFinished";

const PracticeLayout = ({ children, practiceFinished }) => {
  return practiceFinished ? (
    <PracticeFinished />
  ) : (
    <div style={{ width: "100%", height: "100vh" }}>{children}</div>
  );
};

const mapState = (state) => ({
  practiceFinished: state.PracticeState.practiceFinished,
});

export default connect(mapState)(PracticeLayout);
