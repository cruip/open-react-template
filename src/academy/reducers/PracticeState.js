import axios from "axios";

import config from "../../app.config.json";

import { setLoading } from "../../appReducers/GlobalAppState";

// Units Number

export const SET_PRACTICE_DATA = "PRACTICE_STATE/SET_PRACTICE_DATA";
export const SET_PRACTICE_TYPE = "PRACTICE_STATE/SET_PRACTICE_TYPE";

export const fetchPracticeData = (type) => {
  return (dispatch, getState) => {
    const level = getState().GlobalState.level;
    const unitOnURL = window.location.pathname.split("/")[2];
    const extra = window.location.pathname.split("/")[3] === "extra";

    return axios
      .get(
        config.api_url +
          `api/unit/practice?un=${level}_${unitOnURL}&tp=${type}&ex=${extra}`,

        { withCredentials: true }
      )
      .then((json) => {
        dispatch({ type: SET_PRACTICE_DATA, practiceData: json.data.content });
        dispatch({
          type: SET_PRACTICE_TYPE,
          practiceType: type,
        });
        setTimeout(() => dispatch(setLoading(false)), 300);
      })
      .catch(
        (err) => console.log(err)
        // dispatch({ type: SET_ERROR, msg: "Unable to fetch data" })
      );
  };
};

export const SET_PROGRESS = "PRACTICE_STATE/SET_PROGRESS";

export const setProgress = (count) => {
  return (dispatch, getState) => {
    const practiceData = getState().PracticeState.practiceData;
    const progress = ((95 / practiceData.length) * count * 1.4).toFixed(2);

    console.log(progress);

    dispatch({ type: SET_PROGRESS, progress });
  };
};

export const SET_PRACTICE_FINISHED = "PRACTICE_STATE/SET_PRACTICE_FINISHED";

export const setPracticeFinished = (practiceFinished) => ({
  type: SET_PRACTICE_FINISHED,
  practiceFinished,
});

export default function reducer(
  state = {
    //Practice Data
    practiceData: [],

    // Data to progress
    practiceType: "",

    // Practice Finished
    practiceFinished: false,

    //Practice Progress
    progress: 5,
  },
  action
) {
  switch (action.type) {
    // Practice data
    case SET_PRACTICE_DATA:
      return {
        ...state,
        practiceData: action.practiceData,
      };

    // Progress Count
    case SET_PRACTICE_TYPE:
      return {
        ...state,
        practiceType: action.practiceType,
      };

    // Practice Finished
    case SET_PRACTICE_FINISHED:
      return {
        ...state,
        practiceFinished: action.practiceFinished,
      };

    // Progress
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };

    default:
      break;
  }
  return state;
}
