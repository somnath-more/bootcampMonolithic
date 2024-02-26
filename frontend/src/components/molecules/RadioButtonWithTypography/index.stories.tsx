import { ComponentStory } from '@storybook/react';
import gctheme from '../../../theme/index';
import RadioButtonWithTypography from './index';
import { EXTRA_COLORS } from '../../../theme/index';

export default {
  title: 'Molecules/RadioButtonWithTypography',
};

const data = [
  {
    id: 1,
    value: 'Yes',
    group: 1,
  },
  {
    id: 2,
    value: 'No',
    group: 1,
  },
];

const Template: ComponentStory<typeof RadioButtonWithTypography> = (
  args,
) => <RadioButtonWithTypography {...args} />;

export const RadioButtonWithTypographyGC = Template.bind({});

RadioButtonWithTypographyGC.args = {
  sxTypo: {
    color: `${EXTRA_COLORS.darkGrey}`,
    variants: `${gctheme.typography.body2}`,
  },

  txTypo: {
    color: `${gctheme.palette.grey[700]}`,
    variants: `${gctheme.typography.subtitle2}`,
  },

  data: [
    {
      id: 1,
      value: 'Yes',
      group: 1,
    },
    {
      id: 2,
      value: 'No',
      group: 1,
    },
  ],

  title: 'Green Commute',
};
