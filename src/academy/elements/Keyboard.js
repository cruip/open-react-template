// import React, { useState, useRef, useContext } from "react";
// import Keyboard from "react-simple-keyboard";
// import "react-simple-keyboard/build/css/index.css";

// import { OutputContext } from "../modules/practice/store";

// const ArabicKeyboard = ({ reset }) => {
//   const [keyboardRef, setKeyboardRef] = reset;

//   const layout = {
//     default: [
//       "\u0630 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
//       "{tab} \u0636 \u0635 \u062B \u0642 \u0641 \u063A \u0639 \u0647 \u062E \u062D \u062C \u062F \\",
//       "{lock} \u0634 \u0633 \u064A \u0628 \u0644 \u0627 \u062A \u0646 \u0645 \u0643 \u0637 {enter}",
//       "{shift} \u0626 \u0621 \u0624 \u0631 \u0644\u0627 \u0649 \u0629 \u0648 \u0632 \u0638 {shift}",
//       ".com @ {space}",
//     ],
//     shift: [
//       "\u0651 ! @ # $ % ^ & * ) ( _ + {bksp}",
//       "{tab} \u064E \u064B \u064F \u064C \u0644\u0625 \u0625 \u2018 \u00F7 \u00D7 \u061B < > |",
//       '{lock} \u0650 \u064D ] [ \u0644\u0623 \u0623 \u0640 \u060C / : " {enter}',
//       "{shift} ~ \u0652 } { \u0644\u0622 \u0622 \u2019 , . \u061F {shift}",
//       ".com @ {space}",
//     ],
//   };

//   const [layoutName, setLayoutName] = useState("default");
//   const [output, setOutput] = useContext(OutputContext);

//   const onChange = (input) => {
//     setOutput(input);
//   };

//   const handleShift = () => {
//     const newLayoutName = layoutName === "default" ? "shift" : "default";
//     setLayoutName(newLayoutName);
//   };

//   const onKeyPress = (button) => {
//     if (button === "{shift}" || button === "{lock}") handleShift();
//   };

//   return (
//     <div style={{ width: "45em", margin: "auto" }}>
//       <Keyboard
//         keyboardRef={(r) => setKeyboardRef(r)}
//         layoutName={layoutName}
//         onChange={onChange}
//         onKeyPress={onKeyPress}
//         layout={layout}
//       />
//     </div>
//   );
// };

// export default ArabicKeyboard;
