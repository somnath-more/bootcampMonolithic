import { Grid, Typography } from '@mui/material';
import Stepper from '../../molecules/Stepper';
import {
  StepsInStepper,
  TextInHomePage,
} from '../../../utils/constants';
import { EXTRA_COLORS } from '../../../theme';
import SearchBar from '../../organisms/SearchBar';
import Buttons from '../../atoms/Buttons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type HomePageProps = {
  component: any;
  inputPlaceholder: string;
  iconChildren: any;
  label: string;
  onClickNext?: any;
  onClickSkip?: any;
  back: boolean;
  onClickBack?: any;
  final: boolean;
  onClickFinish?: any;
  stepNumber: number;
  handleCallback?: any;
};

const HomePage = (props: HomePageProps) => {
  return (
    <>
      <Grid container width="1440px" height="900px">
        <Grid container flexDirection="column" width="790px">
          <Stepper
            steps={StepsInStepper.STEPS}
            stepNumber={props.stepNumber}
          />
          <hr
            style={{
              border: '1px solid',
              borderColor: EXTRA_COLORS.border,
              width: '790px',
              margin: '0px',
            }}
          />
          <Typography variant="h3" margin="80px 160px 30px 80px">
            {TextInHomePage.HEADING1}
          </Typography>
          {props.back ? (
            <Buttons
              variant="text"
              startIcon={<ArrowBackIcon />}
              sx={{
                marginLeft: '40px',
              }}
              onClick={props.onClickBack}
            >
              {TextInHomePage.BUTTON3}
            </Buttons>
          ) : (
            <div style={{ marginBottom: '50px' }} />
          )}
          <Typography variant="h5" margin="0px 0px 20px 80px">
            {props.label}
          </Typography>
          <Grid item margin="0px 0px 30px 80px">
            <SearchBar
              InputPlaceholder={props.inputPlaceholder}
              IconChildren={props.iconChildren}
              callback={props.handleCallback}
            />
          </Grid>
          {props.final ? (
            <Buttons
              variant="contained"
              onClick={props.onClickFinish}
              sx={{ marginRight: '20px', marginLeft: '80px' }}
            >
              {TextInHomePage.BUTTON4}
            </Buttons>
          ) : (
            <span style={{ marginLeft: '80px' }}>
              <Buttons
                variant="contained"
                onClick={props.onClickNext}
                sx={{ marginRight: '20px' }}
              >
                {TextInHomePage.BUTTON1}
              </Buttons>
              <Buttons variant="outlined" onClick={props.onClickSkip}>
                {TextInHomePage.BUTTON2}
              </Buttons>
            </span>
          )}
        </Grid>
        <Grid
          container
          width="650px"
          sx={{ backgroundColor: EXTRA_COLORS.lightGreen }}
        >
          <>{props.component}</>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
