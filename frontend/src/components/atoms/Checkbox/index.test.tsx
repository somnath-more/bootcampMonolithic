import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from '.';
import '@testing-library/jest-dom';

test('Test -Checkbox', () => {
  render(<Checkbox></Checkbox>);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toHaveTextContent('');
});
