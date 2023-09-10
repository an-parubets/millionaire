import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { ReactComponent as HandImage } from '../../assets/images/hand.svg';
import BaseLayout from '../BaseLayout';
import styles from './SplitScreenLayout.module.css';

interface Props {
  description: ReactElement;
  button: ReactElement;
  className?: string;
}

function SplitScreenLayout({
  description,
  button,
  className,
}: Props): ReactElement {
  return (
    <BaseLayout className={classNames(styles.component, className)}>
      <section className={styles.section}>
        <div className={styles.imageWrapper}>
          <HandImage className={styles.image} />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.description}>{description}</div>
          <div className={styles.button}>{button}</div>
        </div>
      </section>
    </BaseLayout>
  );
}

export default SplitScreenLayout;
