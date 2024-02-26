import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '.';
import User from '../../../../public/assets/images/user1.svg';

export default {
  title: 'Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const HeaderComponent = Template.bind({});
HeaderComponent.args = {
  userName: 'Sara Joseph',
  location: 'East Marredpally, Secunderabad',
  avatar: User,
};
