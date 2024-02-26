import Avatars from '../../atoms/Avatar';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { IAvatarProps } from '../../atoms/Avatar';
import React from 'react';

interface AvatarWithTypographyProps extends IAvatarProps {
  text: string;
  sxTypo?: any;
  variants: any;
}

const useStyles = makeStyles({
  containerDiv: {
    display: 'flex',
    alignItems: 'center',
  },
});

const AvatarWithTypography = (props: AvatarWithTypographyProps) => {
  const classes = useStyles();

  return (
    <div className={classes.containerDiv}>
      <Avatars
        variant={props.variant}
        sxAvatar={props.sxAvatar}
        children={props.children}
        src={props.src}
      />

      <Typography
        children={props.text}
        sx={props.sxTypo}
        variant={props.variants}
      />
    </div>
  );
};

export default AvatarWithTypography;
