import Application from '../../../api/Application';
import { ALL_APPS, MY_APPS, PAGINATION, USER } from '../module-types';
import { nameWithSlash } from '../../../helpers/vuexHelper';
import { GET_DATA, POST_APP, REMOVE_ITEM, UPDATE_APP_BY_ID } from '../action-types';
import { ADD_TOKEN, SET_DATA, SET_SELECTED_APPLICATION } from '../mutation-types';
import { GET_USER_NAME, GET_USER_ROLE } from '../getter-types';

export default {
  async [GET_DATA]({ commit, state, rootGetters }, paginationToken = null) {
    try {
      const userName = rootGetters[nameWithSlash(USER, GET_USER_NAME)];
      const { data } = await Application.getApps(userName, paginationToken);

      commit(SET_DATA, data.appData);
      commit(nameWithSlash(PAGINATION, ADD_TOKEN), { token: data.paginationToken, module: MY_APPS }, { root: true });

      if (state.selectedApplication) {
        commit(SET_SELECTED_APPLICATION, state.selectedApplication.appId);
      }
    } catch (error) {
      if (error?.response?.data?.description === 'No App Data present') {
        commit(SET_DATA, []);
        commit(nameWithSlash(PAGINATION, ADD_TOKEN), { token: null, module: MY_APPS }, { root: true });
      }
    }
  },

  async [POST_APP]({ dispatch, rootGetters }, payload) {
    const userName = rootGetters[nameWithSlash(USER, GET_USER_NAME)];
    const userRole = rootGetters[nameWithSlash(USER, GET_USER_ROLE)];
    const data = {
      ...payload,
      userName
    };

    try {
      await Application.postApp(data);
      await dispatch(GET_DATA);

      if (userRole === 'admin' || userRole === 'superadmin') {
        await dispatch(nameWithSlash(ALL_APPS, GET_DATA), null, { root: true });
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve(true);
  },

  async [UPDATE_APP_BY_ID]({ dispatch, state, rootGetters }, payload) {
    const appId = state.selectedApplication.appId;
    const userName = rootGetters[nameWithSlash(USER, GET_USER_NAME)];

    try {
      await Application.updateAppById(appId, payload, userName);
      await dispatch(GET_DATA);
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },

  async [REMOVE_ITEM]({ dispatch, state, rootGetters }) {
    const appId = state.selectedApplication.appId;
    const userName = rootGetters[nameWithSlash(USER, GET_USER_NAME)];

    try {
      await Application.deleteAppById(appId, userName);
      await dispatch(GET_DATA);
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },
};
