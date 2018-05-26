// import './Backdrop.scss';

import * as React from 'react';

import { BackdropProps } from './Backdrop.type';

const Backdrop: React.StatelessComponent<BackdropProps> = ({
  backdropStyles,
  backdropClassName,
  onClose,
}) => (
  <div
    className={`c-modal--backdrop ${backdropClassName || ''}`}
    style={{
      ...backdropStyles,
    }}
    onClick={onClose}
  />
);

export default Backdrop;
