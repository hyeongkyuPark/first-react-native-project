import axios from 'axios';

export const fetchUsers = () => {
  return axios.request<{name: string}[]>({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
  });
};
