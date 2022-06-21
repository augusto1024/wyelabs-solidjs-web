import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPeople = async (): Promise<Person[]> => {
  const { data } = await axios.get(`${API_URL}/people?amount=4`);
  return data;
};
