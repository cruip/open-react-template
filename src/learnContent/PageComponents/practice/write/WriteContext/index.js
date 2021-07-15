import React, { createContext, useState } from "react";

export const CompleteContext = createContext();
export const CountContext = createContext();
export const ResultContext = createContext();
export const OutputContext = createContext();
export const ShowKeyboardContext = createContext();

const WriteContext = ({ children }) => {
  const [complete, setComplete] = useState(false);
  const [output, setOutput] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(true);

  return (
    <CompleteContext.Provider value={[complete, setComplete]}>
      <ShowKeyboardContext.Provider value={[showKeyboard, setShowKeyboard]}>
        <OutputContext.Provider value={[output, setOutput]}>
          {children}
        </OutputContext.Provider>
      </ShowKeyboardContext.Provider>
    </CompleteContext.Provider>
  );
};

export default WriteContext;
