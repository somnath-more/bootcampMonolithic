import { ComponentStory } from '@storybook/react';
import CheckBoxComponent from './index'

export default {
  title: 'Atoms/CheckBox',
};
const Template: ComponentStory<typeof CheckBoxComponent> = (
  args,
) => <CheckBoxComponent  {...args}  />;

export const FilterCheckBox = Template.bind({});
FilterCheckBox.args = {
  name: 'checkboxFilter',
  value: '11 - 20 kms',
};
