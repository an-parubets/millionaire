import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import Router from './router/Router';
import RouterProvider from './router/RouterProvider';
import ErrorBoundary from './components/ErrorBoundary';
import { store } from './store';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <RouterProvider>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </RouterProvider>
    </Provider>
  );
}

export default App;
