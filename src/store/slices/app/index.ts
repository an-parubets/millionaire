import { combineReducers } from '@reduxjs/toolkit';
import { quizSlice } from './quiz';

export const app = combineReducers({
  [quizSlice.name]: quizSlice.reducer,
});
