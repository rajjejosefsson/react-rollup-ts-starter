import './Button.scss';

import * as React from 'react';

import { Props } from './Button.type';

export const Button: React.StatelessComponent<Props> = ({
  children,
  ...props
}) => <button {...props}>{children}</button>;
