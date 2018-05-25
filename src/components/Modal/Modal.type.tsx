export type ModalProps = {
  isOpen?: boolean;
  isBackdrop?: boolean;
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
  onClose?: (() => void) | undefined;
  width?: string;
  height?: string;
  animation?: string;
  animationDurationMS?: number;
  className?: string;
  windowClassName?: string;
  windowStyles?: object;
  backdropClassName?: string;
  backdropStyles?: object;
  children?: any;
};

export type ModalState = {
  isOpen?: boolean;
  animationState?: string;
};
