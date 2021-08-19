import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import config from "../../../app.config.json";

const Logout = () => {
  const cookies = new Cookies();

  useEffect(() => {
    axios
      .get(config.api_url + "actions/user/logout", { withCredentials: true })
      .then((res) => {
        if (res.status === 200 && res.statusText === "OK") {
          cookies.remove("user.id", { domain: config.app_domain, path: "/" });
        }
      })
      .then(() => {
        window.location.href = config.app_url + "login/";
      })
      .catch((e) => console.log(e));
  }, []);

  return <div></div>;
};

export default Logout;
