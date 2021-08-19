import axios from "axios";

import config from "../../app.config.json";

import { fetchData } from "./MainPage";
import { fetchPracticeData } from "./PracticeState";
import { fetchProfileData } from "./Profile";
import { fetchUnitData } from "./UnitData";

import { setLocale } from "./GlobalState";

// Fetch data
export const getData = () => {
  return (dispatch) => {
    const unitOnURL = window.location.pathname.split("/")[2];
    const practiceType = window.location.pathname.split("/")[4];

    const appRoutes = {
      mainPage: "/",
      profile: "/profile/info",
      unit: `/unit/${unitOnURL}`,
      practice: `/unit/${unitOnURL}/practice/${practiceType}`,
    };

    return axios
      .get(config.api_url + "api/unit/user", {
        withCredentials: true,
      })
      .then((json) => {
        if (json.data.name === undefined)
          return (window.location.href = config.app_url + "login");

        console.log(window.location.pathname === appRoutes.practice);

        switch (window.location.pathname) {
          case appRoutes.mainPage:
            dispatch(fetchData(json.data.level, json.data.language));
            break;

          case appRoutes.profile:
            dispatch(fetchProfileData());
            break;

          case appRoutes.unit:
            dispatch(fetchUnitData(json.data.level, json.data.language));
            break;

          case appRoutes.practice:
            dispatch(fetchPracticeData(practiceType));
            break;
        }

        // Related with locale
        const direction = json.data.language === "ar" ? "rtl" : "ltr";

        dispatch(setLocale({ value: json.data.language, direction }));
        dispatch({
          type: SET_USER_NAME,
          userName: json.data.name,
        });
      })
      .catch((err) => {
        // if (err.response.status === 401) {
        //   return (window.location.href = config.app_url + "login");
        // }

        console.log(err);
      });
  };
};

// User Name
export const SET_USER_NAME = "USER_DATA/SET_USER_NAME";

export const setName = (userName) => ({
  type: SET_USER_NAME,
  userName,
});

// User Name
export const SET_USER_LASTNAME = "USER_DATA/SET_USER_LASTNAME";

export const setLastName = (unitData) => ({
  type: SET_USER_LASTNAME,
  unitData,
});

export default function reducer(
  state = {
    // User name
    userName: "",
    userLastName: "",
  },
  action
) {
  switch (action.type) {
    // Unit Data
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    // Unit Data
    case SET_USER_LASTNAME:
      return {
        ...state,
        userLastName: action.userLastName,
      };

    default:
      break;
  }
  return state;
}
