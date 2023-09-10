import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import classNames from 'classnames';
import Typography, { Variant } from '../../Typography';
import { OptionStatus } from './constants';
import styles from './ButtonOption.module.css';

interface Props extends ComponentPropsWithoutRef<'button'> {
  status: OptionStatus;
  index?: number | string;
  // You can extend ButtonOptions`s interface here
}

const stylesStatusMap: Record<OptionStatus, string> = {
  [OptionStatus.inactive]: styles.inactive,
  [OptionStatus.selected]: styles.selected,
  [OptionStatus.correct]: styles.correct,
  [OptionStatus.wrong]: styles.wrong,
};

function ButtonOption({
  status,
  index,
  className,
  children,
  ...props
}: Props): ReactElement {
  return (
    <div
      className={classNames(styles.component, stylesStatusMap[status], className)}
    >
      <button type="button" className={styles.button} {...props}>
        {index && (
        <Typography variant={Variant.bodyBold} className={styles.index}>
          {index}
        </Typography>
        )}
        <Typography variant={Variant.bodyRegular}>{children}</Typography>
      </button>
    </div>
  );
}

export default ButtonOption;
