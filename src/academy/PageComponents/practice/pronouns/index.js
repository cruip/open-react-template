import React, { useEffect } from "react";
import { connect } from "react-redux";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import PronounsPractice from "./MainComponent";

const PronounsComponent = ({ progress }) => {
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

export default connect(mapState)(PronounsComponent);
