import React, { useContext, useEffect, useState } from "react";
import MultiplePlayer from "../../../../elements/MultiplePlay";
import { connect } from "react-redux";
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
import { setPracticeFinished } from "../../../../reducers/PracticeState";

const ActionComponent = ({ setPracticeFinished }) => {
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

  const [audioPermission, setAudioPermission] = useState(true);
  const [deviceNotFound, setDeviceNotFound] = useState(false);

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
            onClick={() => setPracticeFinished(true)}
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
                </div>
              </div>
            </div>
          )}
          {
            {
              record: (
                <Image
                  type='icon'
                  image='record_icon.svg'
                  onClick={() => {
                    const permission = navigator.mediaDevices.getUserMedia({
                      audio: true,
                      video: false,
                    });

                    permission
                      .then((stream) => {
                        if (stream.active) {
                          startRecording();
                          setSwitchBtn("stop");
                          setRepeat(true);
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
          }
        </>
      )}
    </section>
  );
};

export default connect(null, { setPracticeFinished })(ActionComponent);
