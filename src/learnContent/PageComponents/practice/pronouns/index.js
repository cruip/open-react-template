import React, { useEffect } from "react";
import { connect } from "react-redux";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import PronounsPractice from "./MainComponent";

import { fetchData } from "../../../reducers/PracticeState";

const PronounsComponent = ({ fetchData, progress }) => {
  useEffect(() => fetchData("pronouns"), []);
  return (
    <>
      <PracticeHeader
        title='Pronouns'
        description='Choose the correct sentence.'
        progress={progress}
      />
      <PronounsPractice />
    </>
  );
};

const mapState = (state) => ({
  level: state.GlobalState.level,
  progress: state.PracticeState.progress,
});

export default connect(mapState, { fetchData })(PronounsComponent);
