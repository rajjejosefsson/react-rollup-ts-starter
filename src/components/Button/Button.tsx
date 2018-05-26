import './Button.css';

import classnames from 'classnames';
import * as React from 'react';

import { Props } from './Button.type';

export const Button: React.StatelessComponent<Props> = ({
  children,
  color = 'black',
  disabled = false,
  onClick,
  size = 'md',
  type = 'button',
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      name={name}
      onClick={(event) => onClick && onClick({ event })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
