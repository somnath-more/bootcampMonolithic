import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import React, { useState } from 'react';
import RadioButtonComponent from '../../atoms/RadioButton';
import { makeStyles } from '@mui/styles';
import { RadioGroup, Typography } from '@mui/material';

interface RadioButtonWithTypographyProps {
  text?: string;
  sxTypo: any;
  txTypo: any;
  variants?: any;
  data: any[];
  title: string;
  callBack?: any;
}

const useStyles = makeStyles({
  containerDiv: {
    display: 'inline-flex',
    alignItems: 'center',
  },
});

const RadioButtonWithTypography = (
  props: RadioButtonWithTypographyProps,
) => {
  const handleChange = (value: string) => {
    props.callBack(value);
  };

  return (
    <div className={useStyles().containerDiv}>
      <FormControl sx={{ display: 'inline-flex' }}>
        <FormLabel component="legend" sx={props.txTypo}>
          {props.title}
        </FormLabel>
        <RadioGroup name="value">
          {props.data
            .filter((datum: { group: number }) => datum.group === 1)
            .map(
              (datum: {
                value: string;
                id: React.Key | null | undefined;
              }) => {
                return (
                  <FormControlLabel
                    key={datum.id}
                    value={datum.value}
                    control={
                      <RadioButtonComponent value={datum.value} />
                    }
                    label={
                      <Typography
                        children={datum.value}
                        sx={props.sxTypo}
                        variant={props.variants}
                      />
                    }
                    onChange={() => {
                      handleChange(datum.value);
                    }}
                  />
                );
              },
            )}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default RadioButtonWithTypography;
