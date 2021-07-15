import React, { createContext, useContext, useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  setProgress,
  setPracticeFinished,
} from "../../../../reducers/PracticeState";

export const DataToShowContext = createContext();
export const CountContext = createContext();
export const NextContext = createContext();
export const AudioContext = createContext();
export const PlayingContext = createContext();
export const FinishContext = createContext();
export const ResetContext = createContext();
export const SelectedActorContext = createContext();
export const AudiosPlayedContext = createContext();

function InterpretContext({
  children,
  practiceData,
  setProgress,
  setPracticeFinished,
}) {
  const [dataToShow, setDataToShow] = useState([]);
  const [next, setNext] = useState(false);
  const [finish, setFinish] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState();
  const [resetInterpret, setResetInterpret] = useState(false);
  const [selectedActor, setSelectedActor] = useState(false);
  const [count, setCount] = useState(0);
  const [audiosPlayed, setAudiosPlayed] = useState(false);

  useEffect(() => {
    if (resetInterpret) {
      setDataToShow([practiceData[0]]);
      setCount(1);
      setFinish(false);
      setAudio();
      setResetInterpret(false);
      setAudiosPlayed(false);
    }
  });

  useEffect(() => {
    next && setNext(false);
  }, [next]);

  useEffect(() => {
    if (practiceData.length === 0 || undefined) return;
    setDataToShow([practiceData[0]]);
    setCount(1);
  }, [practiceData]);

  useEffect(() => {
    if (!next) return;
    if (practiceData.length !== 0 && count === practiceData.length) {
      setFinish(true);
      setPracticeFinished(true);
      return;
    }

    setProgress(Math.floor(95 / (practiceData.length - count)));

    setCount((prev) => prev + 1);
    setDataToShow((prev) => [...prev, practiceData[count]]);

    if (practiceData[count].actorID !== selectedActor) {
      const audio = new Audio(practiceData[count].audio);
      setAudio(audio);
      audio.play();
      setPlaying(true);
      audio.addEventListener("ended", () =>
        setTimeout(() => {
          setPlaying(false);
          setNext(true);
        }, 300)
      );
    }
  }, [next]);

  return (
    <DataToShowContext.Provider value={[dataToShow, setDataToShow]}>
      <CountContext.Provider value={[count, setCount]}>
        <NextContext.Provider value={[next, setNext]}>
          <AudioContext.Provider value={[audio, setAudio]}>
            <FinishContext.Provider value={[finish, setFinish]}>
              <PlayingContext.Provider value={[playing, setPlaying]}>
                <ResetContext.Provider
                  value={[resetInterpret, setResetInterpret]}
                >
                  <SelectedActorContext.Provider
                    value={[selectedActor, setSelectedActor]}
                  >
                    <AudiosPlayedContext.Provider
                      value={[audiosPlayed, setAudiosPlayed]}
                    >
                      {children}
                    </AudiosPlayedContext.Provider>
                  </SelectedActorContext.Provider>
                </ResetContext.Provider>
              </PlayingContext.Provider>
            </FinishContext.Provider>
          </AudioContext.Provider>
        </NextContext.Provider>
      </CountContext.Provider>
    </DataToShowContext.Provider>
  );
}

const mapState = (state) => ({
  practiceData: state.PracticeState.practiceData,
});

const mapDis = (dispach) => ({
  setProgress: (enable) => dispach(setProgress(enable)),
  setPracticeFinished: (enable) => dispach(setPracticeFinished(enable)),
});

export default connect(mapState, mapDis)(InterpretContext);
