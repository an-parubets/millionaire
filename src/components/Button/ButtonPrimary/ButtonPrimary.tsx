import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import classNames from 'classnames';
import Typography, { Variant } from '../../Typography';
import styles from './ButtonPrimary.module.css';

type Props = ComponentPropsWithoutRef<'button'>

function ButtonPrimary({
  className,
  children,
  ...props
}: Props): ReactElement {
  return (
    <button type="button" className={classNames(styles.component, className)} {...props}>
      <Typography variant={Variant.bodyBold}>{children}</Typography>
    </button>
  );
}

export default ButtonPrimary;
