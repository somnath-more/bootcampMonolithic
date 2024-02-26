import { Box, Input, SxProps } from '@mui/material';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import theme, { EXTRA_COLORS } from '../../../theme';
import Buttons from '../../atoms/Buttons';
import React, { useState } from 'react';

type JointSearchBarProps = {
  barWidth: string;
  sxButton: SxProps;
  callBack?: any;
  skill?: string;
  location?: string;
};

const JointSearchBar = (props: JointSearchBarProps) => {
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');

  const handleChange1 = (event: any) => {
    setSkill(event.target.value);
  };

  const handleChange2 = (event: any) => {
    setLocation(event.target.value);
  };

  const handleClick = (event: any) => {
    props.callBack(skill, location);
  };

  return (
    <>
      <Box
        display="flex"
        border="1px solid"
        borderColor={EXTRA_COLORS.border}
        width={props.barWidth}
        height="50px"
        borderRadius="10px"
        position="relative"
      >
        <Input
          disableUnderline={true}
          placeholder="Search skills"
          defaultValue={props.skill}
          onChange={handleChange1}
          startAdornment={<WorkOutlineOutlinedIcon />}
          sx={{
            position: 'absolute',
            left: '15px',
            alignSelf: 'center',
            width: '47%',
          }}
          inputProps={{
            style: {
              paddingLeft: '10px',
              fontSize: '16px',
              color: EXTRA_COLORS.darkGrey,
            },
          }}
        />
        <hr
          style={{
            position: 'absolute',
            left: '50%',
            border: '1px solid',
            borderColor: theme.palette.grey[300],
            height: '40px',
            width: '0px',
            alignSelf: 'center',
          }}
        />
        <Input
          disableUnderline={true}
          placeholder="Location"
          defaultValue={props.location}
          onChange={handleChange2}
          startAdornment={<LocationOnOutlinedIcon />}
          sx={{
            position: 'absolute',
            left: '51.49%',
            alignSelf: 'center',
            width: '38%',
          }}
          inputProps={{
            style: {
              paddingLeft: '10px',
              fontSize: '16px',
              color: EXTRA_COLORS.darkGrey,
            },
          }}
        />
        <Buttons
          variant="contained"
          sx={props.sxButton}
          startIcon={
            <SearchOutlinedIcon sx={{ color: EXTRA_COLORS.white }} />
          }
          onClick={handleClick}
        />
      </Box>
    </>
  );
};

export default JointSearchBar;
