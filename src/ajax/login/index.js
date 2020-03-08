import axios from '@/config/axios';
/**
 * 用户登录
 * @param {*} data 
 */
export const login = (data) => (
    axios({
        url: '/user/login',
        data
    })
);

/**
 * 用户注册
 * @param {*} data 
 */
export const register = (data) => (
    axios({
        url: '/user/register',
        data
    })
)