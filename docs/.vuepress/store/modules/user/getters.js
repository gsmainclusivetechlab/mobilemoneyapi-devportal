import { GET_FULL_NAME, GET_USER_NAME, GET_USER_ROLE } from '../getter-types';

export default {
  [GET_FULL_NAME](state) {
    return `${state.userData.firstName} ${state.userData.lastName}`;
  },

  [GET_USER_NAME](state) {
    return state.userData.userName;
  },

  [GET_USER_ROLE](state) {
    return state.userData.role;
  }
};
