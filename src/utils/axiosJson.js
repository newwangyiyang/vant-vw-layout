import axios from 'axios';


//以application/json进行提交
const axiosJson = axios.create({
    baseURL: 'http://localhost/',
    timeout: 4000,
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

axiosJson.interceptors.response.use((res) => {
    if (res.status !== 200) {
      throw new Error('请求错误');
    }
    return res.data;
  }, (error) => {
    return Promise.reject(error);
});

export default axiosJson;