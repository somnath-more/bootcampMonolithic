import React from 'react';
import { render, screen } from '@testing-library/react';
import JointSearchBar from '.';
import '@testing-library/jest-dom';

test('Test - JointSearchBar', () => {
  render(
    <JointSearchBar
      barWidth="1050px"
      sxButton={{
        position: 'absolute',
        width: '80px',
        height: '50px',
        borderRadius: '0px 10px 10px 0px',
        right: '0px',
      }}
    />,
  );
  const skillsField = screen.getByPlaceholderText('Search skills');
  const button = screen.getByRole('button');
  expect(skillsField).toBeInTheDocument();
  expect(button).toHaveTextContent('');
});
