import React from 'react';
import { render, screen } from '@testing-library/react';
import CommuteRouteSection from '.';
import '@testing-library/jest-dom';

test('Test - CommuteRouteSection', () => {
  render(
    <CommuteRouteSection
      from="East Mareddpally, E Mareddpally, Secunderabad"
      to="Hitech City, Telangana, Secunderabad"
    />,
  );
  const from = screen.getByDisplayValue(/East/i);
  const to = screen.getByDisplayValue(/Telangana/i);
  const img = screen.getByRole('img');
  expect(from).toBeInTheDocument();
  expect(to).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'test-file-stub');
});
