import {
  ADD_PAGINATION_TOKEN,
  SET_CURRENT_PAGE,
  REMOVE_PAGINATION_TOKEN,
  RESET_PAGINATION,
  CLEAR_PAGINATION_TOKENS
} from '../mutation-types';

export default {
  [ADD_PAGINATION_TOKEN](state, value) {
    const findLast = state.tokens.findIndex((token) => token === 'last');

    if (findLast >= 0) {
      state.tokens[findLast] = value;
    } else if (!value) {
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
  },
  [CLEAR_PAGINATION_TOKENS](state) {
    state.tokens = ['first'];
  }
};
