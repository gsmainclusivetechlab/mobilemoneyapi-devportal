import ModalWindow from '@/services/ModalWindow';
import AllPlans from '@/api/admin/allPlans';
import { CHANGE_PUBLISHED_STATE, GET_DATA } from '../action-types';
import { ADD_PAGINATION_TOKEN, REMOVE_PAGINATION_TOKEN, SET_CURRENT_PAGE, SET_DATA } from '../mutation-types';

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
        commit(SET_CURRENT_PAGE, state.currentPage - 1)
        commit(REMOVE_PAGINATION_TOKEN)
        return dispatch(GET_DATA);
      }

      commit(SET_DATA, data.planData);

      if(getters['getNextPageToken'] !== 'last') {
        commit(ADD_PAGINATION_TOKEN, data.paginationToken)
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
