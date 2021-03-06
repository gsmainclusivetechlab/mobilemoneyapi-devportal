import { GET_ALL_APPS, GET_COMPANY_BY_USERNAME } from '../getter-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { ALL_USERS } from '../module-types';

export default {
  [GET_ALL_APPS](state, getters, modules, rootGetters) {
    return state.data.map((app) => {
      return {
        ...app,
        company: rootGetters[nameWithSlash(ALL_USERS, GET_COMPANY_BY_USERNAME)](app.userName)
      };
    });
  }
};
