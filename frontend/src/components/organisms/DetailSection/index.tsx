import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import theme, { EXTRA_COLORS } from '../../../theme';
import { HeadingsOfJobDetailSection } from '../../../utils/constants';
import Buttons from '../../atoms/Buttons';
import ImageComponent from '../../atoms/Image';

const JobDetailsSectionStyles = makeStyles({
  wholeContainer: {
    width: '390px',
    height: '821px',
    position: 'relative',
    overflow: 'hidden',
  },
  jobDetailsSection: {
    height: '314px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whatItTakesSection: {
    height: '323px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commuteRoutesSection: {
    width: '388px',
    height: '182px',
    background:
      'linear-gradient(to top,rgba(255, 255, 255, 1),60%,rgba(0,0,0,0))',
    position: 'absolute',
    zIndex: 5,
    bottom: 0,
  },
});
interface DetailSectionProps {
  jobCard: any;
  jobDescription: any;
  whatItTakes: any;
  onSaveClick?: any;
  onApplyClick?: any;
  onGreenCommuteClick?: any;

  saved?: string;
  onUnSaveClick?: () => void;
}

const DetailSection = (props: DetailSectionProps) => {
  const classes = JobDetailsSectionStyles();
  return (
    <Paper className={classes.wholeContainer}>
      <Grid
        container
        flexDirection="column"
        sx={{ alignItems: 'center' }}
      >
        <Grid
          item
          container
          flexDirection="row"
          sx={{
            width: '330px',
            height: '183px',
            alignItems: 'center',
          }}
        >
          <Grid
            item
            container
            sx={{
              height: '124px',
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            <Grid item sx={{ width: '50px', marginRight: '20px' }}>
              <ImageComponent
                image={props.jobCard.image}
                imageStyle={{ width: '50px', height: '50px' }}
              />
            </Grid>
            <Grid item flexDirection="column">
              <Grid item>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.grey[700],
                    fontWeight: 500,
                  }}
                >
                  {props.jobCard.role}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  sx={{ color: EXTRA_COLORS.darkGrey }}
                >
                  {props.jobCard.company}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="caption"
                  sx={{ color: EXTRA_COLORS.darkGrey }}
                >
                  {props.jobCard.location}
                </Typography>
              </Grid>

              <Grid
                item
                container
                sx={{
                  display: 'flex',
                  marginTop: '20px',
                }}
              >
                {!props.saved ? (
                  <>
                    <Grid item>
                      <Buttons
                        variant="outlined"
                        size="small"
                        sx={{
                          marginRight: '30px',
                        }}
                        onClick={props.onSaveClick}
                      >
                        {HeadingsOfJobDetailSection.SECTION1_BUTTON1}
                      </Buttons>
                    </Grid>
                    <Grid item>
                      <Buttons
                        variant="contained"
                        size="small"
                        onClick={props.onApplyClick}
                      >
                        {HeadingsOfJobDetailSection.SECTION1_BUTTON2}
                      </Buttons>
                    </Grid>
                  </>
                ) : (
                  <Grid item>
                    <Buttons
                      variant="outlined"
                      sx={{
                        borderColor: EXTRA_COLORS.lightRed,
                        width: '101px',
                        height: '38px',
                        '&:hover': {
                          borderColor: EXTRA_COLORS.darkRed,
                          backgroundColor: EXTRA_COLORS.white,
                        },
                      }}
                      onClick={() => {
                        if (props.onUnSaveClick)
                          props.onUnSaveClick();
                      }}
                    >
                      <Typography
                        sx={{
                          color: theme.palette.error.main,
                        }}
                      >
                        {HeadingsOfJobDetailSection.SECTION4_UNSAVE}
                      </Typography>
                    </Buttons>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ width: '350px', margin: '0 auto' }}>
          <hr style={{ border: '1px solid #E8EAF4' }} />
        </Grid>
        <Grid item container className={classes.jobDetailsSection}>
          <Grid item sx={{ width: '330px' }}>
            <Typography variant="subtitle1">
              {HeadingsOfJobDetailSection.SECTION2_HEADING}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              width: '330px',
              height: '220px',
              alignSelf: 'baseline',
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: EXTRA_COLORS.darkGrey }}
            >
              {props.jobDescription}
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ width: '350px', margin: '0 auto' }}>
          <hr style={{ border: '1px solid #E8EAF4' }} />
        </Grid>
        <Grid item container className={classes.whatItTakesSection}>
          <Grid item sx={{ width: '330px' }}>
            <Typography variant="subtitle1">
              {HeadingsOfJobDetailSection.SECTION3_HEADING}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              width: '330px',
              height: '220px',
              alignSelf: 'baseline',
            }}
          >
            <ul>
              {props.whatItTakes.map((point: any) => (
                <li key={Math.random()}>
                  <Typography
                    variant="body2"
                    sx={{ color: EXTRA_COLORS.darkGrey }}
                  >
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        {!props.saved ? (
          <Grid item className={classes.commuteRoutesSection}>
            <Buttons
              variant="contained"
              size="large"
              sx={{
                margin: '102px 90px 30px 90px',
                padding: '0px',
              }}
              onClick={props.onGreenCommuteClick}
            >
              {HeadingsOfJobDetailSection.SECTION4_BUTTON}
            </Buttons>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </Paper>
  );
};

export default DetailSection;
