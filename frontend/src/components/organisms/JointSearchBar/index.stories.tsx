import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import JointSearchBar from '.';

export default {
  title: 'Organisms/JointSearchBar',
  component: JointSearchBar,
} as ComponentMeta<typeof JointSearchBar>;

const Template: ComponentStory<typeof JointSearchBar> = (args) => (
  <JointSearchBar {...args} />
);

export const FindBar1 = Template.bind({});
FindBar1.args = {
  barWidth: '1050px',
  sxButton: {
    position: 'absolute',
    width: '80px',
    height: '50px',
    borderRadius: '0px 10px 10px 0px',
    right: '0px',
  },
};

export const FindBar2 = Template.bind({});
FindBar2.args = {
  barWidth: '690px',
  sxButton: {
    position: 'absolute',
    width: '64px',
    height: '50px',
    borderRadius: '0px 10px 10px 0px',
    right: '0px',
  },
};
