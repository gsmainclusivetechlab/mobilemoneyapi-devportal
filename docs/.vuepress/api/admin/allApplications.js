import Api from '../Api';
import { APP_BY_ID, CREATE_APP, PAGINATION_TOKEN_TEMPLATE } from '../constants';

export default class AllApplications {
  static get(paginationToken = null) {
    return Api.setHeadersForOneRequest({
      'PaginationToken': paginationToken ? PAGINATION_TOKEN_TEMPLATE
        .replace('{userName}', paginationToken.userName)
        .replace('{appId}', paginationToken.appId).replace('/\\/', '') : null
    }).get(CREATE_APP);
  }

  static deleteById(userName, appId) {
    return Api.delete(
      APP_BY_ID
        .replace('{userName}', userName)
        .replace('{appId}', appId)
    );
  }
}
