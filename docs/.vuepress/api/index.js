import axios from 'axios';
import { BASE_URL } from '@/api/constants';

const mainRoute = BASE_URL;

function makeRequest({
  type, endpoint, data, params,
}) {
  return axios({
    baseURL: mainRoute,
    url: endpoint,
    method: type,
    params: params || '',
    data: data || '',
  });
}

export default {
  GET: (endpoint, params) => makeRequest({
    type: 'GET', endpoint, params,
  }),
};
