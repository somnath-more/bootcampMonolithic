import { ComponentStory } from '@storybook/react';
import RadioButtonComponent from '.';

export default {
  title: 'Atoms/RadioButton',
};
const Template: ComponentStory<typeof RadioButtonComponent> = (
  args,
) => <RadioButtonComponent {...args} />;

export const GreenCommuteEnable = Template.bind({});
GreenCommuteEnable.args = {
  name: 'green-commute-enabling',
  value: 'yes',
};
