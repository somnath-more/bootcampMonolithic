import { ComponentStory } from '@storybook/react';
import SearchBar from '.';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import React from 'react';

export default {
  title: 'Organisms/SearchBar',
};

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const SearchBarStory1 = Template.bind({});

SearchBarStory1.args = {
  InputPlaceholder: 'Search',
  IconChildren: <LocationOnOutlinedIcon />,
};
