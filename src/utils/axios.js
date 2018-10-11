import axios from 'axios'
import qs from 'qs'

//已form表单进行提交
const axiosForm = axios.create({
  baseURL: 'https://api.myjson.com/',
  timeout: 4000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
});
//POST传参序列化
axiosForm.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
//code状态码200判断
axiosForm.interceptors.response.use((res) => {
  if (res.status != '200') {
    return Promise.reject(res);
  }
  return res.data;
}, (error) => {
  return Promise.reject(error);
});

export default axiosForm;
