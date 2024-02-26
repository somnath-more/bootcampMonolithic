import { useEffect, useState } from 'react';
import { getAllCards } from '../../../service/getAllCards';
import { setJobCard } from '../../../service/setJobCard';
import { ApiJobCardInterface } from '../../../utils/constants';

export const getJobCardById = (id: number) => {
  const [jobCardData, setJobCardData] =
    useState<ApiJobCardInterface>();
  useEffect(() => {
    getAllCards(`/v1/jobs/${id}`)
      .then((res) => {
        setJobCardData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return jobCardData;
};

export const getJobCards = () => {
  const [jobListPageData, setJobListPageData] = useState<
    ApiJobCardInterface[]
  >([]);
  useEffect(() => {
    getAllCards('/v1/jobs')
      .then((res) => {
        setJobListPageData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return jobListPageData;
};

export const postJobCard = (id: any) => {
  setJobCard(`/v1/saved-jobs/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
