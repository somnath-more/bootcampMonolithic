import { Radio, RadioProps, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme';

interface RadioButtonProps extends RadioProps {}
const StyleRadioButton = styled(Radio)({
  '& .MuiSvgIcon-root': {
    fontSize: '16px',
    color: 'inherit',
  },
});

const RadioButtonComponent = (props: RadioButtonProps) => {
  return (
    <StyleRadioButton
      {...props}
      sx={{ color: theme.palette.grey[300] }}
    />
  );
};

export default RadioButtonComponent;
