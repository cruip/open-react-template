import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormLabel from './FormLabel';
import FormHint from './FormHint';

const propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  type: PropTypes.oneOf(['textarea', 'text', 'email', 'tel', 'password', 'number', 'search', 'color', 'date', 'time', 'datetime-local']),
  name: PropTypes.string,
  status: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  formGroup: PropTypes.string,
  hasIcon: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  hint: PropTypes.string
}

const defaultProps = {
  children: null,
  label: '',
  labelHidden: false,
  type: 'text',
  name: undefined,
  status: '',
  disabled: false,
  value: undefined,
  formGroup: null,
  hasIcon: null,
  size: '',
  placeholder: '',
  rows: 3,
  hint: null
}

const Input = ({
  className,
  children,
  label,
  labelHidden,
  type,
  name,
  status,
  disabled,
  value,
  formGroup,
  hasIcon,
  size,
  placeholder,
  rows,
  hint,
  ...props
}) => {

  const wrapperClasses = classNames(
    (formGroup && formGroup !== '') && (formGroup === 'desktop' ? 'form-group-desktop' : 'form-group'),
    (hasIcon && hasIcon !== '') && 'has-icon-' + hasIcon
  );

  const classes = classNames(
    'form-input',
    size && `form-input-${size}`,
    status && `form-${status}`,
    className
  );

  const Component = type === 'textarea' ? 'textarea' : 'input';
  return (
    <React.Fragment>
      {label && <FormLabel labelHidden={labelHidden} id={props.id}>{label}</FormLabel>}
      <div
        className={wrapperClasses}
      >
        <Component
          {...props}
          type={type !== 'textarea' ? type : null}
          className={classes}
          name={name}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          rows={type === 'textarea' ? rows : null}
        />
        {children}
      </div>
      {hint && <FormHint status={status}>{hint}</FormHint>}
    </React.Fragment>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
