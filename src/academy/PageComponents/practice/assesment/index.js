import React, { useEffect } from "react";
import { connect } from "react-redux";
import PracticeAssessment from "./MainComponent";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";

import { fetchData } from "../../../reducers/PracticeState";

const AssessmentComponent = ({ fetchData, progress }) => {
  useEffect(() => {
    fetchData("assessment");
  }, []);
  return (
    <>
      <PracticeHeader
        title='Assessment'
        description="Check what you've learnt in the unit."
        progress={progress}
      />
      <PracticeAssessment />
    </>
  );
};

const mapState = (state) => ({
  progress: state.PracticeState.progress,
});

export default connect(mapState, { fetchData })(AssessmentComponent);
