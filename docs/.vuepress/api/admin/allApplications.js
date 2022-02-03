import Api from '../Api';
import { ALL_APPS, APP_BY_ID } from '../constants';

export default class AllApplications {
  static get({ sortValue, searchValue, searchField, paginationToken }) {
    const route = ALL_APPS
      .replace('{userName}', '')
      .replace('{searchField}', searchValue ? `=${searchField}` : '')
      .replace('{searchValue}', searchValue ? `=${searchValue}` : '')
      .replace('{sortType}', `=${sortValue}`);
    return Api.setHeadersForOneRequest({
      paginationToken: (paginationToken !== 'first' ) ? paginationToken : ''
    }).get(route);
  }

  static deleteById(userName, appId) {
    return Api.delete(
      APP_BY_ID
        .replace('{userName}', userName)
        .replace('{appId}', appId)
    );
  }
}
