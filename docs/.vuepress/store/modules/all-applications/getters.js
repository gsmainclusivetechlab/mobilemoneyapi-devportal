import { GET_ALL_APPS, GET_COMPANY_BY_USERNAME } from '../getter-types';
import { nameWithSlash } from '../../../helpers/vuexHelper';
import { USER } from '../module-types';

export default {
  [GET_ALL_APPS](state, rootGetters, rootState) {
    return state.data.map(app => {
      const usagePlans = rootState.usagePlans.usagePlans;
      return {
        ...app,
        company: rootGetters[nameWithSlash(USER, GET_COMPANY_BY_USERNAME)](app.userName),
        usagePlan: usagePlans.length ? usagePlans.find(el => el.id === app.usagePlan)?.name || '' : ''
      };
    });
  },
};
