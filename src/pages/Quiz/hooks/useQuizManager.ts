import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreDispatch } from '../../../store';
import { useQuizData } from './useQuizData';
import { setPrize } from '../../../store/slices/app/quiz';
import { delay } from '../../../utils';
import { getExtendedAnswers, getRounds } from '../utils';
import { ROUTE } from '../../../router/config';
import { AnswerStatus } from '../../../types';
import type { ExtendedAnswer } from '../types';
import type { Question, Round, AnswerId } from '../../../types';

interface QuizManager {
  rounds: Round[];
  currentQuestion: Question;
  answers: ExtendedAnswer[];
  selectAnswer(answerId: AnswerId): void;
}

export const useQuizManager = (): QuizManager => {
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const {
    questions,
    currentQuestion,
    selectedAnswers,
    correctAnswers,
    isAnswersProvided,
    isFinish,
    addAnswer,
    nextQuestion,
  } = useQuizData();

  const [answers, setAnswers] = useState<ExtendedAnswer[]>([]);
  const [isCorrectAnswersShown, setIsCorrectAnswersShown] = useState<boolean>(false);

  const rounds = useMemo<Round[]>(
    () => getRounds(questions, currentQuestion),
    [questions, currentQuestion],
  );

  const handleCorrectAnswer = useCallback(() => {
    dispatch(setPrize(currentQuestion.prize));

    if (isFinish) {
      navigate(ROUTE.GAME_OVER);
    } else {
      nextQuestion();
    }
  }, [dispatch, isFinish, currentQuestion, navigate, nextQuestion]);

  const handleInCorrectAnswer = useCallback(() => {
    navigate(ROUTE.GAME_OVER);
  }, [navigate]);

  const selectAnswer = useCallback(
    (answerId: AnswerId) => {
      if (!isAnswersProvided) {
        addAnswer(answerId);
      }
    },
    [addAnswer, isAnswersProvided],
  );

  useEffect(() => {
    (async () => {
      if (!currentQuestion) return;

      const extendedAnswers: ExtendedAnswer[] = getExtendedAnswers(
        currentQuestion.answers,
        selectedAnswers,
        correctAnswers!,
      );

      // We delay the display of correct answers
      if (correctAnswers) {
        await delay(1500);
        setIsCorrectAnswersShown(true);
      }

      setAnswers(extendedAnswers);
    })();
  }, [currentQuestion, selectedAnswers, correctAnswers]);

  useEffect(() => {
    (async () => {
      if (!isAnswersProvided || !isCorrectAnswersShown) return;

      // We delay the transition to show the result of the answers
      await delay(1500);

      const hasWrongAnswer = answers?.some(
        (item) => item.status === AnswerStatus.wrong,
      );

      if (hasWrongAnswer) {
        return handleInCorrectAnswer();
      }

      handleCorrectAnswer();
    })();
  }, [
    isAnswersProvided,
    isCorrectAnswersShown,
    answers,
    handleInCorrectAnswer,
    handleCorrectAnswer,
  ]);

  useEffect(() => {
    setIsCorrectAnswersShown(false);
  }, [currentQuestion]);

  return useMemo<QuizManager>(
    () => ({
      rounds,
      answers,
      currentQuestion,
      selectAnswer,
    }),
    [rounds, answers, currentQuestion, selectAnswer],
  );
};
