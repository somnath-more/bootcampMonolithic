import React from 'react';
import { Grid } from '@mui/material';
import theme, { EXTRA_COLORS } from '../../../theme';
import AvatarWithTypography from '../AvatarWithTypography';

type StepperProps = {
  steps: any[];
  stepNumber?: number;
};

const Stepper = (props: StepperProps) => {
  return (
    <>
      <Grid
        container
        width="790px"
        height="100px"
        justifyContent="space-between"
        padding="30px 80px"
      >
        {props.steps.map((step) =>
          step.children <= props.stepNumber ? (
            <AvatarWithTypography
              variant="circular"
              sxAvatar={{
                width: '40px',
                height: '40px',
                backgroundColor: theme.palette.primary.main,
              }}
              sxTypo={{
                margin: '0px 15px',
                color: theme.palette.primary.main,
              }}
              text={step.text}
              variants="h6"
              children={step.children}
            />
          ) : (
            <AvatarWithTypography
              variant="circular"
              sxAvatar={{
                width: '40px',
                height: '40px',
                backgroundColor: EXTRA_COLORS.border,
                color: EXTRA_COLORS.darkGrey,
              }}
              sxTypo={{
                margin: '0px 15px',
                color: EXTRA_COLORS.darkGrey,
              }}
              text={step.text}
              variants="h6"
              children={step.children}
            />
          ),
        )}
      </Grid>
    </>
  );
};

export default Stepper;
