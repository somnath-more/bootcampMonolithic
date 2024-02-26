import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Stepper from '.';

test('Test - Stepper', () => {
  render(
    <Stepper
      steps={[
        {
          text: 'Your Location',
          children: 1,
        },
        {
          text: 'Job Location',
          children: 2,
        },
        {
          text: 'Your Skills',
          children: 3,
        },
      ]}
    />,
  );
  const number = screen.getByText(/1/i);
  const step = screen.getByText(/Your Location/);
  expect(number).toBeInTheDocument();
  expect(step).toBeInTheDocument();
});
