import React, { useEffect } from "react";
import { connect } from "react-redux";
import PracticeMemorize from "./MainComponent";
import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";

import { fetchData } from "../../../reducers/PracticeState";

function MemorizeComponent({ fetchData, progress }) {
  useEffect(() => {
    fetchData("memorize");
  }, []);

  return (
    <>
      <PracticeHeader
        title='Memorize'
        description='Listen and memorize, record yourself and compare your pronunciation with the original.'
        progress={progress}
      />
      <PracticeMemorize />
    </>
  );
}

const mapState = (state) => ({
  progress: state.PracticeState.progress,
});

export default connect(mapState, { fetchData })(MemorizeComponent);
