import { GET_CURRENT_PAGE, GET_TOKEN_NEXT_PAGE, GET_TOKEN_PREV_PAGE } from '../getter-types';

export default {
  [GET_TOKEN_NEXT_PAGE](state) {
    return (module) => {
      return state[module].tokens[state[module].currentPage]
    }
  },
  [GET_TOKEN_PREV_PAGE](state) {
    return (module) => {
      return state[module].tokens[state[module].currentPage - 2]
    }
  },
  [GET_CURRENT_PAGE](state) {
    return (module) => {
      return state[module].currentPage
    }
  }
};
