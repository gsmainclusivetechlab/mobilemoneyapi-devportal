import ModalWindow from '@/services/ModalWindow';
import AllPlans from '@/api/admin/allPlans';
import { CHANGE_PUBLISHED_STATE, GET_DATA } from '../action-types';
import {
  ADD_PAGINATION_TOKEN,
  REMOVE_PAGINATION_TOKEN,
  SET_CURRENT_PAGE,
  SET_DATA
} from '../mutation-types';
import { GET_TOKEN_NEXT_PAGE } from '../getter-types';
import { PAGINATION } from '../module-types';
import { nameWithSlash } from '../../../helpers/vuexHelper';

export default {
  async [GET_DATA]({ commit, state, dispatch, rootGetters, rootState }) {
    try {
      const { data } = await AllPlans.get({
        sortValue: state.sortValue,
        searchValue: state.searchValue,
        searchField: state.searchField,
        paginationToken: rootState.pagination.tokens[rootState.pagination.currentPage]
      });

      if (!data.planData.length && state.currentPage) {
        commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGE), rootState.pagination.currentPage - 1, {
          root: true
        });
        commit(nameWithSlash(PAGINATION, REMOVE_PAGINATION_TOKEN), null, { root: true });
        return dispatch(GET_DATA);
      }

      commit(SET_DATA, data.planData);

      if (rootGetters[nameWithSlash(PAGINATION, GET_TOKEN_NEXT_PAGE)] !== 'last') {
        commit(nameWithSlash(PAGINATION, ADD_PAGINATION_TOKEN), data.paginationToken, {
          root: true
        });
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },

  async [CHANGE_PUBLISHED_STATE]({ dispatch }, { planId, published }) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllPlans.updateStateById({ planId, published: !published });
        await dispatch(GET_DATA);
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  }
};
