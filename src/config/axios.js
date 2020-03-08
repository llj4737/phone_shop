/**
 * axios 配置文件
 */

import axios from 'axios';


const instance = axios.create({
    method: 'POST',
    timeout: 8000,
    baseURL: 'http://localhost:8081/api',
})

instance.interceptors.request.use(req => {}, err => {});

instance.interceptors.response.use(res => {}, err => {});


export default instance;