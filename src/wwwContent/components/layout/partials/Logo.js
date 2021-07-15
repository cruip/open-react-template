import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, source, ...props }) => {
  const classes = classNames(className);

  return (
    <div {...props} className={classes}>
      <h1 className='m-0'>
        <Link to='/'>
          <Image src={source} alt='Open' {...props} />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
