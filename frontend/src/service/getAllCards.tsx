import API from '.';

export const getAllCards = async (url: string) => {
  const response = await API.get(url);
  return response.data;
};
