import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dashboard from '.';
import Dashbrd from '../../../../public/assets/icons/dashboard.svg';
import Job from '../../../../public/assets/icons/jobs_standard.svg';
import Help from '../../../../public/assets/icons/help.svg';
import News from '../../../../public/assets/icons/events.svg';
import Practice from '../../../../public/assets/icons/notes.svg';
import SavedJobs from '../../../../public/assets/icons/save.svg';
import Settings from '../../../../public/assets/icons/settings.svg';
import Contact from '../../../../public/assets/icons/contact_us.svg';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Templates/Dashboard',
  component: Dashboard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => (
  <Dashboard {...args} />
);

export const Dashboard_Component = Template.bind({});
Dashboard_Component.args = {
  component: <></>,
  dashboardList: {
    list1: [
      {
        icon: Dashbrd,
        itemName: 'Dashboard',
        itemKey: '1',
      },
      {
        icon: Job,
        itemName: 'Find Jobs',
        itemKey: '2',
      },
      {
        icon: SavedJobs,
        itemName: 'Saved Jobs',
        itemKey: '3',
      },
      {
        icon: Practice,
        itemName: 'Practice Test',
        itemKey: '4',
      },
      {
        icon: News,
        itemName: 'News & Events',
        itemKey: '5',
      },
    ],
    list2: [
      {
        icon: Help,
        itemName: 'Need Help?',
        itemKey: '6',
      },
      {
        icon: Contact,
        itemName: 'Contact Us',
        itemKey: '7',
      },
      {
        icon: Settings,
        itemName: 'Settings',
        itemKey: '8',
      },
    ],
  },
};
