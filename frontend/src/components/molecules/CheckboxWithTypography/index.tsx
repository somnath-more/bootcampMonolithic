import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import React from 'react';
import CheckBoxComponent from '../../atoms/Checkbox';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

interface CheckboxWithTypographyProps {
  text?: string;
  sxTypo: any;
  txTypo: any;
  variants?: any;
  data: any;
  title: string;
}

const useStyles = makeStyles({
  containerDiv: {
    display: 'inline-flex',
    alignItems: 'center',
  },
});

const CheckboxWithTypography = (
  props: CheckboxWithTypographyProps,
) => {
  const classes = useStyles();

  return (
    <div className={classes.containerDiv}>
      <FormControl>
        <FormLabel component="legend" sx={props.txTypo}>
          {props.title}
        </FormLabel>
        <FormGroup>
          {props.data.map(
            (li: {
              value:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              isChecked:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <FormControlLabel
                control={<CheckBoxComponent key={props.data.index} />}
                label={
                  <Typography
                    children={li.value}
                    sx={props.sxTypo}
                    variant={props.variants}
                  />
                }
                onChange={() => {
                  li.isChecked = !li.isChecked;
                }}
              />
            ),
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
};
export default CheckboxWithTypography;
