import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import DetailSection from '../../organisms/DetailSection';
import JobCard from '../../organisms/JobList';
import Dashboard from '../../templates/Dashboard';
import { Grid, Typography } from '@mui/material';
import savedJobs from './../../../service/index';
import { EXTRA_COLORS } from '../../../theme';
import {
  ApiJobCardInterface,
  DashboardItems,
  DetailSectionConst,
} from '../../../utils/constants';

export interface JobListPageInterface {
  id: number;
  logo: any;
  days: number;
  title: string;
  company: string;
  location: string;
  commute: string[];
}

const SavedlistPage = (props: any) => {
  sessionStorage.setItem('dashboardKey', '3');
  const [jobListPageData, setJobListPageData] = useState<
    ApiJobCardInterface[]
  >([]);
  const [detailSectionArray, setDetailSectionArray] = useState<
    ApiJobCardInterface[]
  >([]);

  const getAllJobCards = async () => {
    return savedJobs.get('/v1/saved-jobs');
  };

  const handleUnSave = (id: number) => {
    const deleteJob = async () => {
      await savedJobs.delete(`/v1/saved-jobs/${id}`);
      const savedJobData = await getAllJobCards();
      if (savedJobData) setJobListPageData(savedJobData.data);
    };

    deleteJob();
    setDetailSectionArray([]);
  };

  useEffect(() => {
    const getAllJobCardsDetails = async () => {
      const allJobCards = await getAllJobCards();
      if (allJobCards) setJobListPageData(allJobCards.data);
    };
    getAllJobCardsDetails();
  }, []);

  const handleJobClick = (id: number) => {
    const cardData = jobListPageData.filter((card) => card.id === id);
    setDetailSectionArray(cardData);
  };

  return (
    <>
      <Dashboard
        dashboardList={DashboardItems}
        component={
          <Box>
            <Box
              sx={{
                height: '821px',
                marginLeft: '60px',
                width: '1171px',
                marginTop: '50px',
              }}
            >
              <Box>
                <Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        marginTop: '30px',

                        marginBottom: '10px',
                      }}
                      children="Saved Job List"
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        position: 'relative',
                        marginTop: '10px',
                        marginBottom: '10px',
                        color: EXTRA_COLORS.darkGrey,
                      }}
                      children="Based on Your Selection"
                    />
                  </Box>
                </Box>
                <Grid
                  container
                  flexDirection="column"
                  sx={{
                    marginTop: '30px',
                    gap: '8px',
                  }}
                >
                  {jobListPageData.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        marginBottom: '0.7rem',
                        heigth: '821px',
                        width: '390px',
                        flexDirection: 'column',
                      }}
                      onClick={() => handleJobClick(item.id)}
                    >
                      <JobCard
                        id={item.id}
                        logo={item.company.logo}
                        days={item.days}
                        title={item.job.title}
                        company={item.company.companyName}
                        location={item.company.location}
                        commute={item.company.companyCommutes}
                      />
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Box>

            <Box
              sx={{
                flexDirection: 'column',
                marginLeft: '781px',
                marginTop: '-871px',
              }}
            >
              {detailSectionArray &&
                detailSectionArray.map((detailitem) => (
                  <DetailSection
                    jobCard={{
                      id: detailitem.id,
                      image: detailitem.company.logo,
                      role: detailitem.job.title,
                      company: detailitem.company.companyName,
                      location: detailitem.company.location,
                    }}
                    onUnSaveClick={() => handleUnSave(detailitem.id)}
                    jobDescription={
                      DetailSectionConst.JOB_DESCRPIPTION
                    }
                    whatItTakes={DetailSectionConst.WHAT_IT_TAKES}
                    saved="false"
                  />
                ))}
            </Box>
          </Box>
        }
      />
    </>
  );
};

export default SavedlistPage;
