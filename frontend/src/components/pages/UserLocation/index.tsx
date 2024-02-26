import React, { useState } from 'react';
import HomePage from '../../../components/templates/HomePage';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AqiPortion from '../../../components/molecules/AqiPortion';
import AQIImg from '../../../../public/assets/images/aqi_map.svg';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAqi } from '../../../service';

const UserLocation = () => {
  const [city, setCity] = useState('');
  let aqiValue: number;
  const navigate = useNavigate();
  const [aqiPortion, setAqiPortion] = useState([
    '1',
    {
      aqiindex: '',
      about: 'Enter location to know Time Air Quality Index (AQI)',
    },
    AQIImg,
    'Enter your location',
    'Where do you stay?',
  ]);
  const handleCallback = (searchResults: any) => {
    setCity(searchResults[0]);
  };
  const onNext = async () => {
    if (aqiPortion[0] === '1') {
      aqiValue = (await getAqi(city)).data.data.aqi;
      setAqiPortion([
        '5',
        {
          aqiindex: aqiValue.toString(),
          about:
            'Real - Time Air Quality Index (AQI) in this location',
        },
        AQIImg,
        'Enter your location',
        'Where do you stay?',
      ]);
    } else {
      navigate('/jobLocation');
    }
  };
  const onSkip = () => {
    navigate('/jobLocation');
  };

  return (
    <HomePage
      inputPlaceholder={aqiPortion[3]}
      iconChildren={<LocationOnOutlinedIcon />}
      label={aqiPortion[4]}
      onClickNext={onNext}
      onClickSkip={onSkip}
      component={
        <Grid container padding={'241px 80px'}>
          <AqiPortion
            currentStateOfPage={aqiPortion[0]}
            aqiValues={aqiPortion[1]}
            portionImage={aqiPortion[2]}
          />
        </Grid>
      }
      back={false}
      final={false}
      stepNumber={1}
      handleCallback={handleCallback}
    />
  );
};

export default UserLocation;
