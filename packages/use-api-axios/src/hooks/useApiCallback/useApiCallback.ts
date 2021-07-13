import {
  useApiCallback,
  Middleware,
} from '@use-api/core';
import axios, {
  AxiosRequestConfig,
} from 'axios';

export default (baseConfig: AxiosRequestConfig, middlewares?: Middleware<AxiosRequestConfig>[]) => (
  useApiCallback(axios.request, baseConfig, middlewares)
);
