import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Button from "./Button";

const AudioButton = ({
  onMultiplePlayEnd,
  Animate,
  children,
  setAudio,
  className,
}) => {
  const [buttonAnimate, setButtonAnimate] = useState(false);

  const playMultipleAudio = () => {
    if (setAudio.length === 0) return;

    var i = 0;
    const playAudios = () => {
      if (i === setAudio.length) {
        return onMultiplePlayEnd && onMultiplePlayEnd();
      }
      setAudio[i].play();
      setAudio[i].onended = function () {
        setTimeout(() => {
          i++;
          playAudios();
        }, 200);
      };
    };
    playAudios();
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
      onClick={playMultipleAudio}
      onAnimationEnd={Animate && (() => setButtonAnimate(false))}
    >
      {children}
    </Button>
  );
};

export default AudioButton;
