import User from '@/api/User';
import { Admin } from '@/api/admin';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { AUTH, USER, MY_APPS } from '../module-types';
import { SET_DATA, SET_LOGGED_USER } from '../mutation-types';
import { GET_DATA, UPDATE_USER_DATA } from '../action-types';
import { GET_USER_NAME } from '../getter-types';

export default {
  async [GET_DATA]({ commit, dispatch }) {
    try {
      const response = await Admin.getProfile();
      const { data } = response;

      commit(SET_DATA, data);

      await dispatch(nameWithSlash(MY_APPS, GET_DATA), null, { root: true });

      commit(nameWithSlash(AUTH, SET_LOGGED_USER), true, { root: true });
    } catch (err) {
      console.error(err);
    }
  },

  [UPDATE_USER_DATA]({ commit, rootGetters }, payload) {
    const userName = rootGetters[nameWithSlash(USER, GET_USER_NAME)];

    return new Promise((resolve) => {
      User.updateData(payload, userName)
        .then(({ data }) => {
          commit(SET_DATA, data);
          return resolve(true);
        })
        .catch(console.log);
    });
  }
};
