import AllApplications from '@/api/admin/allApplications';
import ModalWindow from '@/services/ModalWindow';
import { GET_DATA, REMOVE_ITEM } from '../action-types';
import { ADD_PAGINATION_TOKEN, CLEAR_PAGINATION_TOKENS, REMOVE_PAGINATION_TOKEN, SET_CURRENT_PAGE, SET_DATA } from '../mutation-types';

export default {
  async [GET_DATA]({ commit, state, dispatch, getters }) {
    try {
      const { data } = await AllApplications.get({
        sortValue: state.sortValue,
        searchValue: state.searchValue,
        searchField: state.searchField,
        paginationToken: state.paginationTokens[state.currentPage]
      });

      if(!data.appData.length && state.currentPage) {
        commit(SET_CURRENT_PAGE, state.currentPage - 1)
        commit(REMOVE_PAGINATION_TOKEN)
        return dispatch(GET_DATA);
      }

      commit(SET_DATA, data.appData);

      if(getters['getNextPageToken'] !== 'last') {
        commit(ADD_PAGINATION_TOKEN, data.paginationToken)
      }
    } catch (error) {
      commit(SET_DATA, []);
      commit(CLEAR_PAGINATION_TOKENS);
      commit(SET_CURRENT_PAGE, 0);

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
  },
};
