// Source types

export type Answer = {
  id: string;
  title: string;
};

export type Prize = {
  amount: number;
  currency: string;
};

export type Question = {
  id: string;
  title: string;
  answers: Answer[];
  countCorrectAnswers: number;
  prize: Prize;
};

export type Quiz = Question[];

export type QuestionId = Question['id'];
export type AnswerId = Answer['id'];

export type CorrectAnswers = AnswerId[];

// Use only as mock data
export type CorrectAnswersMap = Record<AnswerId, CorrectAnswers>;

// Custom quiz type

export enum RoundStatus {
  inactive = 'inactive',
  current = 'current',
  finished = 'finished',
}

export enum AnswerStatus {
  inactive = 'inactive',
  selected = 'selected',
  correct = 'correct',
  wrong = 'wrong',
}

export type Round = {
  id: string;
  title: string;
  status: RoundStatus;
};
