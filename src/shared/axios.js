import axios from 'axios';

import {BASE_URL} from './configs';

// TODO: Change name of APIKit
let APIKit = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 10000,
});

let authRequestInterceptor;

export const setClientToken = token => {
  APIKit.interceptors.request.eject(authRequestInterceptor);

  authRequestInterceptor = APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `JWT ${token}`;
    return config;
  });
};

export default APIKit;
