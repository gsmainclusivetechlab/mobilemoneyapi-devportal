import { GET_TOKEN_NEXT_PAGE, GET_TOKEN_PREV_PAGE } from '../getter-types';

export default {
  [GET_TOKEN_NEXT_PAGE](state) {
    return state.tokens[state.currentPage + 1];
  },
  [GET_TOKEN_PREV_PAGE](state) {
    return state.tokens[state.currentPage - 1];
  }
};
