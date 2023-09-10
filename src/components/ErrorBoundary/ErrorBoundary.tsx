import React, { Component, ReactNode, ErrorInfo } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE } from '../../router/config';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.log('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Navigate to={ROUTE.SERVER_ERROR} replace />;
    }

    return children;
  }
}

export default ErrorBoundary;
