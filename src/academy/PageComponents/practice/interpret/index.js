import React, { useEffect } from "react";
import { connect } from "react-redux";
import InterpretContext from "./InterpretContext";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import PracticeSection from "./PracticeSection";

import ActionComponent from "./ActionComponent";
import MainComponent from "./MainComponent";

import { fetchData } from "../../../reducers/PracticeState";

function InterpretComponent({ fetchData, progress }) {
  useEffect(() => {
    fetchData("interpret");
  }, []);

  return (
    <InterpretContext>
      <PracticeHeader
        title='Interpret'
        description='Pick a character and play their role.'
        progress={progress}
      />
      <PracticeSection />
      {/* <MainComponent />
      <ActionComponent /> */}
    </InterpretContext>
  );
}

const mapState = (state) => ({
  progressCount: state.PracticeState.progressCount,
  progress: state.PracticeState.progress,
});

export default connect(mapState, { fetchData })(InterpretComponent);
