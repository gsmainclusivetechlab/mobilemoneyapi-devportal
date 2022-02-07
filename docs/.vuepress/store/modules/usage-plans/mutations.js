import {
  ADD_PAGINATION_TOKEN,
  CLEAR_PAGINATION_TOKENS,
  REMOVE_PAGINATION_TOKEN,
  SET_CURRENT_PAGE,
  SET_DATA,
  SET_SEARCH_FIELD,
  SET_SEARCH_VALUE,
  SET_SORT_VALUE
} from '../mutation-types';

export default {
  [SET_DATA](state, data) {
    state.usagePlans = data;
  },

  [SET_SORT_VALUE](state, value) {
    state.sortValue = value;
  },

  [SET_SEARCH_VALUE](state, value) {
    state.searchValue = value;
  },

  [SET_SEARCH_FIELD](state, value) {
    state.searchField = value;
  },

  [SET_CURRENT_PAGE](state, value) {
    state.oldPageValue = state.currentPage;
    state.currentPage = value;
  },

  [ADD_PAGINATION_TOKEN](state, value) {
    if (!value) {
      state.paginationTokens.push('last');
    } else {
      state.paginationTokens.push(value);
    }
  },

  [REMOVE_PAGINATION_TOKEN](state, once = false) {
    state.paginationTokens.pop();
    if (!once) {
      state.paginationTokens.pop();
    }
  },

  [CLEAR_PAGINATION_TOKENS](state) {
    state.paginationTokens = ['first'];
  }
};