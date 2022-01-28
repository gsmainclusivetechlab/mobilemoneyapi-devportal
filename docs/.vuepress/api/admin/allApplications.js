import Api from '../Api';
import { ALL_APPS_WITH_SEARCH, APP_BY_ID, CREATE_APP } from '../constants';

export default class AllApplications {
  static get(paginationToken) {
    return Api.setHeadersForOneRequest({
      paginationToken: paginationToken ? paginationToken : ''
    }).get(CREATE_APP);
  }

  static getWithSearch(field, value) {
    return Api.get(ALL_APPS_WITH_SEARCH
      .replace('{field}', field)
      .replace('{value}', value)
    );
  }

  static deleteById(userName, appId) {
    return Api.delete(
      APP_BY_ID
        .replace('{userName}', userName)
        .replace('{appId}', appId)
    );
  }
}
