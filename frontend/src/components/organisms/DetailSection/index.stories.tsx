import { ComponentStory } from '@storybook/react';
import DetailSection from '.';
import BMWImg from '../../../../public/assets/logos/BMW.svg';

export default {
  title: 'Organisms/DetailSection',
};
const Template: ComponentStory<typeof DetailSection> = (args) => (
  <DetailSection {...args} />
);

export const DetailSectionBar = Template.bind({});
DetailSectionBar.args = {
  jobCard: {
    image: BMWImg,
    role: 'User Experience Designer',
    company: 'BMW',
    location: 'HiTech City, Telangana',
  },
  jobDescription:
    'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.',
  whatItTakes: [
    'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.',
    'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.',
  ],
};
