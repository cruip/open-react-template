import React, { useEffect } from "react";
import { connect } from "react-redux";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import WriteContext from "./WriteContext";
import PracticeWrite from "./MainComponent";
import Keyboard from "./Keyboard";

const WriteComponent = ({ progress }) => {
  return (
    <>
      <WriteContext>
        <PracticeHeader
          titleTextID='unit.write'
          descriptionTextID='unit.practice.write'
          progress={progress}
        />
        <PracticeWrite />
        <Keyboard />
      </WriteContext>
    </>
  );
};

const mapState = (state) => ({
  level: state.GlobalState.level,
  progress: state.PracticeState.progress,
});

export default connect(mapState)(WriteComponent);
