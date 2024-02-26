import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButtonWithTypography from '.';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { EXTRA_COLORS } from '../../../theme';
import gctheme from '../../../theme/index';
const names = [
  {
    id: 1,
    value: '0 - 10 kms',
    isChecked: false,
  },
  {
    id: 2,
    value: '21 - 30 kms',
    isChecked: false,
  },
  {
    id: 3,
    value: '31 - 40 kms',
    isChecked: false,
  },
  {
    id: 4,
    value: '41 - 50 kms',
    isChecked: false,
  },
];

test('Test - RadioButton', () => {
  render(
    <RadioButtonWithTypography
      sxTypo={{
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${gctheme.typography.body2}`,
      }}
      txTypo={{
        color: `${gctheme.palette.grey[700]}`,
        variants: `${gctheme.typography.subtitle2}`,
      }}
      data={[
        {
          id: 1,
          value: 'Yes',
          group: 1,
        },
        {
          id: 2,
          value: 'No',
          group: 1,
        },
      ]}
      title={'Green Commute'}
    ></RadioButtonWithTypography>,
  );

  const title = screen.getByText(/Green Commute/);
  const value1 = screen.getByText(/Yes/);
  const value2 = screen.getByText(/No/);
  expect(title).toBeInTheDocument();
  expect(value1).toBeInTheDocument();
  expect(value2).toBeInTheDocument();
});
