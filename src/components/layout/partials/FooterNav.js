import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, t, ...props }) => {
  const classes = classNames("footer-nav", className);
  return (
    <nav {...props} className={classes}>
      <ul className='list-reset'>
        <li>
          <Link to='#0'>{t("footer_contact")}</Link>
        </li>
        <li>
          <Link to='#0'>{t("footer_about_us")}</Link>
        </li>
        <li>
          <Link to='#0'>{t("footer_faq")}</Link>
        </li>
        <li>
          <Link to='#0'>{t("footer_support")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
