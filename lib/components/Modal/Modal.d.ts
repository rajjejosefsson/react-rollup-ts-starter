/// <reference types="react" />
import './Modal.scss';
import * as React from 'react';
import { ModalProps, ModalState } from './Modal.type';
declare class Modal extends React.Component<ModalProps, ModalState> {
  static defaultProps: {
    isOpen: boolean;
    isBackdrop: boolean;
    showCloseButton: boolean;
    closeOnBackdrop: boolean;
    closeOnEsc: boolean;
    width: string;
    height: string;
    animation: string;
    animationDurationMS: number;
    className: string;
    windowClassName: string;
    windowStyles: {};
    backdropClassName: string;
    backdropStyles: {};
  };
  state: {
    isOpen: boolean;
    animationState: string;
  };
  outerDIV: HTMLElement;
  static getDerivedStateFromProps(
    nextProps: ModalProps,
    prevState: ModalState,
  ):
    | {
        isOpen: boolean;
        animationState: string;
      }
    | {
        animationState: string;
        isOpen?: undefined;
      };
  onEsc: (event: React.KeyboardEvent<any>) => void;
  onAnimationEnd: (event: React.AnimationEvent<HTMLDivElement>) => void;
  render(): JSX.Element;
  setModalRef: (outerDIV: any) => void;
}
export default Modal;
