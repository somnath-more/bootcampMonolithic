import { ComponentStory } from '@storybook/react';
import gctheme from '../../../theme/index';
import AvatarWithTypography from '.';
import React from 'react';

export default {
  title: 'Molecules/AvatarWithTypography',
};

const Template: ComponentStory<typeof AvatarWithTypography> = (
  args,
) => <AvatarWithTypography {...args} />;

export const AvatarWithTypographyStory1 = Template.bind({});

export const AvatarWithTypographyStory2 = Template.bind({});

export const AvatarWithTypographyStory3 = Template.bind({});

AvatarWithTypographyStory1.args = {
  variant: 'circular',
  sxAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: gctheme.palette.primary.main,
  },
  sxTypo: {
    margin: '0px 15px',
  },
  text: 'Your Location',
  children: '1',
  variants: gctheme.typography.h6,
};

AvatarWithTypographyStory2.args = {
  variant: 'circular',
  sxAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: gctheme.palette.grey[100],
  },
  sxTypo: {
    margin: '0px 15px',
  },
  text: 'Job Location',
  children: '2',
  variants: gctheme.typography.h6,
};

AvatarWithTypographyStory3.args = {
  variant: 'circular',
  sxAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: gctheme.palette.grey[100],
  },
  sxTypo: {
    margin: '0px 15px',
  },
  text: 'Your Skills',
  children: '3',
  variants: gctheme.typography.h6,
};
