import Api from '../Api';
import { APP_BY_ID, CREATE_APP, PAGINATION_TOKEN_TEMPLATE } from '../constants';

export default class AllApplications {
  static get() {
    return Api.get(CREATE_APP);
  }

  static deleteById(userName, appId) {
    return Api.delete(
      APP_BY_ID
        .replace('{userName}', userName)
        .replace('{appId}', appId)
    );
  }
}
