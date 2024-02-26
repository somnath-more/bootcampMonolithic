import React, { useState } from 'react';
import HomePage from '../../templates/HomePage';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AqiPortion from '../../molecules/AqiPortion';
import AQIAbstractImg from '../../../../public/assets/images/aqi_abstract.svg';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAqi } from '../../../service';

const JobLocation = () => {
  const [cities, setCities] = useState([]);
  let aqiValue1: number, aqiValue2: number;
  let navigate = useNavigate();
  const [aqiPortion, setAqiPortion] = useState([
    '2',
    {
      aqiindex: '',
      about: 'Enter location to know Time Air Quality Index (AQI)',
    },
    AQIAbstractImg,
    'Enter your job location',
    'Where do you want to work?',
  ]);
  const handleCallback = (searchResults: any) => {
    setCities(searchResults);
  };
  const onNext = async () => {
    if (aqiPortion[0] === '5' || aqiPortion[0] === '6') {
      navigate('/jobSkills');
    } else {
      aqiValue1 = (await getAqi(cities[0])).data.data.aqi;
      aqiValue2 = (await getAqi(cities[1])).data.data.aqi;
      if (cities.length === 2) {
        setAqiPortion([
          '6',
          {
            aqiindex1: aqiValue1.toString(),
            location1: cities[0],
            aqiindex2: aqiValue2.toString(),
            location2: cities[1],
            about:
              'Real - Time Air Quality Index (AQI) in this location',
          },
          AQIAbstractImg,
          'Enter your job location',
          'Where do you want to work?',
        ]);
      } else {
        setAqiPortion([
          '5',
          {
            aqiindex: aqiValue1.toString(),
            about:
              'Real - Time Air Quality Index (AQI) in this location',
          },
          AQIAbstractImg,
          'Enter your job location',
          'Where do you want to work?',
        ]);
      }
    }
  };
  const onSkip = () => {
    navigate('/jobSkills');
  };
  const onBack = () => {
    if (aqiPortion[0] === '5' || aqiPortion[0] === '6') {
      setAqiPortion([
        '2',
        {
          aqiindex: '',
          about:
            'Enter location to know Time Air Quality Index (AQI)',
        },
        AQIAbstractImg,
        'Enter your job location',
        'Where do you want to work?',
      ]);
    } else {
      navigate('/');
    }
  };
  return (
    <HomePage
      inputPlaceholder={aqiPortion[3]}
      iconChildren={<LocationOnOutlinedIcon />}
      label={aqiPortion[4]}
      onClickNext={onNext}
      onClickSkip={onSkip}
      onClickBack={onBack}
      component={
        <Grid container padding={'241px 80px 242px'}>
          <AqiPortion
            currentStateOfPage={aqiPortion[0]}
            aqiValues={aqiPortion[1]}
            portionImage={aqiPortion[2]}
          />
        </Grid>
      }
      back={true}
      final={false}
      stepNumber={2}
      handleCallback={handleCallback}
    />
  );
};

export default JobLocation;
