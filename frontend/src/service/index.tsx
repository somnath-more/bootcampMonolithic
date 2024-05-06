import axios from 'axios';

export default axios.create({
  baseURL: 'http://51.20.68.205:8000/',
});

export const getAqi = async (city: any) => {
  return axios.get(
    `https://api.waqi.info/feed/Mumbai/?token=265f537e4985d6eb1113d115a5582a0ccc90960c`,
  );
};

export const getSkills = async (name: any) => {
  return axios.get(`http://51.20.68.205:8000/v1/skills/${name}`);
};
