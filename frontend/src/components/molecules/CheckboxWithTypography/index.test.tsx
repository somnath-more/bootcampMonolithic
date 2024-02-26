import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckboxWithTypography from '.';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { EXTRA_COLORS } from '../../../theme';
import gctheme from '../../../theme/index';

test('Test -Checkbox', () => {
  render(
    <CheckboxWithTypography
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
      ]}
      title={'Distance'}
    ></CheckboxWithTypography>,
  );

  const title = screen.getByText(/Distance/);
  const value1 = screen.getByText(/0 - 10 kms/);
  expect(value1).toBeInTheDocument();

  const value2 = screen.getByText(/21 - 30 kms/);
  expect(value2).toBeInTheDocument();

  const value3 = screen.getByText(/31 - 40 kms/);
  expect(value3).toBeInTheDocument();
  const value4 = screen.getByText(/41 - 50 kms/);
  expect(value4).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
