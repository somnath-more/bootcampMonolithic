import React from 'react';
import { render, screen } from '@testing-library/react';
import CommuteRouteOptions from '.';
import '@testing-library/jest-dom';
import BMWImg from '../../../../public/assets/logos/BMW.svg';
//import { shallow } from 'enzyme';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import { commuteOptions } from '../../../utils/constants';

test('Test -Checkbox', () => {
  render(
    <CommuteRouteOptions
      jobCard={{
        jobCard: {
          image: BMWImg,
          role: 'User Experience Designer',
          company: 'BMW',
          location: 'Hitech City, Telangana',
          commute: commuteOptions,
          from: 'Maheshwarm, RangaReddy',
          to: 'Raidurg, Telangana',
        },
      }}
    ></CommuteRouteOptions>,
  );
  const role = screen.getByDisplayValue(/User Experience Designer/);
  const company = screen.getByText(/BMW/);
  const location = screen.getByText(/Hitech City, Telangana/i);
  const image = screen.getByRole('img');
  const from = screen.getByDisplayValue(/Maheshwarm, RangaReddy/i);
  const to = screen.getByDisplayValue(/Raidurg, Telangana/i);
  const car = screen.getAllByRole(DirectionsCarOutlinedIcon);
  const bus = screen.getByRole(DirectionsBusIcon);
  const bike = screen.getByRole(PedalBikeIcon);
  const train = screen.getByRole(TrainOutlinedIcon);
  expect(from).toBeInTheDocument();
  expect(to).toBeInTheDocument();
  expect(role).toBeInTheDocument();
  expect(company).toBeInTheDocument();
  expect(location).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'test-file-stub');
  screen.debug();
  expect(car).toBeInTheDocument();
  expect(bike).toBeInTheDocument();
  expect(bus).toBeInTheDocument();
  expect(train).toBeInTheDocument();
  screen.debug();

  test.each`
    type       | expected
    ${'car'}   | ${DirectionsCarOutlinedIcon}
    ${'bike'}  | ${PedalBikeIcon}
    ${'bus'}   | ${DirectionsBusIcon}
    ${'train'} | ${TrainOutlinedIcon}
  `('returns $expected when type=$type ', ({ type, expected }) => {
    expect({ type }).toEqual(expected);
  });

  screen.debug();

  // describe('<CommuteRouteOptions />', () => {
  //   it('renders three <CommuteRouteOptions /> components', () => {
  //     const wrapper = shallow(<CommuteRouteOptions jobCard={{
  //       jobCard: {
  //         image: BMWImg,
  //         role: 'User Experience Designer',
  //         company: 'BMW',
  //         location: 'Hitech City, Telangana',
  //         commute: ['train', 'car', 'bus', 'bike'],
  //         from: 'Maheshwarm, RangaReddy',
  //         to: 'Raidurg, Telangana',
  //       },
  //     }} />);
  //     expect(wrapper.find(<CommuteRouteOptions jobCard={undefined} />)).toHaveLength(4);
  //   });
});
