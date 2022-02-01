import { SET_DATA } from '../mutation-types';

export default {
  [SET_DATA](state, data) {
    state.data = data;
  },

  setSortValue(state, value) {
    state.sortValue = value;
  },

  setSearchValue(state, value) {
    state.searchValue = value;
  },

  setSearchField(state, value) {
    state.searchField = value;
  },

  setCurrentPage(state, value) {
    state.oldPageValue = state.currentPage;
    state.currentPage = value;
  },

  addPaginationToken(state, value) {
    if (! value && (state.currentPage !== 0 || state.searchValue)) {
      state.paginationTokens.push('last');
    } else {
      state.paginationTokens.push(value);
    }
  },

  removePaginationToken(state, once = false) {
    state.paginationTokens.pop();
    if(!once) {
      state.paginationTokens.pop();
    }
  },

  clearPaginationTokens(state) {
    state.paginationTokens = ['first'];
  }
};
