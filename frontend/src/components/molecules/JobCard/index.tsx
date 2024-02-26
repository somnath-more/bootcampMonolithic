import { Box, Card, CardContent, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme, { EXTRA_COLORS } from '../../../theme';
import ImageComponent from '../../atoms/Image';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PedalBikeIcon from '@mui/icons-material/PedalBike';

type JobCardProps = {
  logo: string;
  days: number;
  title: string;
  company: string;
  location: string;
  commute: any[];
};

const JobCard = (props: JobCardProps) => {
  return (
    <>
      <Card
        sx={{
          width: '330px',
          height: '308px',
          boxShadow: 'none',
          border: '1px solid',
          borderColor: EXTRA_COLORS.border,
        }}
      >
        <CardContent sx={{ padding: '30px' }}>
          <Box sx={{ display: 'flex' }} marginBottom="20px">
            <ImageComponent
              image={props.logo}
              imageStyle={{
                width: '80px',
                height: '80px',
                marginRight: '138px',
              }}
            />
            <Typography variant="body2" color="#5F7381">
              {props.days}d
            </Typography>
            <MoreHorizIcon
              sx={{
                color: theme.palette.grey[300],
                marginLeft: '12px',
              }}
            />
          </Box>
          <Typography variant="h6" color={theme.palette.grey[500]}>
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color={EXTRA_COLORS.darkGrey}
            marginTop="5px"
          >
            {props.company}
          </Typography>
          <Typography
            variant="body2"
            color={EXTRA_COLORS.darkGrey}
            marginTop="5px"
          >
            {props.location}
          </Typography>
          <Box width="168px" height="50px" marginTop="20px">
            <Typography
              variant="caption"
              color={theme.palette.grey[700]}
            >
              Commute routes available:
            </Typography>
            <Box
              display="flex"
              width="126px"
              marginTop="10px"
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
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default JobCard;
