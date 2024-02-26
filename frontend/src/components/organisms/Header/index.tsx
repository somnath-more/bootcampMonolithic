import React from 'react';
import { Grid, Typography } from '@mui/material';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AvatarWithTypography from '../../molecules/AvatarWithTypography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import theme from '../../../theme';

type HeaderProps = {
  location: string;
  userName: string;
  avatar: any;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <Grid
        container
        width="1170px"
        height="80px"
        padding="0px 60px"
        alignItems="center"
      >
        <LocationOnOutlinedIcon sx={{ marginRight: '10px' }} />
        <Typography variant="subtitle1" sx={{ width: '745px' }}>
          {props.location}
        </Typography>
        <MessageOutlinedIcon />
        <NotificationsNoneOutlinedIcon sx={{ margin: '0px 30px' }} />
        <AvatarWithTypography
          variant="circular"
          src={props.avatar}
          text={props.userName}
          variants="subtitle2"
          sxTypo={{
            margin: '0px 4px 0px 10px',
          }}
        />
        <KeyboardArrowDownIcon
          sx={{ color: theme.palette.grey[500] }}
        />
      </Grid>
    </>
  );
};

export default Header;
