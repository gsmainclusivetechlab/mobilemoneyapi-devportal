import Api from '../Api';
import { DEVELOPERS, DELETE_USER, SET_USER_STATUS, UPDATE_ROLE } from '../constants';

export default class AllUsers {
  static get({ sortValue, searchValue, searchField, paginationToken }) {
    const route = DEVELOPERS
      .replace('{userName}', '')
      .replace('{searchField}', searchValue ? `=${searchField}` : '')
      .replace('{searchValue}', searchValue ? `=${searchValue}` : '')
      .replace('{sortType}', `=${sortValue}`);
    return Api.setHeadersForOneRequest({
      paginationToken: (paginationToken !== 'first') ? paginationToken : ''
    }).get(route);
  }

  static updateRole(userName, data) {
    return Api.put(UPDATE_ROLE.replace('{userName}', userName), data);
  }

  static setUserStatus(userName, status) {
    return Api.post(SET_USER_STATUS.replace('{userName}', userName), {
      disableUser: status
    });
  }

  static deleteByUsername(userName) {
    return Api.delete(DELETE_USER.replace('{userName}', userName));
  }
}
