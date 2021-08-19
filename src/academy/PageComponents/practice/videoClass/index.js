import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

import PracticeHeader from "../../../LayoutComponents/AppLayout/Practice/PracticeHeader";

import { setLoading } from "../../../../appReducers/GlobalAppState";
import { setPracticeFinished } from "../../../reducers/PracticeState";

const VideoClassComponent = ({ setPracticeFinished, practiceData }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current &&
      ref.current.plyr.on("ended", () => setPracticeFinished(true));
  }, [ref.current]);

  const [videoSrc, setVideoSrc] = useState({});

  useEffect(() => {
    practiceData.length !== 0 &&
      setVideoSrc({
        type: "video",
        sources: [
          {
            src: practiceData.split("/")[4],
            provider: "vimeo",
          },
        ],
      });
  }, [practiceData]);

  return (
    <>
      <PracticeHeader
        titleTextID='unit.video-class'
        descriptionTextID='unit.practice.video-class'
      />
      <section className='fl-ce'>
        <div style={{ width: "90%" }}>
          {practiceData.length !== 0 && <Plyr ref={ref} source={videoSrc} />}
        </div>
      </section>
    </>
  );
};

const mapState = (state) => ({
  practiceData: state.PracticeState.practiceData,
});

export default connect(mapState, {
  setLoading,
  setPracticeFinished,
})(VideoClassComponent);
