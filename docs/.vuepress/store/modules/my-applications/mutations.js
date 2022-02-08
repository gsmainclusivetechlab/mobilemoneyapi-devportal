import {
  CLEAR_SELECTED_APPLICATION,
  SET_DATA,
  SET_SEARCH_FIELD,
  SET_SEARCH_VALUE,
  SET_SELECTED_APPLICATION,
  SET_SORT_VALUE
} from '../mutation-types';

export default {
  [SET_DATA](state, data) {
    state.data = data;
  },

  [SET_SELECTED_APPLICATION](state, id) {
    state.selectedApplication = state.data.find((el) => el.appId === id);
  },

  [CLEAR_SELECTED_APPLICATION](state) {
    state.selectedApplication = null;
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
