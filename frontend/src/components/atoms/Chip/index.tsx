import * as React from 'react';
import { Chip, ChipProps } from '@mui/material';
import { styled } from '@mui/styles';
import theme from '../../../theme/index';

interface IChipProps extends ChipProps {}

const StyledChip = styled(Chip)({
  '&.MuiChip-outlined': {
    borderRadius: '6px',
    borderColor: theme.palette.primary.main,
    height: '40px',
    padding: '8px 10px',
    fontSize: '16px',
  },
  '&.MuiChip-deleteIconSmall': {
    fontSize: '9.33px',
  },
});

const Chips = (props: IChipProps) => {
  return (
    <>
      <StyledChip {...props}></StyledChip>
    </>
  );
};
export default Chips;
