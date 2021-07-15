import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import IntlMessages from "../../../elements/IntlMessages";
import Image from "../../../elements/Image";

import config from "../../../../app.config.json";

const SidebarMenu = () => {
  const link = useLocation().pathname;

  const navigationItems = [
    {
      icon: "open-book_icon.svg",
      nav: "course",
      content: <IntlMessages id={"sidebar.course"} />,
      link: "/",
    },
    {
      icon: "group-classes_icon.svg",
      nav: "group-classes",
      content: <IntlMessages id={"sidebar.dashboard.listing"} />,
      link: "/group-classes",
    },
    {
      icon: "user_icon.svg",
      nav: "profile",
      content: <IntlMessages id={"sidebar.profile"} />,
      link: "/profile/information",
    },
    {
      icon: "help_icon.svg",
      nav: "need-help",
      content: <IntlMessages id={"sidebar.need-help"} />,
      link: "/help/center",
    },
    {
      icon: "logout_icon.svg",
      nav: "logout",
      content: <IntlMessages id={"sidebar.log-out"} />,
      link: "/logout",
    },
  ];

  return (
    <div className='sidebar-menu'>
      {navigationItems.map((item, index) => {
        return (
          <div key={index}>
            <a
              href={item.link}
              className={classNames(
                "nav-section fl fl-al-it-ce fl-ju-co-sp-be"
              )}
            >
              <span>
                <Image type='icon' image={item.icon} width={27} />
              </span>
              <div
                className={classNames(link === item.link && "active-link")}
                style={{ width: "76%" }}
              >
                {item.content}
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarMenu;
