import * as React from 'react';
import Backdrop from '../Backdrop';
import Window from '../Window';
import './Modal.css';
import { ModalProps, ModalState } from './Modal.type';

class Modal extends React.Component<ModalProps, ModalState> {
  static defaultProps = {
    isOpen: false,
    isBackdrop: true,
    showCloseButton: true,
    closeOnBackdrop: true,
    closeOnEsc: true,
    width: '500px',
    height: '300px',
    animation: 'fade',
    animationDurationMS: 300,
    className: '',
    windowClassName: '',
    windowStyles: {},
    backdropClassName: '',
    backdropStyles: {},
  };

  state = {
    isOpen: false,
    animationState: 'leave',
  };

  outerDIV: HTMLElement;

  static getDerivedStateFromProps(
    nextProps: ModalProps,
    prevState: ModalState,
  ) {
    let neverOpened = !prevState.isOpen && nextProps.isOpen;
    let wasOpen = prevState.isOpen && !nextProps.isOpen;

    if (neverOpened) {
      return {
        isOpen: true,
        animationState: 'enter',
      };
    } else if (wasOpen) {
      /** isOpen: false when animation is done - onAnimationEnd() */
      return {
        animationState: 'leave',
      };
    }

    return null;
  }

  onEsc = (event: React.KeyboardEvent<any>) => {
    if (this.props.closeOnEsc && event.keyCode === 27 /*ESC*/) {
      this.props.onClose!();
    }
  };

  onAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (this.props.closeOnEsc) {
      this.outerDIV.focus();
    }
    if (this.state.animationState === 'leave') {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const {
      children,
      animationDurationMS,
      className,
      isBackdrop,
      closeOnBackdrop,
      onClose,
      backdropStyles,
      backdropClassName,
    } = this.props;
    const { isOpen, animationState } = this.state;

    if (!isOpen) {
      return null;
    }

    return (
      <div
        ref={this.setModalRef}
        style={{
          animationDuration: `${animationDurationMS}ms`,
        }}
        className={`c-modal modal-fade-on-${animationState} ${className}`}
        onAnimationEnd={this.onAnimationEnd}
        tabIndex={-1}
        onKeyUp={this.onEsc}
      >
        {isBackdrop && (
          <Backdrop
            onClose={closeOnBackdrop ? onClose : undefined}
            backdropStyles={backdropStyles}
            backdropClassName={backdropClassName}
          />
        )}
        <Window animationState={animationState} {...this.props}>
          {children}
        </Window>
      </div>
    );
  }

  setModalRef = (outerDIV: any) => {
    this.outerDIV = outerDIV;
  };
}

export default Modal;
