import React, { useEffect } from "react";
import { connect } from "react-redux";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";
import WriteContext from "./WriteContext";
import PracticeWrite from "./MainComponent";
import Keyboard from "./Keyboard";

import { fetchData } from "../../../reducers/PracticeState";

const WriteComponent = ({ fetchData, progress }) => {
  useEffect(() => {
    fetchData("write");
  }, []);

  return (
    <>
      <WriteContext>
        <PracticeHeader
          title='Write'
          description='Listen and write. Don’t forget the capital letters, commas and the full stop at the end of the sentence.'
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

export default connect(mapState, { fetchData })(WriteComponent);
