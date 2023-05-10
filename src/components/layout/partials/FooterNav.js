import React from 'react';
import classNames from 'classnames';
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
          <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
            <Image
            src={require('./../../../assets/images/MetaMask.png')}
            alt="Open"
            width={64}
            height={64} />
        </a>
        </li>
       <li>
          <a href="https://app.pangolin.exchange/" target="_blank" rel="noopener noreferrer">
          <Image
            src={require('./../../../assets/images/pangolin.png')}
            alt="Pablo Wabo on Pangolin Exchange"
            width={64}
            height={64} />
          </a>
        </li>
       <li>
          <a href="https://traderjoexyz.com/avalanche" target="_blank" rel="noopener noreferrer">
          <Image
            src={require('./../../../assets/images/traderjoexyz.png')}
            alt="Pablo Wabo on Trader Joe"
            width={64}
            height={64} />
          </a>
        </li>

        <li>
          <a href="https://exchange.yetiswap.app" target="_blank" rel="noopener noreferrer">
          <Image
            src={require('./../../../assets/images/yetiswap.png')}
            alt="Pablo Wabo on Yeti Swap"
            width={180}
            height={64} />
          </a>
        </li>
       </ul>
    </nav>
  );
}

export default FooterNav;