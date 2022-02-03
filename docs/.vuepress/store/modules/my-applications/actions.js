import Application from '@/api/Application';
import { ALL_APPS, USER } from '../module-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { GET_DATA, POST_APP, REMOVE_ITEM, UPDATE_APP_BY_ID } from '../action-types';
import { ADD_PAGINATION_TOKEN, CLEAR_PAGINATION_TOKENS, REMOVE_PAGINATION_TOKEN, SET_CURRENT_PAGE, SET_DATA, SET_SELECTED_APPLICATION } from '../mutation-types';
import { GET_USER_NAME, GET_USER_ROLE } from '../getter-types';

export default {
  async [GET_DATA]({ commit, state, dispatch, getters, rootGetters }) {
    try {
      const userName = rootGetters[nameWithSlash(USER, GET_USER_NAME)];
      const { data } = await Application.getApps({
        paginationToken: state.paginationTokens[state.currentPage],
        userName
      });

      if (! data.appData.length && state.currentPage) {
        commit(SET_CURRENT_PAGE, state.currentPage - 1);
        commit(REMOVE_PAGINATION_TOKEN);
        return dispatch(GET_DATA);
      }

      commit(SET_DATA, data.appData);

      if (getters['getNextPageToken'] !== 'last') {
        commit(ADD_PAGINATION_TOKEN, data.paginationToken);
      }

      if (state.selectedApplication) {
        commit(SET_SELECTED_APPLICATION, state.selectedApplication.appId);
      }
    } catch (error) {
      commit(SET_DATA, []);
      commit(CLEAR_PAGINATION_TOKENS);
      commit(SET_CURRENT_PAGE, 0);

      console.log(error);
    }

    return Promise.resolve();
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
