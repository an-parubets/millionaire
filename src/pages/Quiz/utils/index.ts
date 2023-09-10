import { ExtendedAnswer, ExtendedQuestion } from '../types';
import {
  Answer,
  AnswerId,
  Question,
  Round,
  CorrectAnswers,
  RoundStatus,
  AnswerStatus,
} from '../../../types';
import { getFormattedAmount } from '../../../utils';

export const getRoundStatus = (
  question: ExtendedQuestion,
  currentQuestion: Question,
): RoundStatus => {
  switch (true) {
    case currentQuestion?.id === question?.id:
      return RoundStatus.current;
    case question.finished:
      return RoundStatus.finished;
    default:
      return RoundStatus.inactive;
  }
};

export const getAnswerStatus = (
  answer: Answer,
  selectedAnswers: AnswerId[],
  correctAnswers: CorrectAnswers | undefined,
): AnswerStatus => {
  const isCorrectAnswersProvided = !!correctAnswers;

  const isSelected = !!selectedAnswers.find((id) => id === answer.id);
  const isCorrect = !!correctAnswers?.find((id) => id === answer.id);

  switch (true) {
    case !isCorrectAnswersProvided && isSelected:
      return AnswerStatus.selected;
    case isCorrectAnswersProvided && isCorrect:
      return AnswerStatus.correct;
    case isCorrectAnswersProvided && isSelected && !isCorrect:
      return AnswerStatus.wrong;

    default:
      return AnswerStatus.inactive;
  }
};

export const getExtendedAnswers = (
  answers: Answer[],
  selectedAnswers: AnswerId[],
  correctAnswers: CorrectAnswers,
): ExtendedAnswer[] => answers.map((answer) => ({
  ...answer,
  status: getAnswerStatus(answer, selectedAnswers, correctAnswers),
}));

export const getRounds = (
  questions: ExtendedQuestion[],
  currentQuestion: Question,
): Round[] => questions
  .map((item) => ({
    id: item.id,
    title: getFormattedAmount(item.prize.amount, item.prize.currency),
    status: getRoundStatus(item, currentQuestion),
  }))
  .reverse();
