import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HPLogo from '../../../../public/assets/logos/hp.svg';
import JobCard from '.';
import { commuteOptions } from '../../../utils/constants';

test('Test - JobCard', () => {
  render(
    <JobCard
      logo={HPLogo}
      days={2}
      title="User Experience Designer"
      company="Hp"
      location="Hyderabad, Telangana, India"
      commute={commuteOptions}
    />,
  );
  const title = screen.getByText(/User Experience/i);
  const days = screen.getByText('2d');
  const company = screen.getByText('Hp');
  const location = screen.getByText(/Hyderabad/i);
  const logo = screen.getByRole('img');
  expect(title).toBeInTheDocument();
  expect(days).toBeInTheDocument();
  expect(company).toBeInTheDocument();
  expect(location).toBeInTheDocument();
  expect(logo).toHaveAttribute('src', 'test-file-stub');
});
