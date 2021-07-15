import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "../../../../elements/Button";
import classNames from "classnames";

import {
  setProgress,
  setPracticeFinished,
} from "../../../../reducers/PracticeState";

const PracticeVocabulary = ({
  practiceData,
  setProgress,
  setPracticeFinished,
}) => {
  const [count, setCount] = useState(0);

  const [audio, setAudio] = useState();
  const [words, setWords] = useState();
  const [button1, setButton1] = useState("undefined");
  const [button2, setButton2] = useState("undefined");
  const [button3, setButton3] = useState("undefined");
  const [image, setImage] = useState();

  useEffect(() => {
    if (practiceData.length === 0 || undefined) return;

    if (practiceData.length !== 0 && practiceData.length === count) {
      setPracticeFinished(true);
      return;
    }

    setWords({
      word_1: practiceData[count].answer[0].content,
      word_2: practiceData[count].answer[1].content,
      word_3: practiceData[count].answer[2].content,
    });
    setButton1("undefined");
    setButton2("undefined");
    setButton3("undefined");
    setProgress(Math.floor(95 / (practiceData.length - count)));
    setImage(practiceData[count].image);
    setAudio(new Audio(practiceData[count].audio));
  }, [practiceData, count]);

  const answerCheck = (nr) => {
    const wrongAudioAnswer = new Audio(
      require("../../../../assets/images/vocabulary/wrong.mp3")
    );
    if (practiceData[count]?.answer[nr].correct) {
      nr === 0 && setButton1("true");
      nr === 1 && setButton2("true");
      nr === 2 && setButton3("true");
      audio.play(),
        setTimeout(() => {
          setCount((prev) => prev + 1);
        }, audio.duration * 1000 + 300);
    } else {
      wrongAudioAnswer.play();
      nr === 0 && setButton1(false);
      nr === 1 && setButton2(false);
      nr === 2 && setButton3(false);
    }
  };

  return (
    <section className='fl-ce p-32'>
      <div style={{ position: "relative", width: 540, height: 400 }}>
        <div
          className='m-auto'
          style={{ borderRadius: "50em", width: 200, overflow: "hidden" }}
        >
          <img src={image} alt='question image' />
        </div>

        <div style={{ position: "absolute", left: 2, bottom: 100 }}>
          <Button
            onClick={() => answerCheck(0)}
            className={classNames(
              "fl-ce",
              button1 === "true" && "selected-correct",
              !button1 && "selected-wrong"
            )}
            style={{
              background: "white",
              width: 150,
              height: 150,
              borderRadius: "50em",
            }}
          >
            {words?.word_1}
          </Button>
        </div>
        <div style={{ position: "absolute", right: 2, bottom: 90 }}>
          <Button
            onClick={() => answerCheck(1)}
            className={classNames(
              "fl-ce",
              button2 === "true" && "selected-correct",
              !button2 && "selected-wrong"
            )}
            style={{
              background: "white",
              width: 150,
              height: 150,
              borderRadius: "50em",
            }}
          >
            {words?.word_2}
          </Button>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "47%",
            transform: "translateX(-47%)",
          }}
        >
          <Button
            onClick={() => answerCheck(2)}
            className={classNames(
              "fl-ce",
              button3 === "true" && "selected-correct",
              !button3 && "selected-wrong"
            )}
            style={{
              background: "white",
              width: 150,
              height: 150,
              borderRadius: "50em",
            }}
          >
            {words?.word_3}
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

export default connect(mapState, mapDis)(PracticeVocabulary);
