import React, { ReactElement, useCallback, useState } from 'react';
import classNames from 'classnames';
import Modal from '../../../../components/Modal';
import Rounds from '../Rounds';
import { ButtonIcon } from '../../../../components/Button';
import { IconName } from '../../../../components/Button/ButtonIcon';
import type { Round } from '../../../../types';
import styles from './ModalRounds.module.css';

interface Props {
  rounds: Round[];
  className?: string;
}

function ModalRounds({ rounds, className }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className={classNames(styles.component, className)}>
      <ButtonIcon
        icon={isOpen ? IconName.close : IconName.menu}
        onClick={toggleModal}
      />
      <Modal isOpen={isOpen} className={styles.modal}>
        <Rounds rounds={rounds} />
      </Modal>
    </div>
  );
}

export default ModalRounds;
