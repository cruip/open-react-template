import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import Button from "../../../../elements/Button";
import Image from "../../../../elements/Image";
import { OutputContext, ShowKeyboardContext } from "../WriteContext";

import AudioPlayer from "../../../../elements/AudioPlayer";

import {
  setProgress,
  setPracticeFinished,
} from "../../../../reducers/PracticeState";

const PracticeWrite = ({ practiceData, setPracticeFinished }) => {
  const [count, setCount] = useState(0);
  const [output, setOutput] = useContext(OutputContext);
  const [showKeyboard, setShowKeyboard] = useContext(ShowKeyboardContext);

  const [checkAnswer, setCheckAnswer] = useState(null);
  const [hintActive, setHintActive] = useState(false);

  const [audioChecked, setAudioChecked] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentAudio, setCurrentAudio] = useState();
  const [output2, setOutput2] = useState("");

  useEffect(() => {
    if (practiceData.length === 0 || undefined) return;

    if (practiceData.length !== 0 && practiceData.length === count) {
      setPracticeFinished(true);
      return;
    }
    count !== 0 && setProgress(count);
    setCurrentText(practiceData[count].text);
    setCurrentAudio(practiceData[count].audio);
  }, [practiceData, count]);

  const checkedButton = () => {
    if (!audioChecked) return;
    if (output == currentText) {
      setOutput("");
      setCheckAnswer(true);
      const audio = new Audio(currentAudio);
      audio.play();
      audio.addEventListener("ended", () => {
        setCount((prev) => prev + 1);
        setCheckAnswer(null);
        setAudioChecked(false);
      });
      return;
    }
    setCheckAnswer(false);
    setTimeout(() => {
      setCheckAnswer(null);
    }, 1000);
  };

  return (
    <section className='p-32' style={{ direction: "ltr" }}>
      <div className='fl-co-ce' style={{ margin: "auto", width: "25%" }}>
        <AudioPlayer
          style={{ padding: 17, background: "#00c6c2", borderRadius: "50em" }}
          icon={
            require("../../../../assets/images/icons/sound_icon.svg").default
          }
          setAudio={currentAudio}
          onAudioEnd={() => setAudioChecked(true)}
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
        <div>
          <input
            className='mt-64 mb-8'
            style={{ minWidth: "500px", height: "50px", fontSize: "28px" }}
            type='text'
            dir='rtl'
            onChange={(e) => setOutput2(output + e.target.value)}
            value={output || ""}
          />
        </div>
        <div
          className='mb-32'
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div className='fl'>
            {!showKeyboard && (
              <div
                className='button-box-shadow'
                style={{
                  background: "white",
                  borderRadius: "50em",
                  padding: "4px 3px 3px",
                  cursor: "pointer",
                }}
              >
                <Image
                  type='icon'
                  image='keyboard_icon.svg'
                  alt=''
                  onClick={() => setShowKeyboard(true)}
                />
              </div>
            )}
            <div
              className='button-box-shadow ml-12'
              style={{
                background: "white",
                borderRadius: "50em",
                padding: 5,
                cursor: "pointer",
              }}
            >
              <Image
                type='icon'
                image='hint_icon.svg'
                alt=''
                width={23}
                onClick={() => setHintActive((prev) => !prev)}
              />
            </div>
          </div>
          {hintActive && (
            <div
              className='ml-24 pl-12 pr-12 text-align-end hint'
              style={{ background: "white", position: "relative", flex: 1 }}
            >
              <span>{currentText}</span>
            </div>
          )}
        </div>
        <div>
          <Button
            className={classNames(
              checkAnswer && "button-light-green",
              checkAnswer !== null && !checkAnswer && "button-light-red",
              !audioChecked && "disabled"
            )}
            onClick={checkedButton}
          >
            {checkAnswer === null ? (
              "Check Answer"
            ) : checkAnswer ? (
              <div className='fl-al-it-ce'>
                <span>Correct</span>
                <span className='ml-12'>
                  <Image type='icon' image='completed_icon.svg' alt='' />
                </span>
              </div>
            ) : (
              <div className='fl-al-it-ce'>
                <span>Wrong</span>
                <span className='ml-12'>
                  <Image type='icon' image='wrong_icon.svg' alt='' width={19} />
                </span>
              </div>
            )}
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

export default connect(mapState, mapDis)(PracticeWrite);
