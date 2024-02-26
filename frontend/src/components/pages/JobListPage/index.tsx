import { Grid, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import JointSearchBar from '../../organisms/JointSearchBar';
import Dashboard from '../../templates/Dashboard';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import theme, { EXTRA_COLORS } from '../../../theme';
import Buttons from '../../atoms/Buttons';
import CommuteRouteOptions from '../../organisms/CommuteRouteOptions';
import Filter, { FilterListType } from '../../organisms/Filter';
import { useSearchParams, useNavigate } from 'react-router-dom';
import JobCard from '../../organisms/JobList';
import {
  filterSearchChips,
  filterSearchResult,
  jointSearchResult,
} from '../../../helper/FilterData';
import DetailSection from '../../organisms/DetailSection';
import {
  ApiJobCardInterface,
  DashboardItems,
  filterProps,
  JobListPageConst,
} from '../../../utils/constants';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { getJobCards, postJobCard } from './hook';
import Chips from '../../atoms/Chip';
import ClearIcon from '@mui/icons-material/Clear';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  top: 285px;
  left: 395px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const JobListPage = () => {
  sessionStorage.setItem('dashboardKey', '2');
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCards, setFilteredCards] = useState<
    ApiJobCardInterface[]
  >([]);
  const [filterData, setfilterData] = useState<FilterListType[]>([]);
  const [detailSectionArray, setdetailSectionArray] = useState<
    ApiJobCardInterface[]
  >([]);
  const [open, setOpen] = useState(false);
  const [switchToGreenCommute, setSwitchToGreenCommute] =
    useState(false);
  const [filterChips, setFilterChips] = useState([]);

  const allCardsData = getJobCards();
  const skill = searchParams.get('skill') || '';
  const city = searchParams.get('city') || '';

  const handleOpen = () => setOpen(true);

  const jobListPageData = jointSearchResult(
    allCardsData,
    skill,
    city,
  );

  const pullData = (id: any) => {
    const result = jobListPageData.filter((item) => item.id == id);
    setdetailSectionArray(result);
    setSwitchToGreenCommute(false);
  };

  const setSearchField = (skill: string, location: string) => {
    setSearchParams({ skill: skill, city: location });
  };

  const handleSaveJobCard = (id: number) => {
    postJobCard(id);
    navigate('/savedJobs');
  };

  const handleGreenCommuteClick = (id: number) => {
    setSwitchToGreenCommute(true);
  };

  const handlefilterdata = (
    filterList: FilterListType,
    close: boolean,
  ) => {
    setOpen(close);
    let temp = filterData;
    temp.pop();
    temp.push(filterList);
    setfilterData(temp);
    const data = filterSearchResult(jobListPageData, filterData);
    const filterOptions = filterSearchChips(filterData);
    setFilterChips(filterOptions);
    setFilteredCards(data);
  };

  const deleteChip = (index: any) => {
    const reducedArr = filterChips.filter((item) => {
      return item !== filterChips[index];
    });
    setFilterChips(reducedArr);
  };

  const deleteAllchips = () => {
    let temp = filteredCards;
    temp.length = 0;
    setFilteredCards(temp);
    setFilterChips([]);
    let temp2 = filterData;
    temp2.length = 0;
    setfilterData(temp2);
  };

  return (
    <>
      <Dashboard
        dashboardList={DashboardItems}
        component={
          <Grid container>
            <Grid
              container
              flexDirection="column"
              width="780px"
              padding="30px 30px 0px 61px"
            >
              <Typography variant="h5" sx={{ marginBottom: '15px' }}>
                Find Jobs
              </Typography>
              <JointSearchBar
                barWidth="690px"
                sxButton={{
                  position: 'absolute',
                  width: '64px!important',
                  height: '50px',
                  borderRadius: '0px 10px 10px 0px!important',
                  right: '0px',
                }}
                skill={skill}
                location={city}
                callBack={setSearchField}
              />
              <Grid
                container
                height="56px"
                marginTop="30px"
                justifyContent="space-between"
              >
                <Grid flexDirection="column">
                  <Typography
                    variant="h5"
                    sx={{ marginBottom: '8px' }}
                  >
                    {filterChips.length > 0
                      ? 'Recommended for you'
                      : 'Job List'}
                  </Typography>
                  <Typography variant="body2">
                    {filterChips.length > 0
                      ? 'Based on your profile, skills and search history'
                      : 'Based on your search'}
                  </Typography>
                </Grid>
                <Buttons
                  variant="text"
                  children="Filter"
                  onClick={handleOpen}
                  startIcon={<FilterAltOutlinedIcon />}
                  sx={{
                    width: '101px!important',
                    height: '40px!important',
                    border: '1px solid',
                    borderColor: EXTRA_COLORS.border,
                  }}
                />
              </Grid>
              {filterChips.length > 0 && (
                <Grid
                  container
                  justifyContent="space-between"
                  sx={{ marginTop: '20px' }}
                >
                  <Grid
                    container
                    width="598px"
                    rowGap="10px"
                    columnGap="20px"
                  >
                    {filterChips.map((item, index) => (
                      <Chips
                        style={{
                          fontSize: '14px',
                          fontWeight: 400,
                          color: theme.palette.primary.main,
                          height: '38px',
                        }}
                        key={index}
                        label={item}
                        deleteIcon={<ClearIcon />}
                        onDelete={() => deleteChip(index)}
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Grid>
                  <Buttons
                    variant="text"
                    sx={{
                      width: '91px!important',
                      height: '38px!important',
                    }}
                    onClick={deleteAllchips}
                  >
                    Clear all
                  </Buttons>
                </Grid>
              )}
              <Grid
                container
                flexDirection="column"
                rowGap="10px"
                sx={{ marginTop: '20px' }}
              >
                {filteredCards.length === 0
                  ? jobListPageData.map((item) => (
                      <Grid item key={item.id}>
                        <JobCard
                          id={item.id}
                          logo={item.company.logo}
                          days={item.days}
                          title={item.job.title}
                          company={item.company.companyName}
                          location={item.company.location}
                          commute={item.company.companyCommutes}
                          callBack={pullData}
                        />
                      </Grid>
                    ))
                  : filteredCards.map((data) => (
                      <Grid item key={data.id}>
                        <JobCard
                          id={data.id}
                          logo={data.company.logo}
                          days={data.days}
                          title={data.job.title}
                          company={data.company.companyName}
                          location={data.company.location}
                          commute={data.company.companyCommutes}
                          callBack={pullData}
                        />
                      </Grid>
                    ))}
              </Grid>
            </Grid>
            <Grid>
              {!switchToGreenCommute ? (
                detailSectionArray &&
                detailSectionArray.map((detailitem) => (
                  <span>
                    <DetailSection
                      jobCard={{
                        image: detailitem.company.logo,
                        role: detailitem.job.title,
                        company: detailitem.company.companyName,
                        location: detailitem.company.location,
                      }}
                      onSaveClick={() => {
                        handleSaveJobCard(detailitem.id);
                      }}
                      onApplyClick={() => {
                        console.log('Applied');
                      }}
                      onGreenCommuteClick={() => {
                        handleGreenCommuteClick(detailitem.id);
                      }}
                      jobDescription={JobListPageConst.JOBDESCRIPTION}
                      whatItTakes={JobListPageConst.WHATITTAKES}
                    />
                  </span>
                ))
              ) : (
                <span>
                  {detailSectionArray &&
                    detailSectionArray.map((jobitem) => (
                      <CommuteRouteOptions
                        jobCard={{
                          image: jobitem.company.logo,
                          role: jobitem.job.title,
                          company: jobitem.company.companyName,
                          location: jobitem.company.location,
                          commute: jobitem.company.companyCommutes,
                          from: 'East Marredpally, E Marredpally',
                          to: 'Hitech City, Telangana, Secunderabad',
                        }}
                        onSaveClick={() => {
                          handleSaveJobCard(jobitem.id);
                        }}
                        onApplyClick={() => {
                          console.log('Applied');
                        }}
                      />
                    ))}
                </span>
              )}
            </Grid>
          </Grid>
        }
      />
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        BackdropComponent={Backdrop}
      >
        <Filter
          checkboxGroupsData={filterProps.checkBoxGroup}
          radiobuttonGroupsData={filterProps.radioBoxGroup}
          callBack={handlefilterdata}
        />
      </StyledModal>
    </>
  );
};

export default JobListPage;
