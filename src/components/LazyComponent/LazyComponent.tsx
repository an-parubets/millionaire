import React, { Suspense, ReactElement } from 'react';
import Loader from '../Loader';

interface Props {
  children: ReactElement;
}

function LazyComponent({ children }: Props): ReactElement {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

export default LazyComponent;
