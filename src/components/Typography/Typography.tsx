import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import classNames from 'classnames';
import { Variant } from './constants';
import styles from './Typography.module.css';

interface Props extends ComponentPropsWithoutRef<'span'> {
  variant?: Variant;
  // You can extend Typography`s interface here
}

const stylesVariantMap: Record<Variant, string> = {
  [Variant.title]: styles.title,
  [Variant.subtitle]: styles.subtitle,
  [Variant.bodyRegular]: styles.bodyRegular,
  [Variant.bodyBold]: styles.bodyBold,
};

function Typography({
  variant = Variant.bodyRegular,
  className,
  ...props
}: Props): ReactElement {
  return (
    <span
      className={classNames(
        styles.component,
        stylesVariantMap[variant],
        className,
      )}
      {...props}
    />
  );
}

export default Typography;
