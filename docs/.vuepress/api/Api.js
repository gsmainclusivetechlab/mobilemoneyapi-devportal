import axios from 'axios';
import { BASE_URL } from './constants';

class Api {
  constructor() {
    this.headers = {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };
  }

  static create() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  getHeaders() {
    return this.headers;
  }

  initClient() {
    this.client = this.client ?? axios.create({
      baseURL: BASE_URL,
      headers: {
        ...this.getHeaders(),
      },
    });

    return this.client;
  }

  request(config = {}) {
    this.initClient();

    // try {
      return this.client.request(config);
    // } catch (e) {
    //   console.log(2)
    //   return e.response;
    // }
  }

  get(url, config) {
    return this.request({
      method: 'GET',
      url,
      ...config,
    });
  }

  post(url, data, config) {
    return this.request({
      method: 'POST',
      url,
      data,
      ...config,
    });
  }

  put(url, data, config) {
    return this.request({
      method: 'PUT',
      url,
      data,
      ...config,
    });
  }

  delete(url, config) {
    return this.request({
      method: 'DELETE',
      url,
      ...config,
    });
  }
}

export default Api.create();
