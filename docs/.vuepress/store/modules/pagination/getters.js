import {
  GET_TOKEN_NEXT_PAGE,
  GET_TOKEN_PREV_PAGE,
  GET_HAS_NEXT_PAGES,
  GET_TOKEN_CURRENT_PAGE
} from '../getter-types';

export default {
  [GET_TOKEN_CURRENT_PAGE](state) {
    return state.tokens[state.currentPage];
  },
  [GET_TOKEN_NEXT_PAGE](state) {
    return state.tokens[state.currentPage + 1];
  },
  [GET_TOKEN_PREV_PAGE](state) {
    return state.tokens[state.currentPage - 1];
  },
  [GET_HAS_NEXT_PAGES](state, getters) {
    const nextPage = getters[GET_TOKEN_NEXT_PAGE];

    return !(
      state.oldPageValue === 0 &&
      state.currentPage === 0 &&
      (nextPage === 'last' || !nextPage)
    );
  }
};
