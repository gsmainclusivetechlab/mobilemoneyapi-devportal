import {ADD_TOKEN, SET_CURRENT_PAGE} from '../mutation-types';

export default {
  [ADD_TOKEN](state, { token, module }) {
    state[module].tokens.push(token)
  },
  [SET_CURRENT_PAGE](state, { page, module }) {
    state[module].currentPage = page
  }
};
