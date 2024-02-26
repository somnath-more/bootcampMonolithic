import React, { useState } from 'react';
import HomePage from '../../../components/templates/HomePage';
import AqiPortion from '../../../components/molecules/AqiPortion';
import JobFormImg from '../../../../public/assets/images/job_form.svg';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getSkills } from '../../../service';

const JobSkills = () => {
  const [skills, setSkills] = useState<string[]>([]);
  let navigate = useNavigate();
  const [aqiPortion, setAqiPortion] = useState([
    '3',
    {
      about:
        'Enter your skills to know how many jobs are in this location',
    },
    JobFormImg,
    'Enter your skills',
    'What do you want to do?',
  ]);
  const onFinish = async () => {
    let count1 = (
        await getSkills(
          skills[0].charAt(0).toUpperCase() + skills[0].slice(1),
        )
      ).data,
      count2 = 0;
    if (skills.length === 2) {
      count2 = (
        await getSkills(
          skills[1].charAt(0).toUpperCase() + skills[1].slice(1),
        )
      ).data;
    }
    if (aqiPortion[0] === '3') {
      setAqiPortion([
        '4',
        {
          countofjobs: count1 + count2,
          about: 'Jobs found in these locations',
        },
        JobFormImg,
        'Enter your skills',
        'What do you want to do?',
      ]);
    } else {
      navigate('/searchJob');
    }
  };
  const handleCallback = (searchResults: any) => {
    setSkills(searchResults);
  };
  const onBack = () => {
    if (aqiPortion[0] === '4') {
      setAqiPortion([
        '3',
        {
          about:
            'Enter your skills to know how many jobs are in this location',
        },
        JobFormImg,
        'Enter your skills',
        'What do you want to do?',
      ]);
    } else {
      navigate('/jobLocation');
    }
  };
  return (
    <HomePage
      inputPlaceholder={aqiPortion[3]}
      iconChildren={<WorkOutlineIcon />}
      label={aqiPortion[4]}
      onClickBack={onBack}
      onClickFinish={onFinish}
      component={
        <Grid container padding={'241px 80px'}>
          <AqiPortion
            currentStateOfPage={aqiPortion[0]}
            aqiValues={aqiPortion[1]}
            portionImage={aqiPortion[2]}
          />
        </Grid>
      }
      back={true}
      final={true}
      stepNumber={3}
      handleCallback={handleCallback}
    />
  );
};

export default JobSkills;
