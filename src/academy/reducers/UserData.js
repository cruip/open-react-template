import axios from "axios";

import config from "../../app.config.json";

// Fetch data
export const fetchUserData = () => {
  return (dispatch) => {
    return axios
      .get(config.api_url + "api/unit/user", {
        withCredentials: true,
      })
      .then((json) => {
        if (json.data.name === undefined)
          return (window.location.href = config.app_url + "login");

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
