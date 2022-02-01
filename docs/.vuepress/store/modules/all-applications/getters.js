import { GET_ALL_APPS, GET_COMPANY_BY_USERNAME } from '../getter-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { ALL_PLANS, ALL_USERS } from '../module-types';

export default {
  [GET_ALL_APPS](state, getters, rootState, rootGetters) {
    return state.data.map(app => {
      const usagePlans = rootState[ALL_PLANS].usagePlans;
      return {
        ...app,
        company: rootGetters[nameWithSlash(ALL_USERS, GET_COMPANY_BY_USERNAME)](app.userName),
        // usagePlan: usagePlans.length ? usagePlans.find(el => el.id === app.usagePlan)?.name || '' : ''
      };
    });
  },

  getNextPageToken(state) {
    return state.paginationTokens[state.currentPage + 1];
  },

  getPrevPageToken(state) {
    return state.paginationTokens[state.currentPage - 1];
  }
};
