import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const AvaxLogo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="https://www.avax.network/">
          <Image
            src={require('./../../../assets/images/avalanche.svg')}
            alt="Open"
            width={250}
            height={85} />
        </Link>
      </h1>
    </div>
  );
}

export default AvaxLogo;