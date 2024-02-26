import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Buttons from '.';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { EXTRA_COLORS } from '../../../theme';

export default {
  title: 'Atoms/Buttons',
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => (
  <Buttons {...args} />
);

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Skip',
  size: 'large',
};

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  children: 'Next',
  size: 'small',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'Clear all',
  size: 'medium',
};

export const Outlined2 = Template.bind({});
Outlined2.args = {
  variant: 'text',
  children: 'Filter',
  startIcon: <FilterAltOutlinedIcon />,
  sx: {
    width: '101px',
    height: '40px',
    border: '1px solid',
    borderColor: EXTRA_COLORS.border,
  },
};
