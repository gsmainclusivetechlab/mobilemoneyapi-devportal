import AllUsers from '@/api/admin/allUsers';
import ModalWindow from '@/services/ModalWindow';
import { GET_DATA, REMOVE_ITEM, SET_USER_STATUS, UPDATE_ROLE } from '../action-types';
import { ADD_PAGINATION_TOKEN, CLEAR_PAGINATION_TOKENS, REMOVE_PAGINATION_TOKEN, SET_CURRENT_PAGE, SET_DATA } from '../mutation-types';

export default {

  async [GET_DATA]({ commit, state, dispatch, getters }) {
    try {
      const { data } = await AllUsers.get({
        sortValue: state.sortValue,
        searchValue: state.searchValue,
        searchField: state.searchField,
        paginationToken: state.paginationTokens[state.currentPage]
      });

      if(!data.users.length && state.currentPage) {
        commit(SET_CURRENT_PAGE, state.currentPage - 1)
        commit(REMOVE_PAGINATION_TOKEN)
        return dispatch(GET_DATA);
      }

      commit(SET_DATA, data.users);

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

  async [UPDATE_ROLE]({ dispatch, state }, userId) {
    const { role, userName } = state.data.find(user => user.userId === userId);

    const roles = [
      'user', 'admin'
    ];

    const roleIndex = roles.indexOf(role) + 1;

    const data = {
      role: roles[roleIndex] ? roles[roleIndex] : roles[0]
    };

    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllUsers.updateRole(userName, data);
        await dispatch(GET_DATA);
      }
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  },

  async [SET_USER_STATUS]({ dispatch, state }, userName) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        const { userEnabled } = state.data.find(user => user.userName === userName);

        await AllUsers.setUserStatus(userName, userEnabled);
        await dispatch(GET_DATA);
      }
    } catch (error) {
      console.log(error);
    }
  },

  async [REMOVE_ITEM]({ dispatch }, userName) {
    try {
      const confirm = await ModalWindow.openDialog();

      if (confirm) {
        await AllUsers.deleteByUsername(userName);
        await dispatch(GET_DATA);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
