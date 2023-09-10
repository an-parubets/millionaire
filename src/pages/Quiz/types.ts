import { EntityState } from '@reduxjs/toolkit';
import { Answer, AnswerStatus, Question } from '../../types';

export type ExtendedQuestion = Question & {
  finished: boolean;
};

export type ExtendedAnswer = Answer & {
  status: AnswerStatus;
};

export type QuizSource = EntityState<Question[]> | undefined;
