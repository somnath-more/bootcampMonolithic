import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommuteRouteSection from '.';

export default {
  title: 'Organisms/CommuteRouteSection',
  component: CommuteRouteSection,
} as ComponentMeta<typeof CommuteRouteSection>;

const Template: ComponentStory<typeof CommuteRouteSection> = (
  args,
) => <CommuteRouteSection {...args} />;

export const RouteSection = Template.bind({});
RouteSection.args = {
  from: 'East Mareddpally, E Mareddpally, Secunderabad',
  to: 'Hitech City, Telangana, Secunderabad',
};
