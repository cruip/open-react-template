import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import IntlMessages from "../../../elements/IntlMessages";
import Image from "../../../elements/Image";

import config from "../../../../app.config.json";

const SidebarMenu = () => {
  const history = useHistory();

  const navigationItems = [
    {
      icon: "open-book_icon.svg",
      nav: "course",
      content: "sidebar.course",
      link: "/",
    },
    {
      icon: "group-classes_icon.svg",
      nav: "group-classes",
      content: "sidebar.dashboard.listing",
      link: "/group-classes",
    },
    {
      icon: "user_icon.svg",
      nav: "profile",
      content: "sidebar.profile",
      link: "/profile/info",
    },
    {
      icon: "help_icon.svg",
      nav: "need-help",
      content: "sidebar.need-help",
      link: "/help/center",
    },
    {
      icon: "logout_icon.svg",
      nav: "logout",
      content: "sidebar.log-out",
      link: "/logout",
    },
  ];

  const handleClick = (item) => {
    history.push(item.link);
  };

  return (
    <div className='sidebar-menu text-align-start'>
      {navigationItems.map((item, index) => {
        return (
          <div key={index}>
            <div
              onClick={() => handleClick(item)}
              className={classNames("nav-section")}
            >
              <div
                className='fl fl-al-it-ce fl-ju-co-sp-be'
                style={{ cursor: "pointer" }}
              >
                <span>
                  <Image type='icon' image={item.icon} width={27} />
                </span>
                <div
                  // className={classNames(link === item.link && "active-link")}
                  style={{ width: "76%" }}
                >
                  <IntlMessages id={item.content} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarMenu;
