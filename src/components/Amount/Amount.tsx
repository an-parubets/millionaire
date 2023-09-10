import React, { ReactElement } from 'react';
import { getFormattedAmount } from '../../utils';

interface Props {
  amount: number;
  currency: string;
}

function Amount({ amount, currency }: Props): ReactElement {
  return <>{getFormattedAmount(amount, currency)}</>;
}

export default Amount;
