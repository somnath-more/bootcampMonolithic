import { ButtonBase, Grid, SxProps, Typography } from '@mui/material';
import React from 'react';
import { EXTRA_COLORS } from '../../../theme';
import ImageComponent from '../../atoms/Image';

type SidebarProps = {
  iconName: any;
  itemName: string;
  isSelected?: boolean;
};

const useStyles: SxProps = {
  selected: {
    backgroundColor: EXTRA_COLORS.lightGreen,
    borderRadius: '10px',
  },
  unselected: {
    borderRadius: '10px',
  },
};

const SidebarItems = (props: SidebarProps) => {
  return (
    <>
      <Grid
        container
        sx={
          props.isSelected ? useStyles.selected : useStyles.unselected
        }
      >
        <ButtonBase
          sx={{
            width: '240px',
            height: '50px',
            borderRadius: '10px',
            padding: '13px 20px',
            justifyContent: 'left',
          }}
        >
          <ImageComponent
            image={props.iconName}
            imageStyle={{ marginRight: '20px' }}
          />
          <Typography
            variant="subtitle1"
            color={EXTRA_COLORS.darkGrey}
          >
            {props.itemName}
          </Typography>
        </ButtonBase>
      </Grid>
    </>
  );
};
export default SidebarItems;
