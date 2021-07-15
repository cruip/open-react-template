import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Button from "./Button";

const AudioPlayer = ({
  setAudio,
  onAudioEnd,
  Animate,
  children,
  className,
}) => {
  const [audio, setAudioToPlay] = useState(null);
  const [buttonAnimate, setButtonAnimate] = useState(false);

  useEffect(() => {
    if (!setAudio) return;
    setAudioToPlay(new Audio(setAudio));
  }, [setAudio]);

  const audioButton = () => {
    if (audio === null) return;
    setButtonAnimate(true);
    audio.play();
    onAudioEnd && audio.addEventListener("ended", () => onAudioEnd());
  };

  return (
    <Button
      style={{
        cursor: "pointer",
        border: "none",
        boxShadow: "none",
        background: "transparent",
        padding: 0,
      }}
      className={classNames(
        Animate && buttonAnimate && "audio-button",
        className
      )}
      onClick={audioButton}
      onAnimationEnd={Animate && (() => setButtonAnimate(false))}
    >
      {children}
    </Button>
  );
};

export default AudioPlayer;
