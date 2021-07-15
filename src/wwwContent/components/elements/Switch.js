import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  value: PropTypes.string,
  rightLabel: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
}

const defaultProps = {
  children: null,
  name: undefined,
  value: undefined,
  rightLabel: undefined,
  disabled: false,
  checked: undefined
}

const Switch = ({
  className,
  children,
  name,
  value,
  rightLabel,
  disabled,
  checked,
  ...props
}) => {

  const classes = classNames(
    'form-switch',
    className
  );

  return (
    <label className={classes}>
      <input
        {...props}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      <span className="form-switch-icon"></span>
      <span>
        {children}
      </span>
      {rightLabel &&
        <span>
          {rightLabel}
        </span>
      }
    </label>
  );
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;