import axios from 'axios';
import {
  BASE_URL,
  ID_TOKEN,
  LOGIN,
  REFRESH_TOKEN,
  UPDATE_REFRESH_TOKEN,
  X_USER_TOKEN
} from './constants';
import CookieManager from '@/helpers/CookieManager';
import TokensManager from './TokensManager';

class Api {
  constructor() {
    this.headers = {
      Accept: 'application/json'
    };
    this.setTokens();
    this.requestWait = false;
    this.requestsQueue = [];
    this.headersForOneRequest = {};
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

  setHeadersForOneRequest(headers) {
    this.headersForOneRequest = {
      ...this.headersForOneRequest,
      ...headers
    };

    return this;
  }

  clearHeadersForOneRequest() {
    this.headersForOneRequest = {};
  }

  onAccessTokenFetched() {
    const [id_token, x_user_token] = CookieManager.getValues([ID_TOKEN], [X_USER_TOKEN]);
    this.requestsQueue.forEach((callback) => callback(id_token, x_user_token));
    this.requestsQueue.splice(0, this.requestsQueue.length);
  }

  setTokens() {
    const [x_user_token, id_token] = CookieManager.getValues(X_USER_TOKEN, ID_TOKEN);
    if (x_user_token && id_token) {
      this.headers = {
        ...this.headers,
        Authorization: `Bearer ${id_token}`,
        x_user_token
      };
      this.initClient();
    }
  }

  removeTokens() {
    delete this.headers.Authorization;
    delete this.headers.x_user_token;
  }

  addSubscriber(callback) {
    this.requestsQueue.push(callback);
  }

  initClient() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        ...this.getHeaders(),
        ...this.headersForOneRequest
      }
    });

    this.client.interceptors.response.use(
      (response) => {
        if (response.data.error) return Promise.reject(response?.data?.errorDescription?.name);
        return response;
      },
      (error) => {
        const responseURL = error.request?.responseURL;

        if (
          error.response?.status === 401 &&
          CookieManager.getValue(REFRESH_TOKEN) &&
          !responseURL.includes(UPDATE_REFRESH_TOKEN)
        ) {
          const { config } = error;
          const originalRequest = { ...config };

          if (!this.requestWait) {
            this.requestWait = true;
            TokensManager.updateRefreshToken(originalRequest)
              .then(() => {
                this.onAccessTokenFetched();
                this.requestWait = false;
              })
              .catch((e) => {
                if (window.location.pathname === '/dashboard/') {
                  window.location.replace('/login/');
                }
                return Promise.reject(e);
              });
          }

          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((access_token, x_user_token) => {
              originalRequest.headers = {
                ...originalRequest.headers,
                ...{
                  Authorization: 'Bearer ' + access_token,
                  [X_USER_TOKEN]: x_user_token
                }
              };
              resolve(axios(originalRequest));
            });
          });

          return retryOriginalRequest;
        } else if (error.response?.status === 401 && error.config?.url !== LOGIN) {
          if (window.location.pathname === '/dashboard/') {
            window.location.replace('/login/');
          }
        }

        return Promise.reject(error);
      }
    );

    return this.client;
  }

  request(config = {}) {
    this.initClient();
    this.clearHeadersForOneRequest();

    return this.client.request(config);
  }

  async get(url, config) {
    return this.request({
      method: 'GET',
      url,
      ...config
    });
  }

  async post(url, data, config) {
    return this.request({
      method: 'POST',
      url,
      data,
      ...config
    });
  }

  async put(url, data, config) {
    return this.request({
      method: 'PUT',
      url,
      data,
      ...config
    });
  }

  async delete(url, config) {
    return this.request({
      method: 'DELETE',
      url,
      ...config
    });
  }
}

export default Api.create();
