// 登录注册相关模块
import axios from '@/config/axios';

export const login = (data) => (
    axios({
        url: '/login',
        data
    })
);