import React from 'react';
import { Checkbox, styled, CheckboxProps } from '@mui/material';
import theme from '../../../theme';

interface CheckBoxProps extends CheckboxProps {}

const StyleCheckbox = styled(Checkbox)({
  '& .MuiSvgIcon-root': {
    fontSize: '16px',
    color: 'inherit',
  },
});

const CheckboxComponent = (props: CheckboxProps) => {
  return (
    <StyleCheckbox
      {...props}
      sx={{ color: theme.palette.grey[300] }}
    />
  );
};

export default CheckboxComponent;
