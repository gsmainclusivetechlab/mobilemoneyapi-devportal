import { SET_DATA, CLEAR_USER_DATA } from '../mutation-types';

export default {
  [SET_DATA](state, data) {
    state.userData = { ...state.userData, ...data };
  },
  [CLEAR_USER_DATA](state) {
    state.userData = {
      'userName': '',
      'timeZone': '',
      'firstName': '',
      'lastName': '',
      'email': '',
      'userId': '',
      'companyName': ''
    };
  }
};
