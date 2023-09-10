import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonPrimary from './ButtonPrimary';

describe('ButtonPrimary', () => {
  it('should render button DOM element', () => {
    render(<ButtonPrimary>Click me</ButtonPrimary>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<ButtonPrimary>Click me</ButtonPrimary>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
