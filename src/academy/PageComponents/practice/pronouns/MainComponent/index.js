import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../../../../elements/Button";

import {
  setProgress,
  setPracticeFinished,
} from "../../../../reducers/PracticeState";

const PracticePronous = ({
  practiceData,
  setProgress,
  setPracticeFinished,
}) => {
  const [count, setCount] = useState(0);
  const [sentence, setSentence] = useState("");

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  useEffect(() => {
    if (practiceData.length === 0 || undefined) return;

    if (practiceData.length !== 0 && practiceData.length === count) {
      setPracticeFinished(true);
      return;
    }

    count !== 0 && setProgress(count);
    setSentence(practiceData[count].text);
    setAnswer1(practiceData[count].answer[0].content);
    setAnswer2(practiceData[count].answer[1].content);
    setAnswer3(practiceData[count].answer[2].content);
  }, [practiceData, count]);

  const handleClick = (nr) => {
    //   nr === 0 && setResult((prev) => (choose1 ? prev + 1 : prev));
    //   nr === 1 && setResult((prev) => (choose2 ? prev + 1 : prev));
    //   nr === 2 && setResult((prev) => (choose3 ? prev + 1 : prev));

    setCount((prev) => prev + 1);
  };

  return (
    <section className='fl-co-ce pt-64'>
      <div>
        <h3 style={{ color: "black" }}>{sentence}</h3>
      </div>
      <div className='fl-co'>
        <div>
          <Button
            style={{ width: "100%" }}
            className='mb-24 mt-32'
            onClick={() => handleClick(0)}
          >
            {answer1}
          </Button>
        </div>
        <div>
          <Button
            style={{ width: "100%" }}
            className='mb-24'
            onClick={() => handleClick(1)}
          >
            {answer2}
          </Button>
        </div>
        <div>
          <Button style={{ width: "100%" }} onClick={() => handleClick(2)}>
            {answer3}
          </Button>
        </div>
      </div>
    </section>
  );
};

const mapState = (state) => ({
  practiceData: state.PracticeState.practiceData,
});

const mapDis = (dispach) => ({
  setProgress: (enable) => dispach(setProgress(enable)),
  setPracticeFinished: (enable) => dispach(setPracticeFinished(enable)),
});

export default connect(mapState, mapDis)(PracticePronous);
