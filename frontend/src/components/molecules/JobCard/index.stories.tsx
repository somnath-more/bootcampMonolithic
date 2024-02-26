import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobCard from '.';
import HPLogo from '../../../../public/assets/logos/hp.svg';
import BMWLogo from '../../../../public/assets/logos/BMW.svg';
import MCLogo from '../../../../public/assets/logos/microchip.svg';
import { commuteOptions } from '../../../utils/constants';

export default {
  title: 'Molecules/JobCard',
  component: JobCard,
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard {...args} />
);

export const JobCard1 = Template.bind({});
JobCard1.args = {
  logo: HPLogo,
  days: 2,
  title: 'User Experience Designer',
  company: 'Hp',
  location: 'Hyderabad, Telangana, India',
  commute: commuteOptions,
};

export const JobCard2 = Template.bind({});
JobCard2.args = {
  logo: BMWLogo,
  days: 2,
  title: 'Product Design',
  company: 'BMW',
  location: 'Hyderabad, Telangana, India',
  commute: commuteOptions,
};

export const JobCard3 = Template.bind({});
JobCard3.args = {
  logo: MCLogo,
  days: 2,
  title: 'User Interface Designer',
  company: 'Microchip',
  location: 'Hyderabad, Telangana, India',
  commute: commuteOptions,
};
