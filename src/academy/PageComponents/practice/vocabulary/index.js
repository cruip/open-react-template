import React, { useEffect } from "react";
import { connect } from "react-redux";

import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import PracticeVocabulary from "./MainComponent";

const VocabularyComponent = ({ fetchPracticeData, progress }) => {
  return (
    <>
      <PracticeHeader
        titleTextID='unit.vocabulary'
        descriptionTextID='unit.practice.vocabulary'
        progress={progress}
      />
      <PracticeVocabulary />
    </>
  );
};

const mapState = (state) => ({
  progress: state.PracticeState.progress,
});

export default connect(mapState)(VocabularyComponent);
