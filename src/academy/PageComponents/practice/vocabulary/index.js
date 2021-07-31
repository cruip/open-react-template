import React, { useEffect } from "react";
import { connect } from "react-redux";

import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import PracticeVocabulary from "./MainComponent";

const VocabularyComponent = ({ fetchPracticeData, progress }) => {
  return (
    <>
      <PracticeHeader
        title='Vocabulary'
        description='Choose the word that matches the image.'
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
