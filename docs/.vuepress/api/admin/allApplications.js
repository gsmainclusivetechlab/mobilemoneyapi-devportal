import Api from '../Api';
import { APP_BY_ID, CREATE_APP, PAGINATION_TOKEN_TEMPLATE } from '../constants';

export default class AllApplications {
  static get(paginationToken) {
    return Api.setHeadersForOneRequest({
      'PaginationToken': paginationToken ? '{"userName":"testadmin","appId":"app-859c0880-3dee-4322-8161-1de0f6c8d7df"}' : null
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
