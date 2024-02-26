import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SidebarItems from '.';
import Dashboard from '../../../../public/assets/icons/dashboard.svg';

export default {
  title: 'Molecules/SidebarItems',
  component: SidebarItems,
} as ComponentMeta<typeof SidebarItems>;

const Template: ComponentStory<typeof SidebarItems> = (args) => (
  <SidebarItems {...args} />
);

export const NavItem = Template.bind({});
NavItem.args = {
  iconName: Dashboard,
  itemName: 'Dashboard',
};
