import {GET_USER_NAME, GET_USER_ROLE } from '../getter-types';

export default {
  [GET_USER_NAME](state) {
    return state.userData.userName;
  },

  [GET_USER_ROLE](state) {
    return state.userData.role;
  }
};
