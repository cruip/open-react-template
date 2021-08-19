import React, { useEffect } from "react";
import { connect } from "react-redux";

import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import PracticeInterrogativeForm from "./MainComponent";

const InterrogativeFormComponent = ({ progress }) => {
  return (
    <>
      <PracticeHeader
        titleTextID='unit.interrogative-form'
        descriptionTextID='unit.practice.interrogative-form'
        progress={progress}
      />
      <PracticeInterrogativeForm />
    </>
  );
};

const mapState = (state) => ({
  progress: state.PracticeState.progress,
});

export default connect(mapState)(InterrogativeFormComponent);
