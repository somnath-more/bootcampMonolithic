import { ComponentStory } from '@storybook/react';
import Filter from '.';
import theme, { EXTRA_COLORS } from '../../../theme';

export default {
  title: 'Organisms/Filter',
};
const Template: ComponentStory<typeof Filter> = (args) => (
  <Filter {...args} />
);

const distance = [
  { id: Math.random(), value: '0 - 10 kms', isChecked: false },
  {
    id: Math.random(),
    value: '21 - 30 kms',
    isChecked: false,
  },
  {
    id: Math.random(),
    value: '31 - 40 kms',
    isChecked: false,
  },
  {
    id: Math.random(),
    value: '41 - 50 kms',
    isChecked: false,
  },
];

const datePosted = [
  {
    id: Math.random(),
    value: 'Past 24hrs',
    isChecked: false,
  },
  {
    id: Math.random(),
    value: 'Past week',
    isChecked: false,
  },
  {
    id: Math.random(),
    value: 'Past month',
    isChecked: false,
  },
  {
    id: Math.random(),
    value: 'Anytime',
    isChecked: false,
  },
];

const jobType = [
  { id: Math.random(), value: 'Full-Time', isChecked: false },
  { id: Math.random(), value: 'Internship', isChecked: false },
  { id: Math.random(), value: 'Contract', isChecked: false },
  { id: Math.random(), value: 'Remote', isChecked: false },
];

const experienceLevel = [
  { id: Math.random(), value: 'Fresher', isChecked: false },
  { id: Math.random(), value: 'Mid-Level', isChecked: false },
  { id: Math.random(), value: 'Director', isChecked: false },
  { id: Math.random(), value: 'Executive', isChecked: false },
];
const transport = [
  { id: Math.random(), value: 'Metro', isChecked: false },
  { id: Math.random(), value: 'Moter Cycle', isChecked: false },
  { id: Math.random(), value: 'Bus', isChecked: false },
  { id: Math.random(), value: 'Car Pooling', isChecked: false },
];

const greenCommmute = [
  { id: 1, value: 'Yes', group: 1 },
  { id: 2, value: 'No', group: 1 },
];

export const FilterModal = Template.bind({});
FilterModal.args = {
  checkboxGroupsData: {
    distanceGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: distance,

      title: 'Distance',
    },
    jobTypeGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: jobType,

      title: 'Job Type',
    },
    datePostedGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: datePosted,

      title: 'Date Posted',
    },
    experienceLevelGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: experienceLevel,

      title: 'Experience Level',
    },
    transportGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: transport,

      title: 'Transport',
    },
  },
  radiobuttonGroupsData: {
    greenCommuteGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: greenCommmute,

      title: 'Green Commute',
    },
  },
};
