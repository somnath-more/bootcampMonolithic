import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobCard from '.';
import HPLogo from '../../../../public/assets/logos/hp.svg';
import BMWLogo from '../../../../public/assets/logos/BMW.svg';
import MicroChip from '../../../../public/assets/logos/microchip.svg';
import { commuteOptions } from '../../../utils/constants';

export default {
  title: 'Organisms/JobCard',
  component: JobCard,
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard {...args} />
);

export const JobList1 = Template.bind({});
export const JobList2 = Template.bind({});
export const JobList3 = Template.bind({});
export const JobList4 = Template.bind({});

JobList1.args = {
  id: 1,
  logo: HPLogo,
  days: 2,
  title: 'User Experience Designer',
  company: 'Hp',
  location: 'Hitech City, Telangana, India',
  commute: commuteOptions,
};
JobList2.args = {
  id: 2,
  logo: BMWLogo,
  days: 2,
  title: 'User Experience Designer',
  company: 'BMW',
  location: 'Hitech City, Telangana, India',
  commute: commuteOptions,
};
JobList3.args = {
  id: 3,
  logo: MicroChip,
  days: 2,
  title: 'Lead User Experience Designer',
  company: 'Microchip',
  location: 'Hitech City, Telangana, India',
  commute: commuteOptions,
};
JobList4.args = {
  id: 4,
  logo: BMWLogo,
  days: 2,
  title: 'Lead Product Designer',
  company: 'BMW',
  location: 'Hitech City, Telangana, India',
  commute: commuteOptions,
};
