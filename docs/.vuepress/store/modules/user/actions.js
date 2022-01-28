import User from '@/api/User';
import { Admin } from '@/api/admin';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { ALL_APPS, ALL_USERS, AUTH, MY_APPS, ALL_PLANS, USER } from '../module-types';
import { SET_DATA, SET_LOGGED_USER } from '../mutation-types';
import { GET_DATA, UPDATE_USER_DATA } from '../action-types';
import { GET_USER_NAME } from '../getter-types';

export default {
  [GET_DATA]({ commit, dispatch }) {
    Admin.getProfile()
      .then(({ data }) => {
        commit(SET_DATA, data);
        commit(nameWithSlash(AUTH, SET_LOGGED_USER), true, { root: true });

        if (data.role === 'admin' || data.role === 'superadmin') {
          dispatch(nameWithSlash(ALL_APPS, GET_DATA), null, { root: true });
          dispatch(nameWithSlash(ALL_USERS, GET_DATA), null, { root: true });
        }
        dispatch(nameWithSlash(ALL_PLANS, GET_DATA), null, { root: true });
        dispatch(nameWithSlash(MY_APPS, GET_DATA), null, { root: true });

      })
      .catch(console.log);
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
