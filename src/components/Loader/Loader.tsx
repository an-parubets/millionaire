import React, { ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Loader.module.css';

interface Props {
  className?: string;
}

function Loader({ className }: Props): ReactElement {
  return (
    <div className={classNames(styles.componet, className)}>
      <div className={styles.loader} />
    </div>
  );
}

export default Loader;
