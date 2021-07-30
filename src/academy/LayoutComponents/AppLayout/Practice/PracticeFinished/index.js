import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import Button from "../../../../elements/Button";

import { setLoading } from "../../../../../appReducers/GlobalAppState";

const PracticeFinished = ({ practiceType, level, setLoading }) => {
  const router = useParams();

  useEffect(() => {
    const unitOnURL = window.location.pathname.split("/")[2];
    const extra = window.location.pathname.split("/")[3] === "extra";

    axios
      .post(
        `http://localhost:4000/unit/practice/complete?un=${level}_${unitOnURL}&tp=${practiceType}&pr=${extra}`,
        null,
        { withCredentials: true }
      )
      .then((json) => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className='fl-co-ce fl-al-it-ce pt-64'
      style={{ width: "100%", height: "100vh", background: "#181c20" }}
    >
      <div className='p-8'>GOOD JOB!</div>
      <div className='p-8'>You’ve practiced {practiceType}</div>
      <div className='p-32'>
        <a href={`/unit/${router.id}`}>
          <Button>Continue</Button>
        </a>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  level: state.GlobalState.level,
  practiceType: state.PracticeState.practiceType,
});

export default connect(mapState, { setLoading })(PracticeFinished);
