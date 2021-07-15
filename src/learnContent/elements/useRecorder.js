import { useState } from "react";
import MicRecorder from "mic-recorder-to-mp3";

const useRecorder = () => {
  const [handleData, setHandleData] = useState();
  const [recorder, setRecorder] = useState(
    new MicRecorder({
      bitRate: 128,
    })
  );

  const startRecording = () => {
    recorder
      .start()
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  };

  const stopRecording = () => {
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const file = new File(buffer, "music.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });
        setHandleData(new Audio(URL.createObjectURL(file)));
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return [handleData, startRecording, stopRecording];
};

export default useRecorder;
