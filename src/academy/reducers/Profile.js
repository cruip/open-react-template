import axios from "axios";

import config from "../../app.config.json";

import { setLoading } from "../../appReducers/GlobalAppState";

// Fetch data
export const fetchProfileData = () => {
  return (dispatch) => {
    return axios
      .get(config.api_url + "api/profile", {
        withCredentials: true,
      })
      .then((json) => {
        if (json.data.name === undefined)
          return (window.location.href = config.app_url + "login");

        dispatch({
          type: SET_PROFILE_DATA,
          profileData: json.data,
        });

        setTimeout(() => dispatch(setLoading(false)), 300);
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
export const SET_PROFILE_DATA = "PROFILE/SET_PROFILE_DATA";

export const setProfileData = (profileData) => ({
  type: SET_PROFILE_DATA,
  profileData,
});

export default function reducer(
  state = {
    // User name
    profileData: null,
  },
  action
) {
  switch (action.type) {
    // Unit Data
    case SET_PROFILE_DATA:
      return {
        ...state,
        profileData: action.profileData,
      };

    default:
      break;
  }
  return state;
}
