import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { getBasename } from '../utils';

interface Props {
  children: ReactElement;
}

function RouterProvider({ children }: Props): ReactElement {
  const basename = getBasename();

  return (
    <BrowserRouter basename={basename}>
      {children}
    </BrowserRouter>
  );
}

export default RouterProvider;
