import {
  ADD_PAGINATION_TOKEN,
  SET_CURRENT_PAGE,
  REMOVE_PAGINATION_TOKEN,
  RESET_PAGINATION
} from '../mutation-types';

export default {
  [ADD_PAGINATION_TOKEN](state, value) {
    if (!value) {
      state.tokens.push('last');
    } else {
      state.tokens.push(value);
    }
  },
  [SET_CURRENT_PAGE](state, value) {
    state.oldPageValue = state.currentPage;
    state.currentPage = value;
  },
  [REMOVE_PAGINATION_TOKEN](state, once = false) {
    state.tokens.pop();
    if (!once) {
      state.tokens.pop();
    }
  },
  [RESET_PAGINATION](state) {
    (state.currentPage = 0), (state.oldPageValue = 0), (state.tokens = ['first']);
  }
};
