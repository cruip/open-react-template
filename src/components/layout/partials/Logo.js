import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      
        <Link>
          <Image
            src={require('./../../../assets/images/primeLogo.png')}
            alt="Open"
            width={64}
            height={64} />
        </Link>
      
    </div>
  );
}

export default Logo;