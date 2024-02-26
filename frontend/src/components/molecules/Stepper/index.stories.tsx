import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stepper from '.';

export default {
  title: 'Molecules/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args} />
);

export const NavBar_Stepper = Template.bind({});
NavBar_Stepper.args = {
  steps: [
    {
      text: 'Your Location',
      children: 1,
    },
    {
      text: 'Job Location',
      children: 2,
    },
    {
      text: 'Your Skills',
      children: 3,
    },
  ],
  stepNumber: 1,
};
