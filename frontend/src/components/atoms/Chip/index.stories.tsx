import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chips from '.';
import ClearIcon from '@mui/icons-material/Clear';

export default {
  title: 'Atoms/Chips',
  component: Chips,
} as ComponentMeta<typeof Chips>;

const Template: ComponentStory<typeof Chips> = (args) => (
  <Chips {...args} />
);

export const PlaceOrJob = Template.bind({});
PlaceOrJob.args = {
  variant: 'outlined',
  size: 'small',
  label: 'Place or Job',
  deleteIcon: <ClearIcon />,
  onClick: () => {},
  onDelete: () => {},
};
