import React, { ReactElement } from 'react';
import classNames from 'classnames';
import Portal from '../Portal';
import type { Nullable } from '../../types';
import styles from './Modal.module.css';

interface Props {
  isOpen: boolean;
  children: ReactElement;
  className?: string;
}

function Modal({
  isOpen,
  children,
  className,
}: Props): Nullable<ReactElement> {
  return isOpen ? (
    <Portal portalId="root">
      <div className={classNames(styles.component, className)}>{children}</div>
    </Portal>
  ) : null;
}

export default Modal;
