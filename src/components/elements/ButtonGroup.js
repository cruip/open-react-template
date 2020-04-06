import React from 'react';
import classNames from 'classnames';

const ButtonGroup = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'button-group',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    />
  );
}

export default ButtonGroup;