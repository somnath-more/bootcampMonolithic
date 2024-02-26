import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import JointSearchBar from '../../organisms/JointSearchBar';
import { Box } from '@mui/system';
import { EXTRA_COLORS } from '../../../theme';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {
  DashboardItems,
  SearchJobDetails,
} from '../../../utils/constants';
import JobCard from '../../molecules/JobCard';
import Dashboard from '../../templates/Dashboard';
import { getJobCards } from '../JobListPage/hook';

const SearchJob = (_props: any) => {
  sessionStorage.setItem('dashboardKey', '2');
  const navigate = useNavigate();

  const pullData = (skill: string, location: string) => {
    const params = new URLSearchParams();
    navigate(`/jobList?skill=${skill}&city=${location}`);
    params.append('skill', skill);
    params.append('location', location);
  };

  const jobListPageData = getJobCards();

  return (
    <>
      <Dashboard
        dashboardList={DashboardItems}
        component={
          <>
            <Grid
              sx={{
                height: '801px',
                width: '1170px',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  marginLeft: '60px',
                  marginTop: '40px',
                }}
              >
                Find Jobs
              </Typography>
              <Box
                display="flex"
                sx={{
                  marginLeft: '60px',
                  marginTop: '20px',
                }}
              >
                <>
                  <JointSearchBar
                    barWidth="1050px"
                    sxButton={{
                      position: 'absolute',
                      width: '80px!important',
                      height: '50px',
                      borderRadius: '0px 10px 10px 0px!important',
                      right: '0px',
                    }}
                    callBack={pullData}
                  ></JointSearchBar>
                </>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  position: 'absolute',
                  marginLeft: '60px',
                  marginTop: '30px',
                }}
              >
                Recommended for you
              </Typography>
              <Box sx={{ marginLeft: '1010px', marginTop: '33px' }}>
                <Button
                  variant="text"
                  children="Filter"
                  startIcon={<FilterAltOutlinedIcon />}
                  sx={{
                    width: '101px',
                    height: '40px',
                    border: '1px solid',
                    borderColor: EXTRA_COLORS.border,
                    color: EXTRA_COLORS.darkGrey,
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  marginLeft: '60px',
                  marginTop: '-10px',
                  color: EXTRA_COLORS.darkGrey,
                }}
              >
                {SearchJobDetails.PROFILE}
              </Typography>

              <Grid
                container
                flexDirection="column"
                sx={{
                  marginLeft: '60px',
                  marginTop: '30px',
                }}
              >
                <Grid
                  container
                  flexDirection="row"
                  sx={{
                    gap: '30px',
                  }}
                >
                  {jobListPageData.map((item) => (
                    <>
                      <JobCard
                        logo={item.company.logo}
                        days={item.days}
                        title={item.job.title}
                        company={item.company.companyName}
                        location={item.company.location}
                        commute={item.company.companyCommutes}
                      ></JobCard>
                    </>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </>
        }
      ></Dashboard>
    </>
  );
};

export default SearchJob;
