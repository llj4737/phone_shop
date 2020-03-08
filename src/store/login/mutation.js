/**
 * 
 * login mutations
 */
import { LOGIN_STATUS, USER_INFO } from '../mutation-types';

export default {
    [LOGIN_STATUS](state, status) {
        state.login = status;
    },
    [USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
    }
}