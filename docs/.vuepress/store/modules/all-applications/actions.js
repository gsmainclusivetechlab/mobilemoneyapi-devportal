import AllApplications from '@/api/admin/allApplications';
import ModalWindow from '@/services/ModalWindow';
import { GET_DATA, REMOVE_ITEM } from '../action-types';
import { GET_TOKEN_NEXT_PAGE } from '../getter-types';
import {
  ADD_PAGINATION_TOKEN,
  RESET_PAGINATION,
  REMOVE_PAGINATION_TOKEN,
  SET_CURRENT_PAGE,
  SET_DATA
} from '../mutation-types';
import { PAGINATION } from '../module-types';
import { nameWithSlash } from '../../../helpers/vuexHelper';

export default {
  async [GET_DATA]({ commit, state, dispatch, getters, rootState }) {
    try {
      const { data } = await AllApplications.get({
        sortValue: state.sortValue,
        searchValue: state.searchValue,
        searchField: state.searchField,
        paginationToken: rootState.pagination.tokens[rootState.pagination.currentPage]
      });

      if (!data.appData.length && rootState.pagination.currentPage) {
        commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGE), rootState.pagination.currentPage - 1, {
          root: true
        });
        commit(nameWithSlash(PAGINATION, REMOVE_PAGINATION_TOKEN), null, { root: true });
        return dispatch(GET_DATA);
      }

      commit(SET_DATA, data.appData);

      if (getters[GET_TOKEN_NEXT_PAGE] !== 'last') {
        commit(nameWithSlash(PAGINATION, ADD_PAGINATION_TOKEN), data.paginationToken, {
          root: true
        });
      }
    } catch (error) {
      commit(SET_DATA, []);
      commit(nameWithSlash(PAGINATION, RESET_PAGINATION), null, { root: true });

      console.log(error);
    }

    return Promise.resolve();
  },

  async [REMOVE_ITEM]({ dispatch }, { userName, appId }) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllApplications.deleteById(userName, appId);
        await dispatch(GET_DATA);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
