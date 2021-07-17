import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import Button from "../../../../elements/Button";
import AudioPlayer from "../../../../elements/AudioPlayer";
import Image from "../../../../elements/Image";

import {
  setProgress,
  setPracticeFinished,
} from "../../../../reducers/PracticeState";

const PracticeInterrogativeForm = ({
  practiceData,
  setProgress,
  setPracticeFinished,
}) => {
  const [count, setCount] = useState(0);

  const [choice1, setchoice1] = useState("");
  const [choice2, setchoice2] = useState("");
  const [choice3, setchoice3] = useState("");
  const [textPartOne, setTextPartOne] = useState("");
  const [textPartTwo, setTextPartTwo] = useState("");
  const [currentAudio, setCurrentAudio] = useState();
  const [blockButtons, setBlockButtons] = useState(true);

  useEffect(() => {
    if (practiceData.length === 0 || undefined) return;

    if (practiceData.length !== 0 && practiceData.length === count) {
      setPracticeFinished(true);
      return;
    }
    count !== 0 && setProgress(count);
    setchoice1(practiceData[count].answer[0].content);
    setchoice2(practiceData[count].answer[1].content);
    setchoice3(practiceData[count].answer[2].content);
    setTextPartOne(practiceData[count].textPartOne);
    setTextPartTwo(practiceData[count].textPartTwo);
    setCurrentAudio(practiceData[count].audio);
  }, [practiceData, count]);

  const handleClick = (nr) => {
    // nr === 0 && setResult((prev) => (data.answer[0].correct ? prev + 1 : prev));
    // nr === 1 && setResult((prev) => (data.answer[1].correct ? prev + 1 : prev));
    // nr === 2 && setResult((prev) => (data.answer[2].correct ? prev + 1 : prev));
    setBlockButtons(true);
    setCount((prev) => prev + 1);
  };

  return (
    <section className='fl-co-ce pt-64'>
      <AudioPlayer
        className='mb-24 '
        style={{
          padding: 17,
          background: "#00c6c2",
          borderRadius: "50em",
        }}
        icon={require("../../../../assets/images/icons/sound_icon.svg")}
        setAudio={currentAudio}
        onAudioEnd={() => setBlockButtons(false)}
        Animate
      >
        <span
          className='button-box-shadow'
          style={{
            padding: 17,
            background: "#00c6c2",
            borderRadius: "50em",
          }}
        >
          <Image type='icon' image='sound_icon.svg' alt='sound icon' />
        </span>
      </AudioPlayer>
      <h3>
        <span>{textPartOne}</span>
        <span> _ _ _ _ _ _ _ _ </span>
        <span>{textPartTwo}</span>
      </h3>
      <div className='fl-co'>
        <div>
          <Button
            disabled={blockButtons}
            style={{ width: "100%" }}
            className={classNames("mb-24 mt-32", blockButtons && "disabled")}
            onClick={() => handleClick(0)}
          >
            {choice1}
          </Button>
        </div>
        <div>
          <Button
            disabled={blockButtons}
            style={{ width: "100%" }}
            className={classNames("mb-24", blockButtons && "disabled")}
            onClick={() => handleClick(1)}
          >
            {choice2}
          </Button>
        </div>
        <div>
          <Button
            disabled={blockButtons}
            className={classNames(blockButtons && "disabled")}
            style={{ width: "100%" }}
            onClick={() => handleClick(2)}
          >
            {choice3}
          </Button>
        </div>
      </div>
    </section>
  );
};

const mapState = (state) => ({
  practiceData: state.PracticeState.practiceData,
});

const mapDis = (dispach) => ({
  setProgress: (enable) => dispach(setProgress(enable)),
  setPracticeFinished: (enable) => dispach(setPracticeFinished(enable)),
});

export default connect(mapState, mapDis)(PracticeInterrogativeForm);
