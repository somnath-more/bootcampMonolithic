import { Avatar, AvatarProps } from '@mui/material';
import React from 'react';

export interface IAvatarProps extends AvatarProps {
  sxAvatar?: any;
}

const Avatars = (props: IAvatarProps) => {
  return (
    <div>
      <Avatar
        variant={props.variant}
        sx={props.sxAvatar}
        children={props.children}
        src={props.src}
      />
    </div>
  );
};

export default Avatars;
