import {
  Box,
  Card,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import theme, { EXTRA_COLORS } from '../../../theme';
import {
  HeadingsOfJobDetailSection,
  CommuteRouteOption,
} from '../../../utils/constants';
import Buttons from '../../atoms/Buttons';
import ImageComponent from '../../atoms/Image';
import CommuteRouteSection from '../CommuteRouteSection';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import Ola from '../../../../public/assets/logos/Ola.svg';
import UberLogo from '../../../../public/assets/logos/UberLogo.svg';
import QuickRide from '../../../../public/assets/logos/quickride.svg';

const JobDetailsSectionStyles = makeStyles({
  wholeContainer: {
    width: '390px',
    height: '919px',
    position: 'relative',
    overflow: 'hidden',
  },
  jobCommuteSection: {
    height: '100px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whatItTakesSection: {
    height: '8px',
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
interface CommuteRouteProps {
  jobCard: any;
  jobDescription?: any;
  whatItTakes?: any;
  onSaveClick?: any;
  onApplyClick?: any;
}
const CommuteRouteOptions = (props: CommuteRouteProps) => {
  const [active, setActive] = useState('FirstCard');
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
            height: '110px',
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
                  sx={{
                    fontWeight: 400,
                    color: EXTRA_COLORS.darkGrey,
                  }}
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
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ width: '350px', margin: '0 auto' }}>
        <hr style={{ border: '1px solid #E8EAF4' }} />
      </Grid>

      <Grid item container>
        <Grid
          item
          sx={{
            width: '380px',
            marginLeft: '30px',
            marginTop: '9px',
            marginBottom: '18px',
          }}
        >
          <CommuteRouteSection
            from={props.jobCard.from}
            to={props.jobCard.to}
          ></CommuteRouteSection>
        </Grid>
        <Grid item sx={{ width: '350px', margin: '0 auto' }}>
          <hr style={{ border: '1px solid #E8EAF4' }} />
        </Grid>
      </Grid>

      <Grid item container className={classes.whatItTakesSection}>
        <Grid item sx={{ width: '380px', marginTop: '8px' }}>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: '20px', marginLeft: '25px' }}
          >
            {CommuteRouteOption.SECTION3_MAIN}
            <Grid
              item
              position="absolute"
              marginLeft="70px"
              display="inline-flex"
              columnGap="4px"
            >
              {props.jobCard.commute.map((route: any) => {
                switch (route.commute.routeOption) {
                  case 'train':
                    return (
                      <IconButton
                        sx={{
                          cursor: 'pointer',
                          marginTop: '-7px',
                          '&:hover': {
                            backgroundColor: theme.palette.grey[100],
                          },
                        }}
                      >
                        <TrainOutlinedIcon
                          sx={{
                            '&:hover': {
                              color: EXTRA_COLORS.white,
                            },
                          }}
                          onClick={(event: any) => {
                            setActive('FirstCard');
                          }}
                        />
                      </IconButton>
                    );
                  case 'car':
                    return (
                      <IconButton
                        sx={{
                          cursor: 'pointer',
                          marginTop: '-7px',
                          '&:hover': {
                            backgroundColor: theme.palette.grey[100],
                          },
                        }}
                      >
                        <DirectionsCarOutlinedIcon
                          sx={{
                            '&:hover': {
                              color: EXTRA_COLORS.white,
                            },
                          }}
                          onClick={(event: any) => {
                            setActive('SecondCard');
                          }}
                        />
                      </IconButton>
                    );
                  case 'bus':
                    return (
                      <IconButton
                        sx={{
                          cursor: 'pointer',
                          marginTop: '-7px',
                          '&:hover': {
                            backgroundColor: theme.palette.grey[100],
                          },
                        }}
                      >
                        <DirectionsBusIcon
                          sx={{
                            '&:hover': {
                              color: EXTRA_COLORS.white,
                            },
                          }}
                        />
                      </IconButton>
                    );
                  case 'bike':
                    return (
                      <IconButton
                        sx={{
                          cursor: 'pointer',
                          marginTop: '-7px',
                          '&:hover': {
                            backgroundColor: theme.palette.grey[100],
                          },
                        }}
                      >
                        <PedalBikeIcon
                          sx={{
                            '&:hover': {
                              color: EXTRA_COLORS.white,
                            },
                          }}
                        />
                      </IconButton>
                    );
                }
              })}
            </Grid>
          </Typography>
          <>
            {active === 'FirstCard' && (
              <Card
                sx={{
                  border: 'none',
                  boxShadow: 'none',
                  width: '100%',
                  backgroundColor: EXTRA_COLORS.trans,
                }}
              >
                <Card
                  sx={{
                    border: 'none',
                    boxShadow: 'none',
                    width: '100%',
                    marginTop: '15px',
                    marginLeft: '25px',
                    backgroundColor: EXTRA_COLORS.trans,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      marginTop: '10px',
                    }}
                  >
                    Maredpally - Hitech City
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        marginLeft: '84px',
                      }}
                    >
                      {CommuteRouteOption.SECTION3_MAIN_COST} *
                      {CommuteRouteOption.SECTION3_MAIN_DURATION}
                    </Typography>
                  </Typography>

                  <Grid item>
                    <DirectionsBusIcon
                      sx={{
                        color: theme.palette.grey[500],
                        marginTop: '10px',
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        width: '300px',
                        position: 'absolute',
                        marginTop: '12px',
                        color: EXTRA_COLORS.darkGrey,
                        marginLeft: '9px',
                      }}
                    >
                      {CommuteRouteOption.SECTION3_BUS_DESCRIPTION}
                      <Typography
                        sx={{
                          display: 'inline-block',
                          position: 'relative',
                          fontSize: '10px',
                          fontWeight: '500',
                          color: theme.palette.error.main,
                          marginLeft: '10px',
                        }}
                      >
                        {CommuteRouteOption.SECTION3_BUS_LATE}
                      </Typography>
                      <br></br>
                      <Typography
                        variant="caption"
                        sx={{
                          position: 'relative',
                          width: '300px',
                          marginTop: '5px',

                          color: theme.palette.grey[300],
                          fontSize: '10px',
                        }}
                      >
                        {CommuteRouteOption.SECTION3_BUS_COST} *{' '}
                        {CommuteRouteOption.SECTION3_BUS_DURATION}
                      </Typography>
                    </Typography>
                  </Grid>

                  <Grid item>
                    <PedalBikeIcon
                      sx={{
                        color: theme.palette.grey[500],
                        marginTop: '30px',
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        width: '300px',
                        position: 'absolute',
                        marginTop: '32px',
                        color: EXTRA_COLORS.darkGrey,
                        marginLeft: '9px',
                        alignSelf: 'end',
                      }}
                    >
                      {CommuteRouteOption.SECTION3_VECTOR_DESCRIPTION}
                      <Typography
                        sx={{
                          display: 'inline-block',
                          position: 'relative',
                          fontSize: '10px',
                          marginLeft: '10px',
                          fontWeight: '500',
                          color: theme.palette.grey[300],
                        }}
                      >
                        {CommuteRouteOption.SECTION3_VECTOR_TIME}
                      </Typography>
                      <br></br>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TrainOutlinedIcon
                      sx={{
                        color: theme.palette.grey[500],
                        marginTop: '10px',
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        width: '300px',
                        position: 'absolute',
                        marginTop: '12px',
                        color: EXTRA_COLORS.darkGrey,
                        marginLeft: '9px',
                        alignSelf: 'end',
                      }}
                    >
                      {CommuteRouteOption.SECTION3_METRO_DESCRIPTION}
                      <Typography
                        sx={{
                          display: 'inline-block',
                          position: 'relative',
                          marginLeft: '14px',
                          fontSize: '10px',
                          fontWeight: '500',
                          color: theme.palette.success.main,
                        }}
                      >
                        {CommuteRouteOption.SECTION3_METRO_LATE}
                      </Typography>
                      <br></br>
                      <Typography
                        variant="caption"
                        sx={{
                          position: 'relative',
                          width: '300px',
                          marginTop: '5px',
                          marginLeft: '5px',
                          color: theme.palette.grey[300],
                          fontSize: '10px',
                        }}
                      >
                        {CommuteRouteOption.SECTION3_METRO_COST}*{' '}
                        {CommuteRouteOption.SECTION3_METRO_DURATION}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginTop: '30px',
                      position: 'relative',
                      color: theme.palette.grey[100],
                      fontSize: '14px',
                      marginBottom: '10px',
                    }}
                  >
                    {CommuteRouteOption.SECTION3_GMAPS_DESCRIPTION}
                  </Typography>
                </Card>
                <Card sx={{ boxShadow: 'none' }}>
                  <Grid item sx={{ width: '100%', margin: '0 auto' }}>
                    <hr
                      style={{
                        border: '1px solid #E8EAF4',
                      }}
                    />
                  </Grid>

                  <Grid item sx={{ display: 'inline' }}>
                    <Buttons
                      variant="outlined"
                      sx={{
                        position: 'absolute',
                        width: '151px',
                        height: '50px',
                        marginLeft: '10px',
                        marginRight: '15px',
                        marginTop: '20px',
                        marginBottom: '15px',
                        borderRadius: '10px',
                      }}
                      onClick={props.onSaveClick}
                    >
                      {HeadingsOfJobDetailSection.SECTION1_BUTTON1}
                    </Buttons>
                    <Grid item>
                      <Buttons
                        variant="contained"
                        sx={{
                          position: 'relative',
                          width: '151px',
                          height: '50px',
                          marginLeft: '200px',
                          marginRight: '3px',
                          marginTop: '20px',
                          marginBottom: '15px',
                          borderRadius: '10px',
                        }}
                        onClick={props.onApplyClick}
                      >
                        {HeadingsOfJobDetailSection.SECTION1_BUTTON2}
                      </Buttons>
                    </Grid>
                  </Grid>
                </Card>
              </Card>
            )}
          </>

          <>
            {active === 'SecondCard' && (
              <Card
                sx={{
                  border: 'none',
                  boxShadow: 'none',
                  width: '100%',
                  height: '230px',
                  backgroundColor: EXTRA_COLORS.trans,
                }}
              >
                <Card
                  sx={{
                    border: 'none',
                    boxShadow: 'none',
                    width: '100%',
                    marginTop: '15px',
                    marginLeft: '25px',
                    backgroundColor: EXTRA_COLORS.trans,
                  }}
                >
                  <Box sx={{ display: 'flex' }}>
                    <ImageComponent
                      image={Ola}
                      imageStyle={{
                        borderRadius: '50px',
                        display: 'inline-flex',
                        marginTop: '17px',
                        marginLeft: '16px',
                        width: '40px',
                        height: '41.76px',
                      }}
                    />

                    <Typography
                      variant="subtitle2"
                      sx={{
                        marginTop: '20px',
                        marginLeft: '20px',
                        display: 'inline-flex',
                      }}
                    >
                      {CommuteRouteOption.SECTION3_OLA}
                      <Typography
                        variant="caption"
                        sx={{
                          position: 'absolute',
                          display: 'flex',
                          marginTop: '20px',
                        }}
                      >
                        {CommuteRouteOption.SECTION3_CAB_COST}
                        <Typography
                          variant="button"
                          sx={{
                            display: 'flex',
                            marginTop: '-13px',
                            cursor: 'pointer',
                            marginLeft: '135px',
                            color: theme.palette.grey[100],
                          }}
                        >
                          {CommuteRouteOption.SECTION3_CAB_BOOK}
                        </Typography>
                      </Typography>
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <ImageComponent
                      image={UberLogo}
                      imageStyle={{
                        display: 'inline-flex',
                        marginTop: '19px',
                        marginLeft: '17px',
                        width: '40px',
                        height: '41.76px',
                      }}
                    />

                    <Typography
                      variant="subtitle2"
                      sx={{
                        marginTop: '20px',
                        marginLeft: '20px',
                        display: 'inline-flex',
                      }}
                    >
                      {CommuteRouteOption.SECTION3_UBER}
                      <Typography
                        variant="caption"
                        sx={{
                          position: 'absolute',
                          display: 'flex',
                          marginTop: '20px',
                        }}
                      >
                        {CommuteRouteOption.SECTION3_CAB_COST}
                        <Typography
                          variant="button"
                          sx={{
                            display: 'flex',
                            marginTop: '-13px',
                            marginLeft: '135px',
                            color: theme.palette.grey[100],
                            cursor: 'pointer',
                          }}
                        >
                          {CommuteRouteOption.SECTION3_CAB_BOOK}
                        </Typography>
                      </Typography>
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', marginTop: '10px' }}>
                    <ImageComponent
                      image={QuickRide}
                      imageStyle={{
                        display: 'inline-flex',
                        marginTop: '19px',
                        width: '73.4px',
                        height: '41.76px',
                      }}
                    />

                    <Typography
                      variant="subtitle2"
                      sx={{
                        marginTop: '20px',
                        marginLeft: '5px',
                        display: 'inline-flex',
                      }}
                    >
                      {CommuteRouteOption.SECTION3_QUICK_RIDE}
                    </Typography>

                    <Grid item sx={{ display: 'inline' }}>
                      <Buttons
                        variant="outlined"
                        sx={{
                          position: 'absolute',
                          backgroundColor: EXTRA_COLORS.white,
                          width: '151px',
                          height: '50px',
                          marginLeft: '-150px',
                          marginRight: '15px',
                          marginTop: '36px',
                          marginBottom: '15px',
                          borderRadius: '10px',
                          backdropFilter: 'revert',
                        }}
                        onClick={props.onSaveClick}
                      >
                        {HeadingsOfJobDetailSection.SECTION1_BUTTON1}
                      </Buttons>

                      <Grid item>
                        <Buttons
                          variant="contained"
                          sx={{
                            position: 'relative',
                            width: '151px',
                            height: '50px',
                            marginRight: '-75px',
                            marginLeft: '25px',
                            marginTop: '36px',
                            marginBottom: '15px',
                            borderRadius: '10px',
                            backdropFilter: 'revert',
                          }}
                          onClick={props.onApplyClick}
                        >
                          {
                            HeadingsOfJobDetailSection.SECTION1_BUTTON2
                          }
                        </Buttons>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Card>
            )}
          </>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default CommuteRouteOptions;
