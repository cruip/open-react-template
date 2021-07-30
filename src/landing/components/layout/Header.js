import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./partials/LanguageSwitch";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const { t } = useTranslation();

  const [isActive, setIsactive] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  useEffect(() => {
    const path = !window.location.pathname.endsWith("/")
      ? window.location.pathname + "/"
      : window.location.pathname;

    setCurrentLocation(path);
  }, [window.location.pathname]);

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames("site-header-landing", "fl-ce", "ml-0", className);

  const linkStyle = {
    color: "#68b2b1",
  };

  return (
    <header {...props} className={classes}>
      <div
        className={classNames(
          "site-header-inner",
          bottomDivider && "has-bottom-divider"
        )}
      >
        <Logo
          source={require("../../assets/images/mainLogo1.svg")}
          width={70}
          height={120}
          className='brand'
        />
        <>
          <button
            ref={hamburger}
            className='header-nav-toggle'
            onClick={isActive ? closeMenu : openMenu}
          >
            <span className='screen-reader'>Menu</span>
            <span className='hamburger'>
              <span className='hamburger-inner'></span>
            </span>
          </button>
          <nav
            ref={nav}
            className={classNames("header-nav", isActive && "is-active")}
          >
            <div className='header-nav-inner'>
              <ul
                className={classNames(
                  "list-reset text-xs",
                  navPosition && `header-nav-${navPosition}`
                )}
              >
                <Link
                  to='/how-it-works/'
                  style={
                    currentLocation === "/how-it-works/" ? linkStyle : null
                  }
                  onClick={closeMenu}
                >
                  {t("header_how_it_works")}
                </Link>
                <li>
                  <Link
                    to='/levels/'
                    style={currentLocation === "/levels/" ? linkStyle : null}
                    onClick={closeMenu}
                  >
                    {t("header_levels")}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/certificates/'
                    style={
                      currentLocation === "/certificates/" ? linkStyle : null
                    }
                    onClick={closeMenu}
                  >
                    {t("header_certificates")}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/plans/'
                    style={currentLocation === "/plans/" ? linkStyle : null}
                    onClick={closeMenu}
                  >
                    {t("header_plans")}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/efficacy/'
                    style={currentLocation === "/efficacy/" ? linkStyle : null}
                    onClick={closeMenu}
                  >
                    {t("header_efficacy")}
                  </Link>
                </li>
              </ul>
              <ul className='list-reset header-nav-right'>
                <li>
                  <Link
                    to='/login/'
                    className={classNames(
                      "button button-wide-mobile button-sm",
                      currentLocation === "/login/"
                        ? "button-light-grey"
                        : "button-dark"
                    )}
                    onClick={closeMenu}
                  >
                    {t("login")}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/register/'
                    className={classNames(
                      "button button-wide-mobile button-sm",
                      currentLocation === "/register/"
                        ? "button-light-green"
                        : "button-primary"
                    )}
                    onClick={closeMenu}
                  >
                    {t("register")}
                  </Link>
                </li>
                <li>
                  <LanguageSwitch />
                </li>
              </ul>
            </div>
          </nav>
        </>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
