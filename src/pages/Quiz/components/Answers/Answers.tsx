import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { ButtonOption } from '../../../../components/Button';
import { OptionStatus } from '../../../../components/Button/ButtonOption';
import { convertIndexToAlpha } from '../../../../utils';
import { AnswerId, AnswerStatus } from '../../../../types';
import { ExtendedAnswer } from '../../types';
import styles from './Answers.module.css';

interface Props {
  answers: ExtendedAnswer[];
  selectAnswer(answerId: AnswerId): void;
  className?: string;
}

const answerStatusToOptionStatusMap: Record<AnswerStatus, OptionStatus> = {
  [AnswerStatus.inactive]: OptionStatus.inactive,
  [AnswerStatus.selected]: OptionStatus.selected,
  [AnswerStatus.correct]: OptionStatus.correct,
  [AnswerStatus.wrong]: OptionStatus.wrong,
};

function Answers({ answers, selectAnswer, className }: Props): ReactElement {
  return (
    <ul className={classNames(styles.component, className)}>
      {answers.map((answer, index) => (
        <li key={answer.id} className={styles.item}>
          <ButtonOption
            status={answerStatusToOptionStatusMap[answer.status]}
            index={convertIndexToAlpha(index)}
            onClick={() => selectAnswer(answer.id)}
          >
            {answer.title}
          </ButtonOption>
        </li>
      ))}
    </ul>
  );
}

export default Answers;
