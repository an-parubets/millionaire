import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices';
import { domain } from './slices/domain';

export function createStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(domain.middleware),
  });
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
