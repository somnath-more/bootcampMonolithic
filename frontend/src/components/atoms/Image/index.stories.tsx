import ImageComponent from '.';
import AQIImg from '../../../../public/assets/images/aqi_map.svg';
import BMWImg from '../../../../public/assets/logos/BMW.svg';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Image',
};
const Template: ComponentStory<typeof ImageComponent> = (args) => (
  <ImageComponent {...args} />
);

export const AQIImage = Template.bind({});
AQIImage.args = {
  image: AQIImg,
};

export const BMWLogo = Template.bind({});
BMWLogo.args = {
  image: BMWImg,
};
