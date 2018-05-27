import './Button.css';

import * as React from 'react';

import { Props, Sizes, Types } from './Button.type';

export const Button: React.StatelessComponent<Props> = ({
  children,
  type = 'primary',
  size = 'big',
}) => {
  return (
    <button className={`btn btn--${Sizes[size]} btn--${Types[type]}`}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';
