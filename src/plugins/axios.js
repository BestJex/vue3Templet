"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.VUE_APP_APIBASE,
  timeout: 10000, // Timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// request 请求拦截器
_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// request 服务器响应拦截器
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
		// console.log(error)
    if (error.response) {
			switch (error.response.status) {
				case 401:
					error.message = '未授权，请重新登录'
					break
				case 403:
					error.message = '没有访问权限'
					break
				case 404:
					error.message = '请求错误,未找到该资源'
					break
				case 500:
					error.message = '服务器端出错'
					break
				default:
					break;
			}
		} else {
			error.message = '连接到服务器失败'
		}
		return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
