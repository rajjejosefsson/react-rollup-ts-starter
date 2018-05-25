import * as React from 'react';
import { WindowProps } from './Window.type';
import './Window.css';
import CloseIcon from './CloseIcon';

const Window = (props: WindowProps) => {
  const {
    width,
    height,
    animation,
    animationDurationMS,
    windowStyles,
    windowClassName,
    animationState,
    showCloseButton,
    onClose,
    children,
  } = props;

  // TODO: DOC FOR CUSTOM ANIMATION
  const windowClasses = `c-modal--window modal-${animation}-on-${animationState} ${windowClassName}`;

  const styles = {
    animationDuration: `${animationDurationMS}ms`,
    width,
    height,
    ...windowStyles,
  };

  return (
    <div style={styles} className={windowClasses}>
      {showCloseButton && (
        <button onClick={onClose} className="c-modal--close">
          <CloseIcon />
        </button>
      )}
      {children}
    </div>
  );
};

export default Window;
