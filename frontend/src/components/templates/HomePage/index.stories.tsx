import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomePage from '.';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default {
  title: 'Templates/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const HomePage_Component = Template.bind({});
HomePage_Component.args = {
  component: <></>,
  inputPlaceholder: 'Enter your job location',
  iconChildren: <LocationOnOutlinedIcon />,
  label: 'Where do you want to work?',
  back: false,
  final: false,
};
