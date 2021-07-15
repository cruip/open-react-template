import React, { useEffect } from "react";
import { connect } from "react-redux";

import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import PracticeInterrogativeForm from "./MainComponent";

import { fetchData } from "../../../reducers/PracticeState";

const InterrogativeFormComponent = ({ fetchData, level, progress }) => {
  useEffect(() => {
    fetchData("interrogative-form");
  }, []);
  return (
    <>
      <PracticeHeader
        title='Interrogative Form'
        description='Complete the sentence choosing the write word.'
        progress={progress}
      />
      <PracticeInterrogativeForm />
    </>
  );
};

const mapState = (state) => ({
  level: state.GlobalState.level,
  progress: state.PracticeState.progress,
});

export default connect(mapState, { fetchData })(InterrogativeFormComponent);
