import Api from './Api';
import { APP_BY_ID, APPS, CREATE_APP } from './constants';

export default class Application {
  static getApps({ userName, paginationToken }, controller) {
    const route = APPS.replace('{userName}', `=${userName}`);
    return Api.setHeadersForOneRequest({
      paginationToken: paginationToken !== 'first' ? paginationToken : ''
    }).get(route, {
      signal: controller?.signal
    });
  }

  static postApp(payload) {
    return Api.post(CREATE_APP, payload);
  }

  static updateAppById(appId, payload, userName) {
    return Api.put(APP_BY_ID.replace('{userName}', userName).replace('{appId}', appId), payload);
  }

  static deleteAppById(appId, userName) {
    return Api.delete(APP_BY_ID.replace('{userName}', userName).replace('{appId}', appId));
  }
}
