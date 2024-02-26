import { ApiJobCardInterface } from '../utils/constants';

export const filterSearchResult = (
  jobListPageData: ApiJobCardInterface[],
  filterData: any,
) => {
  let requiredData: any = [];
  const {
    distance,
    jobType,
    datePosted,
    experienceLevel,
    greenCommute,
    transport,
  } = filterData[0];

  if (datePosted.length != 0) {
    jobListPageData.map((item) => {
      if (
        datePosted.find(
          (element: string) => element === item.datePosted,
        )
      ) {
        requiredData.push(item);
      }
    });
    jobListPageData = requiredData;
    requiredData = [];
  }

  if (distance.length != 0) {
    jobListPageData.map((item: any) => {
      if (
        distance.find(
          (element: string) =>
            element === item.company.companyCommutes[0].distance,
        )
      ) {
        requiredData.push(item);
      }
    });
    jobListPageData = requiredData;
    requiredData = [];
  }

  if (jobType.length != 0) {
    jobListPageData.map((item: any) => {
      if (
        jobType.find((element: string) => element === item.jobType)
      ) {
        requiredData.push(item);
      }
    });
    jobListPageData = requiredData;
    requiredData = [];
  }

  if (experienceLevel.length != 0) {
    jobListPageData.map((item: any) => {
      if (
        experienceLevel.find(
          (element: string) => element === item.experienceLevel,
        )
      ) {
        requiredData.push(item);
      }
    });
    jobListPageData = requiredData;
    requiredData = [];
  }

  if (greenCommute != '') {
    jobListPageData.map((item: any) => {
      if (
        greenCommute ===
        item.company.companyCommutes[0].isGreenCommute
      ) {
        requiredData.push(item);
      }
    });
    jobListPageData = requiredData;
  }

  return jobListPageData;
};

export const filterSearchChips = (filterData: any) => {
  const {
    distance,
    jobType,
    datePosted,
    experienceLevel,
    greenCommute,
    transport,
  } = filterData[0];

  const requiredData: any = distance.concat(
    datePosted,
    jobType,
    experienceLevel,
    transport,
  );
  if (greenCommute != '') {
    requiredData.push(greenCommute);
  }

  return requiredData;
};

export const jointSearchResult = (
  jobListPageData: ApiJobCardInterface[],
  skill: string,
  city: string,
) => {
  let requiredData: any = [];

  if (skill.length != 0) {
    jobListPageData.map((item: any) => {
      if (
        item.job.skills.find(
          (element: any) => element.skillName === skill,
        )
      ) {
        requiredData.push(item);
      }
    });
    jobListPageData = requiredData;
    requiredData = [];
  }

  if (city.length != 0) {
    jobListPageData.map((item: any) => {
      if (item.company.city.cityName === city) {
        requiredData.push(item);
      }
    });
    jobListPageData = requiredData;
    requiredData = [];
  }

  return jobListPageData;
};
