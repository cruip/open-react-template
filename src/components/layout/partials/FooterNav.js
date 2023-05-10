import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

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
          <Link to="#0">
            <Image
            src={require('./../../../assets/images/MetaMask.png')}
            alt="Open"
            width={64}
            height={64} />
        </Link>
        </li>
       <li>
          <Link to="#0">
          <Image
            src={require('./../../../assets/images/pangolin.png')}
            alt="Open"
            width={64}
            height={64} />
          </Link>
        </li>
       <li>
          <Link to="#0">
          <Image
            src={require('./../../../assets/images/traderjoexyz.png')}
            alt="Open"
            width={64}
            height={64} />
          </Link>
        </li>

        <li>
          <Link to="#0">
          <Image
            src={require('./../../../assets/images/yetiswap.png')}
            alt="Open"
            width={180}
            height={64} />
          </Link>
        </li>
       </ul>
    </nav>
  );
}

export default FooterNav;