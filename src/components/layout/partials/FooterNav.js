import React from 'react';
import classNames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0" onClick={
                          () => {window.open("mailto:umassblockchain@gmail.com","_blank").focus()}}>Contact</Link>
        </li>
        <li>
          <Link to="#about">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;