import axios from "axios";

import config from "../../app.config.json";

import { setLoading } from "../../appReducers/GlobalAppState";

export const SET_UNITS = "MAIN_PAGE/SET_UNITS";

export const setUnits = (units) => ({
  type: SET_UNITS,
  units,
});

export const SET_CERTIFICATE_PROGRESS = "MAIN_PAGE/SET_CERTIFICATE_PROGRESS";

export const setCertificateProgress = (certificateProgress) => ({
  type: SET_CERTIFICATE_PROGRESS,
  certificateProgress,
});

// Units Number

export const SET_NUMBER_UNITS = "MAIN_PAGE/SET_NUMBER_UNITS";

export const setNrUnits = (nrUnits) => ({
  type: SET_NUMBER_UNITS,
  nrUnits,
});

export const SET_ERROR = "MAIN_PAGE/SET_ERROR";

export const fetchData = () => {
  return (dispatch, getState) => {
    const level = getState().GlobalState.level;
    const locale = getState().GlobalState.locale;

    axios
      .get(
        config.api_url +
          `api/certificate/units?lvl=${level}&lg=${locale.locale}`,
        { withCredentials: true }
      )
      .then((json) => {
        dispatch({ type: SET_UNITS, units: json.data.units });
        dispatch({
          type: SET_NUMBER_UNITS,
          nrUnits: json.data.units.length,
        });
        dispatch({
          type: SET_CERTIFICATE_PROGRESS,
          certificateProgress: 12,
        });
        setTimeout(() => dispatch(setLoading(false)), 300);
      })
      .catch((err) => console.log(err));
  };
};

// Certificate Progress

export default function reducer(
  state = {
    // Units Number
    nrUnits: 0,

    // Units
    units: null,

    // Certificate Progress
    certificateProgress: 0,

    // Loading Data
    loading: false,
  },
  action
) {
  switch (action.type) {
    // Units
    case SET_UNITS:
      return {
        ...state,
        units: action.units,
      };

    // Units Number
    case SET_NUMBER_UNITS:
      return {
        ...state,
        nrUnits: action.nrUnits,
      };

    // Certificate Progress
    case SET_CERTIFICATE_PROGRESS:
      return {
        ...state,
        certificateProgress: action.certificateProgress,
      };

    default:
      break;
  }
  return state;
}
