import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import PracticeSpeak from "./MainComponent";

function SpeakComponent({ progress }) {
  return (
    <>
      <PracticeHeader
        title='Speak'
        description='Listen to the phrase, record yourself and compare your pronunciation with the original.'
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
