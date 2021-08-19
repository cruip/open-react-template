import React, { useEffect } from "react";
import { connect } from "react-redux";
import PracticeMemorize from "./MainComponent";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";

function MemorizeComponent({ progress }) {
  return (
    <>
      <PracticeHeader
        titleTextID='unit.memorize'
        descriptionTextID='unit.practice.memorize'
        progress={progress}
      />
      <PracticeMemorize />
    </>
  );
}

const mapState = (state) => ({
  progress: state.PracticeState.progress,
});

export default connect(mapState)(MemorizeComponent);
