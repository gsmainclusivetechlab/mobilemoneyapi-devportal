import AllUsers from '@/api/admin/allUsers';
import ModalWindow from '@/services/ModalWindow';
import { GET_TOKEN_NEXT_PAGE, GET_TOKEN_PREV_PAGE } from '../getter-types';
import { GET_DATA, REMOVE_ITEM, SET_USER_STATUS, UPDATE_ROLE } from '../action-types';
import {
  ADD_PAGINATION_TOKEN,
  REMOVE_PAGINATION_TOKEN,
  SET_CURRENT_PAGE,
  SET_DATA
} from '../mutation-types';
import { PAGINATION } from '../module-types';
import { nameWithSlash } from '../../../helpers/vuexHelper';

export default {
  async [GET_DATA]({ commit, state, dispatch, rootGetters, rootState }, controller) {
    try {
      const { data } = await AllUsers.get(
        {
          sortValue: state.sortValue,
          searchValue: state.searchValue,
          searchField: state.searchField,
          paginationToken: rootState.pagination.tokens[rootState.pagination.currentPage]
        },
        controller
      );

      if (!data.users.length && state.currentPage) {
        commit(nameWithSlash(PAGINATION, SET_CURRENT_PAGE), rootState.pagination.currentPage - 1, {
          root: true
        });
        commit(nameWithSlash(PAGINATION, REMOVE_PAGINATION_TOKEN), null, { root: true });
        return dispatch(GET_DATA);
      }

      commit(SET_DATA, data.users);

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

  async [UPDATE_ROLE]({ dispatch, state }, userId) {
    const { role, userName } = state.data.find((user) => user.userId === userId);

    const roles = ['user', 'admin'];

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
        const { userEnabled } = state.data.find((user) => user.userName === userName);

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
