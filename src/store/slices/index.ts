import { combineReducers } from '@reduxjs/toolkit';
import { app } from './app';
import { domain } from './domain';

export const reducer = combineReducers({
  app,
  [domain.reducerPath]: domain.reducer,
});
