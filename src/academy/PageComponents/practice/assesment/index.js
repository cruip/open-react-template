import React, { useEffect } from "react";
import { connect } from "react-redux";
import PracticeAssessment from "./MainComponent";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";

const AssessmentComponent = ({ progress }) => {
  return (
    <>
      <PracticeHeader
        titleTextID='unit.assessment'
        descriptionTextID='unit.practice.assessment'
        progress={progress}
      />
      <PracticeAssessment />
    </>
  );
};

const mapState = (state) => ({
  progress: state.PracticeState.progress,
});

export default connect(mapState)(AssessmentComponent);
