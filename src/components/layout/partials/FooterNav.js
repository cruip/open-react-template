import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Back2Top from 'react-back2top';
import Fab from '@material-ui/core/Fab';

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
        {/* <li>
          <Link to="#0">Contact</Link>
        </li>
        <li>
          <Link to="#0">About us</Link>
        </li>
        <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <Back2Top visibilityHeight={200} scrollDuration={300}>
          <Fab color="primary">
            <i class="material-icons">arrow_upward</i>
          </Fab>
        </Back2Top>
      </ul>
    </nav>
  );
}

export default FooterNav;