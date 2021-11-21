/*
 * @Author: dingminghui
 * @Date: 2021-11-16 23:53:19
 * @LastEditTime: 2021-11-17 01:22:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-ts-vite/src/apis/index.ts
 */
import axios from 'axios';
import { message } from 'ant-design-vue';

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 20000
})

http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.msg;
      message.error(`Code: ${code}, Message: ${msg}`);
    } else {
      message.error(`${error}`);
    }
    return Promise.reject(error);
  }
)
 
export default http;