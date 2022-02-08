import { SET_DATA, SET_SEARCH_FIELD, SET_SEARCH_VALUE, SET_SORT_VALUE } from '../mutation-types';

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
  }
};
