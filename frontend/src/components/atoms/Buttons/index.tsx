import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/styles';
import theme, { EXTRA_COLORS } from '../../../theme';

interface IButtonProps extends ButtonProps {}

const StyledButton = styled(Button)({
  '&.MuiButton-contained': {
    color: EXTRA_COLORS.white,
  },
  '&.MuiButton-text': {
    color: theme.palette.grey[300],
  },
  '&.MuiButton-sizeSmall': {
    width: '101px',
    height: '38px',
    borderRadius: '10px',
    boxShadow: 'none',
  },
  '&.MuiButton-sizeMedium': {
    width: '136px',
    height: '50px',
    borderRadius: '10px',
    boxShadow: 'none',
  },
  '&.MuiButton-sizeLarge': {
    width: '208px',
    height: '50px',
    boxShadow: 'none',
    borderRadius: '10px',
  },
});

const Buttons = (props: IButtonProps) => {
  return (
    <>
      <StyledButton {...props}>{props.children}</StyledButton>
    </>
  );
};

export default Buttons;
