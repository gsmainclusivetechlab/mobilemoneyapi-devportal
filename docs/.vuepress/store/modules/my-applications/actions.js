import Application from '@/api/Application';
import { ALL_APPS, USER, PAGINATION } from '../module-types';
import { nameWithSlash } from '@/helpers/vuexHelper';
import { GET_DATA, POST_APP, REMOVE_ITEM, UPDATE_APP_BY_ID } from '../action-types';
import {
  ADD_PAGINATION_TOKEN,
  REMOVE_PAGINATION_TOKEN,
  SET_CURRENT_PAGE,
  SET_DATA,
  SET_SELECTED_APPLICATION,
  CLEAR_PAGINATION_TOKENS,
  RESET_PAGINATION
} from '../mutation-types';
import {
  GET_USER_NAME,
  GET_USER_ROLE,
  GET_TOKEN_NEXT_PAGE,
  GET_TOKEN_PREV_PAGE
} from '../getter-types';

export default {
  async [GET_DATA]({ commit, state, dispatch, rootGetters, rootState }) {
    try {
      const userName = rootGetters[nameWithSlash(USER, GET_USER_NAME)];
      const { data } = await Application.getApps({
        paginationToken: rootState.pagination.tokens[rootState.pagination.currentPage],
        userName
      });

      if (!data.appData.length && state.currentPage) {
        commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGE), rootState.pagination.currentPage - 1, {
          root: true
        });
        commit(nameWithSlash(PAGINATION, REMOVE_PAGINATION_TOKEN), null, { root: true });
        return dispatch(GET_DATA);
      }

      commit(SET_DATA, data.appData);

      if (rootGetters[nameWithSlash(PAGINATION, GET_TOKEN_NEXT_PAGE)] !== 'last') {
        commit(nameWithSlash(PAGINATION, ADD_PAGINATION_TOKEN), data.paginationToken, {
          root: true
        });
      }

      if (state.selectedApplication.appId) {
        commit(SET_SELECTED_APPLICATION, state.selectedApplication.appId);
      }
    } catch (error) {
      commit(SET_DATA, []);
      commit(nameWithSlash(PAGINATION, RESET_PAGINATION), null, { root: true });

      console.log(error);
    }

    return Promise.resolve();
  },

  async [POST_APP]({ commit, dispatch, rootGetters }, payload) {
    const userName = rootGetters[nameWithSlash(USER, GET_USER_NAME)];
    const userRole = rootGetters[nameWithSlash(USER, GET_USER_ROLE)];
    const data = {
      ...payload,
      userName
    };

    try {
      await Application.postApp(data);

      if (
        !rootGetters[nameWithSlash(PAGINATION, GET_TOKEN_PREV_PAGE)] &&
        rootGetters[nameWithSlash(PAGINATION, GET_TOKEN_NEXT_PAGE)] === 'last'
      ) {
        commit(nameWithSlash(PAGINATION, CLEAR_PAGINATION_TOKENS), null, { root: true });
      }

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
      // await dispatch(GET_DATA);
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  }
};
