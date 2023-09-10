import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../types';
import type { Nullable, Prize } from '../../../../types';

export type QuizState = {
  isActive: boolean;
  prize: Nullable<Prize>;
};

export const name = 'quiz';
export const initialState: QuizState = {
  isActive: false,
  prize: null,
};

// Reducer

export const reducers = {
  setIsActive(state: QuizState, action: PayloadAction<boolean>) {
    state.isActive = action.payload;
  },
  setPrize(state: QuizState, action: PayloadAction<Prize>) {
    state.prize = action.payload;
  },
};

export const quizSlice = createSlice({
  name,
  initialState,
  reducers,
});

// Actions

export const { setIsActive, setPrize } = quizSlice.actions;

// Selectors

export const isActiveSelector = (state: RootState): boolean => state?.app?.[name]?.isActive;
export const prizeSelector = (state: RootState): Nullable<Prize> => state?.app?.[name]?.prize;
