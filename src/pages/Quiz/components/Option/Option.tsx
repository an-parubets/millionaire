import React, { ReactElement } from 'react';
import classNames from 'classnames';
import Typography, { Variant } from '../../../../components/Typography';
import { RoundStatus } from '../../../../types';
import styles from './Option.module.css';

interface Props {
  title: string;
  status: RoundStatus;
  className?: string;
}

const stylesStatusMap: Record<RoundStatus, string> = {
  [RoundStatus.inactive]: styles.inactive,
  [RoundStatus.current]: styles.current,
  [RoundStatus.finished]: styles.finished,
};

function Option({ title, status, className }: Props): ReactElement {
  return (
    <div
      className={classNames(styles.component, stylesStatusMap[status], className)}
    >
      <div className={styles.status}>
        <Typography variant={Variant.bodyRegular}>{title}</Typography>
      </div>
    </div>
  );
}

export default Option;
