import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useQueue } from '../../../hooks/useQueue';
import {
  useGetQuestionsQuery,
  useGetAnswersQuery,
} from '../../../store/slices/domain';
import type {
  Question,
  AnswerId,
  CorrectAnswers,
  QuestionId,
} from '../../../types';
import type { ExtendedQuestion } from '../types';

interface QuizData {
  questions: ExtendedQuestion[];
  currentQuestion: Question;
  selectedAnswers: AnswerId[];
  correctAnswers: CorrectAnswers | undefined;
  isAnswersProvided: boolean;
  isFinish: boolean;
  addAnswer(answerId: AnswerId): void;
  nextQuestion(): void;
}

export const useQuizData = (): QuizData => {
  const { data: source } = useGetQuestionsQuery({});

  const questionIds = useMemo<QuestionId[]>(
    () => (source?.ids ?? []) as unknown as QuestionId[],
    [source],
  );

  const questionEntities = useMemo<Record<QuestionId, Question>>(
    () => (source?.entities ?? {}) as unknown as Record<QuestionId, Question>,
    [source],
  );

  const questionsQueue = useQueue<QuestionId>(questionIds);

  const [answers, setAnswers] = useState<AnswerId[]>([]);
  const [isAnswersProvided, setIsAnswersProvided] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<
    CorrectAnswers | undefined
  >();

  const extendedQuestions = useMemo<ExtendedQuestion[]>(() => questionIds.map((questionId) => ({
    ...questionEntities[questionId],
    // this can be done with a more efficient algorithm
    finished: !questionsQueue.items.includes(questionId),
  })), [questionsQueue, questionIds, questionEntities]);

  const currentQuestion = useMemo(
    () => questionEntities[questionsQueue.peek()!],
    [questionEntities, questionsQueue],
  );

  const { data: correctAnswersList } = useGetAnswersQuery(
    {
      questionId: currentQuestion?.id,
    },
    {
      skip: !currentQuestion?.id || !isAnswersProvided,
    },
  );

  const addAnswer = useCallback((answerId: AnswerId) => {
    setAnswers((answers) => [...answers, answerId]);
  }, []);

  const nextQuestion = useCallback(() => {
    setAnswers([]);
    setCorrectAnswers(undefined);
    setIsAnswersProvided(false);
    questionsQueue.dequeue();
  }, [questionsQueue]);

  useEffect(() => {
    setIsAnswersProvided(
      answers.length === currentQuestion?.countCorrectAnswers,
    );
  }, [answers, currentQuestion]);

  useEffect(() => {
    if (isAnswersProvided) {
      setCorrectAnswers(correctAnswersList);
    }
  }, [correctAnswersList, isAnswersProvided, currentQuestion?.id]);

  return useMemo<QuizData>(
    () => ({
      questions: extendedQuestions,
      currentQuestion,
      selectedAnswers: answers,
      correctAnswers,
      addAnswer,
      nextQuestion,
      isAnswersProvided,
      isFinish: questionsQueue.count === 1,
    }),
    [
      answers,
      currentQuestion,
      correctAnswers,
      extendedQuestions,
      addAnswer,
      nextQuestion,
      isAnswersProvided,
      questionsQueue.count,
    ],
  );
};
