import React, { useState, useEffect, useRef } from "react";
import useRecorder from "./useRecorder";
import Image from "./Image";

const RecordButton = ({ repeat, joinAudio, onAudioEnd, onAudioStop }) => {
  const [handleData, startRecording, stopRecording] = useRecorder();

  const [recording, setRecording] = useState("start");
  const [secDuration, setSecDuration] = useState("");
  const [audioToJoin, setAudioToJoin] = useState();

  useEffect(() => {
    joinAudio && setAudioToJoin(new Audio(joinAudio));
  }, [joinAudio]);

  useEffect(() => {
    repeat && setRecording("start");
  }, [repeat]);

  const clickStart = () => {
    console.log("speak");
    startRecording();
    setRecording("stop");
  };

  const clickStop = () => {
    stopRecording();
    onAudioStop && onAudioStop();
    setRecording("play");
  };

  const clickPlay = () => {
    if (audioToJoin) {
      audioToJoin.play();
      audioToJoin.addEventListener("ended", () => handleData.play());
    }
    setRecording("pause");
    !joinAudio && handleData.play();
    handleData.addEventListener("ended", () => {
      setRecording("play");
      onAudioEnd && onAudioEnd();
    });
  };

  const ButtonState = ({ state }) => {
    switch (state) {
      case "start":
        return (
          <Image
            type='icon'
            onClick={clickStart}
            image='record_icon.svg'
            alt='voice recorder'
          />
        );

      case "stop":
        return (
          <Image
            type='icon'
            onClick={clickStop}
            image='stop-record_icon.svg'
            alt='voice recorder'
          />
        );

      case "play":
        return (
          <Image
            type='icon'
            onClick={clickPlay}
            image='play-record_icon.svg'
            alt='voice recorder'
          />
        );
      case "pause":
        return (
          <span>playing...</span>
          // <Image
          //   type='image'
          //   onClick={clickPlay}
          //   image='pause-record_icon.svg'
          //   alt='voice recorder'
          //   width={100}
          // />
        );

      default:
        return (
          <Image
            type='icon'
            onClick={clickStart}
            image='record_icon.svg'
            alt='voice recorder'
          />
        );
    }
  };

  return (
    <div className='fl-co-ce' style={{ padding: "50px 40px 30px 40px " }}>
      <ButtonState state={recording} />
      <span className='mt-8' style={{ color: "grey" }}>
        {secDuration}
      </span>
    </div>
  );
};

export default RecordButton;
