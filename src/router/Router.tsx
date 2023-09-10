import React, { ReactElement } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LazyComponent from '../components/LazyComponent';
import ProtectedRoute from './ProtectedRoute';
import { useStoreSelector } from '../store';
import { isActiveSelector } from '../store/slices/app/quiz';
import { ROUTE } from './config';

const Lobby = React.lazy(() => import('../pages/Lobby'));
const Quiz = React.lazy(() => import('../pages/Quiz'));
const GameOver = React.lazy(() => import('../pages/GameOver'));
const ErrorPage = React.lazy(() => import('../pages/Error'));

function Router(): ReactElement {
  const isActiveQuiz = useStoreSelector(isActiveSelector);

  return (
    <Routes>
      <Route
        path={ROUTE.LOBBY}
        element={(
          <LazyComponent>
            <Lobby />
          </LazyComponent>
        )}
      />

      <Route element={<ProtectedRoute isAllowed={isActiveQuiz} />}>
        <Route
          path={ROUTE.QUIZ}
          element={(
            <LazyComponent>
              <Quiz />
            </LazyComponent>
          )}
        />

        <Route
          path={ROUTE.GAME_OVER}
          element={(
            <LazyComponent>
              <GameOver />
            </LazyComponent>
          )}
        />
      </Route>

      <Route
        path={ROUTE.NOT_FOUND}
        element={(
          <LazyComponent>
            <ErrorPage errorCode={404} />
          </LazyComponent>
        )}
      />

      <Route
        path={ROUTE.SERVER_ERROR}
        element={(
          <LazyComponent>
            <ErrorPage errorCode={500} />
          </LazyComponent>
        )}
      />

      <Route
        path={ROUTE.NO_MATCH}
        element={<Navigate to={ROUTE.NOT_FOUND} replace />}
      />
    </Routes>
  );
}

export default Router;
