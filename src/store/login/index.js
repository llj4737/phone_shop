import state from './state';
import mutations from './mutation';
import getters from './getter';
import actions from './action';

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}