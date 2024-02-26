import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';
import '@testing-library/jest-dom';
import User from '../../../../public/assets/images/user1.svg';

test('Test - Header', () => {
  render(
    <Header
      location="East Marredpally, Secunderabad"
      userName="Sara Joseph"
      avatar={User}
    />,
  );
  const location = screen.getByText(/East Marredpally/i);
  const name = screen.getByText(/Sara/i);
  const img = screen.getByRole('img');
  expect(location).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'test-file-stub');
});
