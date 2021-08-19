import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import PracticeSpeak from "./MainComponent";

function SpeakComponent({ progress }) {
  return (
    <>
      <PracticeHeader
        titleTextID='unit.speak'
        descriptionTextID='unit.practice.speak'
        progress={progress}
      />
      <PracticeSpeak />
    </>
  );
}

const mapState = (state) => ({
  progress: state.PracticeState.progress,
});

export default connect(mapState)(SpeakComponent);
