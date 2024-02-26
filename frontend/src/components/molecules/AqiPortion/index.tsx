import { Grid, Typography } from '@mui/material';
import React from 'react';
import { AQIImage } from '../../atoms/Image/index.stories';
import { makeStyles } from '@mui/styles';
import theme from '../../../theme';

interface AqiPortionProps {
  currentStateOfPage: string;
  aqiValues: any;
  portionImage: string;
}
const aqiStyles = makeStyles({
  screen1MainContainer: {
    width: '490px',
    height: '418px',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  screen5MainContainer: {
    width: '490px',
    height: '538px',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  screen2MainContainer: {
    width: '490px',
    height: '417px',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  screen6MainContainer: {
    width: '490px',
    alignItems: 'center',
    textAlign: 'center',
  },
  screen6SubContainer: {
    justifyContent: 'space-between',
    marginTop: '80px',
    marginBottom: '40px',
  },
  screen6LeftSubItem: {
    width: '190px',
    height: '158px',
  },
  screen6RightSubItem: {
    width: '172px',
    height: '158px',
  },
  screen3MainContainer: {
    width: '490px',
    height: '417px',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  screen4MainContainer: {
    width: '490px',
    height: '522px',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const AqiPortion = (props: AqiPortionProps) => {
  const classes = aqiStyles();
  if (props.currentStateOfPage === '1') {
    return (
      <Grid
        container
        flexDirection="column"
        className={classes.screen1MainContainer}
      >
        <Grid item>
          <AQIImage image={props.portionImage} />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              fontSize: '26px',
              lineHeight: '32px',
              color: theme.palette.grey[700],
            }}
          >
            {props.aqiValues.about}
          </Typography>
        </Grid>
      </Grid>
    );
  } else if (props.currentStateOfPage === '5') {
    return (
      <Grid
        container
        flexDirection="column"
        className={classes.screen5MainContainer}
      >
        <Grid item>
          <AQIImage image={props.portionImage} />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 300,
              fontSize: '100px',
              lineHeight: '122px',
              color: theme.palette.grey[700],
            }}
          >
            {props.aqiValues.aqiindex}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              lineHeight: '26px',
              fontWeight: 600,
              color: theme.palette.grey[700],
            }}
          >
            {props.aqiValues.about}
          </Typography>
        </Grid>
      </Grid>
    );
  } else if (props.currentStateOfPage === '2') {
    return (
      <Grid
        container
        flexDirection="column"
        className={classes.screen2MainContainer}
      >
        <Grid item>
          <AQIImage image={props.portionImage} />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              fontSize: '26px',
              lineHeight: '32px',
              fontWeight: 500,
              color: theme.palette.grey[700],
            }}
          >
            {props.aqiValues.about}
          </Typography>
        </Grid>
      </Grid>
    );
  } else if (props.currentStateOfPage === '6') {
    return (
      <Grid
        container
        flexDirection="column"
        className={classes.screen6MainContainer}
      >
        <Grid item>
          <AQIImage image={props.portionImage} />
        </Grid>
        <Grid
          item
          container
          flexDirection="row"
          className={classes.screen6SubContainer}
        >
          <Grid item className={classes.screen6LeftSubItem}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 300,
                fontSize: '100px',
                lineHeight: '122px',
                color: theme.palette.grey[700],
              }}
            >
              {props.aqiValues.aqiindex1}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                fontSize: '26px',
                lineHeight: '32px',
                color: theme.palette.grey[700],
              }}
            >
              {props.aqiValues['location1']}
            </Typography>
          </Grid>
          <Grid item className={classes.screen6RightSubItem}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 300,
                fontSize: '100px',
                lineHeight: '122px',
                color: theme.palette.grey[700],
              }}
            >
              {props.aqiValues.aqiindex2}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                fontSize: '26px',
                lineHeight: '32px',
                color: theme.palette.grey[700],
              }}
            >
              {props.aqiValues.location2}
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Typography
            variant="h4"
            sx={{
              lineHeight: '26px',
              fontWeight: 600,
              color: theme.palette.grey[700],
            }}
          >
            {props.aqiValues.about}
          </Typography>
        </Grid>
      </Grid>
    );
  } else if (props.currentStateOfPage === '3') {
    return (
      <Grid
        container
        flexDirection="column"
        className={classes.screen3MainContainer}
      >
        <Grid item>
          <AQIImage image={props.portionImage} />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              fontSize: '26px',
              lineHeight: '32px',
              fontWeight: 500,
              color: theme.palette.grey[700],
            }}
          >
            {props.aqiValues.about}
          </Typography>
        </Grid>
      </Grid>
    );
  } else if (props.currentStateOfPage === '4') {
    return (
      <Grid
        container
        flexDirection="column"
        className={classes.screen4MainContainer}
      >
        <Grid item>
          <AQIImage image={props.portionImage} />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 300,
              fontSize: '100px',
              lineHeight: '122px',
              color: theme.palette.grey[700],
            }}
          >
            {props.aqiValues.countofjobs}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              lineHeight: '26px',
              fontWeight: 600,
              color: theme.palette.grey[700],
            }}
          >
            {props.aqiValues.about}
          </Typography>
        </Grid>
      </Grid>
    );
  }
  return (
    <>
      <div>wrong choice of aqi portion</div>
    </>
  );
};

export default AqiPortion;
