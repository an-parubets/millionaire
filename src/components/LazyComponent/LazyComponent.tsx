import React, { Suspense, ReactElement } from 'react';
import Loader from '../Loader';
import styles from './LazyComponent.module.css';

interface Props {
  children: ReactElement;
}

function LazyComponent({ children }: Props): ReactElement {
  return <Suspense fallback={<Loader className={styles.loader} />}>{children}</Suspense>;
}

export default LazyComponent;
