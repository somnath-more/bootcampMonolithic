import { fontFamily } from '@mui/system';
import { ComponentStory } from '@storybook/react';
import gctheme from '../../../theme/index';
import CheckboxWithTypography from './index';
import { EXTRA_COLORS } from '../../../theme/index';

export default {
  title: 'Molecules/CheckboxWithTypography',
};

const names = [
  {
    id: 1,
    value: '0 - 10 kms',
    isChecked: false,
  },
  {
    id: 2,
    value: '21 - 30 kms',
    isChecked: false,
  },
  {
    id: 3,
    value: '31 - 40 kms',
    isChecked: false,
  },
  {
    id: 4,
    value: '41 - 50 kms',
    isChecked: false,
  },
];
const datePosted = [
  {
    id: 1,
    value: 'Past 24hrs',
    isChecked: false,
  },
  {
    id: 2,
    value: 'Past week',
    isChecked: false,
  },
  {
    id: 3,
    value: 'Past month',
    isChecked: false,
  },
  {
    id: 4,
    value: 'Anytime',
    isChecked: false,
  },
];

const Template: ComponentStory<typeof CheckboxWithTypography> = (
  args,
) => <CheckboxWithTypography {...args} />;

export const CheckboxWithTypographyDistance = Template.bind({});
export const CheckboxWithTypographyDatePosted = Template.bind({});

CheckboxWithTypographyDistance.args = {
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
      value: '0 - 10 kms',
      isChecked: false,
    },
    {
      id: 2,
      value: '21 - 30 kms',
      isChecked: false,
    },
    {
      id: 3,
      value: '31 - 40 kms',
      isChecked: false,
    },
    {
      id: 4,
      value: '41 - 50 kms',
      isChecked: false,
    },
  ],

  title: 'Distance',
};

CheckboxWithTypographyDatePosted.args = {
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
      value: 'Past 24hrs',
      isChecked: false,
    },
    {
      id: 2,
      value: 'Past week',
      isChecked: false,
    },
    {
      id: 3,
      value: 'Past month',
      isChecked: false,
    },
    {
      id: 4,
      value: 'Anytime',
      isChecked: false,
    },
  ],

  title: 'Date Posted',
};
