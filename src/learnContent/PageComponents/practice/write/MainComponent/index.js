import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import Button from "../../../../elements/Button";
import Image from "../../../../elements/Image";
import { OutputContext, ShowKeyboardContext } from "../WriteContext";

import AudioPlayer from "../../../../elements/AudioPlayer";

import { setProgress } from "../../../../reducers/PracticeState";

const PracticeWrite = ({ practiceData }) => {
  const [count, setCount] = useState(0);
  const [output, setOutput] = useContext(OutputContext);
  const [showKeyboard, setShowKeyboard] = useContext(ShowKeyboardContext);

  const [checkAnswer, setCheckAnswer] = useState(false);
  const [audioChecked, setAudioChecked] = useState(false);
  const [currentAudio, setCurrentAudio] = useState();
  const [output2, setOutput2] = useState("");

  useEffect(() => {
    if (practiceData.length === 0 || undefined) return;

    if (practiceData.length !== 0 && practiceData.length === count) {
      setPracticeFinished(true);
      return;
    }
    count !== 0 && setProgress(count);
    setCurrentAudio(practiceData[count].audio);
  }, [practiceData, count]);

  const checkedButton = () => {
    if (!audioChecked) return;
    if (output == practiceData[count].text) {
      setOutput("");
      setCheckAnswer(true);
      const audio = new Audio(data.audio);
      audio.play();
      audio.addEventListener("ended", () => {
        setCount((prev) => prev + 1);
        setCheckAnswer(false);
        setAudioChecked(false);
      });
      return;
    }
    alert("False");
  };

  return (
    <section className='p-32 text-align-center'>
      <div className='fl-co-ce' style={{ margin: "auto", width: "25%" }}>
        <AudioPlayer
          style={{ padding: 17, background: "#00c6c2", borderRadius: "50em" }}
          icon={require("../../../../assets/images/icons/sound_icon.svg")}
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
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <div
            className='button-box-shadow mr-12'
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
              // onClick={() => setShowKeyboard(true)}
            />
          </div>

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
        </div>
        <div>
          <Button
            className={classNames(
              checkAnswer && "button-light-green",
              !audioChecked && "disabled"
            )}
            onClick={checkedButton}
          >
            {checkAnswer ? (
              <>
                <span>Correct</span>
                <span>
                  <Image
                    type='icon'
                    className='ml-8'
                    image='completed_icon.svg'
                    alt=''
                  />
                </span>
              </>
            ) : (
              "Check Answer"
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
