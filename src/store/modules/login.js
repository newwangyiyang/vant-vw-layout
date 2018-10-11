import * as login from '@/api/login';

export default {
    state: {
        userInfo: {
            name: ''
        },
        params: {
            a: ''
        }
    },
    mutations: {
        SET_USERINFO(state, userInfo) {
            state.userInfo = userInfo;
        },
        SET_PARAMS(state, params) {
            state.params = params;
        }
    },
    actions: {
        async getUserInfo({commit, state}) {
            const { userInfo } = await login.getUserInfo();
            commit('SET_USERINFO', userInfo);
        },
        //获取页面传递过来的参数
        getActionParam({commit}, params) {
            commit('SET_PARAMS', params);
        }
    }
};