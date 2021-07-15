import React, { useContext, useEffect, useState } from "react";
import MultiplePlayer from "../../../../elements/MultiplePlay";
import useRecorder from "../../../../elements/useRecorder";
import Button from "../../../../elements/Button";
import Image from "../../../../elements/Image";
import classNames from "classnames";
import {
  AudioContext,
  DataToShowContext,
  FinishContext,
  NextContext,
  PlayingContext,
  ResetContext,
  SelectedActorContext,
  AudiosPlayedContext,
} from "../InterpretContext";

const ActionComponent = () => {
  const [next, setNext] = useContext(NextContext);
  const [finish, setFinish] = useContext(FinishContext);
  const [playing, setPlaying] = useContext(PlayingContext);
  const [audio, setAudio] = useContext(AudioContext);
  const [resetInterpret, setResetInterpret] = useContext(ResetContext);
  // const [progress, setProgress] = useContext(ProgressContext);
  const [selectedActor, setSelectedActor] = useContext(SelectedActorContext);
  const [dataToShow] = useContext(DataToShowContext);
  const [audiosPlayed, setAudiosPlayed] = useContext(AudiosPlayedContext);

  const [switchBtn, setSwitchBtn] = useState("start");
  const [audioStart, setAudioStart] = useState();
  const [audios, setAudios] = useState([]);
  const [repeat, setRepeat] = useState(false);

  const [handleData, startRecording, stopRecording] = useRecorder();

  useEffect(() => {
    repeat && setRepeat(false);
  }, [repeat]);

  useEffect(() => {
    if (dataToShow.length === 0) return;
    if (
      dataToShow.length === 1 &&
      dataToShow[dataToShow.length - 1].actorID !== selectedActor
    ) {
      setAudioStart(() => new Audio(dataToShow[0].audio));
      setAudios([new Audio(dataToShow[0].audio)]);
    }
    const actorID = dataToShow[dataToShow.length - 1].actorID;
    actorID === selectedActor && setSwitchBtn("record");
  }, [dataToShow]);

  useEffect(() => {
    if (handleData === undefined) return;
    setAudios((prev) => [...prev, handleData]);
  }, [handleData]);

  useEffect(() => {
    if (audio === undefined) return;
    setAudios((prev) => [...prev, audio]);
  }, [audio]);

  return (
    <section className='fl-ce' style={{ padding: 80 }}>
      {playing ? (
        <div>playing...</div>
      ) : finish ? (
        <div className='fl-ce'>
          <div
            className='mr-64 button-box-shadow'
            style={{
              background: "#00c6c2",
              borderRadius: "50em",
              padding: 2,
            }}
          >
            <Image
              onClick={() => {
                setResetInterpret(true);
                setAudios([]);
                setSwitchBtn("start");
              }}
              type='icon'
              image='repeat_icon_white.svg'
              width={38}
            />
          </div>
          <MultiplePlayer
            setAudio={audios}
            onMultiplePlayEnd={() => setAudiosPlayed(true)}
          >
            <span
              className='button-box-shadow'
              style={{
                padding: 2,
                background: "#00c6c2",
                borderRadius: "50em",
              }}
            >
              <Image
                className='m-16'
                type='icon'
                image='sound_icon.svg'
                alt='play sound'
                width={50}
              />
            </span>
          </MultiplePlayer>
          <Button
            className={classNames(!audiosPlayed && "disabled", "ml-64")}
            style={{
              padding: 8,
              background: "#00c6c2",
              borderRadius: "50em",
            }}
          >
            <span>
              <Image type='icon' image='right_icon.svg' width={25} />
            </span>
          </Button>
        </div>
      ) : (
        {
          record: (
            <Image
              type='icon'
              image='record_icon.svg'
              onClick={() => {
                startRecording();
                setSwitchBtn("stop");
                setRepeat(true);
              }}
              boxShadow
            />
          ),

          stop: (
            <Image
              type='icon'
              image='stop-record_icon.svg'
              onClick={() => {
                stopRecording();
                setNext(true);
                setSwitchBtn("record");

                setRepeat(true);
              }}
              boxShadow
            />
          ),
          start: (
            <Image
              type='icon'
              image='play_icon.svg'
              style={{
                padding: 17,
                background: "#00c6c2",
                borderRadius: "50em",
              }}
              onClick={() => {
                audioStart.play();
                setPlaying(true);
                audioStart.addEventListener("ended", () => {
                  setNext(true);
                  setSwitchBtn("record");
                  setPlaying(false);
                });
              }}
              boxShadow
            />
          ),
        }[switchBtn]
      )}
    </section>
  );
};

export default ActionComponent;
