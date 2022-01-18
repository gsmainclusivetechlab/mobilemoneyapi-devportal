import { GET_ALL_MY_APPS } from '../getter-types';

export default {
  [GET_ALL_MY_APPS](state) {
    return state.data.map(el => ({ appName: el.appName, appId: el.appId, keyIssued: el.keyIssued }));
  },
};
