import Api from '../Api';
import { ALL_DEVELOPERS, DELETE_USER, SET_USER_STATUS, UPDATE_ROLE } from '../constants';

export default class AllUsers {
  static get() {
    return Api.get(ALL_DEVELOPERS);
  }

  static updateRole(userName, data) {
    return Api.put(UPDATE_ROLE.replace('{userName}', userName), data);
  }

  static setUserStatus(userName, status) {
    return Api.post(SET_USER_STATUS.replace('{userName}', userName), {
      disableUser: status
    })
  }

  static deleteByUsername(userName) {
    return Api.delete(DELETE_USER.replace('{userName}', userName));
  }
}
