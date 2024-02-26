import { ComponentStory } from '@storybook/react';
import AqiPortion from '.';
import AQIImg from '../../../../public/assets/images/aqi_map.svg';
import AQIAbstractImg from '../../../../public/assets/images/aqi_abstract.svg';
import JobFormImg from '../../../../public/assets/images/job_form.svg';

const imagesData = {
  '1': AQIImg,
  '5': AQIImg,
  '2': AQIAbstractImg,
  '6': AQIAbstractImg,
  '3': JobFormImg,
  '4': JobFormImg,
};

export default {
  title: 'Molecules/AqiPortion',
};
const Template: ComponentStory<typeof AqiPortion> = (args) => {
  return <AqiPortion {...args} />;
};

export const screen1AqiPortion = Template.bind({});
screen1AqiPortion.args = {
  currentStateOfPage: '1',
  aqiValues: {
    about: 'Enter location to know Time Air Quality Index (AQI)',
  },
  portionImage: imagesData['1'],
};

export const screen5AqiPortion = Template.bind({});
screen5AqiPortion.args = {
  currentStateOfPage: '5',
  aqiValues: {
    aqiindex: '894',
    about: 'Real - Time Air Quality Index (AQI) in this location',
  },
  portionImage: imagesData['5'],
};

export const screen2AqiPortion = Template.bind({});
screen2AqiPortion.args = {
  currentStateOfPage: '2',
  aqiValues: {
    about: 'Enter location to know Time Air Quality Index (AQI)',
  },
  portionImage: imagesData['2'],
};

export const screen6AqiPortion = Template.bind({});
screen6AqiPortion.args = {
  currentStateOfPage: '6',
  aqiValues: {
    aqiindex1: '894',
    location1: 'Hyderabad',
    aqiindex2: '953',
    location2: 'Mumbai',
    about: 'Real - Time Air Quality Index (AQI) in this location',
  },
  portionImage: imagesData['6'],
};

export const screen3AqiPortion = Template.bind({});
screen3AqiPortion.args = {
  currentStateOfPage: '3',
  aqiValues: {
    about:
      'Enter your skills to know how many jobs are in this location',
  },
  portionImage: imagesData['3'],
};

export const screen4AqiPortion = Template.bind({});
screen4AqiPortion.args = {
  currentStateOfPage: '4',
  aqiValues: {
    countofjobs: '953',
    about: 'Jobs found in these locations',
  },
  portionImage: imagesData['4'],
};
