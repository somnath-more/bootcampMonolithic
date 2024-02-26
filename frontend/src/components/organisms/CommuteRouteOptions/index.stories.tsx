import { ComponentStory } from '@storybook/react';
import CommuteRouteOptions from '.';
import BMWImg from '../../../../public/assets/logos/BMW.svg';
import { commuteOptions } from '../../../utils/constants';

export default {
  title: 'Organisms/CommuteRouteOptions',
};
const Template: ComponentStory<typeof CommuteRouteOptions> = (
  args,
) => <CommuteRouteOptions {...args} />;

export const CommuteRoute1 = Template.bind({});
CommuteRoute1.args = {
  jobCard: {
    image: BMWImg,
    role: 'User Experience Designer',
    company: 'BMW',
    location: 'Hitech City, Telangana',
    commute: commuteOptions,
    from: 'Maheshwarm, RangaReddy',
    to: 'Raidurg, Telangana',
  },
};
export const CommuteRoute2 = Template.bind({});
CommuteRoute2.args = {
  jobCard: {
    image: BMWImg,
    role: 'Software Developer',
    company: 'HP',
    location: 'Madhapur, Telangana',
    commute: commuteOptions,
    from: 'East Mareddpally, Secunderabad',
    to: 'Hitech City, Telangana',
  },
};
