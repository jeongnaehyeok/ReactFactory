import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('check render', () => {
  render(<App />);
  const AppElement = screen.getByText('Hello, React');
  expect(AppElement).toBeInTheDocument();
});
