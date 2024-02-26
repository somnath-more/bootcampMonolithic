import { Box, Card, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme, { EXTRA_COLORS } from '../../../theme';
import ImageComponent from '../../atoms/Image';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PedalBikeIcon from '@mui/icons-material/PedalBike';

type JobCardListProps = {
  id: number;
  logo: string;
  days: number;
  title: string;
  company: string;
  location: string;
  commute: any[];
  callBack?: any;
};

const JobCard = (props: JobCardListProps) => {
  const handleClick = () => {
    props.callBack(props.id);
  };

  return (
    <>
      <Card
        sx={{
          width: '690px',
          height: '138px',

          border: '2px solid',
          borderColor: EXTRA_COLORS.border,
          borderRadius: '10px',
          cursor: 'pointer',
          '&:hover': {
            border: '2px solid ',
            borderColor: theme.palette.success.main,
          },
        }}
        onClick={handleClick}
      >
        <Box sx={{ display: 'flex' }}>
          <ImageComponent
            image={props.logo}
            imageStyle={{
              display: 'inline-flex',
              width: '50px',
              height: '50px',
              marginLeft: '30px',
              marginTop: '30px',
              marginBottom: '58px',
            }}
          />

          <Typography
            variant="h6"
            sx={{
              position: 'absolute',
              marginLeft: '100px',
              marginTop: '30px',
              marginBottom: '84px',
              color: theme.palette.grey[500],
            }}
          >
            {props.title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: '500',
              fontSize: '14px',
              marginLeft: '520px',
              marginTop: '34px',
              marginBottom: '88px',
              color: EXTRA_COLORS.darkGrey,
            }}
          >
            {props.days}d
          </Typography>

          <MoreHorizIcon
            sx={{
              marginLeft: '10px',
              marginTop: '34px',
              color: theme.palette.grey[300],
            }}
          />

          <Typography
            variant="body2"
            color={EXTRA_COLORS.darkGrey}
            sx={{
              position: 'absolute',
              marginLeft: '100px',
              marginTop: '59px',
              marginBottom: '57px',
            }}
          >
            {props.company}
          </Typography>
          <Typography
            variant="body2"
            color={EXTRA_COLORS.darkGrey}
            sx={{
              position: 'absolute',
              marginLeft: '100px',
              marginTop: '86px',
              marginBottom: '30px',
            }}
          >
            {props.location}

            <Box
              sx={{
                position: 'absolute',
                display: 'inline-flex',
                right: '-372px',
              }}
              display="flex"
              columnGap="10px"
            >
              {props.commute.map((route) => {
                switch (route.commute.routeOption) {
                  case 'train':
                    return <TrainOutlinedIcon />;
                  case 'car':
                    return <DirectionsCarOutlinedIcon />;
                  case 'bus':
                    return <DirectionsBusIcon />;
                  case 'bike':
                    return <PedalBikeIcon />;
                }
              })}
            </Box>
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default JobCard;
