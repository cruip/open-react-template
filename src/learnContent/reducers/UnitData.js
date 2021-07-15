import axios from "axios";
import { staticData } from "../PageComponents/unit/UnitStaticData";
import _ from "lodash";

import config from "../../app.config.json";

import { setLoading } from "../../appReducers/GlobalAppState";

// Fetch data
export const fetchUnitData = () => {
  return (dispatch, getState) => {
    const unitOnURL = window.location.pathname.split("/")[2];

    const level = getState().GlobalState.level;
    const locale = getState().GlobalState.locale;

    return axios
      .get(
        config.api_url +
          `api/lvl/unit?un=${level}_${unitOnURL}&lg=${locale.locale}`,
        { withCredentials: true }
      )
      .then((json) => {
        var merge = (obj1, obj2) => ({ ...obj1, ...obj2 });

        const mergedData = _.zipWith(staticData, json.data.progress, merge);
        dispatch({
          type: SET_UNIT_TITLE,
          unitTitle: json.data.title,
        });
        dispatch({
          type: SET_UNIT_CONTENT,
          unitContent: json.data.content,
        });
        dispatch({ type: SET_UNIT_DATA, unitData: mergedData });
        dispatch({
          type: SET_ATTACHED_EXERCISE,
          attachedExercise: json.data.attachedExercise,
        });
        setTimeout(() => dispatch(setLoading(false)), 300);
        if (json.data.extraActivity.length !== 0) {
          const selectedStaticData = json.data.extraActivity.map((item) => {
            const selectedItem = staticData.map((item2) => {
              if (item2.type === item.type) {
                return { ...item2, ...item };
              }
            });

            return selectedItem.filter((it) => it !== undefined)[0];
          });
          dispatch({
            type: SET_EXTRA_ACTIVITY_DATA,
            extraActivityData: selectedStaticData,
          });
        }
      })
      .catch((err) =>
        dispatch({ type: SET_ERROR, error: "Unable to fetch data" })
      );
  };
};

// Unit Data
export const SET_UNIT_DATA = "UNIT_DATA/SET_UNIT_DATA";

export const setUnitData = (unitData) => ({
  type: SET_UNIT_DATA,
  unitData,
});

// Attached Exercise
export const SET_ATTACHED_EXERCISE = "UNIT_DATA/SET_ATTACHED_EXERCISE";

export const setAttachedExercise = (attachedExercise) => ({
  type: SET_ATTACHED_EXERCISE,
  attachedExercise,
});

// Extra Activity Data
export const SET_EXTRA_ACTIVITY_DATA = "UNIT_DATA/SET_EXTRA_ACTIVITY_DATA";

export const setExtraActivityData = (extraActivityData) => ({
  type: SET_EXTRA_ACTIVITY_DATA,
  extraActivityData,
});

// Unit Content
export const SET_UNIT_CONTENT = "UNIT_DATA/SET_UNIT_CONTENT";

export const setUnitContent = (unitContent) => ({
  type: SET_UNIT_CONTENT,
  unitContent,
});

// Unit Title
export const SET_UNIT_TITLE = "UNIT_DATA/SET_UNIT_TITLE";

export const setUnitTitle = (unitTitle) => ({
  type: SET_UNIT_TITLE,
  unitTitle,
});

// Error
export const SET_ERROR = "UNIT_DATA/SET_ERROR";

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export default function reducer(
  state = {
    // Units Number
    unitData: [],

    // Extra Activity Data
    extraActivityData: [],

    // Unit Content
    unitContent: "",

    attachedExercise: "",

    // Unit Title
    unitTitle: "",

    error: "",
  },
  action
) {
  switch (action.type) {
    // Unit Data
    case SET_UNIT_DATA:
      return {
        ...state,
        unitData: action.unitData,
      };

    // Extra Activity Data
    case SET_EXTRA_ACTIVITY_DATA:
      return {
        ...state,
        extraActivityData: action.extraActivityData,
      };

    // Attached Exercise
    case SET_ATTACHED_EXERCISE:
      return {
        ...state,
        attachedExercise: action.attachedExercise,
      };

    // Unit Content
    case SET_UNIT_CONTENT:
      return {
        ...state,
        unitContent: action.unitContent,
      };

    // Unit Content
    case SET_UNIT_TITLE:
      return {
        ...state,
        unitTitle: action.unitTitle,
      };
    // Error
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      break;
  }
  return state;
}
