import React, { useEffect } from "react";
import axios from "axios";

import config from "../../../app.config.json";

const Logout = () => {
  useEffect(() => {
    axios
      .get(config.api_url + "actions/user/logout", { withCredentials: true })
      .then((res) => {
        if (res.status === 200 && res.statusText === "OK") {
          window.location.href = config.app_url + "login/";
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return <div></div>;
};

export default Logout;
