import React from 'react';
import { render, screen } from '@testing-library/react';
import Buttons from '.';
import '@testing-library/jest-dom';

test('Test - Button', () => {
  render(
    <Buttons
      variant="contained"
      children="Green Commute"
      size="large"
    />,
  );
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Green Commute');
});
