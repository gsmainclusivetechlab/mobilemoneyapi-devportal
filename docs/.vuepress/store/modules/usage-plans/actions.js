import Plans from '@/api/Plans';
import ModalWindow from '@/services/ModalWindow';
import AllPlans from '@/api/admin/allPlans';
import { CHANGE_PUBLISHED_STATE, GET_DATA, GET_DATA_WITH_SEARCH } from '../action-types';
import { SET_DATA } from '../mutation-types';

export default {
  async [GET_DATA]({ commit, state, dispatch, getters }) {
    try {
      const { data } = await AllPlans.get({
        sortValue: state.sortValue,
        searchValue: state.searchValue,
        searchField: state.searchField,
        paginationToken: state.paginationTokens[state.currentPage]
      });

      if(!data.planData.length && state.currentPage) {
        commit('setCurrentPage', state.currentPage - 1)
        commit('removePaginationToken')
        return dispatch(GET_DATA);
      }

      commit(SET_DATA, data.planData);

      if(getters['getNextPageToken'] !== 'last') {
        commit('addPaginationToken', data.paginationToken)
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
        await AllPlans.updateStateById({ planId, published: ! published });
        await dispatch(GET_DATA);
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  }
};
