/*
 * @Date: 2021-11-22 14:10:18
 * @Author: wwm
 * @LastEditTime: 2021-11-22 17:06:42
 * @LastEditors: wwm
 * @Description: 统一处理请求
 */

import axios from 'axios';

const { VUE_APP_ENV } = process.env;
let baseURL = '/'; // process.env.baseURL

switch (VUE_APP_ENV) {
  case 'dev':
    baseURL = '/';
    break;
  case 'test':
    baseURL = '/';
    break;
  case 'prod':
    baseURL = '/';
    break;
  case 'live':
    baseURL = '/';
    break;

  default:
    baseURL = '/';
    break;
}

const service = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    config.cancelToken = new axios.CancelToken((cancel) => window._axiosPromiseArr.push({ cancel }));

    // 在发送请求之前做些什么
    // 获取token
    const token = localStorage.getItem('token') || '';

    // 如果token存在
    config.headers.token = token;
    return config;
  },
  (error) => Promise.reject(error)
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if (response.data.res == 200 || response.data.res == 0) {
      return response.data;
    } else {
      console.log('response===>', response);
      return Promise.reject(response);
    }
  },
  (error) => {
    // 对响应错误做点什么
    if (error.message !== 'cancel request') {
      console.log('error===>', error);
      return Promise.reject(error);
    }
  }
);

/**
 *
 * @param {Object} params url接口地址 data入参 method请求类型 config自定义配置
 * @returns {Promise}
 */
export default async (params) => {
  const { url, data = {}, method = 'POST', config = {} } = params;

  if (method === 'GET' || method === 'get') {
    return await service.get(url, { params: data, ...config });
  }
  if (method === 'POST' || method === 'post') {
    return await service.post(url, data, config);
  }
};
