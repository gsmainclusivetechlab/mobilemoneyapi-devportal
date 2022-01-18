import { SET_LOGGED_USER } from '../mutation-types';

export default {
  [SET_LOGGED_USER](state, status) {
    state.isLoggedUser = status;
  },
};
