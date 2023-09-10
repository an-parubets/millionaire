import { createEntityAdapter } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  Quiz,
  Question,
  QuestionId,
  CorrectAnswersMap,
} from '../../../types';
import mockQuestions from '../../../__mocks__/questions.json';
import mockAnswers from '../../../__mocks__/answers.json';

const questionsList = mockQuestions as Quiz;
const answersMap = mockAnswers as CorrectAnswersMap;

// State shape normalized by recommendation from redux maintainers
// You can read more about it here https://redux.js.org/usage/structuring-reducers/normalizing-state-shape

const quizAdapter = createEntityAdapter<Question>({
  selectId: (question): QuestionId => question.id,
});

export const domain = createApi({
  reducerPath: 'domain',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      queryFn() {
        // Return mock data because back and API does not exist
        return {
          data: quizAdapter.addMany(
            quizAdapter.getInitialState(),
            questionsList,
          ),
        };
      },
    }),
    getAnswers: builder.query({
      queryFn({ questionId }) {
        // Return mock data because back and API does not exist
        return {
          data: answersMap[questionId],
        };
      },
    }),
  }),
});

export const { useGetQuestionsQuery, useGetAnswersQuery } = domain;
