import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import classNames from 'classnames';
import Icon from '../../Icon';
import { IconName } from './constants';
import styles from './ButtonIcon.module.css';

interface Props extends Omit<ComponentPropsWithoutRef<'button'>, 'children'> {
  icon: IconName;
  width?: number;
  height?: number;
  // You can extend ButtonPrimary`s interface here
}

function ButtonIcon({
  icon,
  width = 24,
  height = 24,
  className,
  ...props
}: Props): ReactElement {
  return (
    <button type="button" className={classNames(styles.component, className)} {...props}>
      <Icon name={icon} width={width} height={height} />
    </button>
  );
}

export default ButtonIcon;
