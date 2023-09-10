import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import ErrorBoundary from './components/ErrorBoundary';
import { store } from './store';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
