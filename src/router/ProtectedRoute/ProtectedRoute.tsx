import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE } from '../config';

interface Props {
  isAllowed: boolean;
  redirectPath?: string;
}

function ProtectedRoute({
  isAllowed,
  redirectPath = ROUTE.LOBBY,
}: Props): ReactElement {
  if (!isAllowed) {
    return <Navigate replace to={redirectPath} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
