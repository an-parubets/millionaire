import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './BaseLayout.module.css';

interface Props {
  children: ReactNode;
  className?: string;
}

function BaseLayout({ children, className }: Props): ReactElement {
  return (
    <main className={classNames(styles.component, className)}>{children}</main>
  );
}

export default BaseLayout;
