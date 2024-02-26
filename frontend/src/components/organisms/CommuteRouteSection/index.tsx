import React from 'react';
import ImageComponent from '../../atoms/Image';
import Map from '../../../../public/assets/images/map.svg';
import {
  Grid,
  IconButton,
  Input,
  SxProps,
  Typography,
} from '@mui/material';
import theme, { EXTRA_COLORS } from '../../../theme';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ClearIcon from '@mui/icons-material/Clear';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type commuteRouteProps = {
  from: string;
  to: string;
};

const useStyles: SxProps = {
  textField: {
    width: '330px',
    height: '50px',
    backgroundColor: EXTRA_COLORS.border,
    borderRadius: '10px',
    padding: '0px 20px',
    marginTop: '10px',
  },
  iconButton: {
    borderRadius: 'unset',
    margin: '0px 0px 0px 8px',
    padding: '0px',
  },
};

const CommuteRouteSection = (props: commuteRouteProps) => {
  return (
    <>
      <Grid container flexDirection="column">
        <Grid container alignItems="center" marginBottom="12px">
          <IconButton disableRipple>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="subtitle1">Commute Routes</Typography>
        </Grid>

        <ImageComponent
          image={Map}
          imageStyle={{
            width: '330px',
            height: '135.21px',
            marginBottom: '9.79px',
          }}
        />

        <Input
          disableUnderline={true}
          defaultValue={props.from}
          startAdornment={
            <FiberManualRecordIcon
              sx={{
                fontSize: '12px',
                color: theme.palette.grey[500],
                margin: '7px 13px 7px 6px',
              }}
            />
          }
          endAdornment={
            <IconButton disableTouchRipple sx={useStyles.iconButton}>
              <ClearIcon />
            </IconButton>
          }
          sx={useStyles.textField}
        />

        <Input
          disableUnderline={true}
          defaultValue={props.to}
          startAdornment={
            <LocationOnOutlinedIcon
              sx={{
                color: theme.palette.grey[500],
                marginRight: '8px',
              }}
            />
          }
          sx={useStyles.textField}
        />
      </Grid>
    </>
  );
};

export default CommuteRouteSection;
