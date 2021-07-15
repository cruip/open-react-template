import axios from "axios";

import config from "../../../app.config.json";

const refreshToken = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const originalRequest = error.config;
      console.log("er");
      console.log(error);
      // setInterval(
      //   () =>
      axios
        .post(config.api_url + "actions/token/refresh", null, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          return axios(originalRequest);
        })
        .catch((err) => {
          console.log(err);
        });
      // ,
      //   1000 * 60
      // );
      // Prevent infinite loops
      if (
        error.response.status === 401 &&
        originalRequest.url === config.api_url + "actions/token/refresh"
      ) {
        window.location.href = config.app_url + "login/";
        return Promise.reject(error);
      }
      if (
        error.response.data.code === "token_not_valid" &&
        error.response.status === 401 &&
        error.response.statusText === "Unauthorized"
      ) {
        console.log("Refresh token not available.");
        window.location.href = config.app_url + "login/";
      }

      // specific error handling done elsewhere
      return Promise.reject(error);
    }
  );
};

export default refreshToken;
