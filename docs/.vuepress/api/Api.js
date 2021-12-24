import axios from 'axios';
import {BASE_URL} from './constants';
import CookieManager from "../helpers/CookieManager";

class Api {
    constructor() {
        this.headers = {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        };
        this.setTokens()
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

    setTokens() {
        const [x_user_token, id_token] = CookieManager.getValues('x_user_token', 'id_token')
        if (x_user_token && id_token) {
            this.headers = {
                ...this.headers,
                Authorization: `Bearer ${id_token}`,
                x_user_token: x_user_token,
            }
            this.initClient()
        }
    }

    removeTokens() {
        delete this.headers.Authorization
        delete this.headers.x_user_token
    }

    initClient() {
        // this.client = this.client ?? axios.create({
        this.client = axios.create({
            baseURL: BASE_URL,
            headers: {
                ...this.getHeaders(),
            },
        });

        this.client.interceptors.response.use(
            function (response) {
                //"NotAuthorizedException"
                if(response.data.error) return Promise.reject(response.data?.errorDescription?.name)
                return response;
            },
            function (error) {
                if (error.response.status === 401) {
                    window.location.replace('/login/');
                }
                return Promise.reject(error);
            });

        return this.client;
    }

    request(config = {}) {
        this.initClient();

        return this.client.request(config);
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
