import React, { ReactElement } from 'react';
import classNames from 'classnames';
import Option from '../Option';
import type { Round } from '../../../../types';
import styles from './Rounds.module.css';

interface Props {
  rounds: Round[];
  className?: string;
}

function Rounds({ rounds, className }: Props): ReactElement {
  return (
    <ul className={classNames(styles.component, className)}>
      {rounds.map((round) => (
        <li className={styles.item} key={round.id}>
          <Option title={round.title} status={round.status} />
        </li>
      ))}
    </ul>
  );
}

export default Rounds;
