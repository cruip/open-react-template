import React, { useState, useEffect, useRef } from "react";
import useRecorder from "./useRecorder";
import Image from "./Image";
import Button from "./Button";

const RecordButton = ({ repeat, joinAudio, onAudioEnd, onAudioStop }) => {
  const [handleData, startRecording, stopRecording] = useRecorder();

  const [recording, setRecording] = useState("start");
  const [secDuration, setSecDuration] = useState("");
  const [audioToJoin, setAudioToJoin] = useState();

  const [audioPermission, setAudioPermission] = useState(true);
  const [deviceNotFound, setDeviceNotFound] = useState(false);

  useEffect(() => {
    joinAudio && setAudioToJoin(new Audio(joinAudio));
  }, [joinAudio]);

  useEffect(() => {
    repeat && setRecording("start");
  }, [repeat]);

  const clickStart = () => {
    console.log(navigator.mediaDevices);

    const permission = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });

    permission
      .then((stream) => {
        if (stream.active) {
          setAudioPermission(true);
          setDeviceNotFound(false);
          startRecording();
          setRecording("stop");
        } else {
          setAudioPermission(false);
          setDeviceNotFound(false);
        }
      })
      .catch((e) => {
        if (e.message === "The object can not be found here.")
          setDeviceNotFound(true);
        else setDeviceNotFound(false);

        setAudioPermission(false);
      });
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
    <>
      {!audioPermission && (
        <div
          className='fl-ce'
          style={{
            position: "fixed",
            width: "100%",
            height: "100vh",
            zIndex: 50932,
            overflow: "hidden",
            background: "#000000a3",
            top: 0,
            left: 0,
          }}
        >
          <div
            className='p-32'
            style={{ background: "white", borderRadius: 17 }}
          >
            <div className='fl fl-ju-co-en'>
              <Image
                onClick={() => {
                  setAudioPermission(true);
                }}
                style={{ cursor: "pointer" }}
                className='p-12'
                type='icon'
                image='cancel_icon.svg'
                alt='cancel icon'
                width={43}
              />
            </div>
            <div
              className='mt-32 mb-32 ml-64 mr-64 fl-co-ce'
              style={{ maxWidth: 420 }}
            >
              <div className='mb-24'>
                <h3 className='text-center' style={{ color: "black" }}>
                  {deviceNotFound
                    ? "Microphone not found"
                    : "Permission Blocked"}
                </h3>
                <p className='text-center'>
                  {deviceNotFound
                    ? "Please connect your microphone to continue with exercise"
                    : "Please allow permission to record audio from your browser"}
                </p>
              </div>
              {/* <div className='mb-24'>
                <Button
                  className='mr-12'
                  style={{ borderRadius: 50, background: "orange" }}
                >
                  Cancel
                </Button>
                <Button style={{ borderRadius: 50, background: "orange" }}>
                  Allow
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      )}
      <div className='fl-co-ce' style={{ padding: "50px 40px 30px 40px " }}>
        <ButtonState state={recording} />
        <span className='mt-8' style={{ color: "grey" }}>
          {secDuration}
        </span>
      </div>
    </>
  );
};

export default RecordButton;
