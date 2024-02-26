import { ButtonBase, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import CheckboxWithTypography from '../../molecules/CheckboxWithTypography';
import RadioButtonWithTypography from '../../molecules/RadioButtonWithTypography';
import Close from '@mui/icons-material/Close';
import Buttons from '../../atoms/Buttons';
import { ButtonsOfFilterSection } from '../../../utils/constants';

interface FilterProps {
  checkboxGroupsData?: any;
  radiobuttonGroupsData?: any;
  callBack?: any;
}

export interface FilterListType {
  distance: string[];
  jobType: string[];
  datePosted: string[];
  experienceLevel: string[];
  greenCommute: string;
  transport: string[];
  skills?: string[];
  city?: string;
}

const filterStyles = makeStyles({
  wholecontainer: {
    width: '625px',
    height: '447px',
  },
});

const Filter = (props: FilterProps) => {
  const filterList: FilterListType = {
    distance: [],
    jobType: [],
    datePosted: [],
    experienceLevel: [],
    greenCommute: '',
    transport: [],
  };

  const [radioValue, setRadioValue] = useState('');

  const pullData = (value: string) => {
    setRadioValue(value);
  };

  const handleClick = () => {
    let distance: string[] = [];
    let jobType: string[] = [];
    let datePosted: string[] = [];
    let experienceLevel: string[] = [];
    let transport: string[] = [];

    props.checkboxGroupsData.distanceGroup.data.map(
      (li: { value: string; isChecked: boolean }) => {
        if (li.isChecked === true) {
          distance.push(li.value);
        }
      },
    );
    filterList.distance = distance;

    props.checkboxGroupsData.jobTypeGroup.data.map(
      (li: { value: string; isChecked: boolean }) => {
        if (li.isChecked === true) {
          jobType.push(li.value);
        }
      },
    );
    filterList.jobType = jobType;

    props.checkboxGroupsData.datePostedGroup.data.map(
      (li: { value: string; isChecked: boolean }) => {
        if (li.isChecked === true) {
          datePosted.push(li.value);
        }
      },
    );
    filterList.datePosted = datePosted;

    props.checkboxGroupsData.experienceLevelGroup.data.map(
      (li: { value: string; isChecked: boolean }) => {
        if (li.isChecked === true) {
          experienceLevel.push(li.value);
        }
      },
    );
    filterList.experienceLevel = experienceLevel;

    props.checkboxGroupsData.transportGroup.data.map(
      (li: { value: string; isChecked: boolean }) => {
        if (li.isChecked === true) {
          transport.push(li.value);
        }
      },
    );
    filterList.transport = transport;

    filterList.greenCommute = radioValue;

    props.callBack(filterList, false);
  };

  const handleClear = () => {
    filterList.distance = [];
    filterList.jobType = [];
    filterList.datePosted = [];
    filterList.experienceLevel = [];
    filterList.transport = [];
    filterList.greenCommute = '';

    window.location.reload();
  };

  const handleClose = () => {
    props.callBack(filterList, false);
  };

  const classes = filterStyles();
  return (
    <div style={{ width: '625px' }}>
      <Paper className={classes.wholecontainer}>
        <ButtonBase
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            marginRight: '15px',
            marginTop: '15px',
          }}
          onClick={handleClose}
        >
          <Close />
        </ButtonBase>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          <Grid item sx={{ marginTop: '30px' }}>
            <Grid item container flexDirection="column">
              <Grid item>
                <CheckboxWithTypography
                  text={''}
                  sxTypo={
                    props.checkboxGroupsData.distanceGroup.sxTypo
                  }
                  txTypo={
                    props.checkboxGroupsData.distanceGroup.txTypo
                  }
                  variants={
                    props.checkboxGroupsData.distanceGroup.variants
                  }
                  data={props.checkboxGroupsData.distanceGroup.data}
                  title={props.checkboxGroupsData.distanceGroup.title}
                />
              </Grid>
              <Grid item sx={{ marginTop: '30px' }}>
                <CheckboxWithTypography
                  text={''}
                  sxTypo={
                    props.checkboxGroupsData.jobTypeGroup.sxTypo
                  }
                  txTypo={
                    props.checkboxGroupsData.jobTypeGroup.txTypo
                  }
                  variants={
                    props.checkboxGroupsData.jobTypeGroup.variants
                  }
                  data={props.checkboxGroupsData.jobTypeGroup.data}
                  title={props.checkboxGroupsData.jobTypeGroup.title}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginTop: '30px' }}>
            <Grid item container flexDirection="column">
              <Grid item>
                <CheckboxWithTypography
                  text={''}
                  sxTypo={
                    props.checkboxGroupsData.datePostedGroup.sxTypo
                  }
                  txTypo={
                    props.checkboxGroupsData.datePostedGroup.txTypo
                  }
                  variants={
                    props.checkboxGroupsData.datePostedGroup.variants
                  }
                  data={props.checkboxGroupsData.datePostedGroup.data}
                  title={
                    props.checkboxGroupsData.datePostedGroup.title
                  }
                />
              </Grid>
              <Grid item sx={{ marginTop: '30px' }}>
                <CheckboxWithTypography
                  text={''}
                  sxTypo={
                    props.checkboxGroupsData.experienceLevelGroup
                      .sxTypo
                  }
                  txTypo={
                    props.checkboxGroupsData.experienceLevelGroup
                      .txTypo
                  }
                  variants={
                    props.checkboxGroupsData.experienceLevelGroup
                      .variants
                  }
                  data={
                    props.checkboxGroupsData.experienceLevelGroup.data
                  }
                  title={
                    props.checkboxGroupsData.experienceLevelGroup
                      .title
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginTop: '30px' }}>
            <Grid item container flexDirection="column">
              <Grid item sx={{ height: '156px' }}>
                <RadioButtonWithTypography
                  text={''}
                  sxTypo={
                    props.radiobuttonGroupsData.greenCommuteGroup
                      .sxTypo
                  }
                  txTypo={
                    props.radiobuttonGroupsData.greenCommuteGroup
                      .txTypo
                  }
                  variants={
                    props.radiobuttonGroupsData.greenCommuteGroup
                      .variants
                  }
                  data={
                    props.radiobuttonGroupsData.greenCommuteGroup.data
                  }
                  title={
                    props.radiobuttonGroupsData.greenCommuteGroup
                      .title
                  }
                  callBack={pullData}
                />
              </Grid>
              <Grid item sx={{ marginTop: '30px' }}>
                <CheckboxWithTypography
                  text={''}
                  sxTypo={
                    props.checkboxGroupsData.transportGroup.sxTypo
                  }
                  txTypo={
                    props.checkboxGroupsData.transportGroup.txTypo
                  }
                  variants={
                    props.checkboxGroupsData.transportGroup.variants
                  }
                  data={props.checkboxGroupsData.transportGroup.data}
                  title={
                    props.checkboxGroupsData.transportGroup.title
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div
          style={{
            float: 'right',
            marginRight: '50px',
            marginTop: '21px',
          }}
        >
          <Buttons
            variant="text"
            size="small"
            sx={{
              width: '101px',
              height: '38px',
              marginRight: '31px',
            }}
            onClick={handleClear}
          >
            {ButtonsOfFilterSection.LAST_SECTION_BUTTON1}
          </Buttons>
          <Buttons
            variant="contained"
            size="small"
            sx={{ width: '101px', height: '38px' }}
            onClick={handleClick}
          >
            {ButtonsOfFilterSection.LAST_SECTION_BUTTON2}
          </Buttons>
        </div>
      </Paper>
    </div>
  );
};

export default Filter;
