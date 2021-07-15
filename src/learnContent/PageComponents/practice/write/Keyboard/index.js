import React, { useState, useEffect, useContext } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { OutputContext, ShowKeyboardContext } from "../WriteContext";

import Image from "../../../../elements/Image";

const ArabicKeyboard = () => {
  const [output, setOutput] = useContext(OutputContext);
  const [showKeyboard, setShowKeyboard] = useContext(ShowKeyboardContext);

  const [keyboardRef, setKeyboardRef] = useState();

  const layout = {
    default: [
      "\u064E◌ ◌\u0650 \u064F◌ \u0652◌",
      "\u064B◌ ◌\u064D \u064C◌ \u0651◌",
      "\u0636 \u0635 \u062B \u0642 \u0641 \u063A \u0639 \u0647 \u062E {bksp}",
      "\u062D \u062C \u062F \u0630 \u0634 \u0633 \u064A \u0628 \u0644 \u0627 \u062A \u0646 \u0645",
      "\u0643 \u0637 \u0631 \u0644\u0627 \u0649 \u0629 \u0648 \u0632 \u0638",
      "\u0624 \u0621 \u0626 \u0644\u0623 \u0644\u0625 \u0625 \u0623",
      "{space}",
    ],
  };

  const onChange = (input) => {
    let txt = input.replace(/◌/g, "");

    setOutput(txt);
  };

  // useEffect(() => count !== 0 && keyboardRef.clearInput(), [count]);

  return showKeyboard ? (
    <div className='pt-32' style={{ width: "45em", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          className='mb-16 button-box-shadow'
          style={{
            background: "white",
            borderRadius: "50em",
            padding: 8,
            cursor: "pointer",
          }}
        >
          <Image
            type='icon'
            image='cancel_icon.svg'
            width={16}
            onClick={() => setShowKeyboard(false)}
          />
        </div>
      </div>
      <Keyboard
        keyboardRef={(r) => setKeyboardRef(r)}
        layoutName='default'
        onChange={onChange}
        layout={layout}
        buttonTheme={[
          {
            class: "hg-text-big",
            buttons:
              "\u064E◌ ◌\u0650 \u064F◌ \u0652◌ \u064B◌ ◌\u064D \u064C◌ \u0651◌",
          },
          {
            class: "hg-text-small",
            buttons: "{bksp} {space}",
          },
        ]}
      />
    </div>
  ) : null;
};

export default ArabicKeyboard;
