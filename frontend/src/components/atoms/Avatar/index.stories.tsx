import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatars from '.';
import gctheme from '../../../theme/index';
import React from 'react';

export default {
  title: 'Atoms/Avatars',
  component: Avatars,
} as ComponentMeta<typeof Avatars>;

const Template: ComponentStory<typeof Avatars> = (args) => (
  <Avatars {...args} />
);

export const AvatarStory1 = Template.bind({});
export const AvatarStory2 = Template.bind({});
export const AvatarStory3 = Template.bind({});

AvatarStory1.args = {
  variant: 'circular',
  sxAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: gctheme.palette.primary.main,
  },
  children: '1',
};

AvatarStory2.args = {
  variant: 'circular',
  sxAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: gctheme.palette.grey[100],
  },
  children: '2',
};

AvatarStory3.args = {
  variant: 'circular',
  sxAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: gctheme.palette.grey[100],
  },
  children: '2',
};
